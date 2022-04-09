var searchInput = document.getElementById("locationInput");
var newSearch = document.getElementById("newSearch");
var clearStorage = document.getElementById("clearStorage");

var storedSearches = [];

require(["esri/config", "esri/Map", "esri/views/MapView"], function (
  esriConfig,
  Map,
  MapView
) {
  esriConfig.apiKey = "YOUR_API_KEY";

  const map = new Map({
    basemap: "arcgis-topographic", // Basemap layer service
  });

  const view = new MapView({
    map: map,
    center: [-118.805, 34.027], // Longitude, latitude
    zoom: 13, // Zoom level
    container: "viewDiv", // Div element
  });
});

// ** Search function and Event Listeners**

function runSearch() {
  console.log("RUN SEARCH FUNCION CALLED");
}

function setEventListeners() {
  document.addEventListener("click", function (event) {
    var element = event.target;

    if (element.matches("#searchBtn")) {
      console.log("Search Button Clicked");
      event.preventDefault();
      // console.log(document.getElementById(`locationInput`).value);
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
