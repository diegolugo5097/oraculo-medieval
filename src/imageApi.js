// Generates medieval character images using Pollinations.ai (free, no API key needed)
// Uses stable diffusion with medieval fantasy style prompts

export function buildImageUrl(archetypeType) {
  const basePrompt = archetypeType.imagePrompt
  const styleModifiers = [
    "highly detailed",
    "oil painting style",
    "dramatic lighting",
    "medieval fantasy",
    "cinematic",
    "8k resolution",
    "artstation quality",
    "dark moody atmosphere",
    "intricate details"
  ].join(", ")

  const negativeHint = "modern, contemporary, ugly, blurry, bad anatomy, cartoon"
  const fullPrompt = `${basePrompt}, ${styleModifiers}`

  // Pollinations.ai free image generation endpoint
  const encoded = encodeURIComponent(fullPrompt)
  // Use a seed based on archetype name for some consistency
  const seed = archetypeType.name.split('').reduce((a, c) => a + c.charCodeAt(0), 0)
  return `https://image.pollinations.ai/prompt/${encoded}?width=512&height=768&seed=${seed}&nologo=true&enhance=true`
}

export function buildFallbackImageUrl(archetypeType) {
  // Alternative prompt if first fails
  const simplePrompt = encodeURIComponent(
    `${archetypeType.imagePrompt}, medieval painting, detailed, dark fantasy`
  )
  const seed2 = archetypeType.name.split('').reduce((a, c) => a + c.charCodeAt(0), 42) + 100
  return `https://image.pollinations.ai/prompt/${simplePrompt}?width=512&height=768&seed=${seed2}&nologo=true`
}
