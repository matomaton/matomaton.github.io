/* ----- TYPING EFFECT ----- */
let typed;
const words = ["Design", "Create", "Develop"];
let wordIndex = 0;

function startTypingEffect() {
  typed = new Typed(".typedText", {
    strings: [words[wordIndex]],
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000,
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


// STOP CURSOR

function startTypingEffect() {
    typed = new Typed(".typedText", {
      strings: [words[wordIndex]],
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 2000,
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
      },
      onStop: function() {
        // Hide the cursor element when typing stops
        const cursorElement = document.querySelector(".typed-cursor");
        if (cursorElement) {
          cursorElement.style.display = "none";
        }
      }
    });
  }
  