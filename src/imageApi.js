export function buildImageUrl(archetype) {
  const styleModifiers = "highly detailed, oil painting style, dramatic lighting, medieval fantasy, cinematic, artstation quality, dark moody atmosphere"
  const fullPrompt = `${archetype.imagePrompt}, ${styleModifiers}`
  const seed = archetype.name.split('').reduce((a, c) => a + c.charCodeAt(0), 0)
  return `https://image.pollinations.ai/prompt/${encodeURIComponent(fullPrompt)}?width=512&height=768&seed=${seed}&nologo=true&enhance=true`
}

export function buildFallbackImageUrl(archetype) {
  const simple = `${archetype.imagePrompt}, medieval painting, detailed, dark fantasy`
  const seed2  = archetype.name.split('').reduce((a, c) => a + c.charCodeAt(0), 42) + 100
  return `https://image.pollinations.ai/prompt/${encodeURIComponent(simple)}?width=512&height=768&seed=${seed2}&nologo=true`
}
