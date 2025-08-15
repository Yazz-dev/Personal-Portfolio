const roles = [ 'Yasir','a Software Developer','a Code Addict','a Problem Solver'];
const roleElement = document.getElementById('role');

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
  let currentRole = roles[roleIndex];

  if (!deleting) {
    roleElement.textContent = currentRole.slice(0, charIndex++);
    if (charIndex > currentRole.length) {
      deleting = true;
      setTimeout(typeEffect, 1500);
      return;
    }
  } else {
    roleElement.textContent = currentRole.slice(0, charIndex--);
    if (charIndex < 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }

  setTimeout(typeEffect, deleting ? 80 : 120);
}

typeEffect();