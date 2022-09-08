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
