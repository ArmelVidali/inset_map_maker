const turf = require("@turf/turf");
const Swal = require("sweetalert2");
var map = L.map("map", { zoomControl: false }).setView(
  [46.603354, 1.888334],
  6
);

map.doubleClickZoom.disable();
var tiles = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

var ids = 0;
var ctrlKeyPressed = false;
var shiftKeyPressed = false;
var clicked_path;

document.addEventListener("keydown", function (event) {
  if (event.key === "Control" || event.key === "Meta") {
    ctrlKeyPressed = true;
  } else if (event.key === "Shift") {
    shiftKeyPressed = true;
  }
});

document.addEventListener("keyup", function (event) {
  if (event.key === "Control" || event.key === "Meta") {
    ctrlKeyPressed = false;
  } else if (event.key === "Shift") {
    shiftKeyPressed = true;
  }
});

let fileInput = document.getElementById("file_input");
fileInput.addEventListener("click", () => {
  const fileInput = document.createElement("input");
  fileInput.type = "file";
  fileInput.accept = [".json", ".geojson"]; // Specify the accepted file type(s) here

  fileInput.addEventListener("change", (event) => {
    const selectedFile = event.target.files[0];

    try {
      const reader = new FileReader();

      reader.onload = (e) => {
        const contents = e.target.result;
        console.log(e);
        processData(JSON.parse(contents));
        Swal.fire(
          "Layer loaded !",
          "Click on <kbd class = kdb_elem >Ctrl</kbd> + <kbd class = kdb_elem >Left-Click</kbd> to duplicated a shape. <br/><br/> Use <kbd class = kdb_elem >Left-Click</kbd> to move it",
          "success"
        );
        let layer_name = document.createElement("li");
        layer_name.textContent += "- " + event.target.files[0].name;
        layer_name.className = "layer_name";

        let menu_list = document.getElementById("menu_ul");

        menu_list.insertBefore(layer_name, menu_list.children[1]);
      };

      reader.readAsText(selectedFile);
    } catch {
      Swal.fire(
        "Invalid data !",
        "Please load data in a correct JSON or GeoJSON format",
        "error"
      );
    }
  });
  fileInput.click();
});

function delete_path(path) {
  map.on("contextmenu", function (event) {
    if (event.which === 3) {
      console.log("right");
      /* Right mouse button was clicked! */
    }
  });
}

function processData(data) {
  var i = 0;

  let geojsonLayer = L.geoJSON(data, {
    draggable: false,
    test: "test",
    style: {
      weight: 0.2,
      fillOpacity: 0.9,
      color: "black",
      fillColor: "white",
    },
  }).addTo(map);

  delete_path(geojsonLayer);

  geojsonLayer.eachLayer(function (path) {
    path.feature.id = i++;
    path._path.classList.add("original_path");
  });

  function bind_drag(feature, collection = false) {
    feature.eachLayer(function (path) {
      path.on("dragend", function (event) {
        this.setStyle({ fillColor: "white" });
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
    path.remove();

    if (scale == "in") {
      var rescaled_path = L.geoJSON(
        turf.transformScale(path.toGeoJSON(), 1.1),
        {
          draggable: true,
          style: {
            weight: 0.2,
            fillOpacity: 0.9,
            color: "black",
            fillColor: "white",
          },
        }
      ).addTo(map);
    } else {
      var rescaled_path = L.geoJSON(
        turf.transformScale(path.toGeoJSON(), 0.9),
        {
          draggable: true,
          style: {
            weight: 0.2,
            fillOpacity: 0.9,
            color: "black",
            fillColor: "white",
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
    rescaled_path._layers[
      Object.keys(rescaled_path._layers)
    ]._path.classList.add("clicked");
    clicked_path = rescaled_path;

    rescaled_path.addEventListener("click", function () {
      clicked_path = rescaled_path;
      if (
        Array.from(
          rescaled_path._layers[Object.keys(rescaled_path._layers)]._path
            .classList
        ).includes("clicked")
      ) {
        rescaled_path._layers[
          Object.keys(rescaled_path._layers)
        ]._path.classList.remove("clicked");
      } else {
        map.eachLayer(function (path) {
          if (path instanceof L.Path) {
            if (Array.from(path._path.classList).includes("clicked")) {
              path._path.classList.remove("clicked");
            }
          }
        });
        rescaled_path._layers[
          Object.keys(rescaled_path._layers)
        ]._path.classList.add("clicked");
      }
    });
  }

  geojsonLayer.eachLayer(function (path) {
    path.on("click", function (event) {
      if (ctrlKeyPressed) {
        var new_path = L.geoJSON(this.toGeoJSON(), {
          draggable: true,
          style: {
            weight: 0.2,
            fillOpacity: 0.9,
            color: "black",
            fillColor: "orange",
          },
        }).addTo(map);
        bind_drag(new_path, false);
        clicked_path = new_path;

        new_path.addEventListener("click", function () {
          clicked_path = new_path;
          if (
            Array.from(
              new_path._layers[Object.keys(new_path._layers)]._path.classList
            ).includes("clicked")
          ) {
            new_path._layers[
              Object.keys(new_path._layers)
            ]._path.classList.remove("clicked");
          } else {
            map.eachLayer(function (path) {
              if (path instanceof L.Path) {
                if (Array.from(path._path.classList).includes("clicked")) {
                  path._path.classList.remove("clicked");
                }
              }
            });
            new_path._layers[Object.keys(new_path._layers)]._path.classList.add(
              "clicked"
            );
          }
        });
      }
    });
  });
  document.getElementById("bigger").addEventListener("click", function () {
    redraw(clicked_path, "in");
  });
  document.getElementById("smaller").addEventListener("click", function () {
    console.log(map.getBounds());
    redraw(clicked_path, "out");
  });
}

fileInput.addEventListener("change", (event) => {
  const selectedFile = event.target.files[0];

  if (selectedFile) {
    const reader = new FileReader();

    reader.onload = (e) => {
      const contents = e.target.result;
      fileContents.textContent = contents;
    };

    reader.readAsText(selectedFile);
  } else {
    fileContents.textContent = "No file selected.";
  }
});

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
