class Parallax {

    // Конструктор параллакса
    constructor({ element, speed = 2, distance = 300 }) {

        this.element = element
        this.speed = speed
        this.distance = distance

    }

    // Движение параллакса
    moveParallax() {
        
        var currentDistance = window.scrollY - (window.scrollY + this.element.getBoundingClientRect().top + this.element.offsetHeight) + window.innerHeight
        this.element.style.transform = 'translateY(' + currentDistance / this.speed + 'px)'

        if( currentDistance / this.speed > this.distance ) 
            this.element.style.transform = 'translateY(' + this.distance + 'px)'
        if( currentDistance / this.speed < 0 )
            this.element.style.transform = 'translateY(0px)'

    }

    // Старт параллакса
    startParallax() {

        this.moveParallax()
        window.addEventListener('scroll', event => {
            this.moveParallax()
        })

    }
}

// Инициализация и старт параллакса
// particle = new Parallax({ element: document.querySelector('.parallax') })
// particle.startParallax()