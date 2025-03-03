

function updateHours(){
    let date = new Date()
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()

    document.querySelector('#hours').innerHTML = `${updateNumbers(hours)}:${updateNumbers(minutes)}:${updateNumbers(seconds)}`
    document.querySelector('#display_week').innerHTML = updateDayWeek(date)
}

function updateDayWeek(date) {
    let weekList = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    let monthsList = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];


    let week = weekList[date.getDay()]
    let day = date.getDate()
    let month = monthsList[date.getMonth()]
    let year = date.getFullYear()
    
    return `${week}, ${day} de ${month} de ${year}`
}

function updateNumbers(time) {
    return time = time <= 10 ? `0${time}` : time 
}

document.querySelector('#btn_theme').addEventListener('click', function(){
    document.body.classList.toggle('dark')
});

setInterval(updateHours, 1000)
updateHours()