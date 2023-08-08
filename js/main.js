import { set_key_press, redraw } from "./bind_events";
import { set_upload, set_download } from "./load_download";
const turf = require("@turf/turf");
const Swal = require("sweetalert2");

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

//set events buttons//
//used by load_download/add_data() to set event listener
var ctrlKeyPressed = false;
var shiftKeyPressed = false;
var clicked_path;

set_key_press();
set_upload();
set_download();

document.getElementById("bigger").addEventListener("click", function () {
  redraw(clicked_path, "in");
});
document.getElementById("smaller").addEventListener("click", function () {
  console.log(map.getBounds());
  redraw(clicked_path, "out");
});
