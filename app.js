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
        console.log('asf')
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
const mobileMenu = document.querySelector('.nav-mobile-menu')
const mainMenu = document.querySelector('.navigation')

mobileMenu.addEventListener('click', function() {
    mobileMenu.classList.toggle('active-menu')
    if (mobileMenu.classList.contains('active-menu')) {
        mainMenu.classList.add('active-menu')
    } else  {
        mainMenu.classList.remove('active-menu')
    }

})