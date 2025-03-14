getInputElements();

function getInputElements() {
    const switchesCadastroLogin = document.querySelectorAll('[name="switches-cadastro-login"]');
    switchesCadastroLogin.forEach((element) => {
        if (element.hasAttribute('checked')) {
            switchContainer(element);
        }
    });
}

function switchContainer(inputElement) {
    const containers = document.querySelectorAll('.containers');
    containers.forEach(container => {
        if (!container.hasAttribute('hidden')) {
            container.setAttribute('hidden', '');
        }
    });

    const container = `container-${inputElement.value}`;
    const elementContainer = document.querySelector(`#${container}`);

    if (elementContainer.hasAttribute('hidden')) {
        elementContainer.removeAttribute('hidden');
    }
}