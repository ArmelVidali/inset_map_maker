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
