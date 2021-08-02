const slider = (
    slidesSelector,
    dotsWrapSelector,
    dotSelector,
    dotClass,
    dotActiveClass,
    prevSelector = null,
    nextSelector = null
) => {
    let slideIndex = 1,
        slides = document.querySelectorAll(slidesSelector),
        prev = document.querySelector(prevSelector),
        next = document.querySelector(nextSelector),
        dotsWrap = document.querySelector(dotsWrapSelector),
        dots = document.querySelectorAll(dotSelector);

    showSlides(slideIndex);

    function showSlides(n) {
        if (n > slides.length) {
            slideIndex = slides.length;
        }
        if (n < 1) {
            slideIndex = 1;
        }

        slides.forEach((item) => {
            item.style.opacity = 0;
            item.style.zIndex = 0;
        });
        dots.forEach((item) => item.classList.remove(dotActiveClass));

        slides[slideIndex - 1].style.opacity = 1;
        slides[slideIndex - 1].style.zIndex = 1;
        dots[slideIndex - 1].classList.add(dotActiveClass);
        if (prev && next) {
            if (slideIndex == 1) {
                prev.classList.add("prev-btn_disable");
            } else if (slideIndex == slides.length) {
                next.classList.add("next-btn_disable");
            } else {
                prev.classList.remove("prev-btn_disable");
                next.classList.remove("next-btn_disable");
            }
        }
    }

    function plusSlides(n) {
        showSlides((slideIndex += n));
    }

    function currentSlide(n) {
        showSlides((slideIndex = n));
    }

    if (prev) {
        prev.addEventListener("click", function() {
            plusSlides(-1);
        });
    }

    if (next) {
        next.addEventListener("click", function() {
            plusSlides(1);
        });
    }

    dotsWrap.addEventListener("click", function(event) {
        for (let i = 0; i < dots.length + 1; i++) {
            if (
                (event.target.classList.contains(dotClass) ||
                    event.target.parentElement.classList.contains(dotClass)) &&
                (event.target == dots[i - 1] ||
                    event.target.parentElement == dots[i - 1])
            ) {
                currentSlide(i);
            }
        }
    });
};

export default slider;