const darkTheme = document.querySelector(".dark")
const lightTheme = document.querySelector(".light")
const body = document.querySelector("body")
const boxes = document.querySelectorAll(".boxes")
const box = document.querySelector(".box")
const removeButtons = document.querySelectorAll(".remove")
const header = document.querySelector("header")
const main = document.querySelector("main")
const filterInput = document.querySelectorAll(".filter-buttons")
const boxDescriptionP = document.querySelectorAll("p")

document
// switch themes
if (lightTheme) {
    lightTheme.addEventListener("click", () => {

    const boxes = document.querySelectorAll(".boxes")
    const boxDescriptionP = document.querySelectorAll("p")
    const removeButtons = document.querySelectorAll(".remove")
    
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
    
    const boxes = document.querySelectorAll(".boxes")
    const boxDescriptionP = document.querySelectorAll("p")
    const removeButtons = document.querySelectorAll(".remove")
    

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
        this.addToDom()
    }
    addToDom(){ 
        const {image, name, description} = this
        // create a new box element
        const newBox = document.createElement("div")
        // add styles to the new box
        newBox.classList.add("boxes")
        // set the inner HTML of the new box
        newBox.innerHTML = `
            <div class="box-title">
        <img src="${image}" alt="${name} logo">
        <div class="box-description">
            <h3>${name}</h3>
            <p>${description}</p>
        </div>
        </div>
        <div class="box-options">
        <button class="remove">Remove</button>
        <input type="checkbox" name="" id="">
        </div>`
        
        // append the new box to the main container
        box.appendChild(newBox)

        extensionsList.push(this)
    }

}
const extensionsList =[]

// sample extensions
const ext1 = new extension("assets/images/logo-devlens.svg","Devlens","Quickly inspect page layouts and <br>visualize element boundaries")
const ext2 = new extension("assets/images/logo-style-spy.svg","StyleSpy","Instantly analyze and copy CSS <br>from any webpage element")
const ext3 = new extension("assets/images/logo-speed-boost.svg","SpeedBoost","Optimizes browser resource <usage to accelerate page loading")
const ext4 = new extension("assets/images/logo-json-wizard.svg","JSONWizard","Formats, validates, and prettifies JSON responses in-browser.")
const ext5 = new extension("assets/images/logo-tab-master-pro.svg","TabMaster Pro","Organizes browser tabs into groups and sessions.")
const ext6 = new extension("assets/images/logo-viewport-buddy.svg","ViewportBuddy","Simulates various screen resolutions directly within the browser")
const ext7 = new extension("assets/images/logo-markup-notes.svg","JGridGuides","Overlay customizable grids and alignment guides on any webpage")
const ext8 = new extension("assets/images/logo-palette-picker.svg","Palette Picker","Instantly extracts color palettes from any webpage.")
const ext9 = new extension("assets/images/logo-link-checker.svg","LinkChecker","Scans and highlights broken links on any page")
const ext10 = new extension("assets/images/logo-dom-snapshot.svg","DOM Snapshot","Capture and export DOM structures quickly")
const ext11 = new extension("assets/images/logo-console-plus.svg","ConsolePlus","Enhanced developer console with advanced filtering and logging")
