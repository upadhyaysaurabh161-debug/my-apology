// ===============================
// PREMIUM APOLOGY WEBSITE
// VERSION 2.0
// ===============================

// LOADER

window.addEventListener("load",()=>{

const loader=document.getElementById("loader");

setTimeout(()=>{

loader.style.opacity="0";

loader.style.pointerEvents="none";

setTimeout(()=>{

loader.remove();

},1500);

},2500);

});

// MUSIC

const music=document.getElementById("bgMusic");

const musicButton=document.getElementById("musicButton");

let playing=false;

musicButton.addEventListener("click",()=>{

if(!playing){

music.play();

musicButton.innerHTML="⏸";

playing=true;

}else{

music.pause();

musicButton.innerHTML="🎵";

playing=false;

}

});

// STARS

const stars=document.getElementById("stars");

for(let i=0;i<400;i++){

const star=document.createElement("span");

star.className="star";

star.style.left=Math.random()*100+"vw";

star.style.top=Math.random()*100+"vh";

const size=Math.random()*3+1;

star.style.width=size+"px";

star.style.height=size+"px";

star.style.animationDelay=Math.random()*5+"s";

stars.appendChild(star);

}

// BUTTON

const begin=document.getElementById("begin");

const envelopeSection=document.getElementById("envelopeSection");

begin.addEventListener("click",()=>{

envelopeSection.scrollIntoView({

behavior:"smooth"

});

});

// ENVELOPE

const envelope=document.getElementById("envelope");

const letter=document.getElementById("letterSection");

let opened=false;

envelope.addEventListener("click",()=>{

if(opened) return;

opened=true;

envelope.classList.add("open");

setTimeout(()=>{

letter.scrollIntoView({

behavior:"smooth"

});

typeLetter();

},1800);

});

// LETTER

const message=`

Dear Nikita,

I don't know if you'll read every word.

Maybe this changes nothing.

Maybe it changes everything.

But I wanted my apology to be more than just another text.

Looking back...

I realise that there were moments

when I should have listened.

Moments

when I should have understood you better.

Instead...

I reacted.

I wasn't trying to win.

I was trying

to protect

what I believed

was our love.

For every tear,

every disappointment,

every moment

where I made you feel unheard...

I'm truly sorry.

Thank you

for every smile,

every laugh,

every hug,

every memory.

No matter where life takes us,

those memories

will always stay

close to my heart.

I'm not writing this

to change your decision.

I'm writing this

because

you deserved

a genuine apology.

Take care of yourself.

Always.

❤️

Saurabh

`;

const typing=document.querySelector(".typing");

let index=0;

function typeLetter(){

typing.innerHTML="";

function write(){

if(index<message.length){

typing.innerHTML+=message.charAt(index);

index++;

setTimeout(write,35);

}

}

write();

}

// HEARTBEAT

setInterval(()=>{

const title=document.querySelector(".hero h1");

title.style.transform="scale(1.03)";

setTimeout(()=>{

title.style.transform="scale(1)";

},250);

},2200);

// PARALLAX

window.addEventListener("mousemove",(e)=>{

const x=e.clientX/window.innerWidth;

const y=e.clientY/window.innerHeight;

document.getElementById("galaxy").style.transform=

`translate(${x*15}px,${y*15}px) scale(1.08)`;

});

// FADE

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0px)";

}

});

});

document.querySelectorAll("section").forEach(sec=>{

sec.style.opacity="0";

sec.style.transform="translateY(60px)";

sec.style.transition="1.3s";

observer.observe(sec);

});
/* ==========================
ROSE PETALS
========================== */

function createPetal(){

const petal=document.createElement("div");

petal.className="petal";

petal.innerHTML="🌹";

petal.style.left=Math.random()*100+"vw";

petal.style.fontSize=(18+Math.random()*20)+"px";

petal.style.animationDuration=(6+Math.random()*5)+"s";

document.body.appendChild(petal);

setTimeout(()=>{

petal.remove();

},12000);

}

setInterval(createPetal,700);


/* ==========================
SHOOTING STARS
========================== */

function shootingStar(){

const star=document.createElement("div");

star.className="shooting";

star.style.left=Math.random()*70+"vw";

star.style.top=Math.random()*30+"vh";

document.body.appendChild(star);

setTimeout(()=>{

star.remove();

},1500);

}

setInterval(shootingStar,5000);


/* ==========================
CURSOR GLOW
========================== */

document.addEventListener("mousemove",(e)=>{

const glow=document.createElement("div");

glow.className="cursorGlow";

glow.style.left=e.clientX+"px";

glow.style.top=e.clientY+"px";

document.body.appendChild(glow);

setTimeout(()=>{

glow.remove();

},500);

});
