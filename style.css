// ===== OPEN LETTER =====

const button = document.getElementById("openLetter");
const letter = document.getElementById("letter");

button.addEventListener("click",()=>{

letter.classList.remove("hidden");

letter.scrollIntoView({
behavior:"smooth"
});

});

// ===== STARS =====

const stars = document.getElementById("stars");

for(let i=0;i<250;i++){

const star=document.createElement("div");

star.className="star";

star.style.left=Math.random()*100+"vw";

star.style.top=Math.random()*100+"vh";

star.style.animationDelay=Math.random()*5+"s";

star.style.opacity=Math.random();

star.style.width=(Math.random()*3+1)+"px";

star.style.height=star.style.width;

stars.appendChild(star);

}

// ===== FLOATING HEARTS =====

function createHeart(){

const heart=document.createElement("div");

heart.className="heart";

const hearts=["❤️","🤍","🌹","✨"];

heart.innerHTML=hearts[Math.floor(Math.random()*hearts.length)];

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(Math.random()*20+15)+"px";

heart.style.animationDuration=(Math.random()*4+6)+"s";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},10000);

}

setInterval(createHeart,350);

// ===== SHOOTING STARS =====

function shootingStar(){

const star=document.createElement("div");

star.style.position="fixed";

star.style.width="2px";

star.style.height="120px";

star.style.background="linear-gradient(white,transparent)";

star.style.left=Math.random()*100+"vw";

star.style.top="-100px";

star.style.transform="rotate(35deg)";

star.style.opacity=".8";

star.style.zIndex="999";

star.style.transition="all 1.5s linear";

document.body.appendChild(star);

setTimeout(()=>{

star.style.top="120vh";

star.style.left=(parseFloat(star.style.left)+20)+"vw";

},100);

setTimeout(()=>{

star.remove();

},1800);

}

setInterval(shootingStar,5000);

// ===== CURSOR GLOW =====

document.addEventListener("mousemove",(e)=>{

const glow=document.createElement("div");

glow.style.position="fixed";

glow.style.left=e.clientX+"px";

glow.style.top=e.clientY+"px";

glow.style.width="8px";

glow.style.height="8px";

glow.style.borderRadius="50%";

glow.style.background="#ff5d8f";

glow.style.boxShadow="0 0 20px #ff5d8f";

glow.style.pointerEvents="none";

glow.style.zIndex="9999";

document.body.appendChild(glow);

setTimeout(()=>{

glow.style.opacity="0";

glow.style.transform="scale(3)";

},20);

setTimeout(()=>{

glow.remove();

},500);

});

// ===== TITLE FADE =====

window.addEventListener("scroll",()=>{

const hero=document.querySelector(".hero");

hero.style.opacity=1-window.scrollY/500;

});

// ===== HEARTBEAT =====

setInterval(()=>{

const title=document.querySelector("h1");

title.style.transform="scale(1.03)";

setTimeout(()=>{

title.style.transform="scale(1)";

},300);

},1800);

// ===== TYPEWRITER EFFECT =====

const text="Every heartbeat still whispers your name...";

const small=document.querySelector(".small");

small.innerHTML="";

let i=0;

function typing(){

if(i<text.length){

small.innerHTML+=text.charAt(i);

i++;

setTimeout(typing,70);

}

}

typing();
