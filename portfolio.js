const Hello = document.getElementById("hello");
const HelloDiv = document.getElementById("hello-div");
 const HandMove =Hello.addEventListener("mouseover", function(){
    HelloDiv.innerHTML = "Hello there";
})
const HandLeave = Hello.addEventListener("mouseleave", function(){
     HelloDiv.innerHTML="";}
);
// if (HandMove = true){ 
//     HelloDiv.innerHTML="hello mike"
// }
// else if(HandLeave=true) {
//     HelloDiv.innerHTML=""
// }
document.querySelector(".barsCont").addEventListener("click", ()=>{
  
     document.querySelector(".navigate").classList.toggle("active");
 document.querySelector(".barsCont").classList.toggle("active");
})