
function SaveToTable()
{
    let subject = document.getElementById('subject').value;
    let year = document.getElementById('year').value;
    let ects = document.getElementById('ects').value;

    
   // Find a <table> element with id="myTable":
var table = document.getElementById("table");

// Create an empty <tr> element and add it to the 1st position of the table:
var row = table.insertRow(1);

// Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);
var cell3 = row.insertCell(2)

// Add some text to the new cells:
cell1.innerHTML = subject;
cell2.innerHTML = year;
cell3.innerHTML = ects;




}