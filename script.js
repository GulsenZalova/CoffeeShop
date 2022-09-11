const menu=document.querySelector(".menu");
const close=document.querySelector(".close");
const navbar=document.querySelector(".navbar");
const searchArea=document.querySelector(".search-area")
const headerSearchArea=document.querySelector(".header-search-area")
const bag =document.querySelector(".bag")
const headerShopCarts=document.querySelector(".header-shop-carts")
const closeIcon=document.querySelector(".close-icon")


menu.addEventListener("click",function(){
    navbar.classList.add("active")
    headerSearchArea.classList.remove("show")
    
})
close.addEventListener("click",function(){
    navbar.classList.remove("active")
})

bag.addEventListener("click",function(){
    headerShopCarts.classList.add("active")
    headerSearchArea.classList.remove("show")
})
closeIcon.addEventListener("click",function(){
    headerShopCarts.classList.remove("active")
})

searchArea.addEventListener("click",function(){
    headerSearchArea.classList.toggle("show")
}
)


// Home Section Slider
const homeSlide=document.querySelector(".home-slide")
const slides=document.querySelectorAll(".home-slide")
const auto=true
let interval
const nextSlide=()=>{
    const activeSlide=document.querySelector(".active")
    activeSlide.classList.remove("active")
    if(activeSlide.nextElementSibling){
        activeSlide.nextElementSibling.classList.add("active")
    }else{
        slides[0].classList.add("active")
    }
}

if(auto){
    interval=setInterval(nextSlide, 4000);
}