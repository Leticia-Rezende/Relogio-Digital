const horasElement = document.getElementById('Horas')
const minutosElement = document.getElementById('Minutos')
const segundosElement = document.getElementById('Segundos')


function newTime (){
const date = new Date();

const Horas = date.getHours()
const Minutos = date.getMinutes()
const Segundos = date.getSeconds()

horasElement.textContent = fixTime(Horas)
minutosElement.textContent = fixTime(Minutos)
segundosElement.textContent = fixTime(Segundos)
}

function fixTime (time){
    return time < 10 ? '0' + time : time
}

newTime()
setInterval(newTime, 1000)