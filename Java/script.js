const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const modalVideo = document.getElementById("modal-video");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".btn-card").forEach(btn => {
    btn.addEventListener("click", e => {

        const href = btn.getAttribute("href");

        // 🔵 externos
        if (href && href.startsWith("http")) return;

        e.preventDefault();

        const src = btn.getAttribute("data-src");
        if (!src) return;

        // reset
        modalImg.style.display = "none";
        modalVideo.style.display = "none";

        if (src.includes(".mp4")) {
            modalVideo.src = src;
            modalVideo.style.display = "block";
        } else {
            modalImg.src = src;
            modalImg.style.display = "block";
        }

        modal.style.display = "flex";
    });
});

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    modalVideo.pause();
});



const track = document.querySelector(".carousel-track");

document.querySelectorAll(".project-card").forEach(card => {
    card.addEventListener("mouseenter", () => {
        track.style.animationPlayState = "paused";
    });

    card.addEventListener("mouseleave", () => {
        track.style.animationPlayState = "running";
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const hamburgerBtn = document.getElementById("hamburger-btn");
    const navMenu = document.getElementById("nav-menu");
    const navLinks = document.querySelectorAll("#nav-menu ul li a");

    // Alternar clases al hacer click en la hamburguesa
    hamburgerBtn.addEventListener("click", () => {
        hamburgerBtn.classList.toggle("active");
        navMenu.classList.toggle("active");
    });

    // Cerrar el menú automáticamente al clickear un enlace (anclas internas)
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            hamburgerBtn.classList.remove("active");
            navMenu.classList.remove("active");
        });
    });
});