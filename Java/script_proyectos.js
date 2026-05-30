document.addEventListener("DOMContentLoaded", () => {
    
    // 1. CONTROL DEL MENÚ RESPONSIVE
    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");

    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", () => {
            // Alterna la clase que acabamos de corregir en el CSS
            navMenu.classList.toggle("open");
            
            const icon = menuToggle.querySelector("i");
            if (icon) {
                // Si el menú está abierto, cambia la hamburguesa por una X
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

    // 2. CONTROL DEL MODAL (Evita errores si el modal no existe en la página)
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