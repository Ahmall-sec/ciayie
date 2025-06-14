// Navbar Toggle
function hamburg() {
  const hamburger = document.querySelector('.hamburg');
  const cancel = document.querySelector('.cancel');
  const dropdown = document.querySelector('.dropdown');

  if (hamburger && cancel && dropdown) {
    hamburger.addEventListener('click', () => {
      dropdown.classList.add('active');
    });

    cancel.addEventListener('click', () => {
      dropdown.classList.remove('active');
    });
  }
}

// Typewriter Text Effect
const texts = ["Very Beautifuls", "Very Sweet", "Great Woman"];
const speed = 100;
let textIndex = 0;
let characterIndex = 0;
const textElements = document.querySelector('.typewriter-text');

function typeWriter() {
  if (textElements) {
    if (characterIndex < texts[textIndex].length) {
      textElements.innerHTML += texts[textIndex].charAt(characterIndex);
      characterIndex++;
      setTimeout(typeWriter, speed);
    } else {
      setTimeout(eraseText, 1000);
    }
  }
}

function eraseText() {
  if (textElements) {
    if (textElements.innerHTML.length > 0) {
      textElements.innerHTML = textElements.innerHTML.slice(0, -1);
      setTimeout(eraseText, 50);
    } else {
      textIndex = (textIndex + 1) % texts.length;
      characterIndex = 0;
      setTimeout(typeWriter, 500);
    }
  }
}

// Jalankan semua saat halaman siap
window.onload = () => {
  hamburg();
  typeWriter();
};
