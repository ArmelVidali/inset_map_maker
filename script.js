var map = L.map("map").setView([1.603354, 1.888334], 6);
var tiles = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

var ids = 0;

let ctrlKeyPressed = false;
var duplicate_lat_lng;

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

    let geojsonLayer = L.geoJSON(data, {
      draggable: true,
      style: {
        weight: 1,
        fillOpacity: 0.7,
        color: "white",
        dashArray: "3",
      },
    }).addTo(map);

    geojsonLayer.eachLayer(function (path) {
      path.on("dragend", function (event) {
        let flag = false;
        var bounds = path._bounds;

        for (let classname of path._path.classList) {
          if (classname.includes("dragged_path")) {
            flag = true;
          }
        }
        if (flag == false) {
          path._path.classList.add(`dragged_path_${ids}`);
          ids += 1;
        }
        let this_id = parseInt(
          this._path.classList[2].replace("dragged_path_", "")
        );
        try {
          let bouding_rectangle = document.querySelectorAll(
            `[class*="dragged_rectangle_${this_id}"]`
          );
          bouding_rectangle[0].remove();
        } catch {}
        let bounds_coords = [
          [bounds._northEast.lat, bounds._northEast.lng],
          [bounds._southWest.lat, bounds._southWest.lng],
        ];
        let bouding_rectangle = L.rectangle(bounds, {
          color: "black",
          weight: 2,
          fill: false,
        }).addTo(map);
        bouding_rectangle._path.classList.add(`dragged_rectangle_${this_id}`);
      });
    });

    geojsonLayer.eachLayer(function (path) {
      path.on("click", function (event) {
        if (ctrlKeyPressed) {
          var originalLatLngs = this.getLatLngs();
          console.log(originalLatLngs);
          L.polygon(newLatLngs).addTo(map);
        }
      });
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
