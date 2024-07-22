const body = document.querySelector("#body");

const collectionsModal = Array(
    ['login', 'success', 'Login realizado com sucesso.', 'Seu login foi realizado com sucesso clique em continuar.'],
    ['login', 'faled', 'Acesso negado.', 'Seu login falhou.']
);

const collectionsModalSpinner = Array(
    ['login', 'faled', 'Login falhou.', 'Seu login falhou.']
);



function validationParameters() {
    const parametersUrl = getAllParameters();

    if(parametersUrl){

        parametersUrl.forEach(parameterUrl => {
            /*---------Modal---------*/
            if(parameterUrl.split("=")[0].toString() == "modal"){
                let collection = null;
                let type = "default";

                if(parametersUrl.length > 1){
                    const modal = document.querySelector("#modal");
                    if(parameterUrl.split("=")[1].toString() == "spinner"){
                        collection = getParameters(parametersUrl, collectionsModalSpinner);
                        type = "spinner";
                    } else {
                        collection = getParameters(parametersUrl, collectionsModal);
                    }

                    createModal(modal, collection, type);
                }
            }

            /*---------Others---------*/
        });

    } else {
        console.info("Nehum parâmetros encontrado.");
    }
}

function getParameters(parametersUrl, collection) {
    let row = false;

    parametersUrl.forEach(parameterUrl => {
        collection.forEach(paramCollection => {
            if((parameterUrl.split("=")[0] == paramCollection[0]) && (parameterUrl.split("=")[1] == paramCollection[1])){
                row = paramCollection;
            }
        });
    });

    return row;
}

function createModal(modal, paramCollection, type) {

    if(type == "spinner"){
        const closeButton = modal.querySelector('.btn-close');
        const headerModal = modal.querySelector('#modal-header');
        headerModal.removeChild(closeButton);

        const closeConinue = modal.querySelector('.btn-continue');
        const footerModal = modal.querySelector('#modal-footer');
        footerModal.removeChild(closeConinue);

        const divSpinner = document.createElement("div");
        divSpinner.classList.add("d-flex", "align-items-center", "w-100");
        footerModal.appendChild(divSpinner);

        const strong = document.createElement("strong");
        let text = document.createTextNode("Loading...");
        strong.setAttribute("role", "status");
        strong.appendChild(text);

        const div = document.createElement("div");
        div.classList.add("spinner-border", "ms-auto");
        div.setAttribute("aria-hidden", "true");

        footerModal.appendChild(divSpinner);
        divSpinner.appendChild(strong);
        divSpinner.appendChild(div);

        const titleModal = modal.querySelector("#myTitle");
        text = titleModal.firstChild
        titleModal.removeChild(text);
        text = document.createTextNode(paramCollection[2]);;
        titleModal.appendChild(text);

        const bodyModal = modal.querySelector("#modal-body");
        let content = bodyModal.childNodes;

        content.forEach(element => {
            bodyModal.removeChild(element);
        });

        text = document.createTextNode(paramCollection[3]);
        span = document.createElement("span");
        span.setAttribute("id", "time-spinner");

        bodyModal.appendChild(text);

    } else {
        let titleModal = modal.querySelector("#myTitle");
        text = titleModal.firstChild
        titleModal.removeChild(text);
        text = document.createTextNode(paramCollection[2]);;
        titleModal.appendChild(text);

        const bodyModal = modal.querySelector("#modal-body");
        let content = bodyModal.childNodes;

        content.forEach(element => {
            bodyModal.removeChild(element);
        });

        text = document.createTextNode(paramCollection[3]);
        bodyModal.appendChild(text);
    }

    showModal(modal)
}

function showModal(modal) {
    modal.classList.add("show");
    modal.classList.add('d-block');
}

function getAllParameters() {
    const query = window.location.search.replace(/\?/, "");
    const parameters = query.split("&");

    if (parameters.length >= 0 && parameters['0'].length) {
        return parameters;
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