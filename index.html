const stars = document.querySelector('#stars');
const petals = document.querySelector('#petals');

if (stars) {
  for (let i = 0; i < 75; i++) {
    const star = document.createElement('i');
    star.className = 'star';
    star.style.cssText = `left:${Math.random()*100}%;top:${Math.random()*100}%;--d:${2+Math.random()*4}s;animation-delay:${Math.random()*4}s`;
    stars.append(star);
  }
}

if (petals) {
  for (let i = 0; i < 16; i++) {
    const petal = document.createElement('i');
    petal.className = 'petal';
    petal.style.cssText = `left:${Math.random()*100}%;--fall:${8+Math.random()*10}s;--drift:${-100+Math.random()*200}px;animation-delay:${-Math.random()*16}s`;
    petals.append(petal);
  }
}

const intro = document.querySelector('#intro');
if (intro) setTimeout(() => intro.classList.add('done'), 2800);

let lastGlitter = 0;
addEventListener('pointermove', event => {
  if (Date.now() - lastGlitter < 35) return;
  lastGlitter = Date.now();
  const glitter = document.createElement('i');
  glitter.className = 'glitter';
  glitter.style.cssText = `left:${event.clientX}px;top:${event.clientY}px;--gx:${Math.random()*50-25}px;--gy:${Math.random()*50-25}px`;
  document.body.append(glitter);
  setTimeout(() => glitter.remove(), 750);
});

const couple = document.querySelector('#couple');
if (couple) {
  couple.addEventListener('click', () => {
    const hugging = couple.classList.toggle('hug');
    couple.setAttribute('aria-pressed', hugging);
    document.querySelector('.click-note').textContent = hugging ? 'A warm memory ♥' : 'Click the couple';
  });
}

const envelope = document.querySelector('#envelope');
if (envelope) {
  envelope.addEventListener('click', () => {
    if (envelope.classList.contains('open')) return;
    envelope.classList.add('open');
    document.querySelector('.open-hint').textContent = 'Opening your letter…';
    setTimeout(() => document.querySelector('.page-transition').classList.add('show'), 1450);
    setTimeout(() => location.href = 'letter.html', 2350);
  });
}
