const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

// aggiungo classe active a wrapper dopo un click su register-link
registerLink.addEventListener('click', ()=>{
    wrapper.classList.add('active');
});

// rimuovo classe active dopo un click a loginLink
loginLink.addEventListener('click', ()=>{
    wrapper.classList.remove('active');
});