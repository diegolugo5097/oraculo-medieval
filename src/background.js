export function initBackground() {
  const canvas = document.getElementById('bg-canvas')
  if (!canvas) return
  const ctx = canvas.getContext('2d')
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

  const stars = Array.from({ length: 120 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 1.5 + 0.3,
    alpha: Math.random(),
    speed: Math.random() * 0.005 + 0.002
  }))

  const embers = Array.from({ length: 30 }, () => ({
    x: Math.random() * canvas.width,
    y: canvas.height + 10,
    vx: (Math.random() - 0.5) * 0.8,
    vy: -(Math.random() * 1.5 + 0.5),
    r: Math.random() * 2 + 1,
    alpha: 1,
    color: Math.random() > 0.5 ? '#c9922a' : '#ff6b35'
  }))

  let rafId
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = '#0a0500'
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    stars.forEach(s => {
      s.alpha += s.speed
      if (s.alpha > 1) {
        s.alpha = 0
        s.x = Math.random() * canvas.width
        s.y = Math.random() * canvas.height
      }
      ctx.beginPath()
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(255,220,140,${s.alpha * 0.6})`
      ctx.fill()
    })

    embers.forEach(e => {
      e.x += e.vx
      e.y += e.vy
      e.alpha -= 0.008
      if (e.alpha <= 0 || e.y < -10) {
        e.x = Math.random() * canvas.width
        e.y = canvas.height + 10
        e.alpha = 1
        e.vy = -(Math.random() * 1.5 + 0.5)
        e.vx = (Math.random() - 0.5) * 0.8
      }
      ctx.beginPath()
      ctx.arc(e.x, e.y, e.r, 0, Math.PI * 2)
      ctx.fillStyle = e.color
      ctx.globalAlpha = e.alpha * 0.5
      ctx.fill()
      ctx.globalAlpha = 1
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
