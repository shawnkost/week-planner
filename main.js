
var $modal = document.querySelector('.modal-container');

var $button1 = document.querySelector('#button1');

$button1.addEventListener('click', openModal);

function openModal(event) {

  $modal.classList.remove('hide');

}
