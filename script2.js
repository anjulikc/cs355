const username = document.getElementById("username2")
const years = document.getElementById("years2")

const params = new URLSearchParams(window.location.search)
const usernameValue = params.get("username")
const yearsValue = params.get("years")

username.textContent = usernameValue;
years.textContent = yearsValue;

const toggle = document.getElementById("toggle");
const main = document.getElementById("main");

let mode = localStorage.getItem("mode");
console.log("Mode theme", mode)
if (mode === "light") {
    main.classList.remove("main-dark")
    main.classList.add("main-light")
} else {
    main.classList.remove("main-light")
    main.classList.add("main-dark")
}


const changeMode = (event) => {
    mode = mode === "light" ? "dark" : "light";
    if (mode === "light") {
        main.classList.remove("main-dark")
        main.classList.add("main-light")
    } else {
        main.classList.remove("main-light")
        main.classList.add("main-dark")
    }
    console.log("clicked")
    localStorage.setItem("mode", mode)
}

toggle.addEventListener("click", changeMode)