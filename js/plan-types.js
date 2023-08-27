const html = document.documentElement
const body = document.querySelector('body')
const mobile = window.matchMedia("(max-width: 720px)").matches;
const modalPlanTypes = document.querySelector('#modal-plan-types')
const btnPlanTypes = document.querySelector('#btn-plan-types')
const btnClose = document.querySelector('#btn-close')

function openPlanTypes() {
    html.classList.add('stop-scrolling-html')

    // if (!mobile) {
        body.classList.add('stop-scrolling-body')
    // }

    modalPlanTypes.classList.remove('hidden')
}

function closePlanTypes() {
    html.classList.remove('stop-scrolling-html')
    body.classList.remove('stop-scrolling-body')
    modalPlanTypes.classList.add('hidden')
}

function handleOutsideClick(event) {
    if (event.target == this) {
        closePlanTypes()
    }
}

btnPlanTypes.addEventListener('click', openPlanTypes)
btnClose.addEventListener('click', closePlanTypes)
modalPlanTypes.addEventListener('click', handleOutsideClick)
