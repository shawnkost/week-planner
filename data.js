var data = {
  view: "Monday",
  entries: []
};

var localStorageItems = localStorage.getItem("week-planner")



function saveDataLocalStorage() {

  localStorage.setItem(data.view, JSON.stringify(data));

}
