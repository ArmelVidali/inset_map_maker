const turf = require("@turf/turf");
var map = L.map("map").setView([1.603354, 1.888334], 6);
map.doubleClickZoom.disable();
var tiles = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

var ids = 0;
let ctrlKeyPressed = false;
var clicked_path;

let bigger_btn = document.createElement("button");
let smaller_btn = document.createElement("button");
bigger_btn.textContent = "bigger";
bigger_btn.id = "bigger";
smaller_btn.textContent = "smaller";
smaller_btn.id = "smaller";
smaller_btn.textContent = "smaller";
let ctrl_div = document.querySelector(
  '[class*="leaflet-control-zoom leaflet-bar leaflet-control"]'
);
ctrl_div.appendChild(bigger_btn);
ctrl_div.appendChild(smaller_btn);

let download_button = `<button class="button-13" id="download_btn" role="button">Download</button>`;
ctrl_div.innerHTML += download_button;

document.addEventListener("keydown", function (event) {
  if (event.key === "Control" || event.key === "Meta") {
    ctrlKeyPressed = true;
  }
});

document.addEventListener("keyup", function (event) {
  if (event.key === "Control" || event.key === "Meta") {
    ctrlKeyPressed = false;
  }
});

async function processData() {
  try {
    const fetchedData = await fetch("france.geojson");
    if (!fetchedData.ok) {
      throw new Error("Failed to fetch GeoJSON data");
    }

    const data = await fetchedData.json();
    var i = 0;

    let geojsonLayer = L.geoJSON(data, {
      draggable: false,
      test: "test",
      style: {
        weight: 1,
        fillOpacity: 0.9,
        color: "white",
        dashArray: "3",
      },
    }).addTo(map);

    geojsonLayer.eachLayer(function (path) {
      path.feature.id = i++;
    });

    function bind_drag(feature, collection = false) {
      feature.eachLayer(function (path) {
        path.on("dragend", function (event) {
          let flag = false;
          var bounds = path._bounds;

          for (let classname of path._path.classList) {
            if (classname.includes("dragged_path")) {
              flag = true;
            }
          }
          if (flag == false) {
            path._path.classList.add(`dragged_path_${path.feature.id}`);
          }
          try {
            let bouding_rectangle = document.querySelectorAll(
              `[class*="dragged_rectangle_${path.feature.id}"]`
            );
            bouding_rectangle[0].remove();
          } catch {}
          let bounds_coords = [
            [bounds._northEast.lat, bounds._northEast.lng],
            [bounds._southWest.lat, bounds._southWest.lng],
          ];
          let bouding_rectangle = L.rectangle(bounds, {
            color: "black",
            weight: 1,
            fill: false,
          }).addTo(map);
          bouding_rectangle._path.classList.add(
            `dragged_rectangle_${path.feature.id}`
          );
        });
      });
    }

    function redraw(path, scale) {
      try {
        var path_id = path._layers[Object.keys(path._layers)].feature.id;
      } catch {}
      try {
        var path_id = path.feature.id;
      } catch {}
      document
        .querySelectorAll(`[class*="dragged_rectangle_${path_id}"]`)[0]
        .remove();
      console.log(path);
      console.log(path_id);
      path.remove();

      if (scale == "in") {
        var rescaled_path = L.geoJSON(
          turf.transformScale(path.toGeoJSON(), 1.1),
          {
            draggable: true,
            style: {
              weight: 1,
              fillOpacity: 0.9,
              color: "white",
              dashArray: "3",
            },
          }
        ).addTo(map);
      } else {
        var rescaled_path = L.geoJSON(
          turf.transformScale(path.toGeoJSON(), 0.9),
          {
            draggable: true,
            style: {
              weight: 1,
              fillOpacity: 0.9,
              color: "white",
              dashArray: "3",
            },
          }
        ).addTo(map);
      }
      rescaled_path._layers[
        Object.keys(rescaled_path._layers)
      ]._path.classList.add(
        "dragged_path_" +
          rescaled_path._layers[Object.keys(rescaled_path._layers)].feature.id
      );
      let bounds =
        rescaled_path._layers[Object.keys(rescaled_path._layers)]._bounds;

      let bounding_rectangle = L.rectangle(bounds, {
        color: "black",
        weight: 1,
        fill: false,
      }).addTo(map);
      bounding_rectangle._path.classList.add("dragged_rectangle_" + path_id);
      bind_drag(rescaled_path, false);
      clicked_path = rescaled_path;
      rescaled_path.addEventListener("click", function () {
        clicked_path = rescaled_path;
      });
    }

    geojsonLayer.eachLayer(function (path) {
      path.on("click", function (event) {
        if (ctrlKeyPressed) {
          var new_path = L.geoJSON(this.toGeoJSON(), {
            draggable: true,
            style: {
              weight: 1,
              fillOpacity: 0.9,
              color: "white",
              dashArray: "3",
            },
          }).addTo(map);
        }
        bind_drag(new_path, false);
        clicked_path = new_path;
        console.log("click ", clicked_path);
      });
    });
    document.getElementById("bigger").addEventListener("click", function () {
      redraw(clicked_path, "in");
    });
    document.getElementById("smaller").addEventListener("click", function () {
      redraw(clicked_path, "out");
    });
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

processData();
var bounds = [
  [43.02778865693062, 9.603171584462599],
  [41.37865421129973, 8.584047853251082],
];
// zoom the map to the rectangle bounds
map.fitBounds(bounds);
let download_btn = document.getElementById("download_btn");

download_btn.addEventListener("click", function () {
  let output_feat = {
    type: "FeatureCollection",
    features: [], // Initialize an empty array for features
  };
  map.eachLayer(function (layer) {
    if (layer instanceof L.Path) {
      output_feat.features.push(layer.feature);
    }
  });
  download_data(output_feat);
});

function download_data(data) {
  const jsonString = JSON.stringify(data, null, 2);
  const blob = new Blob([jsonString], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "inset_map";
  a.click();
  URL.revokeObjectURL(url);
}
