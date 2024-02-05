const $ = document.querySelector.bind(document);
const name = document.getElementById("username")
const years = document.getElementById("years");
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

// const submitForm = (event) => {
//     event.preventDefault()
//     // got to page2
//     window.location.replace("page2.html?username=" + name.value + "&" + "years=" + years.value)
//    // window.location.replace("/page2.html?username=" + name.value + "&" + "years=" + years.value)
// };

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


// $("form").addEventListener("submit", submitForm)
toggle.addEventListener("click", changeMode)