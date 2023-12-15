const form = document.querySelector("#form")
const number = document.querySelector('#inumber');
const outResp = document.querySelector('.outResp')
const tentativas = document.querySelector('.tentativas');
let contagem = 0;

function sortearNumero(){
    return Math.floor(Math.random() * 100)
}
let numeroSorteado = sortearNumero();

document.querySelector('#form').addEventListener("submit", (e) => {
    e.preventDefault();
    const number = Number(document.querySelector('#inumber').value);
    form.number.focus();

    if (number === 0){
        alert('Tente um número entre 1 e 100');
        form.number.focus();
        return 
    }
    

    if(number === numeroSorteado){
        outResp.innerHTML = "<p>Você acertou!</p>"
        form.number.value = ""
        form.number.focus();
        return
    } else if(number > numeroSorteado){
        outResp.innerHTML = "<p>Número sorteador é menor</p>"
        form.number.value = ""
        form.number.focus();
        tentativas.innerHTML = `Tentativas ${contagem = contagem + 1}`
    } else {
        outResp.innerHTML = "<p>Número sorteador é maior</p>"
        form.number.value = ""
        form.number.focus();
        tentativas.innerHTML = `Tentativas ${contagem = contagem + 1}`
    }
     
})