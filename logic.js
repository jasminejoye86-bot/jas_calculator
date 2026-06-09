let btns = document.querySelectorAll(".btn");
let input = document.querySelector(".input");
let string = "";
let evaluate = false;
btns.forEach((button) => {
    button.addEventListener("click", (e) => {

        if (e.target.innerText === "=") {
            string = eval(string);
            input.value = string;
            evaluate = true;
        }
        else if (e.target.innerText === "DEL") {
            string = string.slice(0, -1);
            input.value = string;
            evaluate = false;
        }
        else if (e.target.innerText === "AC") {
            string = "";
            input.value = "";
            evaluate = false;

        }
        else {
            if (evaluate) {
                string = e.target.innerText;
                input.value = string;
                evaluate = false;
            }
            else {
                string = string + e.target.innerText;
                input.value = string;
            }

        }
    });
});
