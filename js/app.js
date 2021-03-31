
function SaveToTable()
{
    let subject = document.getElementById('subject').value;
    let year = document.getElementById('year').value;
    let ects = document.getElementById('ects').value;

    var table = document.getElementById("table");

var row = table.insertRow(1);

var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);
var cell3 = row.insertCell(2);
var cell4 = row.insertCell(3);

cell1.innerHTML = subject;
cell2.innerHTML = year;
cell3.innerHTML = ects;
cell4.innerHTML = '<button class="DeleteIcon" onclick="DeleteRow(this)"></button>'

}

function DeleteRow(o) 
{
    var p=o.parentNode.parentNode;
        p.parentNode.removeChild(p);
}
