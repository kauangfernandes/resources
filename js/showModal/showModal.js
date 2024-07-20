function showModal(param) {
    let modal = window.document.getElementById("modal");
    modal.classList.add(param);
    modal.classList.add('d-block');
}

const closeButton = modal.querySelector('.btn-close');
closeButton.addEventListener('click', function () {
    modal.classList.remove('show');
    modal.setAttribute('aria-modal', 'false');
    modal.setAttribute('data-bs-backdrop', '');
    modal.setAttribute('data-bs-keyboard', '');
    modal.classList.remove('d-block');
    modal.classList.add('none');
});

const closeConinue = modal.querySelector('.btn-continue');
closeConinue.addEventListener('click', function () {
    modal.classList.remove('show');
    modal.setAttribute('aria-modal', 'false');
    modal.setAttribute('data-bs-backdrop', '');
    modal.setAttribute('data-bs-keyboard', '');
    modal.classList.remove('d-block');
    modal.classList.add('none');
});