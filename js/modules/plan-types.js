export default function initModalPlanTypes() {    
    const PlanTypes = {
        modal: document.querySelector('#modal-plan-types'),
        card: document.querySelector('#modal-plan-types > div'),
        btnOpen: document.querySelector('#btn-plan-types'),
        btnClose: document.querySelector('#btn-close')
    }

    if (PlanTypes.modal) {
        const html = document.documentElement
        const body = document.querySelector('body')
        const mobile = window.matchMedia("(max-width: 720px)").matches
    
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
        
        function swipeDownModal() {
            let mouseY;
            let initialY = 0;
            let rectTop = PlanTypes.card.getBoundingClientRect().top;
            
            let getYdistance = (event) => {
              mouseY = (event.touches[0].pageY) - rectTop;
            };
            
            PlanTypes.card.addEventListener('touchstart', (event) => {
                getYdistance(event);
                initialY = mouseY;
            });
            
            PlanTypes.card.addEventListener('touchmove', (event) => {
                getYdistance(event);
                let diffY = mouseY - initialY;
                let isSwipeDown = diffY > 100 ? true : false;
                if (isSwipeDown) {
                    closePlanTypes()
                }
            });
        }
        
        swipeDownModal()
        
        PlanTypes.btnOpen.addEventListener('click', openPlanTypes)
        PlanTypes.btnClose.addEventListener('click', closePlanTypes)
        PlanTypes.modal.addEventListener('click', handleOutsideClick)
    }

}