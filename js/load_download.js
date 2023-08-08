export function set_upload() {
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
          add_data(JSON.parse(contents));
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
}

export function set_download() {
  let fileInput = document.getElementById("file_input");
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
    const jsonString = JSON.stringify(output_feat, null, 2);
    const blob = new Blob([jsonString], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "inset_map";
    a.click();
    URL.revokeObjectURL(url);
  });
}

function add_data(data) {
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

  geojsonLayer.eachLayer(function (path) {
    path.feature.id = i++;
  });

  /* geojsonLayer.eachLayer(function (path) {
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
        })
          .getLayers()[0]
          .addTo(map);

        bind_drag(new_path, false);
        clicked_path = new_path;
        set_clicked_path(new_path);
      }
    });
  }); */
}
