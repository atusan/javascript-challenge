// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody")

//fill the table with data
tableData.forEach((cityInfo) => {
    var row = tbody.append("tr");
    Object.entries(cityInfo).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

  var button = d3.select("#filter-btn");
  

  button.on("click",function(){
      var inputElement = d3.select("#datetime");
      var inputValue = inputElement.property("value");;
    //   console.log(inputValue)
      var filteredData = tableData.filter(cityInfo => cityInfo.datetime===inputValue);
      console.log(filteredData);
      tbody.html("");
      filteredData.forEach((cityInfo) => {
          var row = tbody.append("tr");
          Object.entries(cityInfo).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
          });
       });

  });


  