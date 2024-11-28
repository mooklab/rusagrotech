class Comparison {

    active = false

    constructor (element) {
        this.element = element
        this.addScroller()
        this.addListeners()
    }

    addScroller () {
        let scroller = document.createElement('div')
        scroller.classList.add('scroller')
        this.element.append(scroller)
    }

    addListeners () {
        let startEvents = ['mousedown', 'touchstart']
        let stopEvents = ['mouseup', 'touchend', 'touchcancel']
        let moveEvents = ['mousemove', 'touchmove']

        startEvents.forEach( event => {
            this.element.addEventListener(event, event => { 
                this.active = true
                this.moveSlider(event)
            })
        })

        stopEvents.forEach( event => {
            document.addEventListener(event, () => {
                this.active = false
            })
        })

        moveEvents.forEach( event => {
            this.element.addEventListener(event, (event) => { 
                if (!this.active) return
                this.moveSlider(event)
            })
        })

    }

    moveSlider (event) {
        let rect = this.element.getBoundingClientRect()
        let scroller = this.element.querySelector('div.scroller')
        let after = this.element.querySelector('img.after')

        if( event.clientX ) {
            var x = event.clientX - rect.left
        } else {
            var x = event.touches[0].clientX - rect.left
        }
        
        if( x >= 0 && x <= rect.width ) {
            after.style.clipPath = 'polygon(0 0, ' + x + 'px 0, ' + x + 'px 100%, 0% 100%)'
            scroller.style.left = x + 'px'
        }
    }

}

elements = document.querySelectorAll('div.comparison')
elements.forEach(element => {
    new Comparison( element )
})