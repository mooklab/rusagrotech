quantities = document.querySelectorAll('div.quantity')


quantities.forEach( quantity => {

    minus = quantity.querySelector('img.minus')
    plus = quantity.querySelector('img.plus')
    
    minus.addEventListener('click', event => {
        input = quantity.querySelector('input')
        currentValue = Number(input.value)
        changeQuantity(currentValue - 1)
    })
    
    plus.addEventListener('click', event => {
        input = quantity.querySelector('input')
        currentValue = Number(input.value)
        changeQuantity(currentValue + 1)
    }) 

})


function changeQuantity (value) {
    minValue = input.getAttribute('min')
    maxValue = input.getAttribute('max')

    if( value < minValue || value > maxValue ) return
    
    input.value = value
}