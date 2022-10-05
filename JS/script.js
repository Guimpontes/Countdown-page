// Pegandos os span
const dias = document.querySelector('#dias');
const horas = document.querySelector('#horas');
const minutos = document.querySelector('#minutos');
const segundos = document.querySelector('#segundos');

const modal = document.querySelector('.container-modal');
const btnAbrirModal = document.querySelector('#btn-abrir-modal');
const btnFecharModal = document.querySelector('#btn-fechar-modal');

function contagemRegressiva() {
    const diaAtual = new Date();

    const diaDoLancamento = new Date('October 5 2022 15:00:00');

    const tempoRestante = diaDoLancamento - diaAtual;

    const days = Math.floor(tempoRestante / 1000 / 60 / 60 / 24);
    const hours = Math.floor(tempoRestante / 1000 / 60 / 60) % 24;
    const minutes = Math.floor(tempoRestante / 1000 / 60) % 60;
    const seconds = Math.floor(tempoRestante / 1000) % 60;

    if (tempoRestante < 10000) {
        dias.style.color = '#f00';
        horas.style.color = '#f00'
        minutos.style.color = '#f00'
        segundos.style.color = '#f00'
    }

    if (tempoRestante < 0) {
        return false
    }

    dias.textContent = days < 10 ? "0" + days : days;
    horas.textContent = hours < 10 ? "0" + hours : hours;
    minutos.textContent = minutes < 10 ? "0" + minutes : minutes;
    segundos.textContent = seconds < 10 ? "0" + seconds : seconds;
}
setInterval(contagemRegressiva, 1000)

btnAbrirModal.addEventListener('click', (e) => {
    modal.style.visibility = 'visible';
    modal.style.opacity = '1'
})

btnFecharModal.addEventListener('click', (e) => {
    modal.style.visibility = 'hidden';
    modal.style.opacity = '0'
})



