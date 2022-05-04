const addBox = document.querySelector(".add-box");
const popupBox = document.querySelector(".popup-box");
const closeIcon = popupBox.querySelector("header i");

addBox.addEventListener("click", function(){
    popupBox.classList.add("show");
});
closeIcon.addEventListener("click", function(){
    popupBox.classList.remove("show");
});