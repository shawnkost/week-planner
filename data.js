var data = {
  view: "monday",
  entries: []
};



function saveDataLocalStorage() {

  localStorage.setItem(data.view, JSON.stringify(data));

}
