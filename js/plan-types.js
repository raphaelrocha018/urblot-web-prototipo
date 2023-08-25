const modalPlanTypes = document.querySelector('#modal-plan-types')
const btnPlanTypes = document.querySelector('#btn-plan-types')
const btnClose = document.querySelector('#btn-close')

function openPlanTypes() {
    modalPlanTypes.classList.remove('hidden')
}

function closePlanTypes() {
    modalPlanTypes.classList.add('hidden')
}

btnPlanTypes.addEventListener('click', openPlanTypes)
btnClose.addEventListener('click', closePlanTypes)