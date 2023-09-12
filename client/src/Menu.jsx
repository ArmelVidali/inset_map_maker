import React from "react";
import { useEffect } from "react";
import Swal from "sweetalert2";
import upload from "./assets/upload.svg";
import minus from "./assets/minus.svg";
import plus from "./assets/plus.svg";
import download from "./assets/download.svg";

const Menu = (props) => {
  const { layers, setLayer } = props;

  function Filereader(selectedFile) {
    try {
      const reader = new FileReader();
      reader.onload = (e) => {
        const contents = e.target.result;
        const parsedLayers = JSON.parse(contents);

        setLayer((prev_layers) => [...prev_layers, parsedLayers]);

        Swal.fire(
          "Layer loaded !",
          "Click on <kbd class = kdb_elem >Ctrl</kbd> + <kbd class = kdb_elem >Left-Click</kbd> to duplicate a shape. <br/><br/> Use <kbd class = kdb_elem >Left-Click</kbd> to move it",
          "success"
        );
      };
      reader.readAsText(selectedFile);
    } catch {
      Swal.fire(
        "Invalid data !",
        "Please load data in a correct JSON or GeoJSON format",
        "error"
      );
    }
  }

  return (
    <div className="container">
      <div className="card">
        <div className="header">
          <h3>
            <kbd className="kdb_elem">Ctrl</kbd> +{" "}
            <kbd className="kdb_elem">Left Click</kbd> to duplicate a shape.
          </h3>
          <h3>
            <kbd className="kdb_elem">Left Click</kbd> To drag a duplicated
            shape.
          </h3>
        </div>
        <div className="body">
          <ul id="menu_ul">
            <li id="file_input">
              <label>
                <input
                  type="file"
                  accept={[".GeoJSON", ".JSON"]}
                  style={{ display: "none" }}
                  onChange={(e) => {
                    Filereader(e.target.files[0]);
                  }}
                />
                <img
                  src={upload}
                  alt="upload"
                  style={{ height: "15px", width: "15px" }}
                  className="menu-btn"
                />
                Load data
              </label>
            </li>
            <li>
              <img
                src={minus}
                alt="upload"
                style={{ height: "15px", width: "15px" }}
                id="smaller"
                className="menu-btn"
              />{" "}
              Rescale selected element{" "}
              <img
                src={plus}
                alt="upload"
                style={{ height: "15px", width: "15px" }}
                id="bigger"
                className="menu-btn"
              />
            </li>
            <li id="download_btn">
              <img
                src={download}
                alt="upload"
                style={{ height: "15px", width: "15px" }}
                className="menu-btn"
              />{" "}
              Download (GeoJSON)
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Menu;
