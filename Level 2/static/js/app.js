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
      var inputElementDate = d3.select("#datetime");
      var inputValueDate = inputElementDate.property("value");

      var inputElementCity = d3.select("#city");
      var inputValueCity = inputElementCity.property("value");

      var inputElementState = d3.select("#state");
      var inputValueState = inputElementState.property("value");

      var inputElementCountry	 = d3.select("#country");
      var inputValueCountry	= inputElementCountry.property("value");

      var inputElementShape = d3.select("#shape");
      var inputValueShape = inputElementShape.property("value");

      console.log(inputValueDate)
      console.log(inputValueCity)
      console.log(inputValueState)
      console.log(inputValueCountry)
      console.log(inputValueShape)

      // var filteredData = tableData.filter(cityInfo => cityInfo.datetime===inputValueDate && cityInfo.city===inputValueCity
      //   && cityInfo.state===inputValueState && cityInfo.country===inputValueCountry  && cityInfo.shape===inputValueShape);
      
      var filteredData = tableData.filter(sighting =>{
        return (sighting.datetime===inputValueDate || !inputValueDate) && 
                  (sighting.city===inputValueCity || !inputValueCity) &&
                  (sighting.state===inputValueState || !inputValueState) &&
                  (sighting.country===inputValueCountry || !inputValueCountry) &&
                  (sighting.shape===inputValueShape || !inputValueShape)
       })
       
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


  