function openModal() {
    const modalEl = document.querySelector('.modal')
    modalEl.classList.remove('hide')
    modalEl.classList.add('show')
}

function closeModal() {
    const modalEl = document.querySelector('.modal')
    modalEl.classList.remove('show')
    modalEl.classList.add('hide')
}


function documentOnScroll() {
    const h = document.body.scrollHeight/2;    
    const e = 30;
    if (modalEl.classList.contains("hide") &&
    (window.scrollY >= Math.abs(h - e) && window.scrollY <= h + e)) {
        openModal()
        document.removeEventListener('scroll', documentOnScroll)
    }            
}

const modalEl = document.querySelector('.modal')
modalEl.addEventListener('click', function(e) {
    if (e.target === modalEl) {
        closeModal()
    }
})

document.addEventListener('scroll', documentOnScroll)