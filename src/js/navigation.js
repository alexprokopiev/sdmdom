const navigation = () => {
    const navbar = document.querySelector(".navbar"),
        navbarMobile = document.querySelector(".navbar_mobile"),
        navbarTitle = document.querySelector(".navbar__title"),
        navbarContent = document.querySelector(".navbar__content"),
        refers = document.querySelectorAll(".navbar__content a"),
        arrowUp = document.querySelector(".back-to-begin");

    window.addEventListener("scroll", () => {
        if (window.pageYOffset >= 1350) {
            if (window.screen.width > 768) {
                navbar.style.display = "block";
                navbar.style.opacity = 1;
            } else {
                navbarMobile.style.display = "block";
                navbarMobile.style.opacity = 1;
            }
            arrowUp.style.display = "flex";
            arrowUp.style.opacity = 1;
        } else {
            navbar.style.opacity = 0;
            navbarMobile.style.opacity = 0;
            arrowUp.style.opacity = 0;
            navbar.style.display = "none";
            navbarMobile.style.display = "none";
            arrowUp.style.display = "none";
        }
    });

    navbarTitle.addEventListener("click", () => {
        navbarContent.style.display = "flex";
        navbarContent.style.opacity = 1;
    });

    refers.forEach((refer) => {
        refer.addEventListener("click", () => {
            navbarContent.style.display = "none";
            navbarContent.style.opacity = 0;
        });
    });
};

export default navigation;