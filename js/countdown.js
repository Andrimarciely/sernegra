/*
Rotina da contagem regressiva
*/

const MINUTES = 60
const HOURS = MINUTES * 60
const DAYS = HOURS * 24

const daysId = document.getElementById('countdownDays')
const hoursId = document.getElementById('countdownHours')
const minutesId = document.getElementById('countdownMinutes')
const secondsId = document.getElementById('countdownSeconds')

const countUntil = new Date("Nov 23 2021 00:00:00 GMT-0400")


const pluralize = (value, word) => {
    /*
    Escreve `word` no plural (com um 's' no final) se a quantidade não for 1.
    */
    return value + " " + word + (value != 1 ? "s"  : "")
}

updateCountDown = () => {
    /*
    Calcula quantos dias, horas, minutos e segundos faltam para o evento.
    */
    let days, hours, minutes, seconds = 0
    
    let justNow = new Date()
    
    seconds = (countUntil - justNow) / 1000
    
    if (seconds>0) {
        days = Math.floor(seconds / DAYS)
        seconds %= (days * DAYS)    
        hours = Math.floor(seconds / HOURS)
        seconds %= (hours * HOURS)
        minutes = Math.floor(seconds / MINUTES)
        seconds = Math.floor(seconds % (minutes * MINUTES))
        
        daysId.textContent = pluralize(days, "dia")
        hoursId.textContent = pluralize(hours, "hora")
        minutesId.textContent = pluralize(minutes, "minuto")
        secondsId.textContent = pluralize(seconds, "segundo")
    }
    
    // define que a função será chamada a cada 1 segundo
    setTimeout(updateCountDown, 1000);
}

// inicia o contador apenas se encontrar os 4 elementos no DOM.
if (daysId && hoursId && minutesId && secondsId) updateCountDown()