new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
    },
    autoplay: {
        delay: 3000
    }
})

// --- modal form ---
const fbForm = document.getElementById('feedback-form')

function openModalForm() {    
    fbForm.classList.remove('modal-form--hidden')
    fbForm.classList.add('modal-form--visible')
}

function closeModalForm() {
    fbForm.classList.remove('modal-form--visible')
    fbForm.classList.add('modal-form--hidden')
}

function documentOnScroll() {    
    const h = document.body.scrollHeight/2;
    const e = 30;
    if (fbForm.classList.contains("modal-form--hidden") &&
    (window.scrollY >= Math.abs(h - e) && window.scrollY <= h + e)) {        
        openModalForm()
        document.removeEventListener('scroll', documentOnScroll)
    }    
}

function modalFormOnClick(e) {
    if (e.target === fbForm) {
        closeModalForm()
    }
}

fbForm.addEventListener('click', modalFormOnClick)
document.addEventListener('scroll', documentOnScroll)

// --- mobile menu ---
const mobileMenu = document.querySelector('.mobile-menu')
const mainMenu = document.querySelector('.menu')

mobileMenu.addEventListener('click', function() {
    mobileMenu.classList.toggle('mobile-menu--active')
    if (mobileMenu.classList.contains('mobile-menu--active')) {
        mainMenu.classList.add('mobile-menu--active')
    } else  {
        mainMenu.classList.remove('mobile-menu--active')
    }

})