const myBtn = document.getElementById("myBtn");

const myPopover = document.getElementById("myPopover");
const closeBtn = document.getElementById("closeBtn");

myBtn.addEventListener("click",function(){
    myPopover.classList.add("active");
});


closeBtn.addEventListener("click",function(){
    myPopover.classList.remove("active");
});