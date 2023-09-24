export default function initMobileMenu() {
    const menuMobile = document.querySelector('.mobile-navbar')
    const btnMenu = document.querySelector('.btn-mobile button')
    const themeColor = document.querySelector('meta[content="var(--b1)"]')

    if (menuMobile) {
        const html = document.documentElement
        const body = document.querySelector('body')
        const mobile = window.matchMedia("(max-width: 720px)").matches

        function openMenuMobile(event) {
            html.classList.add('stop-scrolling-html')
            body.classList.add('stop-scrolling-body')
            if (!mobile) {
                body.classList.add('compensate-scrollbar')
            }
            menuMobile.classList.remove('hidden')
            themeColor.removeAttribute('content')
            themeColor.setAttribute('content', '#FCFDFD')
        }

        function closeMenuMobile() {
            html.classList.remove('stop-scrolling-html')
            body.classList.remove('stop-scrolling-body')
            body.classList.remove('compensate-scrollbar')
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
    }
}
