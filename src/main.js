import "./style.sass";

import slider from "./js/slider";
import modal from "./js/modal";
import quiz from "./js/quiz";
import navigation from "./js/navigation";
import mask from "./js/mask";
import sendmail from "./js/sendmail";

window.addEventListener("DOMContentLoaded", () => {
    "use strict";

    slider(
        ".houses .house-card",
        ".houses .dots-wrap",
        ".houses .dot",
        "dot",
        "dot_active",
        ".houses .prev-btn",
        ".houses .next-btn"
    );
    for (let i = 1; i <= 9; i++) {
        slider(
            `#house${i} .house-card__inner-img`,
            `#house${i} .house-card__mini-wrap`,
            `#house${i} .house-card__mini-img`,
            "house-card__mini-img",
            "house-card__mini-img_active"
        );
    }
    slider(
        ".projects .house-card",
        ".projects .dots-wrap",
        ".projects .dot",
        "dot",
        "dot_active",
        ".projects .prev-btn",
        ".projects .next-btn"
    );
    for (let i = 1; i <= 7; i++) {
        slider(
            `#project${i} .house-card__inner-img`,
            `#project${i} .house-card__mini-wrap`,
            `#project${i} .house-card__mini-img`,
            "house-card__mini-img",
            "house-card__mini-img_active"
        );
    }
    slider(
        ".stages__card",
        ".stages__number-wrap",
        ".stages__number",
        "stages__number",
        "stages__number_active",
        ".stages .prev-btn",
        ".stages .next-btn"
    );
    modal();
    quiz();
    navigation();
    mask("input[name='phone']");
    sendmail();
});