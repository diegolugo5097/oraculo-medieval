# 🔮 El Oráculo de las Vidas Pasadas v2.0

App React con temática medieval que detecta tu rostro y genera con IA una identidad
medieval única cada vez — con imagen generada, historia, habilidades y verso poético.

## ✨ Novedades v2.0
- 🤖 **Historias generadas por IA** (Claude Sonnet) — únicas e irrepetibles cada vez
- 🎨 **Imagen del personaje** generada por IA (Pollinations.ai / Stable Diffusion) — gratis
- 🧙 **40+ arquetipos medievales** distribuidos por edad y género
- ✨ Loading animado mientras el oráculo "conjura" tu destino

## 🛠️ Instalación

### Requisitos
- **Node.js** v18+
- **API Key de Anthropic** (gratis en console.anthropic.com)

### Pasos

```bash
# 1. Entrar a la carpeta
cd medieval-oracle

# 2. Instalar dependencias
npm install

# 3. Iniciar
npm run dev
```

4. Abrir **http://localhost:3000**
5. Permitir acceso a la cámara
6. Primera vez: click en 🔑 API KEY (esquina superior derecha) e ingresa tu key de Anthropic
7. La key se guarda en localStorage para usos futuros

## 🔑 Obtener API Key de Anthropic

1. Ve a **https://console.anthropic.com**
2. Crea una cuenta gratuita
3. Ve a "API Keys" → "Create Key"
4. Copia la key (comienza con `sk-ant-`)
5. Pégala en la app cuando te la pida

## 🎭 Arquetipos disponibles (40+)

| Grupo | Masculino | Femenino |
|---|---|---|
| Joven < 28 | Trovador, Paje, Aprendiz Mago, Ladrón, Príncipe, Monje Rebelde, Arquero | Vidente, Arquera, Hija del Herrero, Novicia Hechicera, Mensajera, Ladrona, Princesa Guerrera |
| Adulto 28-52 | Mago, Rey, Paladín, Mercader, Nigromante, General, Inquisidor, Alquimista | Hechicera, Sanadora, Reina Guerrera, Espía, Bruja, Abadesa, Almirante |
| Mayor 52+ | Cronista, Druida, Ermitaño, Maestro de Gremio, Hechicero Ancestral, Rey Depuesto | Reina Madre, Alquimista, Gran Vidente, Bruja Ancestral, Abadesa Legendaria, Estratega |

## 📦 Build para producción / Vercel / Netlify

```bash
npm run build    # genera carpeta dist/
npm run preview  # preview local del build
```

Para subir a Vercel:
```bash
npm i -g vercel && vercel
```

## ⚠️ Notas
- Todo procesamiento facial es **100% local** — ninguna imagen de tu cámara sale del dispositivo
- Las historias se generan via API de Anthropic (requiere internet)
- Las imágenes se generan via Pollinations.ai (requiere internet, puede tardar 5-15 segundos)
