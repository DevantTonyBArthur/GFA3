
function generateTable() {

  var start = document.getElementById("start").value;
  var end = document.getElementById("end").value;


  if (start < 2 || start > 10 || end < 2 || end > 10) {

    alert("Please enter numbers between 2 and 10.");
    return; 
  }


  document.getElementById("table-container").innerHTML = "";


  var table = document.createElement("table");


  for (var i = start; i <= end; i++) {
    var row = document.createElement("tr");

    for (var j = start; j <= end; j++) {
      var cell = document.createElement("td");
      cell.textContent = i * j; 
      row.appendChild(cell);
    }


    table.appendChild(row);
  }

  
  document.getElementById("table-container").appendChild(table);
}
