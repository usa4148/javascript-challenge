// // from data.js
// var tableData = data;

// YOUR CODE HERE!

//starter file from TA - Erin Wills
// provided comments for basic version of HW
// included function names and filteredData variable

// from data.js
const tableData = data;

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

function handleClick() {

  // Grab the datetime value from the filter
  

  // grab all the table data and set to filteredData
  
  // Check to see if a date was entered and filter the
  // data using that date.


  

  

  // Rebuild the table using the filtered data
  // @NOTE: If no date was entered, then filteredData will
  // just be the original tableData.
  // take your filtered data and put it into the buildTable to rebuild the table with the filtered data
  buildTable(filteredData);
}

// Attach an event to listen for the form button that calls handleClick on a click of the filter button


// Build the table when the page loads
buildTable(tableData);

