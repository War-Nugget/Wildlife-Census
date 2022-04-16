# Wildlife Census

# Description:

An interactive web application that will allow the user to wildlife density of endangered wildlife species based on an input search location coordinates.

# User Story:

As a user,

I want to be able to see wildlife density on endangered species, based on geographic location around the world, presented with information about the species.

So that I can know where endangered animals are concentrated around the world and basic information about their species.

# Link to Deployed Application:

https://mdschenck.github.io/Wildlife-Census/

# API’s Used:

GBIF - This project uses the Global Biodiversity Information Facility API to display population density as occurence points on a worldwide map. The GBIF project aims to provide anyone, anywhere open access to data about all types of life on Earth.

Wikipedia - This project uses the Wikipedia API to pull in species statistics and display next to the population map. Wikipedia is an open-source web based dictionary founded in 2001.

MapBox API - This project uses the Mapbox API to display the map on the page and overlay the endangered species information from the GBIF API.

# Technologies Used:

This project makes use of the following technologies in order to create the UI and functionality, and to meet the project requirements:

- Materialize CSS Framework
- Modals for error messages
- Javascript
- Fetch API Calls

# Project Requirements:

This project meets the following project requirements and acceptance criteria:

- Use a CSS framework other than Bootstrap.
- Be deployed to GitHub Pages.
- Be interactive (i.e., accept and respond to user input).
- Use at least two server-side APIs.
- Does not use alerts, confirms, or prompts (use modals).
- Use client-side storage to store persistent data.
- Be responsive.
- Have a polished UI.
- Have a clean repository that meets quality coding standards (file structure, naming conventions, follows best practices for class/id naming conventions, indentation, quality comments, etc.).
- Have a quality README (with unique name, description, technologies used, screenshot, and link to deployed application).

# Useage:

When the user visits the site, they are presented with an unpopulated map that locates to the user's coordinates, input fields for Latitude and Longitude, and a dropdown menu with endangered species to choose from.

When the user enters a Latitude and Longitude input along with selecting a species, the map will locate to the new coordinates, and populate sighting occurances for the wildlife selected. The species summary and image will populate to show a picture of the species as well as as a description from the Wikipedia Api.

When the user enters new search parameters, the map will locate to the new coordinates and display the new species information, and the species image and description will change to the new species selected.

When the user clicks the "Citations" link, they are redirected to the Citations page with information on the API's used and their organization information.
