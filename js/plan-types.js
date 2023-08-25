const body = document.querySelector('body')
const modalPlanTypes = document.querySelector('#modal-plan-types')
const btnPlanTypes = document.querySelector('#btn-plan-types')
const btnClose = document.querySelector('#btn-close')

function openPlanTypes() {
    body.classList.add('stop-scrolling')
    modalPlanTypes.classList.remove('hidden')
}

function closePlanTypes() {
    body.classList.remove('stop-scrolling')
    modalPlanTypes.classList.add('hidden')
}

btnPlanTypes.addEventListener('click', openPlanTypes)
btnClose.addEventListener('click', closePlanTypes)

