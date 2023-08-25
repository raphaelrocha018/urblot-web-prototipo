function initmodalForgetPassword() {
    const modalLogin = document.querySelector('#modal-login')
    const modalForgetPassword = document.querySelector('#modal-forget-password')
    
    const btnForgetPassword = document.querySelector('#forgetPassword')
    const btnCloseForgetPassword = document.querySelector('#btn-close')
    const btnLinkResetPassword = document.querySelector('#btnLinkResetPassword')
    
    btnForgetPassword.addEventListener('click', openForgetPassword)
    btnCloseForgetPassword.addEventListener('click', closeForgetPassword)
    btnLinkResetPassword.addEventListener('click', sendLinkResetPassword)
    
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
}

initmodalForgetPassword()