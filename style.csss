*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:'Poppins',sans-serif;
}

html{
scroll-behavior:smooth;
}

body{

background:#030712;
color:white;
overflow-x:hidden;

}

/* Animated Background */

body::before{

content:"";

position:fixed;

left:0;

top:0;

width:100%;

height:100%;

background:

radial-gradient(circle at 20% 20%,rgba(255,70,120,.18),transparent 25%),

radial-gradient(circle at 80% 30%,rgba(0,170,255,.15),transparent 30%),

radial-gradient(circle at 50% 100%,rgba(255,255,255,.05),transparent 45%);

animation:bgMove 18s ease-in-out infinite alternate;

z-index:-3;

}

@keyframes bgMove{

0%{transform:translate(0,0);}
100%{transform:translate(-5%,-4%) scale(1.1);}

}

/* Stars */

#stars{

position:fixed;

width:100%;

height:100%;

top:0;

left:0;

overflow:hidden;

z-index:-2;

}

.star{

position:absolute;

width:2px;

height:2px;

background:white;

border-radius:50%;

animation:twinkle 4s infinite;

}

@keyframes twinkle{

0%,100%{

opacity:.2;

transform:scale(.5);

}

50%{

opacity:1;

transform:scale(1.8);

}

}

/* Hero */

.hero{

height:100vh;

display:flex;

flex-direction:column;

justify-content:center;

align-items:center;

text-align:center;

padding:30px;

}

.small{

color:#ff8eb4;

letter-spacing:4px;

margin-bottom:15px;

font-size:15px;

text-transform:uppercase;

}

.hero h1{

font-family:'Great Vibes',cursive;

font-size:90px;

margin-bottom:15px;

text-shadow:0 0 30px rgba(255,255,255,.25);

}

.subtitle{

max-width:720px;

font-size:22px;

line-height:38px;

opacity:.9;

margin-bottom:45px;

}

button{

padding:18px 48px;

font-size:18px;

border:none;

border-radius:50px;

cursor:pointer;

background:linear-gradient(135deg,#ff4d6d,#ff8fa3);

color:white;

transition:.4s;

box-shadow:0 20px 60px rgba(255,60,120,.35);

}

button:hover{

transform:translateY(-8px) scale(1.05);

box-shadow:0 35px 80px rgba(255,60,120,.45);

}

/* Letter */

.hidden{

display:none;

}

#letter{

padding:120px 20px;

display:flex;

justify-content:center;

}

.glass{

width:100%;

max-width:900px;

padding:70px;

border-radius:28px;

background:rgba(255,255,255,.08);

backdrop-filter:blur(25px);

border:1px solid rgba(255,255,255,.12);

box-shadow:0 25px 80px rgba(0,0,0,.5);

animation:fadeUp 1.4s ease;

}

.glass h2{

font-size:40px;

margin-bottom:30px;

}

.glass p{

font-size:20px;

line-height:40px;

margin-bottom:28px;

color:#ececec;

}

.sign{

font-family:'Great Vibes',cursive;

font-size:72px;

color:#ff8fa3;

margin-top:45px;

}

@keyframes fadeUp{

from{

opacity:0;

transform:translateY(70px);

}

to{

opacity:1;

transform:translateY(0);

}

}

/* Floating Hearts */

.heart{

position:fixed;

bottom:-40px;

pointer-events:none;

animation:floatUp linear forwards;

}

@keyframes floatUp{

0%{

transform:translateY(0) scale(.6);

opacity:0;

}

15%{

opacity:1;

}

100%{

transform:translateY(-120vh) scale(1.6);

opacity:0;

}

}

/* Mobile */

@media(max-width:768px){

.hero h1{

font-size:58px;

}

.subtitle{

font-size:18px;

line-height:32px;

}

.glass{

padding:35px;

}

.glass h2{

font-size:30px;

}

.glass p{

font-size:17px;

line-height:32px;

}

.sign{

font-size:52px;

}

}
