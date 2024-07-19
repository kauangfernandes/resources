function selectStar(input, bool){
    const stars = document.getElementsByClassName("material-icons");
    const selectedValue = parseInt(input.value);

    for (let i = 0; i < stars.length; i++) {
        stars[i].classList.remove("icon-star-acitive");
    }

    for (let i = 0; i < stars.length; i++) {
        if(i < selectedValue){
            stars[i].classList.add("icon-star-acitive");
        }
    }
}

function resetStar() {
    let inputStars = document.getElementsByName("input-star");
    const stars = document.getElementsByClassName("material-icons");

    inputStars.forEach(element => {
        if(element > element.checked){
            element.checked == false;
        }
    });

    for (let i = 0; i < stars.length; i++) {
        stars[i].classList.remove("icon-star-acitive");
    }
}

function validarForm(event) {
    let descricao = document.getElementsByName("descricao")[0];
    let inputStars = document.getElementsByName("input-star");
    let avaliacao;
    let erro_campos = false;
    
    inputStars.forEach(element => {
        if(element.checked){
            avaliacao = parseInt(element.value);
        }
    });

    if(isNaN(avaliacao) || avaliacao < 1 || avaliacao > 5){
        erro_campos = true;
    }

    event.preventDefault();
}