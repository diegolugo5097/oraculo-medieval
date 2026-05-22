export function initBackground() {
  const canvas = document.getElementById('bg-canvas')
  if (!canvas) return
  const ctx = canvas.getContext('2d')
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

  const stars = Array.from({ length: 180 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 1.8 + 0.2,
    alpha: Math.random(),
    speed: Math.random() * 0.006 + 0.002,
    // some stars get a purple/violet tint
    hue: Math.random() > 0.5 ? 270 + Math.random() * 40 : 200 + Math.random() * 30,
  }))

  const embers = Array.from({ length: 35 }, () => ({
    x: Math.random() * canvas.width,
    y: canvas.height + 10,
    vx: (Math.random() - 0.5) * 0.7,
    vy: -(Math.random() * 1.2 + 0.4),
    r: Math.random() * 2 + 0.8,
    alpha: 1,
    // purple/violet embers
    h: 260 + Math.random() * 60,
    s: 70 + Math.random() * 30,
  }))

  let activated = false   // turns true when face is detected
  let activationRatio = 0 // 0→1 transition

  // expose a setter so App can toggle it
  canvas._setActivated = (v) => { activated = v }

  let rafId
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // lerp activation ratio
    activationRatio += activated
      ? Math.min(0.012, 1 - activationRatio)
      : -Math.min(0.008, activationRatio)
    activationRatio = Math.max(0, Math.min(1, activationRatio))

    const t = activationRatio

    // Background: dark near-black → deep purple
    const grad = ctx.createRadialGradient(
      canvas.width / 2, canvas.height / 2, 0,
      canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height) * 0.75
    )
    // center color
    const centerR = Math.round(10 + t * 40)
    const centerG = Math.round(5  + t * 0)
    const centerB = Math.round(5  + t * 60)
    // edge color
    const edgeR = Math.round(5  + t * 25)
    const edgeG = Math.round(2  + t * 0)
    const edgeB = Math.round(0  + t * 35)

    grad.addColorStop(0, `rgb(${centerR},${centerG},${centerB})`)
    grad.addColorStop(1, `rgb(${edgeR},${edgeG},${edgeB})`)
    ctx.fillStyle = grad
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Nebula-like purple glow in center when activated
    if (t > 0) {
      const nebula = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, canvas.height * 0.55
      )
      nebula.addColorStop(0,   `rgba(120, 0, 200, ${0.18 * t})`)
      nebula.addColorStop(0.4, `rgba(80, 0, 160, ${0.12 * t})`)
      nebula.addColorStop(1,   `rgba(40, 0, 80,  0)`)
      ctx.fillStyle = nebula
      ctx.fillRect(0, 0, canvas.width, canvas.height)
    }

    // Stars
    stars.forEach(s => {
      s.alpha += s.speed
      if (s.alpha > 1) {
        s.alpha = 0
        s.x = Math.random() * canvas.width
        s.y = Math.random() * canvas.height
      }
      // inactive: warm gold-white; active: purple/violet
      const starH = s.hue
      const starS = 30 + t * 60
      const starL = 80 + t * 10
      ctx.beginPath()
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
      ctx.fillStyle = `hsla(${starH}, ${starS}%, ${starL}%, ${s.alpha * (0.5 + t * 0.4)})`
      ctx.fill()
    })

    // Embers / particles
    embers.forEach(e => {
      e.x += e.vx; e.y += e.vy
      e.alpha -= 0.007
      if (e.alpha <= 0 || e.y < -10) {
        e.x = Math.random() * canvas.width
        e.y = canvas.height + 10
        e.alpha = 1
        e.vy = -(Math.random() * 1.2 + 0.4)
        e.vx = (Math.random() - 0.5) * 0.7
        // shift toward purple when activated
        e.h = activated
          ? 260 + Math.random() * 60
          : 30  + Math.random() * 30
      }
      ctx.beginPath()
      ctx.arc(e.x, e.y, e.r, 0, Math.PI * 2)
      ctx.fillStyle = `hsla(${e.h}, 80%, 65%, ${e.alpha * 0.55})`
      ctx.fill()
    })

    rafId = requestAnimationFrame(draw)
  }
  draw()

  const onResize = () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  }
  window.addEventListener('resize', onResize)

  return () => {
    cancelAnimationFrame(rafId)
    window.removeEventListener('resize', onResize)
  }
}

export function setBackgroundActivated(v) {
  const canvas = document.getElementById('bg-canvas')
  if (canvas?._setActivated) canvas._setActivated(v)
}
