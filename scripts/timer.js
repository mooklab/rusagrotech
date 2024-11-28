class CountdownTimer {

    // Конструктор
    constructor({ selector, targetDate }) {
        this.selector = selector
        this.targetDate = targetDate

        // Выбираем блоки для чисел
        this.refs = {
            days: document.querySelector(`${this.selector} [data-value="days"]`),
            hours: document.querySelector(`${this.selector} [data-value="hours"]`),
            mins: document.querySelector(`${this.selector} [data-value="minutes"]`),
            secs: document.querySelector(`${this.selector} [data-value="seconds"]`),
        };
    }

    // Вычисляем оставшееся время
    getTimeRemaining(endtime) {
        const total = Date.parse(endtime) - Date.parse(new Date())
        const days = Math.floor(total / (1000 * 60 * 60 * 24))
        const hours = Math.floor((total / (1000 * 60 * 60)) % 24)
        const mins = Math.floor((total / 1000 / 60) % 60)
        const secs = Math.floor((total / 1000) % 60)
        return {
            total,
            days,
            hours,
            mins,
            secs,
        };
    }

    // Обновляем таймер
    updateTimer({ days, hours, mins, secs }) {
        this.refs.days.textContent = days
        this.refs.hours.textContent = hours
        this.refs.mins.textContent = mins
        this.refs.secs.textContent = secs
    }

    // Старт таймера
    startTimer() {
        const timer = this.getTimeRemaining(this.targetDate)
        this.updateTimer(timer)
        setInterval(() => {
            const timer = this.getTimeRemaining(this.targetDate)
            this.updateTimer(timer)
        }, 1000)
    }
}

// Инициализация и запуск таймера
// const timer = new CountdownTimer({
//     selector: "div.timer",
//     targetDate: new Date("July, 24 2023 18:00:00")
// })
// timer.startTimer()