const mainImages = new Swiper('section.main div.swiper.images')
const mainTabs = new Swiper('section.main div.swiper.tabs', {
    slidesPerView: 2,
    spaceBetween: 20,
    breakpoints: {
        640: {
            slidesPerView: 3,
            spaceBetween: 4,
        }
    }
})
const mainTexts = new Swiper('section.main div.swiper.texts', {
    speed: 1000,
    autoHeight: true,
    thumbs: {
        swiper: mainTabs
    }
})
mainTexts.controller.control = mainImages





const historyImages = new Swiper('section.history div.swiper.images', {
    slidesPerView: 1,
    centeredSlides: true,
    centeredSlidesBounds: true,
    initialSlide: 2,
    spaceBetween: 0,
    loop: true,
    navigation: {
        prevEl: 'section.stars div.swiper-pagination div.arrow:first-child',
        nextEl: 'section.stars div.swiper-pagination div.arrow:last-child',
    },
    breakpoints: {
        1280: {
            slidesPerView: 2,
            spaceBetween: 24,
        }
    }
})
const historyYears = new Swiper('section.history div.swiper.years', {
    slidesPerView: 3,
    breakpoints: {
        640: {
            slidesPerView: 4
        }
    }
})
const historyTexts = new Swiper('section.history div.swiper.texts', {
    slidesPerView: 1,
    autoHeight: true,
    navigation: {
        prevEl: 'section.history div.swiper-pagination div.arrow:first-child',
        nextEl: 'section.history div.swiper-pagination div.arrow:last-child',
    },
    thumbs: {
        swiper: historyYears
    }
})





const stagesTabs = new Swiper('section.stages div.swiper.tabs', {
    slidesPerView: 1,
    spaceBetween: 24,
    breakpoints: {
        640: {
            slidesPerView: 2
        },
        960: {
            slidesPerView: 3
        },
        1280: {
            slidesPerView: 4
        }
    }
})
const stagesContent = new Swiper('section.stages div.swiper.contents', {
    slidesPerView: 1,
    navigation: {
        prevEl: 'section.stages div.swiper-pagination div.arrow:first-child',
        nextEl: 'section.stages div.swiper-pagination div.arrow:last-child',
    },
    thumbs: {
        swiper: stagesTabs
    }
})




const aboutYears = new Swiper('section.about div.swiper.years', {
    slidesPerView: 3,
    slideToClickedSlide: true,
    autoHeight: true,
    breakpoints: {
        640: {
            slidesPerView: 4
        }
    }
})
const aboutTexts = new Swiper('section.about div.swiper.texts', {
    slidesPerView: 1,
    autoHeight: true,
    thumbs: {
        swiper: aboutYears
    }
})




new Swiper('section.news div.swiper', {
    slidesPerView: 1,
    spaceBetween: 40,
    direction: 'vertical',
    // autoHeight: true,
    navigation: {
        prevEl: 'section.news div.swiper-pagination div.arrow:first-child',
        nextEl: 'section.news div.swiper-pagination div.arrow:last-child',
    },
    enabled: false,
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 23,
            direction: 'horizontal',
            enabled: true
        },
        960: {
            slidesPerView: 3,
            spaceBetween: 23,
            direction: 'horizontal',
            enabled: true
        },
        1280: {
            slidesPerView: 4,
            spaceBetween: 23,
            direction: 'horizontal',
            enabled: true
        }
    }
})

new Swiper('section.stack div.swiper', {
    slidesPerView: 1,
    spaceBetween: 40,
    navigation: {
        prevEl: 'section.stack div.swiper-pagination div.arrow:first-child',
        nextEl: 'section.stack div.swiper-pagination div.arrow:last-child',
    }
})

new Swiper('section.stars div.swiper', {
    slidesPerView: 1,
    centeredSlides: true,
    centeredSlidesBounds: true,
    slideToClickedSlide: true,
    spaceBetween: 0,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    navigation: {
        prevEl: 'section.stars div.swiper-pagination div.arrow:first-child',
        nextEl: 'section.stars div.swiper-pagination div.arrow:last-child',
    },
    breakpoints: {
        1280: {
            slidesPerView: 2,
            spaceBetween: 24,
        }
    },
    on: {
        autoplayTimeLeft(swiper, time, progress) {
            progressElements = document.querySelectorAll('section.stars div.progress div.scale')
            progressElements.forEach( progressElement => {
                progressElement.style.width = 100 - (progress * 100) + '%'
            })
        }
    }
})

new Swiper('section.team div.swiper', {
    slidesPerView: 1,
    spaceBetween: 40,
    direction: 'vertical',
    enabled: false,
    navigation: {
        prevEl: 'section.team div.swiper-pagination div.arrow:first-child',
        nextEl: 'section.team div.swiper-pagination div.arrow:last-child',
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 23,
            direction: 'horizontal',
            enabled: true
        },
        960: {
            slidesPerView: 3,
            spaceBetween: 23,
            direction: 'horizontal',
            enabled: true
        },
        1280: {
            slidesPerView: 4,
            spaceBetween: 23,
            direction: 'horizontal',
            enabled: true
        }
    }
})

new Swiper('section.gallery div.swiper', {
    slidesPerView: 1,
    spaceBetween: 24,
    navigation: {
        prevEl: 'section.gallery div.swiper-pagination div.arrow:first-child',
        nextEl: 'section.gallery div.swiper-pagination div.arrow:last-child',
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
        },
        960: {
            slidesPerView: 3,
        },
        1280: {
            slidesPerView: 4,
        }
    }
})

new Swiper('section.articles div.swiper', {
    navigation: {
        prevEl: 'section.articles div.swiper-pagination div.arrow:first-child',
        nextEl: 'section.articles div.swiper-pagination div.arrow:last-child',
    },
})

new Swiper('section.article div.swiper.gallery', {
    slidesPerView: 1,
    centeredSlides: true,
    centeredSlidesBounds: true,
    spaceBetween: 0,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    navigation: {
        prevEl: 'section.article div.swiper-pagination div.arrow:first-child',
        nextEl: 'section.article div.swiper-pagination div.arrow:last-child',
    },
    breakpoints: {
        1280: {
            slidesPerView: 2,
            spaceBetween: 24,
        }
    }
})

search = document.querySelector('fieldset.search')
search?.addEventListener('input', checkSearch)
search?.querySelector('input').addEventListener('focus', event => {
    search.classList.add('focus')
})
search?.querySelector('input').addEventListener('blur', event => {
    setTimeout(function(){
        search.classList.remove('focus')
    }, 100)
})

function checkSearch () {
    length = search.querySelector('input').value.length
    length < 3 ? search.classList.remove('open') : search.classList.add('open')
}

const upload = (element) => {
    file = element.files[0]
    console.log(element.files)
    if( file ) {
        element.nextElementSibling.innerHTML = element.files[0].name
        element.parentNode.classList.add("added")
    } else {
        element.parentNode.classList.remove("added")
    }
}