export async function generateMedievalCharacter(archetypeType, detectedAge, detectedGender, apiKey) {
  const genderEs = detectedGender === 'male' ? 'masculino' : 'femenino'

  const systemPrompt = `Eres un narrador épico medieval. Generas perfiles únicos de personajes medievales de vidas pasadas.
Respondes ÚNICAMENTE con un objeto JSON válido, sin texto adicional, sin markdown, sin bloques de código.
Estructura exacta requerida:
{
  "prophecy": "3-4 oraciones sobre la vida pasada en segunda persona (tú), dramático y poético, con detalles específicos medievales inventados",
  "legend": "4-5 oraciones contando la historia del personaje en tercera persona, su origen, ascenso, poder o don, cómo lo recuerda la historia",
  "abilities": [
    {"icon": "emoji_relevante", "name": "habilidad corta max 3 palabras", "pct": número_entre_60_y_100},
    {"icon": "emoji_relevante", "name": "habilidad corta", "pct": número},
    {"icon": "emoji_relevante", "name": "habilidad corta", "pct": número},
    {"icon": "emoji_relevante", "name": "habilidad corta", "pct": número}
  ],
  "verse": "4 versos poéticos con rima en español, en primera persona del personaje, que capturen su esencia",
  "verse_attr": "— Fuente ficticia medieval inventada con año entre 800 y 1400"
}
IMPORTANTE: Genera algo completamente diferente y único cada vez. Nombres de lugares, batallas, reyes inventados.`

  const userPrompt = `Personaje: ${archetypeType.name} — ${archetypeType.title}
Era: ${archetypeType.era} | Reino: ${archetypeType.reino}
Persona detectada: ~${detectedAge} años, género ${genderEs}

Adapta el tono:
- Si es joven (< 28): historia de aventura, promesa, primera hazaña
- Si es adulto (28-52): en la cima del poder, grandes logros, conflictos
- Si es mayor (52+): leyenda consolidada, sabiduría, legado que deja al morir

Inventa nombres propios medievales específicos (ciudades, batallas, rivales, maestros).
Hazlo épico y único. La profecía en segunda persona, la leyenda en tercera persona.`

  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
      'anthropic-dangerous-direct-browser-access': 'true',
    },
    body: JSON.stringify({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 1000,
      system: systemPrompt,
      messages: [{ role: 'user', content: userPrompt }]
    })
  })

  if (!response.ok) {
    const err = await response.text()
    throw new Error(`API ${response.status}: ${err}`)
  }

  const data = await response.json()
  const text = data.content?.[0]?.text || ''
  const clean = text.replace(/```json|```/g, '').trim()
  return JSON.parse(clean)
}
