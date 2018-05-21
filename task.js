/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


const data =
[
{"taskName": "Test Task #1", "date": "12/01/2012", "assignedTo": "John Doe" },
{"taskName": "Test Task #2", "date": "12/02/2012", "assignedTo": "John Doe" },
{"taskName": "Test Task #3", "date": "12/03/2012", "assignedTo": "John Doe" },
{"taskName": "Test Task #4", "date": "12/04/2012", "assignedTo": "John Doe" },
{"taskName": "Test Task #5", "date": "12/05/2012", "assignedTo": "John Doe" },
{"taskName": "Test Task #6", "date": "12/06/2012", "assignedTo": "John Doe" },
{"taskName": "Test Task #7", "date": "12/07/2012", "assignedTo": "John Doe" }
]

window.onload = function() {
  if(!localStorage.getItem("taskList")){
    (localStorage.setItem("taskList", JSON.stringify(data)));
    displayTable();
  }
  displayTable();
};

function Validate() {
  // initialize taskrray from localstorage
  let taskArray = []
  if (localStorage.getItem("taskList")) {
     taskArray = JSON.parse(localStorage.getItem("taskList"));
  } 
  
  let task = {};
    task["taskName"] = document.getElementById("taskName").value;
  task["date"] = document.getElementById("date").value.toLocaleDateString();
    task["assignedTo"] = document.getElementById("assignedTo").value;
    taskArray.unshift(task);
    localStorage.setItem("taskList", JSON.stringify(taskArray));
    displayTable();
    document.getElementById("myForm").reset();
  }

function displayTable() {
  let retrievedObject = localStorage.getItem("taskList");
  let parsedObject = JSON.parse(retrievedObject);
  let html = "<table id='dataTable' border='0'>";
  for (let i in parsedObject) {
    html += "<tr id='parsedObject1[i]'>";
    html += "<td>" + parsedObject[i].taskName + "</td>";
    html += "<td>" + parsedObject[i].date+ "</td>";
    html += "<td>" + parsedObject[i].assignedTo + "</td>";
    html += "</tr>";
  }
  html += "</table>";
  if (localStorage.userList !== null) {
    document.getElementById("display").innerHTML = html;
  } else {
    document.getElementById("display").innerHTML += html;
  }
}
