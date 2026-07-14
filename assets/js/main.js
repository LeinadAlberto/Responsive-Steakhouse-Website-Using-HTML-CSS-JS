/*=============== SHOW & CLOSE MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Show menu */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
   })
}

/* Hide menu */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MOBILE MENU ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE HEADER STYLES ===============*/
const scrollHeader = () => {
    const header = document.getElementById('header')
    // Add the .scroll-header class if the bottom scroll of the viewport is greater than 50
    this.scrollY >= 50 ? header.classList.add('scroll-header') 
                        : header.classList.remove('scroll-header')
}

window.addEventListener('scroll', scrollHeader)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    // Add the .scroll-header class if the bottom scroll of the viewport is greater than 350
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						     : scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

// Link the ID of each section (section id="home") to each link (a href="#home") 
// and activate the link with the class .active-link
const scrollActive = () => {
   // We get the position by scrolling down
   const scrollY = window.scrollY

   sections.forEach(section => {
      const id = section.id, // id of each section
            top = section.offsetTop - 50, // Distance from the top edge
            height = section.offsetHeight, // Element height
            link = document.querySelector('.nav__menu a[href*=' + id + ']') // id nav link

      if(!link) return

      link.classList.toggle('active-link', scrollY > top && scrollY <= top + height)
   })
}

window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'bottom', 
    distance: '60px', 
    duration: 1500,
    delay: 300, 
    easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)', 
    // reset: true, // Animations repeat
})

sr.reveal(`.home__title`, {origin: 'top'})
sr.reveal(`.home__button`, {delay: 600, origin: 'top'})
sr.reveal(`.home__fryingpan`, {delay: 600, rotate: {z: 60}})
sr.reveal(`.home__rosemary-1`, {delay: 1200, origin: 'right', rotate: {z: -60}})
sr.reveal(`.home__rosemary-2`, {delay: 1200, origin: 'left', rotate: {z: -60}})
sr.reveal(`.home__tomato`, {delay: 1200, origin: 'right', rotate: {z: -60}})
sr.reveal(`.home__spoon`, {delay: 1200, origin: 'bottom'})
sr.reveal(`.home__onion`, {delay: 1200, origin: 'right', rotate: {z: -60}})
sr.reveal(`.home__pepper`, {delay: 1200, origin: 'top', distance: '120px'})
sr.reveal(`.home__salt-1`, {delay: 1200, origin: 'left', distance: '120px'})
sr.reveal(`.home__salt-2`, {delay: 1200, origin: 'right', distance: '120px'})

sr.reveal(`.about__data > *`, {origin: 'top'})
sr.reveal(`.about__flour`, {delay: 900})
sr.reveal(`.about__rosemary`, {delay: 1200, origin: 'bottom'})

sr.reveal(`.menu__header`)
sr.reveal(`.menu__dish-1, .menu__dish-2, .menu__dish-3, .menu__dish-4`, {distance: '0', duration: 2000, rotate: {z: -30}})
sr.reveal(`.menu__rosemary, .menu__flour-2, .menu__tomato, .menu__flour-4`, {delay: 600})
sr.reveal(`.menu__flour-1, .menu__pepper, .menu__flour-3`, {delay: 900})
sr.reveal(`.menu__info`, {delay: 600, origin: 'left'})

sr.reveal(`.events__data > *`, {origin: 'top'})
sr.reveal(`.events__flour`, {delay: 900})
sr.reveal(`.events__spoon`, {delay: 1200, origin: 'bottom'})

sr.reveal(`.ingredients__data`)
sr.reveal(`.ingredients__images > img`, {delay: 1200, distance: '0', scale: 0.1})
sr.reveal(`.ingredients__img-1`, {delay: 600, distance: '0', scale: 1.5})

sr.reveal(`.contact__map`, {origin: 'left'})
sr.reveal(`.contact__content`, {origin: 'right'})

sr.reveal(`.reservation__content, .footer__container`)
