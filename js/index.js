// Your code goes here

//increases the size of logo and changes color
const logo = document.querySelector(".logo-heading")

logo.addEventListener("mouseover", () => {
    logo.style.fontSize = "7rem";
    logo.style.color = "blue";
})

//shrinks logo to original size and color
logo.addEventListener("mouseout", () => {
    logo.style.fontSize = "4rem";
    logo.style.color = "black";
})


//img changes on mouseover, and returns to normal on mouseleave
const tileImg1 = document.querySelectorAll(".img-content img")[0]

tileImg1.addEventListener("mouseenter", () => {
    tileImg1.src = "https://www.specim.fi/wp-content/uploads/2017/04/top10airborne_feature.jpg"
})

tileImg1.addEventListener("mouseleave", () => {
    tileImg1.src = "https://static.wixstatic.com/media/f84b209469da4471b60850dc411d770b.jpg/v1/fill/w_1960,h_1600,al_c,q_90,usm_0.66_1.00_0.01/f84b209469da4471b60850dc411d770b.webp"
})

//background color change on resize
const body = document.querySelector("body")
window.addEventListener("resize", () => {
body.style.backgroundColor = "Turquoise";
})

//stopping propagation
body.addEventListener("click", () => {
    body.style.backgroundColor = "LightBlue";
})

const introColors = document.querySelector(".intro")
introColors.addEventListener("click", (event) => {
    event.target.style.backgroundColor = "greenyellow";
    event.stopPropagation();
})

// changes background to green with keydown
body.addEventListener("keydown", (event) => {
    event.target.style.background = "Green";
})

//changes background to white with keyup
body.addEventListener("keyup", (event) => {
    event.target.style.background = "white";
})


//changes h2 headers to large bold text
const h2Headers = document.querySelectorAll("h2")

h2Headers.forEach(h2 => {
    h2.addEventListener("dblclick", (event) => {
        event.target.style.fontFamily = "impact";
    })
})


//scroll color change on header and footer
const scrollHeader = document.querySelector(".main-navigation")
window.addEventListener("scroll", () => {
    scrollHeader.style.backgroundColor = "LightGreen";
})

const scrollFooter = document.querySelector(".footer")
window.addEventListener("scroll", () => {
    scrollFooter.style.backgroundColor = "LightGreen";
})



//prevent default on links
const links = document.querySelectorAll(".nav-link")
links.forEach(link => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        event.target.style.fontSize = "2rem";
        console.log("This is being prevented by preventDefault")
    })
})

