let state = "todo"


let iframe = document.querySelector("iframe")

let h6 = document.querySelector(".author")
let app = document.querySelector(".application")
let nav = document.querySelector(".nav-profile")


const changeState = s => {
    if (s === "todo") {
        iframe.src = "todo.html"
        iframe.src = "todo.html"
        h6.innerHTML = "Monishkumar L R"
        nav.innerHTML = "Monishkumar L R"
        app.innerHTML = "Todo List"
    } else if (s === "loan") {
        iframe.src = "typography.html"
        h6.innerHTML = "Muhamed Abid S"
        nav.innerHTML = "Muhamed Abid S"
        app.innerHTML = "Loan Calculator"
    } else if (s === "curr") {
        iframe.src = "chart.html"
        h6.innerHTML = "Shiva Dharshini K"
        nav.innerHTML = "Shiva Dharshini K"
        app.innerHTML = "Currency Convertor"
    } else if (s === "temp") {
        iframe.src = "element.html"
        h6.innerHTML = "Mounika M K"
        nav.innerHTML = "Mounika M K"
        app.innerHTML = "Temperature Convertor"
    } else if (s === "img") {
        iframe.src = "form.html"
        h6.innerHTML = "Vinita V"
        nav.innerHTML = "Vinita V"
        app.innerHTML = "Image Slide"
    }
}