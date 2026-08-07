document.addEventListener("DOMContentLoaded", () => {
    
    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");

    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", () => {
            navMenu.classList.toggle("open");
            
            const icon = menuToggle.querySelector("i");
            if (icon) {
                if (navMenu.classList.contains("open")) {
                    icon.classList.remove("fa-bars");
                    icon.classList.add("fa-times");
                } else {
                    icon.classList.remove("fa-times");
                    icon.classList.add("fa-bars");
                }
            }
        });
    }

    const modal = document.getElementById("modalImagen");
    
    if (modal) {
        const botones = document.querySelectorAll(".abrir-imagen");
        const imagenGrande = document.getElementById("imagenGrande");
        const videoGrande = document.getElementById("videoGrande"); 
        const cerrar = document.querySelector(".cerrar-modal");

        botones.forEach(boton => {
            boton.addEventListener("click", () => {
                const srcUrl = boton.dataset.img;
                
                if (!srcUrl) return;

                if (srcUrl.toLowerCase().endsWith(".mp4")) {
                    if (imagenGrande) imagenGrande.style.display = "none";
                    if (videoGrande) {
                        videoGrande.src = srcUrl;
                        videoGrande.style.display = "block";
                        videoGrande.play();
                    }
                } else {
                    if (videoGrande) {
                        videoGrande.style.display = "none";
                        videoGrande.pause();
                    }
                    if (imagenGrande) {
                        imagenGrande.src = srcUrl;
                        imagenGrande.style.display = "block";
                    }
                }
                modal.classList.add("activo");
            });
        });

        const resetModal = () => {
            modal.classList.remove("activo");
            if (videoGrande) {
                videoGrande.pause();
                videoGrande.src = "";
            }
            if (imagenGrande) imagenGrande.src = "";
        };

        if (cerrar) cerrar.addEventListener("click", resetModal);

        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
                resetModal();
            }
        });
    }
});