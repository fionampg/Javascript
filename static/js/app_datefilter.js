// from data.js
var tableData = data;

// // YOUR CODE HERE!

// Define my variables
var filterbutton = d3.select("#filter-btn");
var resetbutton = d3.select("#reset-btn");
var inputdatetime = d3.select("#datetime");
var tbody = d3.select("tbody");
var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]

// Loading data
var loaddata = (dataInput) => {
    tbody.html("");
    dataInput.forEach(ufosightings => {
      var row = tbody.append("tr");
      columns.forEach(column => row.append("td").text(ufosightings[column])
      )
    });
  }


loaddata(tableData);

function loadTable(array){
    //clear tbody
    tbody.html("");
    // Next, loop through each object in the data
    // and append a row and cells for each value in the row
    array.forEach((dataRow) => {
        // Append a row to the table body
        var row = tbody.append("tr");

        // Loop through each field in the dataRow and add each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
            var cell = row.append("td");
            cell.text(val);
        });
    });
};

loadTable(tableData);

// Filter 
filterbutton.on("click",() => {
    //Prevent page from refreshing
    d3.event.preventDefault();

    //Get value from input fields
    var filtdate = inputdatetime.property("value").trim();

    // Filter by DATE  matching input value
    var filteredDate = tableData.filter(fdata => fdata.datetime === filtdate);
    console.log(filteredDate);

    // Add filtered data to table
    tbody.html("");

    let response = {filteredDate}
    
    if(response.filteredDate.length !== 0){
        loaddata(filteredDate)
    }

    else {
        tbody.append("tr").append("td").text("No results found!"); 
    }
//end function
}
//end event
)

resetbutton.on("click", () => {
    tbody.html("");
    loaddata(tableData);
    console.log("Table reset");
  })
