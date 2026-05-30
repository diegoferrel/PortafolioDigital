const botones = document.querySelectorAll(".abrir-imagen");
const modal = document.getElementById("modalImagen");

const imagenGrande = document.getElementById("imagenGrande");
const videoGrande = document.getElementById("videoGrande");

const cerrar = document.querySelector(".cerrar-modal");

botones.forEach(boton => {

    boton.addEventListener("click", () => {

        const archivo = boton.dataset.img;

        if(archivo.endsWith(".mp4")){

            imagenGrande.style.display = "none";

            videoGrande.style.display = "block";
            videoGrande.src = archivo;

        }else{

            videoGrande.style.display = "none";

            imagenGrande.style.display = "block";
            imagenGrande.src = archivo;

        }

        modal.classList.add("activo");

    });

});

cerrar.addEventListener("click", () => {

    modal.classList.remove("activo");

    videoGrande.pause();

});

modal.addEventListener("click", (e) => {

    if(e.target === modal){

        modal.classList.remove("activo");

        videoGrande.pause();

    }

});


document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");

    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("open");
        
        // Cambia el icono de hamburguesa (bars) a una equis (times) al abrir
        const icon = menuToggle.querySelector("i");
        if (navMenu.classList.contains("open")) {
            icon.classList.replace("fa-bars", "fa-times");
        } else {
            icon.classList.replace("fa-times", "fa-bars");
        }
    });
});