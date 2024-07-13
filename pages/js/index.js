let clickStar = false;

function selectStar(input, bool){
    const stars = document.getElementsByClassName("material-icons");
    const selectedValue = parseInt(input.value);

    if(clickStar != bool){
        clickStar = true;
    }

    for (let i = 0; i < stars.length; i++) {
        stars[i].classList.remove("icon-star-acitive");
    }

    for (let i = 0; i < stars.length; i++) {
        if(i < selectedValue){
            stars[i].classList.add("icon-star-acitive");
        }
    }

}

function validarForm(event) {
    let descricao = document.getElementsByName("descricao")[0];
    let inputStars = document.getElementsByName("input-star");
    let avaliacao;
    
    inputStars.forEach(element => {
        if(element.checked){
            avaliacao = parseInt(element.value);
        }
    });

    //console.log(descricao);
    //console.log(avaliacao);
    event.preventDefault();
}

function resetStar() {
    let inputStars = document.getElementsByName("input-star");

    inputStars.forEach(element => {
        if(element.checked){
            element.checked == false;
        }
    });
    console.log(inputStars);
}