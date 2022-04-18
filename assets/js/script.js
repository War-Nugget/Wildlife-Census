var latitude = document.getElementById("latInput");
var longitude = document.getElementById("longInput");
var species = document.getElementById(`speciesMenu`).value;
var newSearch = document.getElementById("newSearch");
var clearStorage = document.getElementById("clearStorage");
var wildlifeStatsEl = document.querySelector("#wildlifeStats");
var wildlifeImgEl = document.querySelector("#wildlifeImg");
var latitudeModalEl = document.querySelector("#badLat");
var wikiLinkEl = document.querySelector("#wikiLink");

const speciesOptions = {
  tiger: "tiger",
  flyingSquirrel: "flying_squirrel",
  seaOtter: "sea_otter",
  giantPanda: "giant_panda",
  whoopingCrane: "whooping_crane",
  blueWhale: "blue_whale",
  elephant: "elephant",
  snowLeopard: "snow_leopard",
  gorilla: "gorilla",
};

var storedSearches = [];

// ** Search function and Event Listeners**

var lat = document.getElementById(`latInput`).value;
var lon = document.getElementById(`longInput`).value;

var map;

var latModal;

// document.addEventListener('DOMContentLoaded', function() {
//   var latError = document.querySelector('.modal');
//   M.Modal.init(latError, {});
// });

function runSearch(lat, lon) {
  console.log("RUN SEARCH FUNCTION CALLED");
  if (lat > 90 || lat < -90 || lon > 180 || lon < -180) {
    // debugger;
    // var latError = document.querySelector('#badLat');
    //   M.Modal.init(latError, {});
    latModal.open();
  } else {
    map.flyTo({
      center: [lon, lat],
      zoom: 9,
    });
  }
}

function setEventListeners() {
  document.addEventListener("click", function (event) {
    var element = event.target;

    latModal = M.Modal.init(latitudeModalEl, {});

    var lat = document.getElementById(`latInput`).value;
    var lon = document.getElementById(`longInput`).value;
    var species = document.getElementById(`speciesMenu`).value;

    if (element.matches("#searchBtn")) {
      console.log("Search Button Clicked");
      event.preventDefault();
      console.log(document.getElementById(`latInput`).value);
      console.log(document.getElementById(`longInput`).value);
      console.log(document.getElementById(`speciesMenu`).value);
      console.log(lat);
      console.log(lon);
      console.log("THIS SPECIES WAS CHOSEN: " + species);
      runSearch(lat, lon); // RUN SEARCH FUNCTION
      runDisplayInfo(species);
    }

    document.addEventListener("submit", function (event) {
      // var element = event.target;
      event.preventDefault();
    });

    clearStorage.addEventListener("click", function (event) {
      var element = event.target;

      if (element.matches("#clearStorage")) {
        console.log("Clear Storage Button Clicked");
        localStorage.clear(); // CLEAR STORAGE
      }
    });
  });
}

setEventListeners();

mapboxgl.accessToken =
  "pk.eyJ1IjoiaWFuanVzdGluZmVycmlzIiwiYSI6ImNsMXUzdWFrdjI5YzEzY3BjcTN2bHdxcXkifQ.nHDp49alvjpiTFbRUmWL0Q";

// setting geolocation
navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true,
});

function successLocation(position) {
  console.log(position);
  setupMap([position.coords.longitude, position.coords.latitude]);
}

function errorLocation() {
  setupMap([-2.24, 53.48]); //default long/lat to Manchester, UK
}

//Put a setupMap function around map creation to add center parameter for geolocation
function setupMap(center) {
  map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/ianjustinferris/cl1vc6ihm002c14o9sj0c9vuy",
    center: center,
    zoom: 9,
  });

  // Flying Squirrel Layer
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

  // Panda Layer
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
        "circle-radius": 3.5,
        "circle-color": "#F4511E",
        "circle-stroke-color": "#BF360C",
        "circle-stroke-width": 1.5,
        "circle-opacity": 0.85,
      },
    });
  });

  // Tiger Layer
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

  // Elephant Layer
  map.on("load", () => {
    map.addSource("Elephus_Maximus_Linnaeus-0d8jht", {
      type: "vector",
      url: "mapbox://ianjustinferris.5phjig5h",
    });
    map.addLayer({
      id: "ianjustinferris.5phjig5h",
      type: "circle",
      source: "Elephus_Maximus_Linnaeus-0d8jht",
      "source-layer": "Elephus_Maximus_Linnaeus-0d8jht",
      paint: {
        "circle-radius": 3.5,
        "circle-color": "#3486eb",
        "circle-stroke-color": "#b2d1f7",
        "circle-stroke-width": 1.5,
        "circle-opacity": 0.85,
      },
    });
  });

  //Otter Layer
  map.on("load", () => {
    map.addSource("Enhydra_Lutris_Merriam1904-6iungd", {
      type: "vector",
      url: "mapbox://ianjustinferris.5eqsetbk",
    });
    map.addLayer({
      id: "ianjustinferris.5eqsetbk",
      type: "circle",
      source: "Enhydra_Lutris_Merriam1904-6iungd",
      "source-layer": "Enhydra_Lutris_Merriam1904-6iungd",
      paint: {
        "circle-radius": 3.5,
        "circle-color": "#eaf24b",
        "circle-stroke-color": "#e6c837",
        "circle-stroke-width": 1.5,
        "circle-opacity": 0.85,
      },
    });
  });

  //Snow Leopard Layer
  map.on("load", () => {
    map.addSource("Panthera_Uncia_Schreber1775-6vnt41", {
      type: "vector",
      url: "mapbox://ianjustinferris.avhp1spo",
    });
    map.addLayer({
      id: "ianjustinferris.avhp1spo",
      type: "circle",
      source: "Panthera_Uncia_Schreber1775-6vnt41",
      "source-layer": "Panthera_Uncia_Schreber1775-6vnt41",
      paint: {
        "circle-radius": 3.5,
        "circle-color": "#a637e6",
        "circle-stroke-color": "#cfa2e8",
        "circle-stroke-width": 1.5,
        "circle-opacity": 0.85,
      },
    });
  });

  //Gorilla Layer
  map.on("load", () => {
    map.addSource("Gorilla_Beringei_Matschie1903-55g5ja", {
      type: "vector",
      url: "mapbox://ianjustinferris.0gafe0i4",
    });
    map.addLayer({
      id: "ianjustinferris.0gafe0i4",
      type: "circle",
      source: "Gorilla_Beringei_Matschie1903-55g5ja",
      "source-layer": "Gorilla_Beringei_Matschie1903-55g5ja",
      paint: {
        "circle-radius": 3.5,
        "circle-color": "#48f0f0",
        "circle-stroke-color": "#0db8b8",
        "circle-stroke-width": 1.5,
        "circle-opacity": 0.85,
      },
    });
  });

  //Tasmanian Devil Layer
  map.on("load", () => {
    map.addSource("Sarcophilus_Harrisi_Boltard_1-8biooa", {
      type: "vector",
      url: "mapbox://ianjustinferris.bg9oh3sj",
    });
    map.addLayer({
      id: "ianjustinferris.bg9oh3sj",
      type: "circle",
      source: "Sarcophilus_Harrisi_Boltard_1-8biooa",
      "source-layer": "Sarcophilus_Harrisi_Boltard_1-8biooa",
      paint: {
        "circle-radius": 3.5,
        "circle-color": "#861800",
        "circle-stroke-color": "#E63009",
        "circle-stroke-width": 1.5,
        "circle-opacity": 0.85,
      },
    });
  });

  //Orangutan Layer
  map.on("load", () => {
    map.addSource("Pongo_Pygmaeus_Linnaeus_1760-4d8s3p", {
      type: "vector",
      url: "mapbox://ianjustinferris.1bwz4brn",
    });
    map.addLayer({
      id: "ianjustinferris.1bwz4brn",
      type: "circle",
      source: "Pongo_Pygmaeus_Linnaeus_1760-4d8s3p",
      "source-layer": "Pongo_Pygmaeus_Linnaeus_1760-4d8s3p",
      paint: {
        "circle-radius": 3.5,
        "circle-color": "#1FE415",
        "circle-stroke-color": "#ACD9E5",
        "circle-stroke-width": 1.5,
        "circle-opacity": 0.85,
      },
    });
  });

  //Blue Whale Layer
  map.on("load", () => {
    map.addSource("Balaenoptera_Musculus-4vlqye", {
      type: "vector",
      url: "mapbox://ianjustinferris.9dw9o3x9",
    });
    map.addLayer({
      id: "ianjustinferris.9dw9o3x9",
      type: "circle",
      source: "Balaenoptera_Musculus-4vlqye",
      "source-layer": "Balaenoptera_Musculus-4vlqye",
      paint: {
        "circle-radius": 3.5,
        "circle-color": "#3866E9",
        "circle-stroke-color": "#ACD9E5",
        "circle-stroke-width": 1.5,
        "circle-opacity": 0.85,
      },
    });
  });


   //Whooping Crane Layer
  map.on("load", () => {
    map.addSource("Grus_Americana_Linnaeus_1758-ac0tdu", {
      type: "vector",
      url: "mapbox://ianjustinferris.0ajin36k",
    });
    map.addLayer({
      id: "ianjustinferris.0ajin36k",
      type: "circle",
      source: "Grus_Americana_Linnaeus_1758-ac0tdu",
      "source-layer": "Grus_Americana_Linnaeus_1758-ac0tdu",
      paint: {
        "circle-radius": 3.5,
        "circle-color": "#ebe0c3",
        "circle-stroke-color": "#ACD9E5",
        "circle-stroke-width": 1.5,
        "circle-opacity": 0.85,
      },
    });
  });
}

// TODO: Connect this function to the "Select a Species" drop down menu -- DONE!

// TODO: Fix Spaces in link input - input is working on single word searches, but not our animal values with spaces.

// Get the JSON that contains the title and extract of the wikipedia article.
function wikiGet(species) {
  console.log(species);
  console.log("https://en.wikipedia.org/wiki/" + species);
  var wikiArticle =
    "<a href=https://en.wikipedia.org/wiki/" +
    species +
    ">https://en.wikipedia.org/wiki/" +
    species +
    "</a>";

  var endpointURL =
    "https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&prop=extracts&titles=" +
    species +
    "&formatversion=2&exsentences=10&exlimit=1&explaintext=1";

  fetch(endpointURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      console.log(data.query.pages[0].title);
      console.log(data.query.pages[0].extract);
      wildlifeStatsEl.append(data.query.pages[0].title + ": ");
      wildlifeStatsEl.append(data.query.pages[0].extract);

      wikiLinkEl.innerHTML = `For more information visit the following link: ${wikiArticle}`;
    });
}
// Get the JSON that contains the thumbnail for the wikipedia article.
function wikiGetImage(species) {
  var addUnderscore = species.replace(" ", "_");
  species = document.getElementById(`speciesMenu`).value;
  console.log("WIKIGETIMAGE FUNCTION CALL" + species);
  console.log("UNDERSCORE TEST: " + addUnderscore);
  var imageURL =
    "https://en.wikipedia.org/w/api.php?action=query&titles=" +
    addUnderscore +
    "&prop=pageimages&format=json&pithumbsize=300&origin=*";
  fetch(imageURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      var pageID = Object.keys(data.query.pages)[0];
      var thumbnailFromPageID = data.query.pages[pageID].thumbnail.source;
      console.log(thumbnailFromPageID);
      createH2 = document.createElement("h2")
      createH2.innerHTML = species
      imgElForThumbnail = document.createElement("img");
      imgElForThumbnail.setAttribute("src", thumbnailFromPageID);
      wildlifeImgEl.append(createH2)
      wildlifeImgEl.append(imgElForThumbnail);
    });
}

// Uncomment these 2 functions if you'd like to experiment with the speciesOptions object
// wikiGetImage(speciesOptions.gorilla)
// wikiGet(speciesOptions.gorilla)

// TODO: USE THIS FUNCTION TO DISPLAY THE PROPER SPECIES ON THE PAGE
function runDisplayInfo(species) {
  console.log("Species chosen: " + species);
  wildlifeStatsEl.innerHTML = "";
  wildlifeImgEl.innerHTML = "";
  if (species === "Giant Panda") {
    wikiGet(speciesOptions.giantPanda);
    wikiGetImage(speciesOptions.giantPanda);
  }
  if (species === "Tiger") {
    wikiGet(speciesOptions.tiger);
    wikiGetImage(speciesOptions.tiger);
  }
  if (species === "Whooping Crane") {
    wikiGet(speciesOptions.whoopingCrane);
    wikiGetImage(speciesOptions.whoopingCrane);
  }
  if (species === "Blue Whale") {
    wikiGet(speciesOptions.blueWhale);
    wikiGetImage(speciesOptions.blueWhale);
  }
  if (species === "Flying Squirrel") {
    wikiGet(speciesOptions.flyingSquirrel);
    wikiGetImage(speciesOptions.flyingSquirrel);
  }
  if (species === "Sea Otters") {
    wikiGet(speciesOptions.seaOtter);
    wikiGetImage(speciesOptions.seaOtter);
  }
}
