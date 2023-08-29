export default function initModalMap() {
    const simulationPage = document.querySelector('.simulation-page')

    if (simulationPage) {
        const html = document.documentElement
        const body = document.querySelector('body')
        const mobile = window.matchMedia("(max-width: 720px)").matches

        const mapinha = document.querySelector('.quadra-mapa')

        const MapGallery = {
            page: document.querySelector('#map-gallery'),
            map: document.querySelector('#map-gallery > map')
        }

        function openMapGallery() {
            mapinha.style.opacity = '0'
            simulationPage.classList.add('fixed')
    
            html.classList.add('stop-scrolling-html')
            body.classList.add('stop-scrolling-body')
            if (!mobile) {
                body.classList.add('compensate-scrollbar')
            }
            MapGallery.page.classList.remove('hidden')
            MapGallery.map.classList.remove('hidden')
            MapGallery.map.scrollIntoView({ inline: "center", behavior: "smooth" });
        }
    
        function mapOutsideClick(event) {
            html.classList.remove('stop-scrolling-html')
            body.classList.remove('stop-scrolling-body')
            body.classList.remove('compensate-scrollbar')
    
            MapGallery.page.classList.add('hidden')
            MapGallery.map.classList.add('hidden')
            mapinha.style.opacity = '1'
            simulationPage.classList.remove('fixed')
        }
    
        mapinha.addEventListener('click', openMapGallery)
        MapGallery.page.addEventListener('click', mapOutsideClick)
    }
}