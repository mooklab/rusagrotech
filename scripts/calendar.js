calendar = document.querySelector('div.calendar'),
monthSelector = calendar?.querySelector('span.month'),
yearSelector = calendar?.querySelector('span.year'),
daysSelector = calendar?.querySelector('div.days'),
timeSelector = calendar?.querySelector('div.time'),
previousMonthSelector = calendar?.querySelector('div.month svg:first-child'),
nextMonthSelector = calendar?.querySelector('div.month svg:last-child')

months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль",
            "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]


// Текущая дата
date = new Date()
todayYear = date.getFullYear()
todayMonth = date.getMonth()
todayDay = date.getDate()


// Записываем текущее число в локальное хранилище
localStorage.setItem('todayYear', todayYear)
localStorage.setItem('todayMonth', todayMonth)
localStorage.setItem('todayDay', todayDay)


// Перевести на месяц назад
previousMonthSelector?.addEventListener('click', event => {
    date.setMonth(date.getMonth() - 1)
    renderCalendar()
})


// Перевести на месяц вперед
nextMonthSelector?.addEventListener('click', event => {
    date.setMonth(date.getMonth() + 1)
    renderCalendar()
})


calendar && renderCalendar()


// Рендерим календарь
var renderCalendar = () => {

    monthDays = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate() // Количество дней в месяце
    monthBegin = date.getDay() == 0 ? 7 : date.getDay() // День недели 1 числа месяца

    // Очищаем календарь
    daysSelector.innerHTML = ''

    // Меняем шапку календаря
    monthSelector.innerHTML = months[date.getMonth()]
    yearSelector.innerHTML = date.getFullYear()

    // Заполняем пустыми ячейками до 1 числа месяца
    for (let index = 1; index < monthBegin; index++) {
        daySelector = document.createElement('span')
        daySelector.classList.add('empty')
        daySelector.innerHTML = ''
        daysSelector.append(daySelector)
    }

    // Заполняем календарь днями месяца
    for (let index = 1; index <= monthDays; index++) {

        daySelector = document.createElement('span')

        // Добавляем класс к прошедшим числам
        if ( (date.getFullYear() < todayYear) // Если выбран прошлый год
            || (date.getFullYear() == todayYear && date.getMonth() < todayMonth) // Если выбран текущий год, но прошлый месяц
            || (date.getFullYear() == todayYear && date.getMonth() == todayMonth && index < todayDay) // Если выбран текущий год и текущий месяц, но прошедшие числа
        ) {
            daySelector.classList.add('passed')
        }

        // Добавляем активный класс к выбранной дате
        if( localStorage.getItem('todayYear') == date.getFullYear() 
            && localStorage.getItem('todayMonth') == date.getMonth() 
            && index == localStorage.getItem('todayDay')
        ) {
            daySelector.classList.add('active')
            day = index
        }

        daySelector.innerHTML = index
        daysSelector.append(daySelector)

    }

    // Добавляем события при клике на дни месяца
    daySelectors = daysSelector.querySelectorAll('span')
    daySelectors.forEach( daySelector => {
        daySelector.addEventListener('click', event => {

            daySelectors.forEach( element => {
                element.classList.remove('active')
            })
            daySelector.classList.add('active')
            day = daySelector.innerHTML

            localStorage.setItem('todayYear', date.getFullYear())
            localStorage.setItem('todayMonth', date.getMonth())
            localStorage.setItem('todayDay', daySelector.innerHTML)

            changeHTML()

        })
    })

    // меняем данные формы при клике по времени
    timeSelector.addEventListener('click', event => { changeHTML() })
    
    changeHTML = () => {
        choosenTime = timeSelector.querySelector('input[name="time"]:checked').value
        choosenDate = day + '.' + (date.getMonth() + 1) + '.' + date.getFullYear() + ' (' + choosenTime + ')'
        document.querySelector('dialog a.set_date').innerHTML = choosenDate
        document.querySelector('dialog div.choose_date input[type=hidden]').value = choosenDate
    }

}