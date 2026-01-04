// ============================================================
// 🖱️ INTERACTION SCRIPT
// Handles: Cursor, Back to Top
// ============================================================

const cursorDot = document.querySelector('.cursor-dot');
const cursorOutline = document.querySelector('.cursor-outline');

// 1. Cursor Movement
window.addEventListener('mousemove', (e) => {
    const posX = e.clientX;
    const posY = e.clientY;

    // Dot follows instantly
    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    // Outline follows with slight CSS delay/smoothness
    cursorOutline.style.left = `${posX}px`;
    cursorOutline.style.top = `${posY}px`;
});

// 2. Cursor Expansion on Interactive Elements
const interactiveElements = document.querySelectorAll('a, button, .project-card, .info-card');

interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursorOutline.classList.add('cursor-hover');
    });
    el.addEventListener('mouseleave', () => {
        cursorOutline.classList.remove('cursor-hover');
    });
});

// 3. Back to Top Button Logic
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
document.addEventListener("DOMContentLoaded", function () {
    new Typed(".typing", {
        strings: [
            "Data Analyst",
            "Data Engineer",
            "Data Scientist",
            "Business Intelligence Analyst",
            "Business Analyst",
            "Financial Analyst",
            "Data Visualization Specialist",
            "Machine Learning Engineer",
            "Office Administrator"],
        typeSpeed: 80,
        backSpeed: 50,
        backDelay: 1200,
        loop: true,
        showCursor: true,
        cursorChar: "|"
    });
});


