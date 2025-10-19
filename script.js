const darkTheme = document.querySelector(".dark")
const lightTheme = document.querySelector(".light")
const body = document.querySelector("body")
const boxes = document.querySelectorAll(".boxes")
const removeButtons = document.querySelectorAll(".remove")
const header = document.querySelector("header")
const main = document.querySelector("main")
const filterInput = document.querySelectorAll(".filter-buttons")
const boxDescriptionP = document.querySelectorAll("p")


// switch themes
if (lightTheme) {
    lightTheme.addEventListener("click", () => {
    body.classList.add("light-mode")

    boxes.forEach(box => {
        box.classList.add("boxes-light-mode")
        
    })
    // buttons
    removeButtons.forEach(button => {
        button.style.backgroundColor = "white"
        button.style.color = "black"
        button.style.border = "1px solid rgb(216, 216, 216)"
        button.style.transition = "background-color 0.3s ease"
        button.addEventListener("mouseover", () => {
            button.style.backgroundColor = "hsl(0, 0%, 93%)"
        })
        button.addEventListener("mouseout", () => {
            button.style.backgroundColor = "white"
        })
        
    })
    // filter input
    filterInput.forEach(input => {
        
        input.classList.add("filter-buttons-light")
    })
    // box description paragraph
    boxDescriptionP.forEach(p => {
        p.style.color = "#000"
    })
    // header
    
    header.classList.add("header-light-mode")
    
    //main section
    main.classList.add("main-light-mode")
    // icon toggle
    darkTheme.style.display = "block"
    lightTheme.style.display = "none"
})
}
if (darkTheme) {
    darkTheme.addEventListener("click", () => {
    body.classList.remove("light-mode") 
    boxes.forEach(box => {
        box.classList.remove("boxes-light-mode")
    })
    // buttons
    removeButtons.forEach(button => {  
        button.style.backgroundColor = ""
        button.style.color = ""
        button.style.border = ""
    })
    // filter input
    filterInput.forEach(input => {
        input.classList.remove("filter-buttons-light")
    })
    // box description paragraph
    boxDescriptionP.forEach(p => {
        p.style.color = ""
    })
    // header
    header.classList.remove("header-light-mode")
    // main section
    main.classList.remove("main-light-mode")
    // icon toggle
    darkTheme.style.display = "none"
    lightTheme.style.display = "block"
})
}


// classes for extension objects
class extension{
    constructor(image, name, description){
        this.image = image
        this.name = name
        this.description = description
    }
    

}
const extensionsList = []

// sample extensions
const ext1 = new extension("assets/images/logo-devlens.svg","Devlens","Quickly inspect page layouts and <br>visualize element boundaries")
boxes.forEach(box => {
    box.style.backgroundColor = "hsl(226, 25%, 17%)"
})
