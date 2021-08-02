const quiz = () => {
    const quizPages = document.querySelectorAll(".quiz__page"),
        btns = document.querySelectorAll(".button_quiz");

    function findIndex(arr, arrElem) {
        return Array.from(arr).findIndex((elem) => elem == arrElem);
    }

    function checkInput(page, btn) {
        const inputs = page.querySelectorAll("input:not([type=hidden])"),
            customInputs = page.querySelectorAll(".quiz__input"),
            currentValue = page.querySelector(".quiz__cur-value");

        inputs.forEach((input, i) => {
            if (input.type == "radio") {
                input.addEventListener("click", () => {
                    customInputs.forEach((item) => {
                        item.classList.remove("quiz__input_checked");
                    });
                    customInputs[i].classList.add("quiz__input_checked");
                    if (btn.disabled) {
                        btn.firstChild.remove();
                        btn.removeAttribute("disabled");
                    }
                });
            } else if (input.type == "range") {
                if (window.screen.width > 1200) {
                    input.addEventListener("click", () => {
                        currentValue.innerHTML = `${input.value}м<sup>2</sup>`;
                        if (btn.disabled) {
                            btn.firstChild.remove();
                            btn.removeAttribute("disabled");
                        }
                    });
                } else {
                    input.addEventListener("touchend", () => {
                        currentValue.innerHTML = `${input.value}м<sup>2</sup>`;
                        if (btn.disabled) {
                            btn.firstChild.remove();
                            btn.removeAttribute("disabled");
                        }
                    });
                }
            }
        });
    }

    function showQuizPage(page, index, btn) {
        const progressBar = page.querySelector(".quiz__steps-progress"),
            progressBack = page.querySelector(".quiz__steps");

        quizPages.forEach((item) => {
            item.classList.remove("quiz__page_active");
        });
        page.classList.add("quiz__page_active");

        progressBar.style.width = `${
      (getComputedStyle(progressBack).width.slice(0, 3) / quizPages.length) *
      (index + 1)
    }px`;
        checkInput(page, btn);
    }

    function openNextPage(btns) {
        btns.forEach((btn, i) => {
            btn.addEventListener("click", (event) => {
                event.preventDefault();
                showQuizPage(
                    quizPages[i + 1],
                    findIndex(quizPages, quizPages[i + 1]),
                    btns[i + 1]
                );
            });
        });
    }

    function setSertificateValidEndDate() {
        const validEndDateElem = document.querySelector(
                ".quiz__sertificate-valid span"
            ),
            monthSet = [
                "января",
                "февраля",
                "марта",
                "апреля",
                "мая",
                "июня",
                "июля",
                "августа",
                "сентября",
                "октября",
                "ноября",
                "декабря",
            ],
            validEndDate = new Date(),
            now = new Date();
        let day = 0,
            month = 0,
            year = 0;

        validEndDate.setDate(now.getDate() + 14);
        day = validEndDate.getDate();
        month = validEndDate.getMonth();
        year = validEndDate.getFullYear();
        validEndDateElem.textContent = `${day} ${monthSet[month]} ${year}`;
    }

    showQuizPage(quizPages[0], findIndex(quizPages, quizPages[0]), btns[0]);
    openNextPage(btns);
    setSertificateValidEndDate();
};

export default quiz;