const toggleButton = document.getElementsByClassName('burger')[0]
const navLinks = document.getElementsByClassName('nav-links')[0]

toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('active')
})