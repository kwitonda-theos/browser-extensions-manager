let darkTheme = document.querySelector(".dark")
let lightTheme = document.querySelector(".light")
let body = document.querySelector("body")
let boxes = document.querySelectorAll(".boxes")

// switch themes
darkTheme.addEventListener("click", () => {
    body.classList.add("light-mode")
    boxes.forEach(box => {
        box.classList.add("light-mode")
    })
    darkTheme.style.display = "none"
    lightTheme.style.display = "block"
})

lightTheme.addEventListener("click", () => {
    body.classList.remove("light-mode")
    lightTheme.style.display = "none"
    darkTheme.style.display = "block"
})