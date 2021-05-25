// // from data.js
// var tableData = data;

// YOUR CODE HERE!

//starter file from TA - Erin Wills
// provided comments for basic version of HW
// included function names and filteredData variable

// Select the filter-form
var filterButton = d3.select("#filter-btn");
var filterDate = d3.select("#datetime");
var filterCity = d3.select("#city"); //.on("click", function() {updateCity(+this.value)});
var filterState = d3.select("#state");
var filterCountry = d3.select("#country");
var filterShape = d3.select("#shape");

// Define the event handlers
filterButton.on("click", handleClick);
//filterCity.on("submit", handleClick);
//filterCity.on("click", handleClick);
//filterDate.on("submit", handleClick);
//filterDate.on("click", handleClick);
//filterState.on("submit", handleClick);
//filterState.on("click", handleClick);
//filterCountry.on("submit", handleClick);
//filterCountry.on("click", handleClick);
//filterShape.on("submit", handleClick);
//filterShape.on("click", handleClick);

// from data.js
const tableData = data;
var startData = tableData.slice(0,1);

// get table references where table will be inserted


function buildTable(data) {
  // When the page loads, it needs to display the table
  // But if the table reloads then you may need to ensure the 
  // previous output is cleared/overwritten from scratch 

  var tbody = d3.select("tbody");
  // Think of the class activities for generating tables
  data.forEach((datum) => {
    var row = tbody.append("tr");
    Object.entries(datum).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

}

//function handleCityClick() {
//    var cityElement = d3.select("#city");
//    var cityValue = cityElement.property("value");
//    var filteredData = tableData.filter(ufo => ufo.city === cityValue);
//buildTable(filteredData)    
//}

function handleClick() {
  // Prevent the page from refreshing
  d3.event.preventDefault();
  console.log(d3.event.target);
  console.log(d3.event.value)

  // Grab the datetime value from the filter
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

  var filteredData = tableData.filter(ufo => ufo.datetime === dtValue 
                                          || ufo.city === cityValue 
                                          || ufo.state === stateValue
                                          || ufo.country === countryValue
                                          || ufo.shape === shapeValue);
 
  document.getElementById('datetime').value='';
  document.getElementById('city').value='';
  document.getElementById('state').value='';
  document.getElementById('country').value='';                                        
  document.getElementById('shape').value='';

  // grab all the table data and set to filteredData
  
  // Check to see if a date was entered and filter the
  // data using that date.


  // Rebuild the table using the filtered data
  //d3.select("tbody").remove();
  // @NOTE: If no date was entered, then filteredData will
  // just be the original tableData.
  // take your filtered data and put it into the buildTable to rebuild the table with the filtered data
  buildTable(filteredData);
}

// Attach an event to listen for the form button that calls handleClick on a click of the filter button


// Build the table when the page loads
//buildTable(tableData);
buildTable(startData);

