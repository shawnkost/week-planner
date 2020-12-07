
var $modal = document.querySelector('.modal-container');

var $addEntryBtn = document.querySelector('#add-entry-btn');

$addEntryBtn.addEventListener('click', openModal);

function openModal(event) {

  $modal.classList.remove('hide');

}

function renderTable() {

  var $dataView = document.getElementById("data-view");

  var headerContainer = document.createElement("div");
  headerContainer.setAttribute("class", "row");

  var headerText = document.createElement("h2");
  headerText.textContent = "Scheduled Events for Monday";
  headerContainer.appendChild(headerText);

  var tableContainer = document.createElement("div");
  tableContainer.setAttribute("class", "row");

  var table = document.createElement("table");
  tableContainer.appendChild(table);

  var tableHeader = document.createElement("thead");
  table.appendChild(tableHeader);

  var tableRow = document.createElement("tr");
  tableHeader.appendChild(tableRow);

  var tableHeaderContent1 = document.createElement("th");
  tableHeaderContent1.textContent = "Time";
  tableRow.appendChild(tableHeaderContent1);

  var tableHeaderContent2 = document.createElement("th");
  tableHeaderContent2.textContent = "Description"
  tableRow.appendChild(tableHeaderContent2);

  var tableBody = document.createElement("tbody");
  table.appendChild(tableBody);

  var tableRow2 = document.createElement("tr");
  tableBody.appendChild(tableRow2);

  var tableData1 = document.createElement("td");
  tableData1.textContent = "10:00";
  tableRow2.appendChild(tableData1);

  var tableData2 = document.createElement("td");
  tableData2.textContent = "Code";
  tableRow2.appendChild(tableData2);

  var tableRow3 = document.createElement("tr");
  tableBody.appendChild(tableRow3);

  var tableData3 = document.createElement("td");
  tableData3.textContent = "12:00";
  tableRow3.appendChild(tableData3);

  var tableData4 = document.createElement("td");
  tableData4.textContent = "Read";
  tableRow3.appendChild(tableData4);



  $dataView.appendChild(headerContainer);
  $dataView.appendChild(tableContainer);
  return $dataView;
}

renderTable();

function viewSwap (weeb) {

}

var $week = document.querySelector('.day-select');
var $time = document.querySelector('.time');
var $description = document.querySelector('textarea');
var $form = document.querySelector('.modal-content');

$form.addEventListener('submit', function(event){
  event.preventDefault();

  var newEntry = {};
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

    data = JSON.parse(localStorageItems);
    renderTable();
  });
}
