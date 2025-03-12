const switchesCadastroLogin = document.querySelectorAll('.switches-cadastro-login');
switchesCadastroLogin.forEach((switchElement) => {

    if(switchElement.hasAttribute('checked')){
        const container =  `container-${switchElement.value}`;
        const elementContainer = document.querySelector(`#${container}`);

        if(elementContainer.hasAttribute('hidden')){
            elementContainer.removeAttribute('hidden')
        }
    }
});


function switchContainer(inputElement){
    const containers = document.querySelectorAll('.containers');
    containers.forEach(container => {
        if(!container.hasAttribute('hidden')){
            container.setAttribute('hidden', '');
        }
    });

    const container =  `container-${inputElement.value}`;
    const elementContainer = document.querySelector(`#${container}`);

    if(elementContainer.hasAttribute('hidden')){
        elementContainer.removeAttribute('hidden')
    }
}