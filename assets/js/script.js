var latitude = document.getElementById("latInput");
var longitude = document.getElementById("longInput");
var species = document.getElementById(`speciesMenu`).value;
var newSearch = document.getElementById("newSearch");
var clearStorage = document.getElementById("clearStorage");

var storedSearches = [];

// require(["esri/config", "esri/Map", "esri/views/MapView"], function (
//   esriConfig,
//   Map,
//   MapView
// ) {
//   esriConfig.apiKey = "YOUR_API_KEY";

//   const map = new Map({
//     basemap: "arcgis-topographic", // Basemap layer service
//   });

//   const view = new MapView({
//     map: map,
//     center: [-118.805, 34.027], // Longitude, latitude
//     zoom: 13, // Zoom level
//     container: "viewDiv", // Div element
//   });
// });

// ** Search function and Event Listeners**

function runSearch() {
  console.log("RUN SEARCH FUNCION CALLED");
}

function setEventListeners() {
  document.addEventListener("click", function (event) {
    var element = event.target;

    var lat = document.getElementById(`latInput`).value;
    var lon = document.getElementById(`longInput`).value;

    if (element.matches("#searchBtn")) {
      console.log("Search Button Clicked");
      event.preventDefault();
      console.log(document.getElementById(`latInput`).value);
      console.log(document.getElementById(`latInput`).value);
      console.log(document.getElementById(`speciesMenu`).value);
      console.log(lat);
      console.log(lon);

      //  runSearch(); // RUN SEARCH FUNCTION
    }
  });

  newSearch.addEventListener("click", function (event) {
    var element = event.target;

    if (element.matches("#newSearch")) {
      console.log("NEW Search Button Clicked");
      event.preventDefault();
      //  clearResults(); // CLEAR SEARCH RESULTS FOR NEW SEARCH
    }
  });

  clearStorage.addEventListener("click", function (event) {
    var element = event.target;

    if (element.matches("#clearStorage")) {
      console.log("Clear Storage Button Clicked");
      localStorage.clear(); // CLEAR STORAGE
    }
  });
}

setEventListeners();

mapboxgl.accessToken =
  "pk.eyJ1IjoiaWFuanVzdGluZmVycmlzIiwiYSI6ImNsMXUzdWFrdjI5YzEzY3BjcTN2bHdxcXkifQ.nHDp49alvjpiTFbRUmWL0Q";
var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/ianjustinferris/cl1vc6ihm002c14o9sj0c9vuy",
  center: [-84.388, 33.749],
  zoom: 7,
});

map.on("load", () => {
  map.addSource("thene_Cunicularia_Dataset-bqcy9s", {
    type: "vector",
    url: "mapbox://ianjustinferris.7e7jfhov",
  });
  map.addLayer({
    id: "ianjustinferris.7e7jfhov",
    type: "circle",
    source: "thene_Cunicularia_Dataset-bqcy9s",
    "source-layer": "Athene_Cunicularia_Dataset-bqcy9s",
    paint: {
      "circle-radius": 3,
      "circle-color": "#00FF99",
      "circle-stroke-color": "#006666",
      "circle-stroke-width": 1,
      "circle-opacity": 0.75,
    },
  });
});

map.on("load", () => {
  map.addSource("Ailuropoda_melanolenea_David_-57zylr", {
    type: "vector",
    url: "mapbox://ianjustinferris.8892homl",
  });
  map.addLayer({
    id: "ianjustinferris.8892homl",
    type: "circle",
    source: "Ailuropoda_melanolenea_David_-57zylr",
    "source-layer": "Ailuropoda_melanolenea_David_-57zylr",
    paint: {
      "circle-radius": 5,
      "circle-color": "#F4511E",
      "circle-stroke-color": "#BF360C",
      "circle-stroke-width": 1,
      "circle-opacity": 1,
    },
  });
});


map.on("load", () => {
  map.addSource("Panthera_Tigris_LInnaeus_1758-022kix", {
    type: "vector",
    url: "mapbox://ianjustinferris.1j46i1u6",
  });
  map.addLayer({
    id: "ianjustinferris.1j46i1u6",
    type: "circle",
    source: "Panthera_Tigris_LInnaeus_1758-022kix",
    "source-layer": "Panthera_Tigris_LInnaeus_1758-022kix",
    paint: {
      "circle-radius": 3.5,
      "circle-color": "#ff94c9",
      "circle-stroke-color": "#CC6633 ",
      "circle-stroke-width": 1.5,
      "circle-opacity": 0.85,
    },
  });
});


