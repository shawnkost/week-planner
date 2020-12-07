var data = {
  view: "Monday",
  title: "",
  entries: [{
    time: "",
    description: ""
  }]
};

var localStorageItems = localStorage.getItem("week-planner")



function saveDataLocalStorage () {

  localStorage.setItem(data.view, JSON.stringify(data));

}
