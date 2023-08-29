export default function initModalForgetPassword() {
    const modalLogin = document.querySelector('#modal-login')

    if (modalLogin) {
        const modalForgetPassword = document.querySelector('#modal-forget-password')
        
        const btnForgetPassword = document.querySelector('#forgetPassword')
        const btnCloseForgetPassword = document.querySelector('#btn-close')
        const btnLinkResetPassword = document.querySelector('#btnLinkResetPassword')
        
        function openForgetPassword() {
            modalLogin.classList.add('hidden')
            modalForgetPassword.classList.remove('hidden')
        }
        
        function closeForgetPassword() {
            modalLogin.classList.remove('hidden')
            modalForgetPassword.classList.add('hidden')
        }
        
        function sendLinkResetPassword(event) {
            event.preventDefault()
        }
    
        btnForgetPassword.addEventListener('click', openForgetPassword)
        btnCloseForgetPassword.addEventListener('click', closeForgetPassword)
        btnLinkResetPassword.addEventListener('click', sendLinkResetPassword)
    }
}