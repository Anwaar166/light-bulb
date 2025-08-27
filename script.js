let whiteBox = document.querySelector(".whiteBox");
let button=document.querySelector("button")
let bulb = document.querySelector(".bulb2");
let redButton = document.querySelector(".redBox");
let greenButton = document.querySelector(".greenBox");
let yellowButton = document.querySelector(".yellowBox");
let shadow = document.querySelector(".shadow");
//function for all for chnaging bulb style when of and on and then alslo change button status and also add or remove shadow of bulb
function ButtonStatusAndOpacity(color){
if (bulb.classList.contains(color))
         {
          button.innerHTML="ON"
          shadow.classList.add("shodwToggle");
        bulb.classList.remove("bulb2Opacity");
    } else {
        bulb.classList.add("bulb2Opacity");
        button.innerHTML="OFF"
    }
}

// change to white
whiteBox.addEventListener("click", (event) => {
    event.preventDefault();
    bulb.classList.remove("green","yellow","red")
    bulb.classList.add("white");
    ButtonStatusAndOpacity("white")
});

// Change to Red
redButton.addEventListener("click", () => {
    bulb.classList.remove("green", "yellow","white");
    bulb.classList.add("red");
     ButtonStatusAndOpacity("red")
});

// Change to Green
greenButton.addEventListener("click", () => {
    bulb.classList.remove("red", "yellow","white");
    bulb.classList.add("green");
     ButtonStatusAndOpacity("green")
});

// Change to Yellow
yellowButton.addEventListener("click", () => {
    bulb.classList.remove("red", "green","white");
    bulb.classList.add("yellow");

     ButtonStatusAndOpacity("yellow")
});

button.addEventListener("click",()=>{
bulb.classList.remove("red", "green","white","yellow");
 button.innerHTML="OFF"
  shadow.classList.remove("shodwToggle");
    bulb.classList.add("bulb2Opacity");
})