export default function initToggleScrolling() {
    const html = document.documentElement
    const body = document.querySelector('body')
    const mobile = window.matchMedia("(max-width: 720px)").matches

    html.classList.toggle('stop-scrolling-html')
    body.classList.toggle('stop-scrolling-body')
    if (!mobile) {
        body.classList.toggle('compensate-scrollbar')
    }
}