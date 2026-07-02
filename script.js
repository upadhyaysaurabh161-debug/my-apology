// ==========================================
// MADE WITH LOVE
// PART 1
// ==========================================

window.addEventListener("load", () => {

const loader=document.getElementById("loader");

if(loader){

setTimeout(()=>{

loader.style.opacity="0";

loader.style.visibility="hidden";

},1500);

}

});

// ==========================================
// MUSIC
// ==========================================

const music=document.getElementById("bgMusic");

const musicBtn=document.getElementById("musicBtn");

let playing=false;

if(musicBtn){

musicBtn.onclick=async()=>{

try{

if(!playing){

await music.play();

musicBtn.innerHTML="⏸";

}else{

music.pause();

musicBtn.innerHTML="🎵";

}

playing=!playing;

}catch(e){

console.log(e);

}

};

}

// ==========================================
// HERO BUTTON
// ==========================================

const heroBtn=document.querySelector(".hero-btn");

if(heroBtn){

heroBtn.onclick=()=>{

document.getElementById("envelopeScene")

.scrollIntoView({

behavior:"smooth"

});

};

}

// ==========================================
// ENVELOPE
// ==========================================

const envelope=document.getElementById("envelope");

if(envelope){

envelope.onclick=()=>{

envelope.classList.toggle("open");

};

}

// ==========================================
// LETTER TYPING
// ==========================================

const typing=document.getElementById("typingText");

const message=`Dear Nikita,

I know I made mistakes.

This website wasn't built
to change your decision.

It was built because
some feelings deserved
more than a text.

Thank you
for every smile,
every laugh,
every memory.

I genuinely wish
you happiness.

With Love,

Saurabh ❤️`;

let index=0;

function typeLetter(){

if(!typing) return;

if(index<message.length){

typing.innerHTML+=message.charAt(index);

index++;

setTimeout(typeLetter,35);

}

}

if(typing){

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

typeLetter();

observer.disconnect();

}

});

});

observer.observe(typing);

}

// ==========================================
// FLOATING ENVELOPE
// ==========================================

if(envelope){

setInterval(()=>{

envelope.style.transform="translateY(-10px)";

setTimeout(()=>{

envelope.style.transform="translateY(0px)";

},1800);

},3500);

}
// ==========================================
// MOUSE HEARTS
// ==========================================

document.addEventListener("mousemove",(e)=>{

if(Math.random()>0.70){

const heart=document.createElement("div");

heart.className="mouse-heart";

heart.innerHTML="❤️";

heart.style.left=e.clientX+"px";

heart.style.top=e.clientY+"px";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},900);

}

});


// ==========================================
// HEART BURST ON CLICK
// ==========================================

document.addEventListener("click",(e)=>{

for(let i=0;i<10;i++){

const heart=document.createElement("div");

heart.className="mouse-heart";

heart.innerHTML="❤️";

heart.style.left=e.clientX+"px";

heart.style.top=e.clientY+"px";

heart.style.transform=`
translate(
${Math.random()*140-70}px,
${Math.random()*140-70}px
)
scale(${Math.random()+0.5})
`;

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},1000);

}

});


// ==========================================
// ROSE PETALS
// ==========================================

function createPetal(){

const petal=document.createElement("div");

petal.className="petal";

petal.style.left=Math.random()*window.innerWidth+"px";

petal.style.animationDuration=

5+Math.random()*5+"s";

petal.style.opacity=

0.5+Math.random();

petal.style.transform=

`rotate(${Math.random()*360}deg)`;

document.body.appendChild(petal);

setTimeout(()=>{

petal.remove();

},10000);

}

setInterval(createPetal,600);


// ==========================================
// TWINKLING STARS
// ==========================================

function createStar(){

const star=document.createElement("div");

star.className="star";

star.style.left=Math.random()*window.innerWidth+"px";

star.style.top=Math.random()*window.innerHeight+"px";

star.style.animationDuration=

1+Math.random()*3+"s";

document.body.appendChild(star);

setTimeout(()=>{

star.remove();

},3500);

}

setInterval(createStar,250);


// ==========================================
// SCROLL REVEAL
// ==========================================

const reveal=document.querySelectorAll(

".journey-card,.gallery-card,.timeline-item,.memory-image,.memory-text,#paper,.quote-container"

);

const revealObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("active");

}

});

},

{

threshold:0.15

});

reveal.forEach(item=>{

item.classList.add("reveal");

revealObserver.observe(item);

});


// ==========================================
// HERO PARALLAX
// ==========================================

const hero=document.querySelector(".hero-content");

document.addEventListener("mousemove",(e)=>{

if(!hero) return;

const x=(window.innerWidth/2-e.clientX)/60;

const y=(window.innerHeight/2-e.clientY)/60;

hero.style.transform=

`translate(${x}px,${y}px)`;

});
// ==========================================
// SECRET POPUP
// ==========================================

const secretBtn = document.getElementById("secretBtn");
const popup = document.getElementById("secretPopup");
const closePopup = document.getElementById("closePopup");

if(secretBtn && popup){

secretBtn.addEventListener("click",()=>{

popup.classList.add("active");

});

}

if(closePopup && popup){

closePopup.addEventListener("click",()=>{

popup.classList.remove("active");

});

}

if(popup){

popup.addEventListener("click",(e)=>{

if(e.target===popup){

popup.classList.remove("active");

}

});

}


// ==========================================
// MUSIC BUTTON ANIMATION
// ==========================================

if(musicBtn){

setInterval(()=>{

musicBtn.style.transform="scale(1.08)";

setTimeout(()=>{

musicBtn.style.transform="scale(1)";

},250);

},2500);

}


// ==========================================
// HEART GLOW
// ==========================================

function pulseHeart(){

const hearts=document.querySelectorAll(".seal,.loader-heart");

hearts.forEach((heart)=>{

heart.animate([

{

transform:"translate(-50%,-50%) scale(1)"

},

{

transform:"translate(-50%,-50%) scale(1.18)"

},

{

transform:"translate(-50%,-50%) scale(1)"

}

],{

duration:1200

});

});

}

setInterval(pulseHeart,1500);


// ==========================================
// FLOATING BACKGROUND
// ==========================================

let move=0;

setInterval(()=>{

move+=0.15;

const stars=document.getElementById("stars");

if(stars){

stars.style.transform=`translateY(${move}px)`;

}

},40);


// ==========================================
// SCROLL INDICATOR
// ==========================================

window.addEventListener("scroll",()=>{

const scroll=window.scrollY;

const hero=document.querySelector(".hero");

if(hero){

hero.style.opacity=Math.max(0,1-scroll/700);

}

});


// ==========================================
// BUTTON HOVER EFFECT
// ==========================================

document.querySelectorAll("button").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="translateY(-4px) scale(1.03)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="translateY(0) scale(1)";

});

});


// ==========================================
// ENVELOPE AUTO FLOAT
// ==========================================

if(envelope){

let direction=1;

setInterval(()=>{

const current=envelope.style.marginTop || "0px";

let value=parseInt(current)||0;

value+=direction;

if(value>8){

direction=-1;

}

if(value<0){

direction=1;

}

envelope.style.marginTop=value+"px";

},80);

}


// ==========================================
// ENDING FADE
// ==========================================

const ending=document.getElementById("ending");

if(ending){

const endObserver=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

ending.animate([

{

opacity:0,

transform:"translateY(80px)"

},

{

opacity:1,

transform:"translateY(0)"

}

],{

duration:1200,

fill:"forwards"

});

}

});

});

endObserver.observe(ending);

}


// ==========================================
// CONSOLE MESSAGE 😄
// ==========================================

console.log("❤️ Made with love by shaurya ❤️");
