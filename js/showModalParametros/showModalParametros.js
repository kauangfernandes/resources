const body = document.querySelector("#body");

const collectionsMessagesModal = Array(
    ['modal', 'show'],
    ['modal', 'loader'],
    ['login', 'success', 'Login realizado com sucesso.', 'Seu login foi realizado com sucesso clique em continuar.'],
    ['login', 'faled', 'Acesso negado.', 'Seu login falhou.']
);


function showModalParameters() {
    const parametrosUrl = getParametros();
    let countParams = 0;

    let action = "";
    let parametro = "";
    let value = "";

    if(parametrosUrl != false){
        parametrosUrl.forEach(paramstUrl => {
            collectionsMessagesModal.forEach(collection => {
                if((collection[0].toString() == paramstUrl.split("=")[0]) && (collection[1].toString() == paramstUrl.split("=")[1])){
                    countParams = countParams + 1;

                    let modal = document.querySelector("#modal");

                    if(collection[0].toString() == "modal" && collection[1].toString() == "show"){
                        modal.classList.add(collection[1].toString());
                        modal.classList.add('d-block');
                    } else {
                        let title = document.querySelector("#myTitle");
                        text = title.firstChild
                        title.removeChild(text);
                        text = document.createTextNode(collection[2]);
                        title.appendChild(text);

                        let body = document.querySelector("#modal-body");
                        text = body.lastChild;
                        body.removeChild(text);
                        text = document.createTextNode(collection[3]);
                        body.appendChild(text);
                    };
                }
            });
        });

        if(countParams > 1){
            showModal();
        }
    }
}

function showModal(modal, action, title, body) {
    
}

function getParametros() {
    const query = window.location.search.replace(/\?/, "");
    const parametros = query.split("&");

    if(parametros.length >= 0 && parametros['0'].length){
        return parametros;
    } else {
        return false;
    }
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

/*
<div class="d-flex align-items-center">
  <strong role="status">Loading...</strong>
  <div class="spinner-border ms-auto" aria-hidden="true"></div>
</div>
*/