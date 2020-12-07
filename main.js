
var $modal = document.querySelector('.modal-container');

var $addEntryBtn = document.querySelector('#add-entry-btn');

$addEntryBtn.addEventListener('click', openModal);

function openModal(event) {

  $modal.classList.remove('hide');

}
