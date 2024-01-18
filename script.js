let porcentagemElement = document.querySelector("#porcentagem");
let valorElement = document.querySelector("#valor");

valorElement.innerHTML = porcentagemElement.value;

porcentagem.oninput = function(){
    valorElement.innerHTML = this.value;
}

function alerta(){
    alert("Este cartão contém algumas informações sobre nossa colaboradora.");
        
}
function reuniao(){
    alert("Você pode convidar a colaboradora para uma reunião pelo email: colaboradorana@email.com");
}
function chat(){
    alert("Olá, tudo bem?");
}
