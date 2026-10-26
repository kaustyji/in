// Menu
const burger = document.querySelector('.burger')
const menu = document.getElementById('menu')
const setMenu = (open) => { menu.classList.toggle('open', open); burger.setAttribute('aria-expanded', String(open)) }
burger.addEventListener('click', () => setMenu(!menu.classList.contains('open')))
menu.addEventListener('click', (e) => e.target.tagName === 'A' && setMenu(false))
window.addEventListener('keydown', (e) => e.key === 'Escape' && setMenu(false))

// Independent auto-sliders (one closure + one timer per slider)
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
document.querySelectorAll('.slider').forEach((el) => {
  const track = el.querySelector('.slides')
  const slides = el.querySelectorAll('.slide')
  const dotsBox = el.querySelector('.dots')
  const n = slides.length
  let i = 0, timer = null, paused = false
  const dots = [...slides].map((_, k) => {
    const b = document.createElement('button')
    b.type = 'button'; b.setAttribute('aria-label', `Go to image ${k + 1}`)
    b.addEventListener('click', () => { go(k); restart() })
    dotsBox.appendChild(b); return b
  })
  function go(k) {
    i = (k + n) % n
    track.style.transform = `translateX(-${i * 100}%)`
    slides.forEach((s, j) => s.setAttribute('aria-hidden', String(j !== i)))
    dots.forEach((d, j) => d.setAttribute('aria-current', String(j === i)))
  }
  function stop() { clearInterval(timer); timer = null }
  function start() { if (!reduce && !paused && n > 1 && !timer) timer = setInterval(() => go(i + 1), 3500) }
  function restart() { stop(); start() }
  el.querySelector('.prev').addEventListener('click', () => { go(i - 1); restart() })
  el.querySelector('.next').addEventListener('click', () => { go(i + 1); restart() })
  const pause = () => { paused = true; stop() }
  const resume = () => { paused = false; start() }
  el.addEventListener('mouseenter', pause); el.addEventListener('mouseleave', resume)
  el.addEventListener('focusin', pause); el.addEventListener('focusout', resume)
  go(0); start()
})

// Contact form -> mailto (no server, no secrets)
document.getElementById('contact-form').addEventListener('submit', (e) => {
  e.preventDefault()
  const f = new FormData(e.target)
  const body = `${f.get('message')}\n\n— ${f.get('name')} (${f.get('email')})`
  location.href = `mailto:satyamp61961@gmail.com?subject=${encodeURIComponent('Portfolio enquiry from ' + f.get('name'))}&body=${encodeURIComponent(body)}`
  document.getElementById('form-note').textContent = 'Your email app should open with the message ready to send.'
})
document.getElementById('year').textContent = new Date().getFullYear()
