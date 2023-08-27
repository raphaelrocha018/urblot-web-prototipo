const html = document.documentElement
const body = document.querySelector('body')
const mobile = window.matchMedia("(max-width: 720px)").matches;

const PlanTypes = {
    modal: document.querySelector('#modal-plan-types'),
    card: document.querySelector('#modal-plan-types > div'),
    btnOpen: document.querySelector('#btn-plan-types'),
    btnClose: document.querySelector('#btn-close'),
}

function openPlanTypes() {
    html.classList.add('stop-scrolling-html')
    body.classList.add('stop-scrolling-body')
    if (!mobile) {
        body.classList.add('compensate-scrollbar')
    }
    PlanTypes.modal.classList.remove('hidden')
    PlanTypes.card.classList.remove('hidden')
}

function closePlanTypes() {
    html.classList.remove('stop-scrolling-html')
    body.classList.remove('stop-scrolling-body')
    body.classList.remove('compensate-scrollbar')

    PlanTypes.modal.classList.add('hidden')
    PlanTypes.card.classList.add('hidden')
}

function handleOutsideClick(event) {
    if (event.target == this) {
        closePlanTypes()
    }
}

PlanTypes.btnOpen.addEventListener('click', openPlanTypes)
PlanTypes.btnClose.addEventListener('click', closePlanTypes)
PlanTypes.modal.addEventListener('click', handleOutsideClick)