let parametro = "";
let valor = "";
let erro = false;

const collection = Array(
    ['login', true],
    ['login', false],
);


function carregarTablea() {
    const tbody = document.querySelector("#tbody");
    let tr = document.createElement("tr");
    let tdparam = document.createElement("td");
    let tdvalue = document.createElement("td");

    for (let i = 0; i < collection.length; i++) {
        let tr = document.createElement("tr");
        let tdparam = document.createElement("td");
        let tdvalue = document.createElement("td");

        const element = collection[i];
        const parametro = document.createTextNode(element[0]);
        const value = document.createTextNode(element[1]);

        tdparam.appendChild(parametro);
        tdvalue.appendChild(value);
        tr.appendChild(tdparam);
        tr.appendChild(tdvalue);
        tbody.appendChild(tr);
    }
}

const parametroInput = document.querySelector("#parametro");
parametroInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        parametro = parametroInput.value;
        printConsole(parametro);
    } else {
        console.clear();
    }
});

const valorInput = document.querySelector("#valor");
valorInput.addEventListener("keydown", function (event) {
    if(event.key === "Enter"){
        valor = valorInput.value;
        printConsole(valor);
    }else{
        console.clear();
    }
});

function reset() {
    if (parametroInput.value.length > 0) {
        parametroInput.value = null;
        parametro = null;
    }

    if (valorInput.value.length > 0) {
        valorInput.value = null;
        valor = null;
    }
}

function printConsole(params) {
    console.log(params);
}

function executar() {
    const campoErros = document.querySelectorAll(".erro");
    parametro = parametroInput.value;
    valor = valorInput.value;


    if(parametro.length <= 0){
        let texto = campoErros[0].lastChild

        if(texto != null){
            campoErros[0].removeChild(texto);
        }

        texto = document.createTextNode("Preencha o campo para continuar");
        campoErros[0].appendChild(texto);
        erro = true;
    }

    if(valor.length <= 0){
        let texto = campoErros[1].lastChild

        if(texto != null){
            campoErros[1].removeChild(texto);
        }
        
        texto = document.createTextNode("Preencha o campo para continuar");
        campoErros[1].appendChild(texto);
        erro = true;
    }
    

    if(!erro){

        for (let i = 0; i < collection.length; i++) {
            const element = collection[i];
            const parametros = element[0].toString();
            const values = element[1].toString();
            
            
            if(parametro == parametros && valor == values){
                reloader(parametros, values);
            } else {
                printConsole("Não encontrou");
            }
        }
    }
}

function reloader(parametro, valor) {
    document.location = `getParametros.html?${parametro}=${valor}`;
}

function getParametros() {
    const location = window.location;
    const href = window.location.href;
    const query = window.location.search;

    //document.location = "getParametros.html?nome=kauan";

    //console.log(location);
    // console.log(href);
    // console.log(query);
}