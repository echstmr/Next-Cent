const menuLinks = document.getElementById('menuLinks')
const menuIcon = document.getElementById('menuIcon')
const activeLinks = document.querySelectorAll('.links')


const toggleMenu = () =>{
    menuLinks.classList.toggle('left-[-100%]')
}

const closeMenu = () => {
    menuLinks.classList.add('left-[-100%]')
}       

activeLinks.forEach((link) => {
    link.addEventListener('click', () =>{
        activeLinks.forEach((li) =>{
            li.classList.remove('text-[#4CAF4F]')    
        })
        link.classList.add('text-[#4CAF4F]')
    })
})

menuIcon.addEventListener('click', toggleMenu)
window.addEventListener('scroll', closeMenu)