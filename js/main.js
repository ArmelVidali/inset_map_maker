////// Map & tools intialisation ///////
var map = L.map("map", { zoomControl: false }).setView(
  [46.603354, 1.888334],
  6
);
map.doubleClickZoom.disable();
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap & Armel Vidali</a> ',
}).addTo(map);
console.log(map);

//set events buttons//
//used by load_download/add_data() to set event listener
var ctrlKeyPressed = false;
var shiftKeyPressed = false;
var clicked_path;
var original_bounds;
var contained_points = [];

set_key_press();
set_upload();
set_download();

document.getElementById("bigger").addEventListener("click", function () {
  redraw_layer(clicked_path, "in");
});
document.getElementById("smaller").addEventListener("click", function () {
  console.log(map.getBounds());
  redraw_layer(clicked_path, "out");
});

//Load functions

function set_upload() {
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
          var geojsonLayer = add_data(JSON.parse(contents));
          Swal.fire(
            "Layer loaded !",
            "Click on <kbd class = kdb_elem >Ctrl</kbd> + <kbd class = kdb_elem >Left-Click</kbd> to duplicated a shape. <br/><br/> Use <kbd class = kdb_elem >Left-Click</kbd> to move it",
            "success"
          );
          let layer_name = document.createElement("li");
          layer_name.textContent += "- " + event.target.files[0].name;
          layer_name.className = "layer_name";
          layer_name.dataset.layerId = geojsonLayer._leaflet_id;

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
}

function set_download() {
  let fileInput = document.getElementById("file_input");
  let geoJSONData = null; // Variable to store GeoJSON data

  fileInput.addEventListener("change", (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      const reader = new FileReader();

      reader.onload = (e) => {
        geoJSONData = JSON.parse(e.target.result);
      };

      reader.readAsText(selectedFile);
    }
  });

  let download_btn = document.getElementById("download_btn");

  download_btn.addEventListener("click", function () {
    let output_feat = {
      type: "FeatureCollection",
      features: [], // Initialize an empty array for features
    };
    map.eachLayer(function (path) {
      if (path instanceof L.Path) {
        if (path.feature != undefined) {
          // check if the path was dragged. If yes, then update it's coordinates before downloading it
          let includesDragged = Array.from(path._path.classList).some(function (
            classname
          ) {
            return classname.includes("dragged");
          });
          //if the path was dragged
          if (includesDragged) {
            var coordinates = path.getLatLngs();

            // Map over the coordinates and convert coordiantes objects to arrays
            var transformedCoordinates = coordinates.map(function (array) {
              return array.map(function (innerArray) {
                if (Array.isArray(innerArray)) {
                  return innerArray.map(function (coords) {
                    return [coords.lng, coords.lat];
                  });
                } else {
                  return [innerArray.lng, innerArray.lat];
                }
              });
            });
            //actually repalce the coordinates
            path.feature.geometry.coordinates = transformedCoordinates;
            let bounds = path._bounds;
            var bounds_reactangle = {
              type: "Feature",
              style: {
                fillColor: "none",
                fillOpacity: 0,
                strokeColor: "red",
                strokeWeight: 2,
              },
              geometry: {
                type: "Polygon",
                coordinates: [
                  [
                    [bounds._southWest.lng, bounds._southWest.lat],
                    [bounds._northEast.lng, bounds._southWest.lat],
                    [bounds._northEast.lng, bounds._northEast.lat],
                    [bounds._southWest.lng, bounds._northEast.lat],
                    [bounds._southWest.lng, bounds._southWest.lat],
                  ],
                ],
              },
            };
            output_feat.features.push(bounds_reactangle);
          }

          output_feat.features.push(path.feature);
        }
      }
    });

    // Merge loaded GeoJSON data with map features (if loaded)
    if (geoJSONData) {
      output_feat.features = output_feat.features.concat(geoJSONData.features);
    }

    const jsonString = JSON.stringify(output_feat, null, 2);
    const blob = new Blob([jsonString], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "inset_map.geojson"; // Use .geojson extension
    a.click();
    URL.revokeObjectURL(url);
  });
}

function add_data(data) {
  var geojsonLayer = L.geoJSON(data, {
    pointToLayer: function (feature, latlng) {
      return L.marker(latlng, {
        icon: L.icon({
          iconUrl: "../img/marker-icon.svg",
          iconSize: [50, 50], // Set the icon size
        }),
      });
    },
    style: function (feature) {
      return {
        weight: 0.2,
        fillOpacity: 0.9,
        color: "black",
        fillColor: "white",
      };
    },
    draggable: false,
  }).addTo(map);

  var i = 0;

  geojsonLayer.eachLayer(function (path) {
    path.feature.id = i++;
    if (
      path.feature.geometry.type == "Polygon" ||
      path.feature.geometry.type == "MultiPolygon"
    ) {
      path._path.classList.add("original_path");
    }
  });

  geojsonLayer.eachLayer(function (path) {
    path.on("click", function (event) {
      if (ctrlKeyPressed && path instanceof L.Path) {
        var new_path = L.geoJSON(this.toGeoJSON(), {
          draggable: true,
          style: {
            weight: 0.2,
            fillOpacity: 0.9,
            color: "black",
            fillColor: "orange",
          },
        })
          .getLayers()[0]
          .addTo(map);

        bind_drag(new_path, false);
        clicked_path = new_path;
        set_clicked_path(new_path);
        // Removes a dragged shape and its bouding rectangle when Shift key engaged
        new_path.on("click", () => {
          if (shiftKeyPressed) {
            let path_id = new_path.feature.id;
            let bouding_rectangle = document.querySelectorAll(
              `[class*="dragged_rectangle_${path_id}"]`
            );
            bouding_rectangle[0].remove();
            new_path.remove();
          }
        });
      }
      // Remove a shape from the original dataset
      else if (shiftKeyPressed && path instanceof L.Path) {
        path.remove();
      }
    });
  });
  return geojsonLayer;
}

//Bind events functions

function rescale(layer, scale) {
  var original_bounds = layer.getBounds();
  var scale_factor = 0;
  if (scale == "in") {
    scale_factor = 1.1;
  } else {
    scale_factor = 0.9;
  }
  let layer_internal_id = layer._leaflet_id;
  let rescaled_coordinates = L.geoJSON(
    turf.transformScale(layer.toGeoJSON(), scale_factor),
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

  original_bounds = null;
  contained_points = [];

  original_bounds = layer.getBounds();
  map.eachLayer(function (point) {
    if (point instanceof L.marker) {
      let point_coord = point.getLatLng();

      if (
        turf.booleanPointInPolygon(
          turf.point([point_coord.lng, point_coord.lat]),
          layer.toGeoJSON()
        )
      ) {
        let current_bound = layer.getBounds();
        var bounds_shift = [
          original_bounds._northEast.lat - current_bound._northEast.lat,
          original_bounds._northEast.lng - current_bound._northEast.lng,
        ];

        let ptn = L.marker(
          [
            point._latlng.lat - bounds_shift[0],
            point._latlng.lng - bounds_shift[1],
          ],
          {
            icon: L.icon({
              iconUrl: "../img/marker-icon.svg", // Provide the path to your icon image
              iconSize: [40, 40], // Set the icon size
            }),
            dataAttribute: "test",
          }
        ).addTo(map);

        ptn._icon.classList.add("dragged");
        point.remove();
      }
    }
  });

  layer.remove();
  return rescaled_coordinates;
}

function set_clicked_path(path) {
  path.addEventListener("click", function () {
    clicked_path = path;
    if (path._path.classList.contains("clicked")) {
      path._path.classList.remove("clicked");
    } else {
      map.eachLayer(function (path) {
        if (path instanceof L.Path) {
          if (path._path.classList.contains("clicked")) {
            path._path.classList.remove("clicked");
          }
        }
      });
      path._path.classList.add("clicked");
    }
  });
}

function remove_path_and_points(path) {
  map.eachLayer(function (point) {
    if (point instanceof L.Marker) {
      if (turf.booleanPointInPolygon(point.toGeoJSON(), path.toGeoJSON())) {
        contained_points.push(point);
        if (point._icon.classList.contains("dragged")) {
          point.remove();
        }
      }
    }
  });
}

function bind_drag(path, collection = false, moved = false) {
  const path_id = path.feature.id;
  var original_bounds;
  var contained_points;

  path.on("dragstart", function () {
    contained_points = [];
    original_bounds = null;
    original_bounds = path.getBounds().getCenter();
    remove_path_and_points(path);
  });

  path.on("dragend", function (event) {
    path.redraw();
    this.setStyle({ fillColor: "white" });
    let flag = false;
    var bounds = path._bounds;

    for (let classname of path._path.classList) {
      if (classname.includes("dragged_path")) {
        flag = true;
      }
    }
    if (flag == false) {
      path._path.classList.add(`dragged_path_${path_id}`);
    }
    try {
      let bouding_rectangle = document.querySelectorAll(
        `[class*="dragged_rectangle_${path_id}"]`
      );
      bouding_rectangle[0].remove();
    } catch {}
    let bouding_rectangle = L.rectangle(bounds, {
      color: "black",
      weight: 2,
      fill: false,
    }).addTo(map);
    bouding_rectangle._path.classList.add(`dragged_rectangle_${path_id}`);
    let current_bound = path.getBounds().getCenter();
    var bounds_shift = [
      original_bounds.lat - current_bound.lat,
      original_bounds.lng - current_bound.lng,
    ];

    for (let point_to_move of contained_points) {
      let ptn = L.marker(
        [
          point_to_move._latlng.lat - bounds_shift[0],
          point_to_move._latlng.lng - bounds_shift[1],
        ],

        {
          icon: L.icon({
            iconUrl: "../img/marker-icon.svg", // Provide the path to your icon image
            iconSize: [32, 32], // Set the icon size
          }),
        }
      ).addTo(map);
      ptn._icon.classList.add(`dragged_point_${path_id}`);
    }
  });
}

function set_key_press() {
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
}
/**
 * Rescales a path by 1.1 or 0.9, redraw_layers the boudng rectangle around it and sets classes name
 * @param {path} Leafletpath
 * @param {scale} str : in or out
 */
function redraw_layer(path, scale) {
  console.log(clicked_path);
  var path_id = path.feature.id;

  document
    .querySelectorAll(`[class*="dragged_rectangle_${path_id}"]`)[0]
    .remove();

  let rescaled_path = rescale(path, scale).getLayers()[0];
  rescaled_path._path.classList.add("dragged_path_" + rescaled_path.feature.id);
  let bounds = rescaled_path._bounds;

  let bounding_rectangle = L.rectangle(bounds, {
    color: "black",
    weight: 2,
    fill: false,
  }).addTo(map);
  bounding_rectangle._path.classList.add("dragged_rectangle_" + path_id);
  bind_drag(rescaled_path, false, true);
  rescaled_path._path.classList.add("clicked");
  clicked_path = rescaled_path;
  set_clicked_path(rescaled_path);
}
