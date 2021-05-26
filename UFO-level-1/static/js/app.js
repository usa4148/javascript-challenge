// // // // // // // // // // // // // // //
// 
//  DS BootCamp - JavaScript-Challenge
//
//  Dan C.
//
// // // // // // // // // // // // // // //

//starter file from TA - Erin Wills

// Select the filter-form
var filterButton = d3.select("#filter-btn");
var filterDate = d3.select("#datetime");
var filterCity = d3.select("#city"); 
var filterState = d3.select("#state");
var filterCountry = d3.select("#country");
var filterShape = d3.select("#shape");

// Define the event handlers
filterButton.on("click", handleClick);
//filterCity.on("submit", handleClick);

// from data.js
const tableData = data;
var startData = tableData.slice(0,1);

function buildTable(data) {
  // When the page loads, it needs to display the table
  // But if the table reloads then you may need to ensure the 
  // previous output is cleared/overwritten from scratch 

  var tbody = d3.select("tbody");
  // TG for this - https://www.tutorialsteacher.com/d3js/dom-manipulation-using-d3js
  // Clear the table
  tbody.html("");

  // Think of the class activities for generating tables
  data.forEach((datum) => {
    var row = tbody.append("tr");
    Object.entries(datum).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

}

function handleClick() {
  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // get table references where table will be inserted
  
  var dtElement = d3.select("#datetime");
  var dtValue = dtElement.property("value");

  var cityElement = d3.select("#city");
  var cityValue = cityElement.property("value");

  var stateElement = d3.select("#state");
  var stateValue = stateElement.property("value");

  var countryElement = d3.select("#country");
  var countryValue = countryElement.property("value");

  var shapeElement = d3.select("#shape");
  var shapeValue = shapeElement.property("value");

  // Grab the datetime value from the filter
  var filteredData = tableData.filter(ufo => ufo.datetime === dtValue 
        || ufo.city === cityValue 
        || ufo.state === stateValue
        || ufo.country === countryValue
        || ufo.shape === shapeValue);

  // grab all the table data and set to filteredData
  document.getElementById('datetime').value='';
  document.getElementById('city').value='';
  document.getElementById('state').value='';
  document.getElementById('country').value='';                                        
  document.getElementById('shape').value='';

  // take your filtered data and put it into the buildTable to rebuild the table with the filtered data
  buildTable(filteredData);
}

// Build the table when the page loads
buildTable(startData);

