let share  = document.getElementById("shareButton");
let socials = document.getElementById("socialShare");
let mobileShare = document.querySelector(".mobile-share")
let infoDetails = document.querySelector(".info-details")
share.addEventListener('click' , ()=>{
    console.log("share button clicked")
    socials.classList.toggle("show-share");
    share.classList.toggle("share-toggle");
    infoDetails.classList.toggle("show-details")
    socials.classList.toggle("move-up")
});
mobileShare.addEventListener("click",()=>{
    console.log("I AM BEEN CLICKED ON THE MOBILE")
    socials.classList.toggle("show-share")
        infoDetails.classList.toggle("show-details")
        socials.classList.toggle("move-up")
});