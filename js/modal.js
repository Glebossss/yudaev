let modal = function() {
    let modalButton = document.querySelectorAll('.modal__button');
    var window = document.getElementById("modal");
    let close = document.querySelectorAll('.modal-close');
    modalButton.forEach(item => {
    item.addEventListener('click', modalActive)
    });
    function modalActive() {
    window.classList.add('is-active');
    }
    close.forEach(item => {
    item.addEventListener('click', modalClose)
    });
    function modalClose() {
    window.classList.remove('is-active');
    }
    };
    modal();