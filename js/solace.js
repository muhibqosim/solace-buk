
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
const text = "We are Visible but Invincible "; // The text to be displayed
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

typeWriter();

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
        
        
        
      