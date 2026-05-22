// Archetype pool — used by Claude as reference/inspiration, not hard templates
// Claude generates unique stories, but picks a character TYPE from here
export const ARCHETYPE_TYPES = {
  young_male: [
    { name: "Trovador Errante",      icon: "🎭", title: "Bardo de los Caminos",             era: "Siglo XII", reino: "Provenza",           imagePrompt: "young medieval male bard troubadour, lute, traveling cloak, medieval village background, fantasy art" },
    { name: "Paje Valiente",         icon: "⚔️", title: "Escudero de la Corona",             era: "Siglo XIII", reino: "Valoria",           imagePrompt: "young medieval male squire page, armor training, castle courtyard, fantasy illustration" },
    { name: "Aprendiz de Mago",      icon: "🧙", title: "Discípulo de la Torre Arcana",      era: "Siglo XI",  reino: "Imperio de Keldrath",imagePrompt: "young male medieval wizard apprentice, spell book, tower library, magical glow, fantasy art" },
    { name: "Ladronzuelo del Gremio",icon: "🗝️", title: "Dedos Ligeros de la Ciudad",       era: "Siglo XIV", reino: "Ciudad de Verroth",  imagePrompt: "young male medieval rogue thief, hood cloak, dark alley, medieval city, fantasy illustration" },
    { name: "Príncipe Desterrado",   icon: "👑", title: "Heredero sin Corona",               era: "Siglo XII", reino: "Westmark",           imagePrompt: "young medieval prince exile, tattered royal clothes, forest, melancholic, fantasy art" },
    { name: "Monje Rebelde",         icon: "📖", title: "Hermano de la Orden Rota",          era: "Siglo X",   reino: "Abadía de Lorn",     imagePrompt: "young male medieval monk rebel, torn robe, ancient tome, candlelight, fantasy illustration" },
    { name: "Arquero del Bosque",    icon: "🏹", title: "Guardián de los Árboles Viejos",    era: "Siglo XIII",reino: "Bosques de Arvel",   imagePrompt: "young medieval male archer ranger, bow, dark forest, hood, fantasy art style" },
  ],
  young_female: [
    { name: "Vidente de la Torre",   icon: "🔮", title: "Oráculo del Lago Plateado",         era: "Siglo XI",  reino: "Mírelia",            imagePrompt: "young medieval female oracle seer, crystal ball, moonlit tower, mystical robes, fantasy art" },
    { name: "Arquera del Bosque",    icon: "🏹", title: "Guardiana de los Árboles Sagrados", era: "Siglo XII", reino: "Bosques de Arvel",   imagePrompt: "young female medieval archer huntress, bow and arrow, enchanted forest, fantasy illustration" },
    { name: "Hija del Herrero",      icon: "🔥", title: "Forjadora de Destinos",             era: "Siglo XIII",reino: "Ciudad de Thorn",    imagePrompt: "young medieval female blacksmith daughter, forge, strong arms, armor pieces, fantasy art" },
    { name: "Novicia Hechicera",     icon: "✨", title: "Aprendiz de las Artes Veladas",     era: "Siglo X",   reino: "Islas de Avaleth",   imagePrompt: "young female medieval sorceress apprentice, magic sparks, spell book, fantasy illustration" },
    { name: "Mensajera del Rey",     icon: "🐴", title: "Jinete de los Vientos del Norte",   era: "Siglo XII", reino: "Corona de Ereveth",  imagePrompt: "young medieval female messenger courier, horse riding, royal letter, fantasy art" },
    { name: "Ladrona Enmascarada",   icon: "🎭", title: "Sombra de la Ciudad Dorada",        era: "Siglo XIV", reino: "Verroth",             imagePrompt: "young female medieval rogue thief, mask, rooftops, moonlight, elegant, fantasy illustration" },
    { name: "Princesa Guerrera",     icon: "⚔️", title: "Hija de Hierro y Fuego",            era: "Siglo XIII",reino: "Westmark del Norte", imagePrompt: "young medieval princess warrior, sword, royal armor, fierce expression, fantasy art" },
  ],
  adult_male: [
    { name: "Gran Mago Arcano",      icon: "🧙", title: "Maestro del Consejo de los Siete",  era: "Siglo X",   reino: "Imperio de Keldrath",imagePrompt: "middle aged medieval male archmage wizard, long beard, glowing staff, ancient library, fantasy art" },
    { name: "Rey Conquistador",      icon: "👑", title: "Señor de las Tierras del Oeste",     era: "Siglo XI",  reino: "Westmark",           imagePrompt: "middle aged medieval king conqueror, crown, throne, battle worn armor, commanding, fantasy illustration" },
    { name: "Paladín de la Fe",      icon: "✝️", title: "Campeón de la Orden Sagrada",        era: "Siglo XII", reino: "Orden Llama Eterna", imagePrompt: "middle aged male medieval paladin knight, holy armor, sword, cathedral light, fantasy art" },
    { name: "Mercader Aventurero",   icon: "⚖️", title: "Señor de las Rutas del Este",        era: "Siglo XIII",reino: "Ruta de la Seda",    imagePrompt: "middle aged male medieval merchant adventurer, exotic goods, caravan, desert route, fantasy illustration" },
    { name: "Nigromante Solitario",  icon: "💀", title: "Maestro del Velo entre Mundos",      era: "Siglo IX",  reino: "Tierras Sombrías",   imagePrompt: "middle aged male medieval necromancer, dark robes, skull, cemetery, eerie glow, dark fantasy art" },
    { name: "General de Guerra",     icon: "🗡️", title: "Caudillo de las Mil Batallas",       era: "Siglo XI",  reino: "Valoria del Norte",  imagePrompt: "middle aged male medieval general warlord, battle armor, war map, commanding, fantasy illustration" },
    { name: "Inquisidor Sombrio",    icon: "🕯️", title: "Juez del Tribunal Secreto",         era: "Siglo XIV", reino: "Santa Inquisición",  imagePrompt: "middle aged male medieval inquisitor, dark robes, candle, interrogation, serious, dark fantasy art" },
    { name: "Alquimista Brillante",  icon: "⚗️", title: "Buscador de la Piedra Filosofal",   era: "Siglo XII", reino: "Academia de Verroth",imagePrompt: "middle aged male medieval alchemist, laboratory, potions, formulas, candlelight, fantasy art" },
  ],
  adult_female: [
    { name: "Hechicera Oscura",      icon: "🧙‍♀️",title: "Señora de las Artes Prohibidas",    era: "Siglo IX",  reino: "Islas de Avaleth",   imagePrompt: "middle aged female medieval sorceress witch, dark magic, dramatic robes, forest, fantasy art" },
    { name: "Sanadora Legendaria",   icon: "🌿", title: "Alta Sacerdotisa del Templo del Alba",era: "Siglo XII",reino: "Solheim",             imagePrompt: "middle aged female medieval healer priestess, herbs, gentle light, temple, fantasy illustration" },
    { name: "Reina Guerrera",        icon: "⚔️", title: "Soberana de Espada y Corona",         era: "Siglo XI",  reino: "Corona del Norte",   imagePrompt: "middle aged female medieval warrior queen, armor, crown, throne room, powerful, fantasy art" },
    { name: "Espía de la Corte",     icon: "🎭", title: "Dama de los Mil Rostros",              era: "Siglo XIII",reino: "Corte de Mírelia",   imagePrompt: "middle aged female medieval court spy, elegant dress, masquerade mask, candles, intrigue, fantasy illustration" },
    { name: "Bruja del Pantano",     icon: "🌙", title: "Guardiana de los Secretos Antiguos",  era: "Siglo X",   reino: "Tierras Neblinosas",  imagePrompt: "middle aged female medieval swamp witch, cauldron, mysterious herbs, misty swamp, dark fantasy art" },
    { name: "Abadesa Sabia",         icon: "📖", title: "Madre Superior de la Orden del Cisne",era: "Siglo XII", reino: "Abadía del Cisne",   imagePrompt: "middle aged female medieval abbess nun, illuminated manuscript, abbey library, wise, fantasy illustration" },
    { name: "Almirante del Mar",     icon: "⚓", title: "Señora de los Mares del Sur",          era: "Siglo XIII",reino: "Ciudades Costeras",  imagePrompt: "middle aged female medieval pirate admiral, ship, ocean, commanding, fantasy art" },
  ],
  elder_male: [
    { name: "Cronista del Imperio",  icon: "📜", title: "Guardián de la Memoria del Mundo",   era: "Siglo X",   reino: "Gran Biblioteca",    imagePrompt: "elderly male medieval chronicler historian, writing, ancient scrolls, library, wise, fantasy art" },
    { name: "Gran Druida",           icon: "🌳", title: "Sumo Sacerdote del Bosque Eterno",   era: "Siglo VIII",reino: "Tierras Verdes",      imagePrompt: "elderly male medieval druid, nature magic, ancient oak, long white beard, fantasy illustration" },
    { name: "Ermitaño Iluminado",    icon: "🕯️", title: "Sabio de la Montaña Sagrada",        era: "Siglo IX",  reino: "Montañas del Alba",  imagePrompt: "elderly male medieval hermit sage, cave, candle, long robes, wise expression, fantasy art" },
    { name: "Maestro de Gremio",     icon: "⚒️", title: "Gran Maestro de los Constructores",  era: "Siglo XII", reino: "Ciudades del Norte",  imagePrompt: "elderly male medieval guild master craftsman, workshop, blueprints, respected, fantasy illustration" },
    { name: "Hechicero Ancestral",   icon: "⭐", title: "El Último de los Magos Primordiales",era: "Siglo VIII",reino: "Tierras del Origen",  imagePrompt: "elderly male medieval ancient sorcerer, cosmic magic, star map, ancient, powerful, fantasy art" },
    { name: "Rey Depuesto",          icon: "👑", title: "Monarca sin Trono, con Dignidad",     era: "Siglo XI",  reino: "Westmark Caído",     imagePrompt: "elderly male medieval deposed king, simple clothes, still dignified, exile, melancholy, fantasy illustration" },
  ],
  elder_female: [
    { name: "Reina Madre",           icon: "👑", title: "Matriarca del Último Reino Libre",    era: "Siglo XI",  reino: "Corona de Ereveth",  imagePrompt: "elderly female medieval queen mother matriarch, regal, wise, throne room, silver hair, fantasy art" },
    { name: "Alquimista Maestra",    icon: "⚗️", title: "Maestra de los Cuatro Elementos",     era: "Siglo XIII",reino: "Verroth",             imagePrompt: "elderly female medieval alchemist master, laboratory, formulas, respected, silver hair, fantasy illustration" },
    { name: "Gran Vidente",          icon: "🔮", title: "Profetisa de las Tres Lunas",          era: "Siglo X",   reino: "Oráculo de Nerin",   imagePrompt: "elderly female medieval oracle prophetess, crystal, moonlight, ancient, white robes, fantasy art" },
    { name: "Bruja Ancestral",       icon: "🌙", title: "La Madre de todas las Hechiceras",    era: "Siglo VIII",reino: "Tierras Olvidadas",  imagePrompt: "elderly female medieval ancient witch grandmother, forest, cauldron, cat, wise, dark fantasy illustration" },
    { name: "Abadesa Legendaria",    icon: "✝️", title: "Santa de la Orden del Fuego Sagrado", era: "Siglo XII", reino: "Gran Catedral",      imagePrompt: "elderly female medieval legendary abbess saint, holy light, cathedral, silver hair, serene, fantasy art" },
    { name: "Estratega de Guerra",   icon: "🗺️", title: "La Mente detrás de Cien Victorias",   era: "Siglo XI",  reino: "Alianza del Norte",  imagePrompt: "elderly female medieval war strategist, battle maps, military tent, respected, fantasy illustration" },
  ],
}

export function getArchetypeKey(age, gender) {
  const g = gender === 'male' ? 'male' : 'female'
  if (age < 28) return `young_${g}`
  if (age < 52) return `adult_${g}`
  return `elder_${g}`
}

export function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}
