import initToggleScrolling from './stop-scrolling.js'

export default function initMobileMenu() {
    const menuMobile = document.querySelector('.mobile-navbar')
    const btnMenu = document.querySelector('.btn-mobile button')
    const menuItems = document.querySelectorAll('.mobile-navbar ul li')
    const themeColor = document.querySelector('meta[content="var(--b1)"]')

    if (menuMobile) {
        function openMenuMobile(event) {
            initToggleScrolling()
            menuMobile.classList.remove('hidden')
            themeColor.removeAttribute('content')
            themeColor.setAttribute('content', '#FCFDFD')
        }

        function closeMenuMobile() {
            initToggleScrolling()
            menuMobile.classList.add('hidden')
            themeColor.removeAttribute('content')
            themeColor.setAttribute('content', 'var(--b1)')
        }

        function handleOutsideClick(event) {
            if (event.target == this) {
                closeMenuMobile()
            }
        }

        btnMenu.addEventListener('click', openMenuMobile)
        menuMobile.addEventListener('click', handleOutsideClick)
        menuItems.forEach((item) => {
            item.addEventListener('click', () => {
                closeMenuMobile()
            })
        })
    }
}
