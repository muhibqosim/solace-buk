
function myFunction(x) {
            x.classList.toggle("change");
        }
        function toggleMenu() {
            var menu = document.getElementById("mobile-menu");
            if (menu.classList.contains("hidden")) {
                menu.classList.remove("hidden");
            } else {
                menu.classList.add("hidden");
            }
        } 
        
        
        
  //JS TYPEWRITER
const mainText = "Nurturing Legal Excellence & Advocacy"; // First text to type
const subText = "...A hub for aspiring lawyers committed to legal innovation, research, and advocacy";         // Second text to type
const speed = 100; // Typing speed in milliseconds

// Get references to HTML elements
const mainTextElement = document.getElementById("typewriter-text");
const subTextElement = document.getElementById("typewriter-subtext");

let mainIndex = 0;
let subIndex = 0;

// Function to type the first line
function typeMain() {
  if (mainIndex < mainText.length) {
    mainTextElement.textContent += mainText.charAt(mainIndex);
    mainIndex++;
    setTimeout(typeMain, speed);
  } else {
    // After the first text finishes, wait a bit, then start typing the second line
    setTimeout(typeSub, 500);
  }
}

// Function to type the second line
function typeSub() {
  if (subIndex < subText.length) {
    subTextElement.textContent += subText.charAt(subIndex);
    subIndex++;
    setTimeout(typeSub, speed);
  }
}

// Start typing the first line
typeMain();
      
        
        
  //JS TYPEWRITER
/* const text = "Nurturing Legal Excellence & Advocacy "; // The text to be displayed
const speed = 100; // The speed of the typewriter effect in milliseconds

const typewriterText = document.getElementById("typewriter-text");
let index = 0;

function typeWriter() {
  if (index < text.length) {
    typewriterText.textContent += text.charAt(index);
    index++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();*/

//REACHOUT TO US form starts
//<!-- Read the Formbutton docs at formspree.io/formbutton/docs. See more examples at codepen.io/formspree -->
  /* ______ */
  window.formbutton=window.formbutton||function(){(formbutton.q=formbutton.q||[]).push(arguments)};
  /* customize formbutton below*/     
  formbutton("create", {
    action: "https://formspree.io/f/xaygnjpb",
    title: "How can we help?",
    fields: [
      { 
        type: "email", 
        label: "Email:", 
        name: "email",
        required: true,
        placeholder: "your@email.com"
      },
      {
        type: "textarea",
        label: "Message:",
        name: "message",
        placeholder: "What's on your mind?",
      },
      { type: "submit" }      
    ],
    styles: {
      title: {
        backgroundColor: "gray"
      },
      button: {
        backgroundColor: "gray"
      }
    }
  });

//REACHOUT TO US form ends
        
        
/* ------ swiper gallery  ------*/

  document.addEventListener("DOMContentLoaded", function () {
    new Swiper(".mySwiper", {
      slidesPerView: 1,  // Show one image at a time
      spaceBetween: 10,  // Space between slides
      loop: true,  // Infinite loop
      autoplay: {
        delay: 3000, // Auto-slide every 3 seconds
        disableOnInteraction: false
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  });






      //copyright
      document.addEventListener('DOMContentLoaded', function() {
        var currentYear = new Date().getFullYear();
        document.getElementById('copyright-year').textContent = currentYear;
      });
      
      