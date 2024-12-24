coord = "[55.729366, 37.626241]"
adress = "115054, город Москва, Валовая ул., д. 35"
phone = "+7 (495) 363 1661"
email = "contact@rusagro.tech"

ymaps.ready(function(){
    var map = new ymaps.Map('map', {
        center: JSON.parse( coord ),
        zoom: 16,
        controls: ["zoomControl"]
    })
    var placemark = new ymaps.Placemark(JSON.parse( coord ), {
        // Всплывашка pin
        // hintContent: 'Офис',
        // balloonContent: `
        //     <span>адрес:</span>
        //     <strong>` + adress + `</strong>
        //     <span>Телефон:</span>
        //     <strong><a href="tel:` + phone + `">` + phone + `</a></strong>
        //     <span>Почта:</span>
        //     <strong><a href="mailto:` + email + `">` + email + `</a></strong>
        // `
    }, {
        // Нестандартный pin
        // iconLayout: 'default#image',
        // iconImageHref: '../images/icons/Pin_Filled.svg',
        // iconImageSize: [50, 50],
        // iconImageOffset: [-30, -45]
    });
    map.geoObjects.add(placemark);
    map.behaviors.disable('scrollZoom')
})