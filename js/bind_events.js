export function rescale(layer, scale) {
  var scale_factor;
  if (scale == "in") {
    scale_factor = 1.1;
  } else {
    scale_factor = 0.9;
  }
  layer.feature.geometry.coordinates = L.geoJSON(
    turf.transformScale(path.toGeoJSON(), scale_factor),
    {
      draggable: true,
      style: {
        weight: 0.2,
        fillOpacity: 0.9,
        color: "black",
        fillColor: "white",
      },
    }
  ).getLayers()[0].feature.geometry.coordinates;
}

export function set_clicked_path(path) {
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

export function bind_drag(feature, collection = false) {
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

export function set_key_press() {
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
 * Rescales a path by 1.1 or 0.9, redraws the boudng rectangle around it and sets classes name
 * @param {path} Leafletpath
 * @param {scale} str : in or out
 */
export function redraw(path, scale) {
  var path_id = path.feature.id;

  document
    .querySelectorAll(`[class*="dragged_rectangle_${path_id}"]`)[0]
    .remove();

  path.remove();

  rescale(path, scale);
  rescaled_path._path.classList.add("dragged_path_" + rescaled_path.feature.id);
  let bounds = rescaled_path._bounds;

  let bounding_rectangle = L.rectangle(bounds, {
    color: "black",
    weight: 2,
    fill: false,
  }).addTo(map);
  bounding_rectangle._path.classList.add("dragged_rectangle_" + path_id);
  bind_drag(rescaled_path, false);
  rescaled_path._path.classList.add("clicked");
  clicked_path = rescaled_path;
  set_clicked_path(rescaled_path);
}
