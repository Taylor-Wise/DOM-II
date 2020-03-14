// Your code goes here

const tileImg1 = document.querySelectorAll(".img-content img")[0]

tileImg1.addEventListener("mouseenter", () => {
    tileImg1.src = "https://www.specim.fi/wp-content/uploads/2017/04/top10airborne_feature.jpg"
})

tileImg1.addEventListener("mouseleave", () => {
    tileImg1.src = "https://static.wixstatic.com/media/f84b209469da4471b60850dc411d770b.jpg/v1/fill/w_1960,h_1600,al_c,q_90,usm_0.66_1.00_0.01/f84b209469da4471b60850dc411d770b.webp"
})//
console.log(tileImg1)

const body = document.querySelector("body")
window.addEventListener("resize", () => {
body.style.backgroundColor = "Turquoise";
})