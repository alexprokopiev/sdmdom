const modal = () => {
    function bindModal(modalSelector, triggerSelector = false) {
        const modal = document.querySelector(modalSelector),
            overlays = document.querySelectorAll(".modal"),
            closeBtns = document.querySelectorAll(".modal__close"),
            trigger = document.querySelectorAll(triggerSelector),
            scroll = calcScroll();

        function calcScroll() {
            let div = document.createElement("div");
            div.style.width = "50px";
            div.style.height = "50px";
            div.style.overflowY = "scroll";
            div.style.visibility = "hidden";
            document.body.appendChild(div);
            let scrollWidth = div.offsetWidth - div.clientWidth;
            div.remove();
            return scrollWidth;
        }

        function showPopup(selector) {
            if (selector == ".popup") {
                setTimeout(() => {
                    overlays.forEach((overlay) => {
                        if (
                            overlay.firstChild.lastChild.classList.contains(selector.slice(1))
                        ) {
                            overlay.style.display = "flex";
                        }
                    });
                    modal.style.display = "flex";
                    setTimeout(() => {
                        overlays.forEach((overlay) => {
                            if (
                                overlay.firstChild.lastChild.classList.contains(
                                    selector.slice(1)
                                )
                            ) {
                                overlay.style.opacity = 1;
                            }
                        });
                        modal.style.opacity = 1;
                    }, 100);
                    document.body.style.overflow = "hidden";
                    document.body.style.marginRight = `${scroll}px`;
                }, 1500);
            }
        }
        showPopup(modalSelector);
        if (triggerSelector != false) {
            trigger.forEach((item) => {
                item.addEventListener("click", (e) => {
                    if (e.target) {
                        e.preventDefault();
                    }
                    overlays.forEach((overlay) => {
                        if (
                            overlay.firstChild.lastChild.classList.contains(
                                modalSelector.slice(1)
                            )
                        ) {
                            overlay.style.display = "flex";
                        }
                    });
                    modal.style.display = "flex";
                    setTimeout(() => {
                        overlays.forEach((overlay) => {
                            if (
                                overlay.firstChild.lastChild.classList.contains(
                                    modalSelector.slice(1)
                                )
                            ) {
                                overlay.style.opacity = 1;
                            }
                        });
                        modal.style.opacity = 1;
                    }, 100);
                    document.body.style.overflow = "hidden";
                    document.body.style.marginRight = `${scroll}px`;
                });
            });
        }
        closeBtns.forEach((closeBtn) => {
            closeBtn.addEventListener("click", () => {
                modal.style.opacity = 0;
                overlays.forEach((overlay) => {
                    overlay.style.opacity = 0;
                });
                setTimeout(() => {
                    modal.style.display = "none";
                    overlays.forEach((overlay) => {
                        overlay.style.display = "none";
                    });
                }, 500);
                document.body.style.overflow = "";
                document.body.style.marginRight = `0px`;
            });
        });
        overlays.forEach((overlay) => {
            overlay.addEventListener("click", (event) => {
                if (event.target && event.target == overlay) {
                    modal.style.opacity = 0;
                    overlay.style.opacity = 0;
                    setTimeout(() => {
                        modal.style.display = "none";
                        overlay.style.display = "none";
                    }, 500);
                    document.body.style.overflow = "";
                    document.body.style.marginRight = `0px`;
                }
            });
        });
    }
    bindModal(".popup");
    bindModal(".excursion", ".open-excursion");
    bindModal(".callback", ".open-callback");
    bindModal(".quiz", ".open-quiz");
    bindModal(".help", ".open-help");
    bindModal(".feedback_1", ".open-feedback1");
    bindModal(".feedback_2", ".open-feedback2");
    bindModal(".videoframe_1", ".open-videoframe1");
    bindModal(".videoframe_2", ".open-videoframe2");
    bindModal(".confidence", ".open-confidence");
    bindModal(".thanks");
};

export default modal;