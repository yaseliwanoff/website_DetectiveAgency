import Swiper from "swiper";
import "swiper/css";

document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper(".services__wrapper", { // Change to target .services__wrapper
        direction: "vertical",
        loop: false,
        navigation: {
            nextEl: ".right__button",
            prevEl: ".left__button",
        },
    });
});
