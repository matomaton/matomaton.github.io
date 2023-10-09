/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction() {
  let menuBtn = document.getElementById("myNavMenu");

  if (menuBtn.className === "nav-menu") {
      menuBtn.className += " responsive";
  } else {
      menuBtn.className = "nav-menu";
  }

  // Get all menu items
  let menuItems = document.querySelectorAll(".nav-menu a");

  // Add event listener to each menu item to handle click events
  menuItems.forEach(item => {
      item.addEventListener("click", function(event) {
          // Check if the target starts with a hash symbol (#)
          if (this.getAttribute("href").startsWith("#")) {
              // Prevent default behavior of anchor links
              event.preventDefault();

              // Get the target section id from the href attribute
              let targetId = this.getAttribute("href").substring(1);

              // Close the menu
              menuBtn.className = "nav-menu";

              // Scroll to the target section using smooth scrolling
              document.getElementById(targetId).scrollIntoView({
                  behavior: "smooth"
              });
          } else {
              // Regular link to another page, handle navigation
              // The default behavior will occur, allowing the user to navigate to the linked page
          }
      });
  });
}


/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
  window.onscroll = function() {headerShadow()};

  function headerShadow() {
    const navHeader =document.getElementById("header");

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {

      navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
      navHeader.style.height = "70px";
      navHeader.style.lineHeight = "70px";

    } else {

      navHeader.style.boxShadow = "none";
      navHeader.style.height = "90px";
      navHeader.style.lineHeight = "90px";

    }
  }

/* ----- TYPING EFFECT ----- */
let typed;
const words = ["Develop", "Create", "Design"];
let wordIndex = 0;

function startTypingEffect() {
  typed = new Typed(".typedText", {
    strings: [words[wordIndex]],
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000,
    showCursor: false, // Hide the cursor
    onComplete: function() {
      wordIndex++;
      if (wordIndex === words.length) {
        // All words have been typed, do not loop anymore
        typed.options.loop = false;
      } else {
        // Type the next word
        typed.strings = [words[wordIndex]];
        typed.reset();
      }
    }
   
  });
}

// Trigger the typing effect on page load
document.addEventListener("DOMContentLoaded", startTypingEffect);

/* ----- ORINGINAL TYPING EFFECT ----- */
//  let typingEffect = new Typed(".typedText",{
//     strings : ["Design","Create","Develop"],
//     loop : true,
//     typeSpeed : 100, 
//     backSpeed : 80,
//     backDelay : 2000
//  })


/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
 const sr = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 2000,
        reset: true     
 })

/* -- HOME -- */
sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay: 100})
sr.reveal('.featured-text-info',{delay: 200})
sr.reveal('.featured-text-btn',{delay: 200})
sr.reveal('.social_icons',{delay: 200})
sr.reveal('.featured-image',{delay: 300})


/* -- PROJECT BOX -- */
sr.reveal('.project-box',{interval: 200})

/* -- HEADINGS -- */
sr.reveal('.top-header',{})

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
  origin: 'left',
  distance: '80px',
  duration: 2000,
  reset: true
})

srLeft.reveal('.about-info',{delay: 100})
srLeft.reveal('.contact-info',{delay: 100})

/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
  origin: 'right',
  distance: '80px',
  duration: 2000,
  reset: true
})

srRight.reveal('.skills-box',{delay: 100})
srRight.reveal('.form-control',{delay: 100})



/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute('id')

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 

        document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')

    }  else {

      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

    }
  })
}

window.addEventListener('scroll', scrollActive)