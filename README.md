# 🔮 El Oráculo de las Vidas Pasadas

Una aplicación React con temática medieval que detecta tu rostro usando la cámara
y revela tu identidad en una vida pasada medieval, adaptada según tu edad y género.

## ✨ Características

- 👁️ **Ojo mágico** que sigue el movimiento del cursor en tiempo real
- 📷 **Detección facial** automática con estimación de edad y género (face-api.js)
- 📜 **Grimorio animado** con tu personaje medieval asignado al azar
- 🧙 **10+ arquetipos medievales**: trovadores, magos, hechiceras, reyes, paladines, druidas, etc.
- 🌟 Cada personaje tiene: profecía, leyenda, habilidades y verso poético
- 🔥 Fondo animado con estrellas y brasas, runas vikingas giratorias

## 🛠️ Instalación

### Requisitos
- **Node.js** v18 o superior
- **npm** v9 o superior

### Pasos

```bash
# 1. Descomprimir el ZIP y entrar a la carpeta
cd medieval-oracle

# 2. Instalar dependencias
npm install

# 3. Iniciar el servidor de desarrollo
npm run dev
```

4. Abrir el navegador en **http://localhost:3000**
5. Permitir el acceso a la cámara cuando el navegador lo solicite
6. ¡Esperar a que el ojo te detecte y hacer click!

## 📦 Build para producción

```bash
npm run build
npm run preview
```

## 🎭 Arquetipos por edad y género

| Grupo | Masculino | Femenino |
|-------|-----------|----------|
| Joven (< 28) | Trovador, Paje | Vidente, Arquera |
| Adulto (28–52) | Mago, Rey, Paladín | Hechicera, Sanadora |
| Mayor (52+) | Cronista, Druida | Reina Madre, Alquimista |

## ⚠️ Notas

- La detección funciona mejor con buena iluminación
- Todo el procesamiento es **100% local** — ninguna imagen sale del dispositivo
- Los modelos de IA se cargan desde CDN la primera vez (~segundos)
