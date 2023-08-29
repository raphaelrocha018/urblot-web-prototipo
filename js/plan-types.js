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

function swipeDownModal() {
    let mouseY;
    let initialY = 0;
    let rectTop = PlanTypes.card.getBoundingClientRect().top;
    
    const getYdistance = (event) => {
      mouseY = (event.touches[0].pageY) - rectTop;
    };
    
    PlanTypes.card.addEventListener('touchstart', (event) => {
        getYdistance(event);
        initialY = mouseY;
    });
    
    PlanTypes.card.addEventListener('touchmove', (event) => {
        getYdistance(event);
        let diffY = mouseY - initialY;
        isSwipeDown = diffY > 100 ? true : false;
        if (isSwipeDown) {
            closePlanTypes()
        }
    });
}

swipeDownModal()

PlanTypes.btnOpen.addEventListener('click', openPlanTypes)
PlanTypes.btnClose.addEventListener('click', closePlanTypes)
PlanTypes.modal.addEventListener('click', handleOutsideClick)


const simlationPage = document.querySelector('.simulation-page')
const mapinha = document.querySelector('.quadra-mapa')

const MapGallery = {
    page: document.querySelector('#map-gallery'),
    map: document.querySelector('#map-gallery > map')
}

function openMapGallery() {
    mapinha.style.opacity = '0'
    simlationPage.classList.add('fixed')
    html.classList.add('stop-scrolling-html')
    body.classList.add('stop-scrolling-body')
    if (!mobile) {
        body.classList.add('compensate-scrollbar')
    }
    MapGallery.page.classList.remove('hidden')
    MapGallery.map.classList.remove('hidden')
}

function mapOutsideClick(event) {
    html.classList.remove('stop-scrolling-html')
    body.classList.remove('stop-scrolling-body')
    body.classList.remove('compensate-scrollbar')

    MapGallery.page.classList.add('hidden')
    MapGallery.map.classList.add('hidden')
    mapinha.style.opacity = '1'
    simlationPage.classList.remove('fixed')
}

mapinha.addEventListener('click', openMapGallery)
MapGallery.page.addEventListener('click', mapOutsideClick)