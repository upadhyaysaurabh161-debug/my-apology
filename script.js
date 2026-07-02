// ==============================
// PROJECT AURORA
// ==============================

// Loader

window.addEventListener("load", () => {

const loader = document.getElementById("loader");

setTimeout(() => {

loader.style.opacity = "0";

loader.style.visibility = "hidden";

},1500);

});


// ==============================
// MUSIC
// ==============================

const musicBtn = document.getElementById("musicBtn");

const bgMusic = document.getElementById("bgMusic");

let musicPlaying = false;

musicBtn.addEventListener("click",async()=>{

try{

if(!musicPlaying){

await bgMusic.play();

musicBtn.innerHTML="⏸";

}else{

bgMusic.pause();

musicBtn.innerHTML="🎵";

}

musicPlaying=!musicPlaying;

}catch(e){

console.log(e);

}

});


// ==============================
// ENVELOPE
// ==============================

const envelope=document.getElementById("envelope");

const letter=document.getElementById("letterSection");

envelope.addEventListener("click",()=>{

envelope.classList.toggle("open");

setTimeout(()=>{

letter.scrollIntoView({

behavior:"smooth"

});

},700);

});


// ==============================
// LETTER
// ==============================

const typing=document.getElementById("typingText");

const message=`Dear Nikita,

I know I made mistakes.

This website wasn't created
to change your decision.

It was only created
because some feelings deserved
more than a simple text.

Thank you
for every smile,
every laugh
and every memory.

I'm truly sorry.

I wish you
nothing but happiness.

With Love,

Saurabh ❤️`;

let index=0;

function typeLetter(){

if(index<message.length){

typing.innerHTML+=message.charAt(index);

index++;

setTimeout(typeLetter,35);

}

}

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

typeLetter();

}

});

});

observer.observe(typing);


// ==============================
// FALLING FLOWERS
// ==============================

function createFlower(){

const flower=document.createElement("div");

flower.className="petal";

flower.style.left=Math.random()*window.innerWidth+"px";

flower.style.animationDuration=4+Math.random()*5+"s";

document.body.appendChild(flower);

setTimeout(()=>{

flower.remove();

},9000);

}

setInterval(createFlower,500);
// ==============================
// MOUSE HEART EFFECT
// ==============================

document.addEventListener("mousemove",function(e){

if(Math.random()>0.65){

const heart=document.createElement("div");

heart.className="mouse-heart";

heart.innerHTML="❤️";

heart.style.left=e.clientX+"px";

heart.style.top=e.clientY+"px";

document.body.appendChild(heart);

setTimeout(function(){

heart.remove();

},800);

}

});


// ==============================
// HEART PARTICLES ON CLICK
// ==============================

document.addEventListener("click",function(e){

for(let i=0;i<8;i++){

const heart=document.createElement("div");

heart.className="mouse-heart";

heart.innerHTML="❤️";

heart.style.left=e.clientX+"px";

heart.style.top=e.clientY+"px";

heart.style.transform=
`translate(
${Math.random()*100-50}px,
${Math.random()*100-50}px
)`;

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},1000);

}

});


// ==============================
// SCROLL REVEAL
// ==============================

const revealItems=document.querySelectorAll(

".journey-card,.gallery-card,.timeline-item,.memory-image,.memory-text,#paper"

);

const revealObserver=new IntersectionObserver(function(entries){

entries.forEach(function(entry){

if(entry.isIntersecting){

entry.target.classList.add("active");

}

});

},

{

threshold:0.15

});

revealItems.forEach(function(item){

item.classList.add("reveal");

revealObserver.observe(item);

});


// ==============================
// SECRET POPUP
// ==============================

const secretBtn=document.getElementById("secretBtn");

const popup=document.getElementById("secretPopup");

const closePopup=document.getElementById("closePopup");

if(secretBtn){

secretBtn.addEventListener("click",function(){

popup.classList.add("active");

});

}

if(closePopup){

closePopup.addEventListener("click",function(){

popup.classList.remove("active");

});

}

if(popup){

popup.addEventListener("click",function(e){

if(e.target===popup){

popup.classList.remove("active");

}

});

}


// ==============================
// BUTTON RIPPLE EFFECT
// ==============================

const buttons=document.querySelectorAll("button");

buttons.forEach(function(btn){

btn.addEventListener("click",function(e){

const ripple=document.createElement("span");

ripple.className="ripple";

const rect=btn.getBoundingClientRect();

ripple.style.left=(e.clientX-rect.left)+"px";

ripple.style.top=(e.clientY-rect.top)+"px";

btn.appendChild(ripple);

setTimeout(function(){

ripple.remove();

},600);

});

});


// ==============================
// HERO BUTTON
// ==============================

const startStory=document.getElementById("startStory");

if(startStory){

startStory.addEventListener("click",function(){

document.getElementById("envelopeScene").scrollIntoView({

behavior:"smooth"

});

});

}
// ==============================
// TWINKLING STARS
// ==============================

function createStar(){

const star=document.createElement("div");

star.className="star";

star.style.left=Math.random()*window.innerWidth+"px";

star.style.top=Math.random()*window.innerHeight+"px";

star.style.animationDuration=1+Math.random()*3+"s";

document.body.appendChild(star);

setTimeout(function(){

star.remove();

},4000);

}

setInterval(createStar,250);


// ==============================
// HEART GLOW
// ==============================

const hearts=document.querySelectorAll(".loader-heart,.seal");

setInterval(function(){

hearts.forEach(function(item){

item.style.transform="scale(1.15)";

setTimeout(function(){

item.style.transform="scale(1)";

},300);

});

},1500);


// ==============================
// FLOATING ENVELOPE
// ==============================

if(envelope){

setInterval(function(){

envelope.style.transform="translateY(-8px)";

setTimeout(function(){

envelope.style.transform="translateY(0px)";

},1200);

},2400);

}


// ==============================
// HERO PARALLAX
// ==============================

document.addEventListener("mousemove",function(e){

const hero=document.querySelector(".hero-content");

if(!hero) return;

const x=(window.innerWidth/2-e.clientX)/60;

const y=(window.innerHeight/2-e.clientY)/60;

hero.style.transform=
"translate("+x+"px,"+y+"px)";

});


// ==============================
// SCROLL TO TOP
// ==============================

window.addEventListener("scroll",function(){

if(window.scrollY>300){

musicBtn.style.opacity="1";

}else{

musicBtn.style.opacity="0.9";

}

});


// ==============================
// ENDING FADE
// ==============================

const ending=document.getElementById("ending");

if(ending){

const endingObserver=new IntersectionObserver(function(entries){

entries.forEach(function(entry){

if(entry.isIntersecting){

ending.style.opacity="1";

ending.style.transform="translateY(0px)";

}

});

});

endingObserver.observe(ending);

}


// ==============================
// CONSOLE MESSAGE 😄
// ==============================

console.log("❤️ made with love by shaurya ❤️");
