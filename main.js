
startUpData()



var $modal = document.querySelector('.modal-container');

var $addEntryBtn = document.querySelector('#add-entry-btn');

$addEntryBtn.addEventListener('click', openModal);

function openModal(event) {

  $modal.classList.remove('hide');

}

var $dataView = document.getElementById("data-view");

function renderTable() {



  var headerContainer = document.createElement("div");
  headerContainer.setAttribute("class", "row");

  var headerText = document.createElement("h2");
  headerText.textContent = "Scheduled Events for " + data.view.charAt(0).toUpperCase() + data.view.slice(1);
  headerContainer.appendChild(headerText);

  var tableContainer = document.createElement("div");
  tableContainer.setAttribute("class", "row");

  var table = document.createElement("table");
  tableContainer.appendChild(table);

  var tableHeader = document.createElement("thead");
  table.appendChild(tableHeader);

  var tableRow = document.createElement("tr");
  tableRow.setAttribute("class", "header-row")
  tableHeader.appendChild(tableRow);

  var tableHeaderContent1 = document.createElement("th");
  tableHeaderContent1.textContent = "Time";
  tableRow.appendChild(tableHeaderContent1);

  var tableHeaderContent2 = document.createElement("th");
  tableHeaderContent2.textContent = "Description"
  tableRow.appendChild(tableHeaderContent2);

  var tableBody = document.createElement("tbody");
  table.appendChild(tableBody);

  for (var k = 0; k < data.entries.length; k++) {



    var tableRow2 = document.createElement("tr");


    var tableTime = document.createElement("td");
    tableTime.textContent = data.entries[k].time;

    var tableDescription = document.createElement("td");
    tableDescription.textContent = data.entries[k].description;


    tableRow2.appendChild(tableTime);

    tableRow2.appendChild(tableDescription);

    tableBody.appendChild(tableRow2);
  }

  if (data.entries.length < 10) {
    for (var d = data.entries.length; d < 10; d++) {
      var tableRow2 = document.createElement("tr");


      var tableTime = document.createElement("td");

      var tableDescription = document.createElement("td");


      tableRow2.appendChild(tableTime);

      tableRow2.appendChild(tableDescription);

      tableBody.appendChild(tableRow2);
  }
  }
  $dataView.appendChild(headerContainer);
  $dataView.appendChild(tableContainer);
  return $dataView;
}

renderTable();


var $week = document.querySelector('.day-select');
var $time = document.querySelector('.time');
var $description = document.querySelector('textarea');
var $form = document.querySelector('.modal-content');

$form.addEventListener('submit', function(event){
  event.preventDefault();

  var newEntry = {};
  data.view = $week.value.toLowerCase();
  newEntry.time = $time.value;
  newEntry.description = $description.value;
  data.entries.push(newEntry);

  saveDataLocalStorage();

  $form.reset();
  $modal.classList.add('hide');
});

var weekBtnList = document.querySelectorAll('.day-of-week-btn');

for (var i = 0; i < weekBtnList.length; i++){
  weekBtnList[i].addEventListener('click', function(event){

    $dataView.innerHTML = "";

    var previousLocalStorageItem = localStorage.getItem(event.target.id);

    if (previousLocalStorageItem !== null) {
      data = JSON.parse(previousLocalStorageItem);
    } else {
      data.view = event.target.id;
      data.entries = [];
    }
    console.log(data);
    // data = JSON.parse(localStorageItems);
    renderTable();




  });
}


function startUpData () {
  var prevData = localStorage.getItem("monday")
  if (prevData !== null) {
    data = JSON.parse(prevData);
  }

}
