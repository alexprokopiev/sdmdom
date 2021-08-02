const sendmail = () => {
    let form = document.querySelectorAll("form"),
        overlays = document.querySelectorAll(".modal"),
        input = document.querySelectorAll("input[name=phone]"),
        thanks = document.querySelector(".thanks");

    function showThanks() {
        overlays.forEach((overlay) => {
            if (overlay.firstChild.lastChild.classList.contains("thanks")) {
                overlay.style.display = "flex";
                overlay.style.opacity = 1;
                thanks.style.display = "flex";
                thanks.style.opacity = 1;
            } else {
                overlay.firstChild.lastChild.style.opacity = 0;
                overlay.firstChild.lastChild.style.display = "none";
                overlay.style.opacity = 0;
                overlay.style.display = "none";
            }
        });
    }

    form.forEach(function(formItem) {
        formItem.addEventListener("submit", function(event) {
            event.preventDefault();
            let formData = new FormData(formItem);

            function postData(data) {
                let request = new XMLHttpRequest();
                request.open("POST", "sendmail.php");

                request.addEventListener("readystatechange", function() {
                    if (request.readyState === 4 && request.status == 200) {
                        showThanks();
                    }
                });

                request.send(data);
            }

            function clearInput() {
                for (let x = 0; x < input.length; x++) {
                    input[x].value = "";
                }
            }

            postData(formData);
            clearInput();
        });
    });
};

export default sendmail;