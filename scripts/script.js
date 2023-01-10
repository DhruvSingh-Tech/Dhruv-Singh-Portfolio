function responsivenav(hams){
    let nav = document.getElementById('getNav')
    let hamu = hams.children
    // console.log("before if: " + nav.classList)
    if(nav.classList != "nv_cont resp" && nav.classList != "nv_cont slideback resp"){
        nav.classList.add("resp")
        
        hamu[0].classList.add('resp')
        hamu[1].classList.add('resp')
        // console.log(nav.classList)
    }else{
        hamu[0].classList.remove('resp')
        hamu[1].classList.remove('resp')
        nav.classList.remove("resp")
        nav.classList.add("slideback")        
    }
}


const typedTextSpan = document.getElementById('dvtxt');
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Student", "Web Designer", "Programmer"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
  	setTimeout(erase, newTextDelay);
  }
}

function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});