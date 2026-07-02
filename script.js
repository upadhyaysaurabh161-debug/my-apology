const message = "Every heartbeat still whispers your name...";

let i = 0;

const typing = document.querySelector(".typing");

function type() {

if(i < message.length){

typing.innerHTML += message.charAt(i);

i++;

setTimeout(type,70);

}

}

type();

const btn = document.getElementById("start");

const letter = document.querySelector(".letter");

btn.onclick = ()=>{

letter.classList.remove("hidden");

letter.scrollIntoView({

behavior:"smooth"

});

};

function hearts(){

const heart = document.createElement("div");

heart.className="heart";

heart.innerHTML=["❤️","🤍","✨","🌹"][Math.floor(Math.random()*4)];

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(Math.random()*25+15)+"px";

heart.style.animationDuration=(Math.random()*5+5)+"s";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},10000);

}

setInterval(hearts,300);

const particles=document.getElementById("particles");

for(let i=0;i<120;i++){

const star=document.createElement("div");

star.style.position="absolute";

star.style.width=Math.random()*3+1+"px";

star.style.height=star.style.width;

star.style.borderRadius="50%";

star.style.background="white";

star.style.opacity=Math.random();

star.style.left=Math.random()*100+"%";

star.style.top=Math.random()*100+"%";

star.style.animation=`twinkle ${Math.random()*4+2}s infinite`;

particles.appendChild(star);

}

const style=document.createElement("style");

style.innerHTML=`

@keyframes twinkle{

0%{opacity:.2;transform:scale(.5);}

50%{opacity:1;transform:scale(1.6);}

100%{opacity:.2;transform:scale(.5);}

}

`;

document.head.appendChild(style);

document.body.addEventListener("mousemove",(e)=>{

const glow=document.createElement("div");

glow.style.position="fixed";

glow.style.left=e.clientX+"px";

glow.style.top=e.clientY+"px";

glow.style.width="8px";

glow.style.height="8px";

glow.style.borderRadius="50%";

glow.style.background="#ff5d8f";

glow.style.pointerEvents="none";

glow.style.boxShadow="0 0 25px #ff5d8f";

glow.style.opacity=".8";

document.body.appendChild(glow);

setTimeout(()=>{

glow.remove();

},500);

});
