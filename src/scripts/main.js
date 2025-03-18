let start = document.getElementById('start')
let reset = document.getElementById('reset')
let sTop = document.getElementById('stop')

let wMinutos = document.getElementById('w_minutos')
let wSegundos = document.getElementById('w_segundos')


let bMinutos = document.getElementById('b_minutos')
let bSegundos = document.getElementById('b_segundos')

let tempoTrabalho = 25
tempoIntervalo = 5

let startTimer

start.addEventListener('click', function() {

    console.log('ligado')
    if(startTimer === undefined) {
        startTimer = setInterval(timer, 1000)
    } else {
        alert('O timer ja esta rodando')
    }
})

reset.addEventListener('click', function() {
    apareceIntervalo()
    apareceTempo()
    wMinutos.innerText = tempoTrabalho
    wSegundos.innerText = '00'

    bMinutos.innerText = tempoIntervalo
    bSegundos.innerText = '00'
    stopinterval()
})

sTop.addEventListener('click', function() {
    stopinterval()
    startTimer = undefined
})



//worktime
function timer(){
    console.log(bSegundos.innerText.length)

    if(wSegundos.innerText !=0) {
        wSegundos.innerText--
    } else if(wMinutos.innerText !=0 && wSegundos.innerText ==0){
        wSegundos.innerText = 59
        wMinutos.innerText--
    }
//breaktime
    if(wMinutos.innerText == 0 && wSegundos.innerText == 0) {

        if(bSegundos.innerText !=0) {
            bSegundos.innerText--
        }  else if(bMinutos.innerText !=0 && bSegundos.innerText ==0){
            bSegundos.innerText = 59
            bMinutos.innerText--
        }
    }
//
    if(wMinutos.innerText == 0 && 
        wSegundos.innerText == 0 && 
        bMinutos.innerText == 0 && 
        bSegundos.innerText == 0)
        {
        wMinutos.innerText = tempoTrabalho
        wSegundos.innerText = '00'

        bMinutos.innerText = tempoIntervalo
        bSegundos.innerText = '00'
    }
//conversao dos numeros de 0:0 para 00:00

    if(wMinutos.innerText < 10 && wMinutos.innerText.length < 2) {
        wMinutos.innerText = '0' + wMinutos.innerText
    }
    if(wSegundos.innerText  < 10 && wSegundos.innerText.length < 2) {
        wSegundos.innerText = '0' + wSegundos.innerText
    }
    if(bMinutos.innerText < 10 && bMinutos.innerText.length < 2) {
        bMinutos.innerText = '0' + bMinutos.innerText
    }
    if(bSegundos.innerText  < 10 && bSegundos.innerText.length < 2) {
        bSegundos.innerText = '0' + bSegundos.innerText
    }

    if(wMinutos.innerText && wSegundos.innerText !=0) {
        ocultaIntervalo()
    } else {
        apareceIntervalo()
    }
    if(bMinutos.innerText && bSegundos.innerText !=0) {
        ocultaTempo()
    } else{
        apareceTempo()
    }
}

function stopinterval() {
    clearInterval(startTimer)
}

function ocultaTempo() {
    let tempo = document.getElementById('focus')
    tempo.style.display = 'none'
}
function apareceTempo() {
    let tempo = document.getElementById('focus')
    tempo.style.display = 'flex'
}

function ocultaIntervalo() {
    let intervalo = document.getElementById('break')
    intervalo.style.display = 'none'
}
function apareceIntervalo() {
    let intervalo = document.getElementById('break')
    intervalo.style.display = 'flex'
}



