let parametro = "";
let value = "";
let erro = false;

const collectionsParameters = Array(
    ['login', true],
    ['login', false],
    ['modal', 'show']
);


function carregarTabela() {
    const tbody = document.querySelector("#tbody");
    let tr = document.createElement("tr");
    let tdparam = document.createElement("td");
    let tdvalue = document.createElement("td");

    for (let i = 0; i < collectionsParameters.length; i++) {
        let tr = document.createElement("tr");
        let tdparam = document.createElement("td");
        let tdvalue = document.createElement("td");

        const element = collectionsParameters[i];
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

const valueInput = document.querySelector("#value");
valueInput.addEventListener("keydown", function (event) {
    if(event.key === "Enter"){
        value = valueInput.value;
        printConsole(value);
    }else{
        console.clear();
    }
});

function reset() {
    if (parametroInput.value.length > 0) {
        parametroInput.value = null;
        parametro = null;
    }

    if (valueInput.value.length > 0) {
        valueInput.value = null;
        value = null;
    }
}

function printConsole(params) {
    console.log(params);
}

function executar() {
    const campoErros = document.querySelectorAll(".erro");
    parametro = parametroInput.value;
    value = valueInput.value;


    if(parametro.length <= 0){
        let texto = campoErros[0].lastChild

        if(texto != null){
            campoErros[0].removeChild(texto);
        }

        texto = document.createTextNode("Preencha o campo para continuar");
        campoErros[0].appendChild(texto);
        erro = true;
    }

    if(value.length <= 0){
        let texto = campoErros[1].lastChild

        if(texto != null){
            campoErros[1].removeChild(texto);
        }
        
        texto = document.createTextNode("Preencha o campo para continuar");
        campoErros[1].appendChild(texto);
        erro = true;
    }
    

    if(!erro){

        for (let i = 0; i < collectionsParameters.length; i++) {
            const element = collectionsParameters[i];
            const parametros = element[0].toString();
            const values = element[1].toString();
            
            if(parametro == parametros && value == values){
                reloader(parametros, values);
            } else {
                printConsole("Não encontrou");
            }
        }
    }
}

function reloader(parametro, value) {
    document.location = `getParametros.html?${parametro}=${value}`;
}

function getParametros() {
    const query = window.location.search.replace(/\?/, "");
    const parametros = query.split("&");

    parametros.forEach( parametro =>{
        let parametroUrl = "";
        let valueUrl = "";
        let erro = false;

        if((parametro.split("=")[0] != null) && (parametro.split("=")[1] != null)){
            parametroUrl = parametro.split("=")[0].toString();
            valueUrl = parametro.split("=")[1].toString();
        } else {
            erro = true;
        }

        if(!erro){
            let bool = false;
            collectionsParameters.forEach( collection => {
                if((parametroUrl == collection[0].toString()) && (valueUrl == collection[1].toString())){
                    bool = true;
                }
            });

            carregarTabelaParametrosCapturados(parametroUrl, valueUrl, bool);
        }
    });
}

function carregarTabelaParametrosCapturados(parametro, value, bool){
    const tbody = document.querySelector("#tbody-params-cap");
    let tr = document.createElement("tr");

    if(bool){
        tr.classList.add("table-success");
    }

    let tdparam = document.createElement("td");
    let tdvalue = document.createElement("td");
    
    let textoParametro = document.createTextNode(parametro);
    let textoValue = document.createTextNode(value);

    tdparam.appendChild(textoParametro);
    tdvalue.appendChild(textoValue);

    tr.appendChild(tdparam);
    tr.appendChild(tdvalue);
    tbody.appendChild(tr);
}