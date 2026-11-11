
// 1. Typing Animation
const text = "B.Tech Computer Science Student";
const heading = document.querySelector("#home h3");

let index = 0;

function typeEffect() {
    if (index < text.length) {
        heading.textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect, 80);
    }
}

heading.textContent = "";
typeEffect();


// 2. Smooth Scrolling
document.querySelectorAll('nav a, .btn').forEach(link => {
    link.addEventListener("click", function(e) {
        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});


// 3. Navbar Scroll Effect
window.addEventListener("scroll", function() {
    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});


// 4. Reveal Sections on Scroll
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.15
});

sections.forEach(section => {
    section.classList.add("hidden");
    observer.observe(section);
});


// 5. Skills Hover Message
const skills = document.querySelectorAll(".skill");

skills.forEach(skill => {
    skill.addEventListener("click", function() {
        alert("Keep learning and improving: " + this.textContent);
    });
});


// 6. Welcome Message
window.addEventListener("load", function() {
    console.log("Welcome to Khushi Verma's Portfolio!");
});
