export function getArchetypeKey(age, gender) {
  const g = gender === 'male' ? 'male' : 'female'
  if (age < 28) return `young_${g}`
  if (age < 52) return `adult_${g}`
  return `elder_${g}`
}

export function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

// imagePrompt is used by Pollinations.ai (free, no API key)
export const ARCHETYPES = {

  // ══════════════════════════════════════════
  //  JOVEN MASCULINO  (< 28)
  // ══════════════════════════════════════════
  young_male: [
    {
      name: "Alaric el Trovador",
      title: "Bardo Errante de los Caminos",
      icon: "🎭",
      era: "Siglo XII", reino: "Provenza",
      imagePrompt: "young medieval male bard troubadour lute traveling cloak village tavern fantasy oil painting dramatic lighting",
      prophecy: `Tu voz era tu espada y tu laúd tu escudo. Recorriste siete reinos cantando baladas que hacían llorar a los caballeros más curtidos en batalla. El amor fue tu eterna condena y tu mayor inspiración: tres corazones rotos te dieron tres canciones que el mundo aún tararea sin saber de dónde vienen. Moriste joven, pero tu música sobrevivió cinco siglos.`,
      legend: `Alaric nació bajo una lluvia de estrellas en la aldea de Mirabel y jamás pudo quedarse quieto más de una semana. A los quince años intercambió su única muda de ropa por un laúd roto que reparó con cuerdas de tripa de cabra. Aprendió solo, tocando en tabernas a cambio de pan y cerveza. A los veinte era ya la leyenda de tres provincias. Los nobles le abrían sus puertas, los pícaros le compraban rondas, y las doncellas le lanzaban flores desde las ventanas. Su canción más famosa, "La Rosa de Piedra", se dice que fue compuesta en una sola noche lluviosa después de que la hija del conde de Valmur le rechazara por segunda vez.`,
      abilities: [
        { icon: "🎵", name: "Canto encantador", pct: 97 },
        { icon: "🎭", name: "Actuación", pct: 93 },
        { icon: "💘", name: "Encanto personal", pct: 90 },
        { icon: "📜", name: "Composición poética", pct: 88 },
      ],
      verse: `"De posada en posada llevo mi canción,\n        no hay muro que resista a mi melodía.\n        Soy el viento que pasa, soy el corazón\n        que late más fuerte con cada alegría."`,
      verse_attr: "— Balada de Alaric, cancionero de Provenza, 1147"
    },
    {
      name: "Darian el Paje",
      title: "Escudero de la Corona de Valoria",
      icon: "⚔️",
      era: "Siglo XIII", reino: "Valoria",
      imagePrompt: "young medieval male squire page armor training castle courtyard sword fantasy illustration detailed",
      prophecy: `Portabas el estandarte del rey con más orgullo que el propio monarca. En la Batalla del Puente Rojo, cuando todos los veteranos habían huido, tú sostuviste la línea con solo dieciséis años y una lanza prestada. Tu señor te llamó caballero antes de que el polvo se asentara. Aún no habías afeitado la primera barba, pero ya eras una leyenda.`,
      legend: `Darian era hijo de un herrero del norte, destinado a trabajar el hierro como su padre y su abuelo. Pero el destino tiene sus propios planes. A los doce años, el gran caballero Ser Edric de Valmont lo vio detener a un caballo desbocado con sus propias manos y decidió en ese instante convertirlo en su paje. Los seis años de entrenamiento fueron brutales: madrugadas con armadura completa, noches estudiando táctica, tardes practicando con espada hasta sangrar. Todo valió la pena en aquel puente maldito donde el destino lo estaba esperando.`,
      abilities: [
        { icon: "🛡️", name: "Defensa con escudo", pct: 84 },
        { icon: "⚔️", name: "Combate con espada", pct: 79 },
        { icon: "🏇", name: "Equitación", pct: 88 },
        { icon: "🎯", name: "Lanza y jabalina", pct: 72 },
      ],
      verse: `"No nací entre nobles ni de sangre real,\n        pero mi honor vale más que cualquier corona.\n        Sirvo a mi señor con lealtad sin igual\n        y mi brazo sostiene lo que el miedo abandona."`,
      verse_attr: "— Inscripción en la tumba de Darian, Capilla de Valmont, 1268"
    },
    {
      name: "Finn el Ladrón de Guante",
      title: "Dedos de Seda del Gremio Oscuro",
      icon: "🗝️",
      era: "Siglo XIV", reino: "Ciudad de Kethara",
      imagePrompt: "young male medieval rogue thief hood dark alley medieval city rooftop moonlight fantasy art detailed",
      prophecy: `Tus dedos nunca fallaron. En doce años de oficio no dejaste una sola huella, no rompiste un solo candado con ruido, no te vieron ni las sombras. Robaste el collar de la reina una noche de carnaval y ella misma te agradeció que la hubieras librado de la joya que su marido le regaló tras una infidelidad. Eras el ladrón que la ciudad necesitaba, aunque nunca lo supiera.`,
      legend: `Finn creció en los callejones de Kethara, aprendiendo a sobrevivir antes de aprender a leer. El Gremio de los Guantes Negros lo reclutó a los nueve años cuando lo sorprendieron robando su propio almacén con una técnica que ningún adulto conocía. Su maestro, el legendario Manos de Niebla, dijo que en veinte años de oficio nunca había visto semejante talento natural. A los diecinueve, Finn ya era el mejor operativo del gremio y el más buscado por la guardia real, que nunca logró ni verle la cara.`,
      abilities: [
        { icon: "🤲", name: "Dedos ligeros", pct: 99 },
        { icon: "👤", name: "Sigilo absoluto", pct: 95 },
        { icon: "🔐", name: "Ganzúas y cerraduras", pct: 92 },
        { icon: "🏃", name: "Escape y parkour", pct: 89 },
      ],
      verse: `"Soy la sombra que camina entre las sombras,\n        el susurro que el silencio no delata.\n        Lo que busco no lo guarda ninguna aldaba\n        pues mis dedos abren todo lo que el mundo ata."`,
      verse_attr: "— Dicho del Gremio de los Guantes Negros, Kethara"
    },
    {
      name: "Aldric el Monje Rebelde",
      title: "Hermano Renegado de la Orden de Lorn",
      icon: "📖",
      era: "Siglo XI", reino: "Abadía de Lorn",
      imagePrompt: "young male medieval monk rebel torn robe ancient tome candlelight monastery dark fantasy illustration",
      prophecy: `Te encerraron entre muros de piedra para apagar tu mente, y en cambio la encendiste más. Leíste todos los libros prohibidos de la biblioteca secreta antes de que el abad supiera que existías. Copiaste los textos heréticos que el obispo quería quemar y los escondiste en los cimientos de tres iglesias distintas. La verdad que preservaste salvó a diez hombres de la hoguera un siglo después.`,
      legend: `Aldric entró a la orden con doce años, enviado por unos padres que no podían alimentar otra boca. Esperaban que se convirtiera en un copista obediente. En cambio, se convirtió en el terror del scriptorium. Cuestionaba todo, debatía con los abades mayores, y tenía la molesta costumbre de tener razón. Cuando descubrió la cámara sellada con los textos prohibidos, no dudó ni un instante. Copió todo en seis semanas de noches sin dormir. Huyó antes del amanecer del séptimo día, llevando consigo el conocimiento que la Iglesia quería enterrar para siempre.`,
      abilities: [
        { icon: "📚", name: "Conocimiento arcano", pct: 96 },
        { icon: "✍️", name: "Caligrafía y copia", pct: 94 },
        { icon: "🧠", name: "Memoria fotográfica", pct: 98 },
        { icon: "🗣️", name: "Debate y retórica", pct: 85 },
      ],
      verse: `"Me dieron cadenas de piedra y oración,\n        yo las fundí en letras de fuego y verdad.\n        No hay muro sagrado ni santa prisión\n        que encarce una mente que busca libertad."`,
      verse_attr: "— Fragmento atribuido a Aldric, hallado en los cimientos de la Iglesia de Mirval"
    },
    {
      name: "Caelum el Príncipe Exiliado",
      title: "Heredero sin Corona del Reino de Aethos",
      icon: "👑",
      era: "Siglo XII", reino: "Aethos",
      imagePrompt: "young medieval prince exile tattered royal clothes dark forest melancholy sword hidden fantasy oil painting",
      prophecy: `Te quitaron el trono cuando tenías quince años y la traición de tu tío te convirtió en un fantasma con corona invisible. Pasaste siete años en el exilio aprendiendo lo que ningún rey aprende en su palacio: la realidad de su pueblo. Cuando regresaste, no lo hiciste con un ejército de nobles, sino con diez mil campesinos que finalmente tenían un motivo para luchar.`,
      legend: `Caelum fue criado para ser rey desde la cuna, con tutores de filosofía, esgrima y diplomacia. Nada lo preparó para la noche en que su tío Malgrath envenenó a su padre y puso precio a su cabeza. Escapó por los tejados del palacio con la ropa de un sirviente y cuatro monedas de cobre. Los años en el exilio lo transformaron: trabajó como leñador, pescador, herrero y soldado mercenario. Vio la pobreza de cerca. Cuando finalmente reclamó su trono, gobernó como nadie antes lo había hecho: recordando que los reinos no son de los reyes, sino del pueblo que los sostiene.`,
      abilities: [
        { icon: "⚔️", name: "Esgrima real", pct: 88 },
        { icon: "🤝", name: "Liderazgo popular", pct: 94 },
        { icon: "🧠", name: "Estrategia política", pct: 87 },
        { icon: "💪", name: "Supervivencia", pct: 91 },
      ],
      verse: `"Me robaron el trono, la corona y el nombre,\n        pero no pudieron robarme la sangre.\n        Soy el rey que aprendió a ser hombre\n        antes de saber lo que su reino le manda."`,
      verse_attr: "— Crónicas de Aethos, capítulo del Regreso, año 1189"
    },
  ],

  // ══════════════════════════════════════════
  //  JOVEN FEMENINO  (< 28)
  // ══════════════════════════════════════════
  young_female: [
    {
      name: "Seraphine la Vidente",
      title: "Oráculo de la Torre del Lago Plateado",
      icon: "🔮",
      era: "Siglo XI", reino: "Mírelia",
      imagePrompt: "young female medieval oracle seer crystal ball moonlit tower mystical silver robes lake reflection fantasy art",
      prophecy: `Veías el futuro en el fondo de las aguas quietas y en el humo de las velas a punto de apagarse. Los reyes cabalgaban tres días para escucharte y salían temblando de tu torre. Profetizaste la Gran Traición de Mírelia con seis meses de anticipación, pero nadie te creyó hasta que fue demasiado tarde. Tu único error fue no profetizar tu propio destino, que fue más brillante que cualquier visión.`,
      legend: `Seraphine fue encontrada de niña flotando en el Lago Plateado, envuelta en seda blanca y con los ojos abiertos mirando el cielo sin llorar. La abadesa Elindra la crió en el convento de la orilla, sin saber que estaba educando a la vidente más poderosa del siglo. A los catorce años predijo la inundación del río Selm con tal precisión que el alcalde evacuó la ciudad entera. Nadie volvió a dudar de ella. A los veinte ya vivía sola en la Torre del Lago, atendiendo solo a quienes realmente merecían conocer su destino.`,
      abilities: [
        { icon: "👁️", name: "Visión del futuro", pct: 98 },
        { icon: "🌙", name: "Magia lunar", pct: 87 },
        { icon: "📜", name: "Runas proféticas", pct: 83 },
        { icon: "🌿", name: "Pociones de verdad", pct: 76 },
      ],
      verse: `"Miro el agua y veo el ayer,\n        miro el fuego y encuentro el mañana.\n        Lo que el destino teje en su telar\n        lo leo antes de que el alba lo llama."`,
      verse_attr: "— Libro de las Profecías de Mírelia, circa 1042"
    },
    {
      name: "Isolde la Arquera",
      title: "Guardiana de los Bosques Sagrados del Norte",
      icon: "🏹",
      era: "Siglo XII", reino: "Bosques de Arvel",
      imagePrompt: "young female medieval archer huntress bow enchanted forest hood green cloak wolf companion fantasy illustration",
      prophecy: `Tu arco no conocía el fallo y tu oído escuchaba lo que los oídos humanos no pueden. Viviste donde los árboles son más altos que las catedrales y el cielo se ve en retazos entre las hojas. Con solo doce guerreros bajo tu mando, repeliste tres invasiones que ejércitos de cien no habían podido detener. Los lobos del bosque te seguían como si fueras su señora, porque en cierto modo lo eras.`,
      legend: `Isolde aprendió a disparar el arco antes de aprender a caminar sola. Su madre, la cazadora Maren, le enseñó desde niña que el bosque no es el enemigo del hombre sino su maestro más sabio. Cuando la Guardia del Bosque perdió a su capitán en la emboscada de los mercenarios de Drak, Isolde tomó el mando sin que nadie se lo pidiera. Su primera decisión fue retirar a sus guerreros y dejar que los propios árboles combatieran, guiando a los invasores hacia los pantanos del este donde desaparecieron sin dejar rastro.`,
      abilities: [
        { icon: "🏹", name: "Arquería de precisión", pct: 99 },
        { icon: "🌲", name: "Rastreo en bosque", pct: 95 },
        { icon: "🐺", name: "Trato con bestias", pct: 82 },
        { icon: "🍃", name: "Conocimiento del bosque", pct: 91 },
      ],
      verse: `"El viento me dijo hacia dónde volar,\n        el roble me enseñó a resistir.\n        Soy la flecha que sabe a dónde ir\n        y el silencio que nadie puede oir."`,
      verse_attr: "— Cantares del Bosque de Arvel, tradición oral, siglo XII"
    },
    {
      name: "Lyra la Hechicera Novicia",
      title: "Aprendiz de las Artes Veladas de Avaleth",
      icon: "✨",
      era: "Siglo X", reino: "Islas de Avaleth",
      imagePrompt: "young female medieval sorceress apprentice magic sparks spell book tower window night fantasy illustration detailed",
      prophecy: `Nadie esperaba nada de ti cuando llegaste a las Islas: eras demasiado joven, demasiado impaciente y demasiado curiosa. Resultó que esas eran exactamente las cualidades que se necesitaban. En tres años dominaste lo que a otras aprendices les tomaba diez. Tu maestro dijo que no te enseñó magia, que solo te mostró la puerta que tú ya sabías cómo abrir.`,
      legend: `Lyra llegó a las Islas de Avaleth con quince años y una carta de recomendación arrugada que apenas se podía leer. La Gran Maestra Solvane la aceptó por curiosidad, no por mérito. En la primera semana ya había memorizado el Grimorio de los Siete Sellos, que ninguna aprendiz anterior había terminado en menos de un año. Su don era raro: no aprendía la magia, la recordaba, como si ya la supiera de una vida anterior. A los dieciocho era más poderosa que la mitad del Consejo y tenía la sabiduría de no demostrarlo.`,
      abilities: [
        { icon: "⚡", name: "Magia elemental", pct: 91 },
        { icon: "📚", name: "Conocimiento arcano", pct: 94 },
        { icon: "🔮", name: "Hechizos de ilusión", pct: 86 },
        { icon: "🌀", name: "Transmutación", pct: 79 },
      ],
      verse: `"Me dijeron que era demasiado joven,\n        que el fuego no escucha a quien no ha vivido.\n        Pero el fuego y yo nos reconocimos\n        mucho antes de que yo lo hubiera pedido."`,
      verse_attr: "— Diario de Lyra, Islas de Avaleth, año 987"
    },
    {
      name: "Mira la Mensajera",
      title: "Jinete de los Vientos del Norte",
      icon: "🐴",
      era: "Siglo XIII", reino: "Corona de Ereveth",
      imagePrompt: "young female medieval messenger courier riding horse fast royal letter forest path fantasy art dramatic",
      prophecy: `Ningún jinete del reino era más rápido que tú ni conocía mejor los caminos secundarios. Cruzaste el Paso de Hielo en plena tormenta de nieve para entregar el tratado de paz que evitó una guerra de veinte años. Nadie supo tu nombre en los libros de historia, pero diez mil personas vivieron gracias a ese sobre sellado que llegó a tiempo.`,
      legend: `Mira creció en las cuadras reales, hija de un palafrenero que le enseñó a montar antes que a hablar. A los doce años ya era más hábil con los caballos que cualquier adulto del palacio. El Servicio de Mensajería Real la reclutó a los dieciséis después de que completara en seis horas una ruta que normalmente tomaba dos días. Su caballo, Ceniza, parecía leerle el pensamiento. Juntos recorrieron más de cuarenta mil leguas al servicio de la corona, entregando mensajes que cambiaron el curso de la historia sin que nadie lo supiera.`,
      abilities: [
        { icon: "🏇", name: "Equitación extrema", pct: 99 },
        { icon: "🗺️", name: "Orientación y rutas", pct: 93 },
        { icon: "💨", name: "Velocidad y resistencia", pct: 95 },
        { icon: "🤫", name: "Discreción absoluta", pct: 88 },
      ],
      verse: `"Soy el viento que lleva las palabras,\n        el puente entre el rey y la guerra.\n        Lo que mis manos entregan no se quiebra\n        aunque el mundo entero se pierda."`,
      verse_attr: "— Placa en el Cuartel de Mensajeros de Ereveth, circa 1247"
    },
    {
      name: "Vael la Princesa Guerrera",
      title: "Hija de Hierro del Reino de Thornwall",
      icon: "⚔️",
      era: "Siglo XIII", reino: "Thornwall del Norte",
      imagePrompt: "young medieval princess warrior sword royal armor fierce battle determined expression fantasy oil painting",
      prophecy: `Te negaste a ser la pieza de un tablero de ajedrez diplomático y cambiaste el vestido de novia por una cota de malla. Tu padre lloró de rabia la primera vez. La segunda vez que te vio combatir lloró de orgullo. Ganaste tu primera batalla a los diecinueve años y la última a los veintiséis, cuando ya nadie se atrevía a subestimarla.`,
      legend: `A Vael le regalaron muñecas de porcelana y ella las convirtió en soldaditos de barro. A los ocho años ya robaba las espadas de madera de sus hermanos para practicar en el patio. El maestro de armas del palacio se negó tres veces a enseñarla. A la cuarta, Vael lo derribó con una técnica que él mismo le había visto usar a su padre. Desde ese día tuvo instructor. Cuando llegó la propuesta de matrimonio del duque de Sorn, Vael respondió enviando de vuelta el anillo con una nota: "Cuando me hayas vencido en combate, hablaremos."`,
      abilities: [
        { icon: "⚔️", name: "Esgrima avanzada", pct: 92 },
        { icon: "🛡️", name: "Combate con escudo", pct: 88 },
        { icon: "👑", name: "Liderazgo de tropa", pct: 85 },
        { icon: "💪", name: "Fuerza y resistencia", pct: 90 },
      ],
      verse: `"Me dieron seda cuando quería hierro,\n        me dieron silencio cuando quería voz.\n        Tomé mi destino con mis propias manos\n        y resultó que era más grande que los dos."`,
      verse_attr: "— Crónicas de Thornwall, La Era de la Princesa de Hierro"
    },
  ],

  // ══════════════════════════════════════════
  //  ADULTO MASCULINO  (28 – 51)
  // ══════════════════════════════════════════
  adult_male: [
    {
      name: "Malachar el Arcano",
      title: "Gran Mago del Consejo de los Siete",
      icon: "🧙",
      era: "Siglo X", reino: "Imperio de Keldrath",
      imagePrompt: "middle aged male archmage wizard long beard glowing staff ancient library spell casting dramatic fantasy oil painting",
      prophecy: `Cuarenta años estudiando los secretos del universo te dieron poder suficiente para doblar la realidad. Derrotaste al Nigromante de las Torres Grises con un hechizo que tardaste doce años en perfeccionar y que duró exactamente tres segundos. Los reyes te pedían consejo; los sabios te pedían explicaciones; los niños te pedían trucos de magia. Solo los niños recibían respuesta.`,
      legend: `Malachar comenzó en los callejones de Keldrath como aprendiz de un alquimista borracho que le enseñó más por accidente que por voluntad. Su mente devoraba el conocimiento como el fuego devora la madera seca. A los treinta ya había leído cada libro de la Gran Biblioteca. A los cuarenta escribió tres tomos que los otros magos tardaron una generación en comprender. El Consejo de los Siete lo eligió por unanimidad, cosa que no había ocurrido en doscientos años. Gobernó el Consejo con sabiduría, firmeza y un humor seco que nadie sabía si era intencional.`,
      abilities: [
        { icon: "🔥", name: "Conjuración elemental", pct: 97 },
        { icon: "📚", name: "Conocimiento arcano", pct: 99 },
        { icon: "🌀", name: "Transmutación", pct: 91 },
        { icon: "⚡", name: "Hechizos de guerra", pct: 94 },
      ],
      verse: `"Soy la tormenta que el sabio conjura,\n        soy la calma que el necio no aguanta.\n        En cada runa está mi locura,\n        en cada hechizo, mi alma que canta."`,
      verse_attr: "— Epigrama de Malachar, grabado en la puerta de la Torre Arcana de Keldrath"
    },
    {
      name: "Roderick el Conquistador",
      title: "Rey de las Tierras del Oeste",
      icon: "👑",
      era: "Siglo XI", reino: "Westmark",
      imagePrompt: "middle aged medieval king throne room crown battle worn armor commanding presence golden light fantasy art",
      prophecy: `Conquistaste siete reinos no con la fuerza bruta sino con algo mucho más temible: la inteligencia. Tu mesa redonda reunió a los mejores guerreros, sabios y poetas de la era. La Gran Paz de Westmark duró cuarenta años después de tu muerte porque las bases que construiste eran demasiado sólidas para que la estupidez humana las destruyera rápidamente.`,
      legend: `Roderick era el tercer hijo de un conde menor, destinado al claustro o a la espada de alquiler. La muerte de sus dos hermanos mayores en la misma batalla lo convirtió en heredero sin haberlo pedido. En diez años pasó de estudiante a general, de general a duque, de duque a rey de reyes. Su reinado de veintidós años fue llamado La Era Dorada del Oeste por los cronistas que vivieron bajo él. Murió en su cama, rodeado de sus doce hijos y de tres bibliotecas, cosa inusual para un conquistador, y que él consideraba su mayor logro.`,
      abilities: [
        { icon: "⚔️", name: "Táctica militar", pct: 96 },
        { icon: "👑", name: "Liderazgo carismático", pct: 98 },
        { icon: "🤝", name: "Diplomacia y alianzas", pct: 87 },
        { icon: "📜", name: "Legislación y justicia", pct: 82 },
      ],
      verse: `"No fui el más fuerte ni el más temido,\n        pero sí el que más lejos fue y más alto llegó.\n        Construí mi corona con lo que otros han perdido\n        y dejé un reino mejor que el que conoció."`,
      verse_attr: "— Epitafio de Roderick I, Crónicas de Westmark, año 1089"
    },
    {
      name: "Aldric el Paladín",
      title: "Campeón Eterno de la Orden de la Llama",
      icon: "✝️",
      era: "Siglo XII", reino: "Orden de la Llama Eterna",
      imagePrompt: "middle aged male medieval paladin knight holy armor glowing sword cathedral light divine aura fantasy illustration",
      prophecy: `Tu fe fue tu armadura más resistente y tu compasión tu arma más afilada. Liberaste tres ciudades de tiranos, no porque alguien te lo pidiera, sino porque era lo correcto. Los pobres te llamaban santo en vida. Los reyes te llamaban problema. Ambos tenían razón. Nadie que te conociera pudo nunca estar seguro de si eras un hombre o la personificación de algo mayor.`,
      legend: `Aldric hizo sus votos en la Capilla del Alba cuando tenía veinte años, prometiendo pobreza, servicio y verdad. En veinte años de paladín nunca rompió ninguno de los tres. Su espada, a la que llamaba Justicia, se decía que brillaba sola en presencia de la maldad. El rey Harven IV intentó comprarlo tres veces con tierras, títulos y oro. Las tres veces Aldric donó el oro a los pobres, rechazó las tierras y usó los títulos como papel para notas de campo. El rey aprendió a no intentarlo una cuarta vez.`,
      abilities: [
        { icon: "✝️", name: "Fe divina", pct: 99 },
        { icon: "🛡️", name: "Defensa sagrada", pct: 95 },
        { icon: "💊", name: "Curación por imposición", pct: 78 },
        { icon: "⚔️", name: "Combate con propósito", pct: 93 },
      ],
      verse: `"No busco la gloria, solo la justicia;\n        no el oro, sino lo que el oro no compra.\n        Mi espada no descansa mientras la injusticia\n        exista en cualquier tierra que se nombra."`,
      verse_attr: "— Código del Paladín Aldric, Orden de la Llama Eterna, circa 1156"
    },
    {
      name: "Corvus el Nigromante",
      title: "Maestro del Velo entre los Mundos",
      icon: "💀",
      era: "Siglo IX", reino: "Tierras Sombrías del Este",
      imagePrompt: "middle aged male medieval necromancer dark robes skull staff cemetery eerie purple glow mist dark fantasy art",
      prophecy: `Te llamaron monstruo porque hablabas con los muertos, pero nadie preguntó qué les decían los muertos a ti. La verdad es que los difuntos son los únicos que nunca mienten, y esa honestidad brutal te convirtió en el consejero más valioso e incómodo de tres reinos consecutivos. Nunca levantaste un ejército de no muertos. No lo necesitabas.`,
      legend: `Corvus perdió a su familia entera en la Plaga Gris cuando tenía treinta y un años. El dolor lo llevó a los bordes de la magia prohibida buscando una manera de volver a hablar con ellos. La encontró. Pero en ese proceso descubrió que la nigromancia no era el arte de la muerte sino el arte de la memoria: conservar lo que el tiempo quiere borrar. Sus detractores lo persiguieron durante veinte años. Sus defensores lo protegieron porque en tres ocasiones había resuelto crímenes imposibles preguntando directamente a las víctimas.`,
      abilities: [
        { icon: "💀", name: "Comunión con los muertos", pct: 98 },
        { icon: "🌫️", name: "Magia del velo", pct: 94 },
        { icon: "📖", name: "Conocimiento prohibido", pct: 97 },
        { icon: "🕯️", name: "Rituales de memoria", pct: 91 },
      ],
      verse: `"Los vivos me temen porque hablo con los muertos;\n        los muertos me respetan porque los escucho.\n        En el silencio entre ambos mundos, acucho\n        verdades que los vivos tienen aún pendientes."`,
      verse_attr: "— Epitafio que Corvus escribió para sí mismo, grabado en su propia lápida"
    },
    {
      name: "Tarquin el Mercader",
      title: "Señor de las Rutas del Este y el Oeste",
      icon: "⚖️",
      era: "Siglo XIII", reino: "Ruta de las Especias",
      imagePrompt: "middle aged male medieval merchant adventurer exotic spices caravan desert silk road wealthy confident fantasy illustration",
      prophecy: `Tu mayor arma nunca fue una espada sino una balanza, y con ella conquistaste más territorios que cualquier general. Abriste rutas comerciales a través de desiertos que los ejércitos no se atrevían a cruzar. Hablabas doce idiomas, conocías las costumbres de veinte culturas y sabías exactamente qué precio poner a cada cosa, incluida la lealtad.`,
      legend: `Tarquin empezó con una mula, treinta monedas y una deuda con su tío. A los cuarenta poseía la flota mercante más grande del mar interior y había cerrado tratos con cuatro califatos, dos imperios y un reino que técnicamente seguía en guerra con el suyo. Su secreto, según él mismo confesó en sus memorias, era simple: tratar a cada persona como si fuera el cliente más importante del mundo, porque nunca se sabe cuándo lo serán.`,
      abilities: [
        { icon: "⚖️", name: "Negociación y trato", pct: 98 },
        { icon: "🗺️", name: "Rutas y geografía", pct: 92 },
        { icon: "🗣️", name: "Idiomas y culturas", pct: 89 },
        { icon: "🧠", name: "Memoria de precios", pct: 95 },
      ],
      verse: `"No conquisté con fuego ni con acero,\n        sino con el justo peso de la balanza.\n        El mundo es mío porque lo que yo espero\n        es siempre lo que el otro también alcanza."`,
      verse_attr: "— Memorias de Tarquin el Mercader, dictadas a su secretario en el año 1271"
    },
    {
      name: "Gareth el General",
      title: "Caudillo de las Mil Batallas de Valoria",
      icon: "🗡️",
      era: "Siglo XI", reino: "Valoria del Norte",
      imagePrompt: "middle aged male medieval general warlord battle armor war tent map planning soldiers commanding fantasy art",
      prophecy: `No perdiste una sola batalla en veinte años de campañas, y eso no fue por suerte ni por brutalidad, sino porque nunca entraste a ninguna que no hubieras ganado ya en tu cabeza antes de que sonara el primer cuerno. Tus soldados te seguirían al infierno. De hecho, los llevaste una vez y regresaron con tierra de las Tierras Ardientes que tu rey quería para su colección.`,
      legend: `Gareth subió desde soldado raso hasta general en campo, sin una sola conexión noble ni un solo favor político. Cada ascenso lo ganó con sangre, sudor y una capacidad táctica que sus superiores tardaron años en reconocer porque los hacía sentir en evidencia. Su mayor victoria no fue ninguna de las cincuenta batallas que ganó, sino la vez que convenció a dos ejércitos enemigos de que ambos habían ganado y los mandó a casa sin pelear.`,
      abilities: [
        { icon: "⚔️", name: "Táctica de campo", pct: 99 },
        { icon: "👥", name: "Liderazgo de tropa", pct: 96 },
        { icon: "🏹", name: "Coordinación de unidades", pct: 93 },
        { icon: "🧠", name: "Lectura del terreno", pct: 97 },
      ],
      verse: `"La guerra no la gana el más valiente\n        sino el que piensa antes de desenfundar.\n        Soy el frío en la tormenta más ardiente,\n        el silencio que precede al tronar."`,
      verse_attr: "— Máximas de Gareth, Manual de Campaña de Valoria del Norte"
    },
  ],

  // ══════════════════════════════════════════
  //  ADULTA FEMENINA  (28 – 51)
  // ══════════════════════════════════════════
  adult_female: [
    {
      name: "Morgana la Hechicera",
      title: "Señora de las Artes Prohibidas de Avaleth",
      icon: "🧙‍♀️",
      era: "Siglo IX", reino: "Islas de Avaleth",
      imagePrompt: "middle aged female medieval sorceress dark magic dramatic robes storm lightning forest powerful mysterious fantasy art",
      prophecy: `El mundo te temía porque no lo necesitabas y eso lo ponía nervioso. Tu magia nació del dolor y el dolor la hizo indestructible. Derrocaste a un rey tirano con una sola noche de tormenta y no te quedaste a verlo caer porque ya sabías cómo terminaría. Luego desapareciste en la niebla, dejando solo tu leyenda y el temblor permanente en los corazones de los poderosos.`,
      legend: `Morgana fue desterrada de la corte a los dieciocho años por revelar verdades que los nobles querían mantener bajo siete llaves. En el exilio de los bosques prohibidos encontró su verdadero poder, que resultó ser considerablemente mayor que el de cualquier corte. Aprendió de los espíritus de los árboles, de las brujas más antiguas, de libros que ningún hombre se atrevía a abrir. Cuando regresó no lo hizo para pedir perdón ni para vengarse, sino porque había algo que debía hacerse y ella era la única que podía hacerlo.`,
      abilities: [
        { icon: "🌩️", name: "Magia de tormenta", pct: 97 },
        { icon: "🔮", name: "Visión y profecía", pct: 91 },
        { icon: "🌙", name: "Magia lunar", pct: 95 },
        { icon: "📖", name: "Hechizos ancestrales", pct: 93 },
      ],
      verse: `"Me llamaron bruja, hereje y maldita;\n        yo me llamé libre, sabia e infinita.\n        Lo que la magia da, la magia ha cobrado;\n        lo que el poder teme, yo lo he reclamado."`,
      verse_attr: "— Inscripción en la roca de la Torre de Avaleth, atribuida a Morgana"
    },
    {
      name: "Elara la Sanadora",
      title: "Alta Sacerdotisa del Templo del Alba",
      icon: "🌿",
      era: "Siglo XII", reino: "Provincia de Solheim",
      imagePrompt: "middle aged female medieval healer priestess herbs golden light temple gentle hands caring fantasy illustration",
      prophecy: `Tus manos devolvieron la vida donde la muerte ya había firmado su sentencia. Cuando la Gran Plaga del Norte vació los hospitales de médicos que huían, tú entraste caminando por la puerta principal con tu bolsa de hierbas y tu sonrisa imposiblemente tranquila. Curaste a cuatrocientas personas en seis semanas. Nunca pediste nada a cambio excepto que construyeran un hospital para los pobres.`,
      legend: `Elara creció entre hierbas medicinales y oraciones matinales. Su madre fue partera durante treinta años y su padre herbolario de fama en tres provincias. Heredó el talento de ambos y lo multiplicó con una curiosidad insaciable que la llevó a leer cada tratado médico que pudo encontrar, incluyendo los árabes y los griegos que nadie más en su provincia había consultado. Su reputación creció hasta el punto en que la gente hacía colas de tres días para que la viera. Ella veía a todos, empezando siempre por el que llevaba más tiempo esperando.`,
      abilities: [
        { icon: "💚", name: "Curación avanzada", pct: 99 },
        { icon: "🌿", name: "Herbología y botánica", pct: 97 },
        { icon: "🙏", name: "Medicina del alma", pct: 90 },
        { icon: "📋", name: "Diagnóstico preciso", pct: 94 },
      ],
      verse: `"Cada herida que cierro es una guerra ganada,\n        cada fiebre que rompo es una vida rescatada.\n        No soy maga ni santa ni la elegida:\n        solo soy las manos que la vida ha necesitado."`,
      verse_attr: "— Epitafio del Templo del Alba, Solheim, circa 1178"
    },
    {
      name: "Sable la Espía",
      title: "La Dama de los Mil Rostros de Mírelia",
      icon: "🎭",
      era: "Siglo XIII", reino: "Corte de Mírelia",
      imagePrompt: "middle aged female medieval court spy elegant dress masquerade mask candles intrigue shadow beautiful mysterious fantasy",
      prophecy: `Viviste veinte vidas distintas sin olvidar nunca cuál era la real, y eso requirió una disciplina mental que ningún guerrero posee. Evitaste tres guerras, descubriste cuatro conspiraciones y derrocaste a dos consejeros corruptos sin que nadie supiera que habías estado allí. El rey te dio las gracias en código cifrado. Tú respondiste con otro código diferente, por seguridad.`,
      legend: `Nadie sabe el verdadero nombre de Sable. Eso era parte del plan desde el principio. Entró al Servicio Secreto de Mírelia a los veintidós años respondiendo a un anuncio que no existía en ningún tablón, en una dirección que no aparecía en ningún mapa. Pasó doce años siendo veinte personas diferentes en siete países distintos. Sus informes eran tan precisos y detallados que el rey los guardaba bajo siete llaves. Cuando finalmente se retiró, lo hizo a un lugar que nadie conoce, como había vivido: invisible por elección propia.`,
      abilities: [
        { icon: "🎭", name: "Disfraz y actuación", pct: 99 },
        { icon: "🤫", name: "Extracción de información", pct: 96 },
        { icon: "🗡️", name: "Combate sigiloso", pct: 88 },
        { icon: "🧠", name: "Memoria y análisis", pct: 97 },
      ],
      verse: `"Soy todos y ninguno al mismo tiempo,\n        el rostro que buscas y el que ya se fue.\n        No existe espejo, cerradura ni tormento\n        que revele lo que solo yo sé."`,
      verse_attr: "— Último mensaje cifrado de Sable al Servicio Secreto de Mírelia, sin fecha"
    },
    {
      name: "Reva la Almirante",
      title: "Señora de los Mares del Sur y del Norte",
      icon: "⚓",
      era: "Siglo XIII", reino: "Ciudades Costeras Libres",
      imagePrompt: "middle aged female medieval pirate admiral ship ocean storm commanding silver hair fierce warrior fantasy oil painting",
      prophecy: `El mar te eligió antes de que tú lo eligieras a él. Comandaste la flota más temida de los mares interiores no con crueldad sino con una justicia brutal que hasta tus enemigos respetaban. Liberaste a quinientos esclavos en un solo amanecer y los integraste a tu tripulación. La mitad de ellos se convirtieron en tus mejores oficiales.`,
      legend: `Reva era hija de pescadores y el mar le corría por las venas antes de poder nombrarlo. A los catorce años ya era mejor marinera que su padre. A los veinte tomó el mando de su primer barco después de que la tripulación mutinara contra un capitán deshonesto y la eligiera a ella por unanimidad. En quince años construyó una flota de cuarenta navíos, estableció su propio código de leyes marinas y negoció tratados con tres reinos costeros que le pagaban para que protegiera sus rutas comerciales. Nunca la llamaron pirata. Al menos, no en su presencia.`,
      abilities: [
        { icon: "⚓", name: "Navegación y mando naval", pct: 99 },
        { icon: "⚔️", name: "Combate de cubierta", pct: 91 },
        { icon: "🌊", name: "Lectura del mar", pct: 97 },
        { icon: "👥", name: "Mando y lealtad", pct: 95 },
      ],
      verse: `"El mar no pregunta de dónde vienes,\n        solo si sabes honrar su tormenta.\n        Soy la que manda cuando el viento se enfrenta\n        y la que decide qué rumbo se tiene."`,
      verse_attr: "— Código Naval de Reva, grabado en el mástil del navío Tormenta Libre"
    },
    {
      name: "Nessa la Reina Guerrera",
      title: "Soberana de Espada y Corona de Ereveth",
      icon: "⚔️",
      era: "Siglo XI", reino: "Corona de Ereveth del Norte",
      imagePrompt: "middle aged female medieval warrior queen armor crown throne room powerful commanding battle scarred fantasy art",
      prophecy: `Gobernaste con espada y justicia a partes iguales, y tu pueblo aprendió que ambas cosas no son contradictorias sino complementarias. Ganaste doce batallas y evitaste veinte más con la única fuerza de tu reputación. Cuando finalmente muriste en combate, como siempre habías dicho que querías, tu ejército ganó la batalla de todos modos porque ninguno pudo creer que estuviera realmente muerta.`,
      legend: `Nessa heredó un reino en guerra civil y un consejo de nobles que apostaba a cuántos meses tardaría en abdicar o morir. Se tomó exactamente tres semanas para aprender los nombres de todos sus generales, sus puntos fuertes y sus debilidades. En la cuarta semana reorganizó el ejército completo. En la quinta ganó su primera batalla. El consejo dejó de apostar. Gobernó durante veintitrés años con una mano de hierro que paradójicamente su pueblo recordó siempre como una mano justa.`,
      abilities: [
        { icon: "⚔️", name: "Combate con espada larga", pct: 94 },
        { icon: "👑", name: "Gobierno y justicia", pct: 97 },
        { icon: "🗡️", name: "Táctica de batalla", pct: 91 },
        { icon: "🤝", name: "Lealtad de los suyos", pct: 98 },
      ],
      verse: `"Reina y guerrera son la misma cosa\n        cuando el reino lo exige y el pueblo lo pide.\n        No hay corona demasiado pesada ni espada ociosa\n        para quien sabe lo que su tierra le pide."`,
      verse_attr: "— Memorial de la Reina Nessa, Gran Catedral de Ereveth, año 1094"
    },
  ],

  // ══════════════════════════════════════════
  //  MAYOR MASCULINO  (52+)
  // ══════════════════════════════════════════
  elder_male: [
    {
      name: "Theron el Cronista",
      title: "Guardián Supremo de la Memoria del Mundo",
      icon: "📜",
      era: "Siglo X", reino: "Gran Biblioteca de Aethon",
      imagePrompt: "elderly male medieval chronicler historian writing ancient scrolls massive library candlelight wise white beard fantasy art",
      prophecy: `Escribiste la historia de cinco reinos con tanta justicia e implacable precisión que los reyes te odiaban y los historiadores te adoraban, lo cual era exactamente la proporción correcta. Viste caer cuatro dinastías desde tu escritorio y tres desde las gradas de sus propias coronaciones, a las que te invitaban porque nadie podía escribir el evento mejor que tú.`,
      legend: `Theron comenzó como copista en la Gran Biblioteca, reproduciendo textos ajenos con mano diligente y mente cada vez más inquieta. Su memoria era prodigiosa: podía recitar de corrido cualquier texto que hubiera leído aunque fuera una sola vez. Se convirtió en el historiador oficial de tres reyes consecutivos, todos los cuales intentaron en algún momento que alterara los registros históricos a su favor. Todos fracasaron, aunque dos lo intentaron con oro y uno con una espada apoyada en su garganta. La espada no lo asustó. Los tres murieron sabiendo que la historia los recordaría tal como eran.`,
      abilities: [
        { icon: "📜", name: "Historia universal", pct: 100 },
        { icon: "🔍", name: "Investigación documental", pct: 97 },
        { icon: "✍️", name: "Escritura inmortal", pct: 99 },
        { icon: "🧠", name: "Memoria perfecta", pct: 98 },
      ],
      verse: `"Los reyes mueren, los castillos caen,\n        la guerra se olvida y los nombres se pierden.\n        Pero las palabras que en el pergamino laten\n        sobreviven todo aunque el mundo se incendie."`,
      verse_attr: "— Prólogo de las Grandes Crónicas de Aethon, por Theron el Cronista"
    },
    {
      name: "Brennan el Gran Druida",
      title: "Sumo Sacerdote del Bosque Eterno de las Tierras Verdes",
      icon: "🌳",
      era: "Siglo VIII", reino: "Las Tierras Verdes del Oeste",
      imagePrompt: "elderly male medieval druid ancient oak nature magic long white beard staff glowing runes forest spirit fantasy art",
      prophecy: `Hablabas con los árboles y ellos te respondían en un idioma que habías tardado cuarenta años en aprender. Para ti el mundo era un ser vivo enorme que respiraba muy lentamente, y tu misión era escuchar esa respiración y traducirla para quienes tenían prisa. Se dice que cuando moriste, un roble de ochocientos años floreció en pleno invierno. Los que lo vieron no supieron explicarlo. Tú lo habrías encontrado completamente lógico.`,
      legend: `Brennan nunca construyó un templo ni predicó desde un púlpito ni escribió un solo libro sagrado. Su lugar de culto fue siempre el claro donde la luz entra oblicua al amanecer y el suelo huele a tierra mojada. Guardó los secretos de veinte generaciones de druidas y los trasmitió a sus discípulos no con palabras sino con presencia, con silencio, con el ejemplo de una vida vivida en perfecta consonancia con todo lo que existe. Sus discípulos dijeron después que aprender con él era como aprender a respirar: no lo recordaban, simplemente lo hacían.`,
      abilities: [
        { icon: "🌲", name: "Comunión con la naturaleza", pct: 100 },
        { icon: "🌙", name: "Magia natural antigua", pct: 94 },
        { icon: "🦅", name: "Transformación animal", pct: 81 },
        { icon: "🌿", name: "Curación por la tierra", pct: 91 },
      ],
      verse: `"Soy más viejo que los reyes y más joven que el roble,\n        soy la voz del viento cuando el bosque tiembla.\n        No busco el cielo ni temo lo que acecha:\n        soy la tierra misma que respira y sueña."`,
      verse_attr: "— Canto del Último Druida, tradición oral de las Tierras Verdes, siglo VIII"
    },
    {
      name: "Oswald el Ermitaño Iluminado",
      title: "Sabio de la Montaña del Alba Eterna",
      icon: "🕯️",
      era: "Siglo IX", reino: "Montañas del Alba",
      imagePrompt: "elderly male medieval hermit sage mountain cave candle long robes star map wise peaceful illuminated manuscripts fantasy",
      prophecy: `Elegiste el silencio cuando el mundo te ofrecía ruido, y en ese silencio encontraste respuestas que el ruido nunca habría dejado escuchar. Reyes, generales y papas subieron la montaña a buscarte. A la mitad los mandabas de vuelta al principio del sendero porque aún no habían aprendido a preguntar. A los que llegaban con la pregunta correcta les dabas la respuesta que necesitaban, que rara vez era la que esperaban.`,
      legend: `Oswald fue consejero real durante quince años, brillante y reconocido, antes de que una noche sin luna mirara el techo de su lujosa habitación en el palacio y sintiera que llevaba años sin escuchar nada importante. Al día siguiente salió al amanecer con un manto, un cuaderno y tres lápices. Subió a las montañas del alba y no bajó en cuarenta años. En ese tiempo escribió doce tratados filosóficos que sus discípulos copiaban y distribuían sin que él lo supiera, y que convulsionaron el pensamiento del mundo conocido.`,
      abilities: [
        { icon: "🕯️", name: "Iluminación interior", pct: 99 },
        { icon: "⭐", name: "Astronomía y cosmos", pct: 95 },
        { icon: "📚", name: "Filosofía profunda", pct: 98 },
        { icon: "🧘", name: "Disciplina mental", pct: 100 },
      ],
      verse: `"Bajé del mundo para encontrar el mundo,\n        dejé el ruido para oír lo que importa.\n        En el silencio más hondo y más profundo\n        hallé la respuesta que la vida acorta."`,
      verse_attr: "— Tratado del Silencio, Oswald de las Montañas del Alba, año 847"
    },
    {
      name: "Halvard el Rey Depuesto",
      title: "Monarca sin Trono pero con Dignidad Eterna",
      icon: "👑",
      era: "Siglo XI", reino: "Westmark Caído",
      imagePrompt: "elderly male medieval deposed king simple clothes still dignified exile melancholy forest humble wise fantasy illustration",
      prophecy: `Te quitaron el trono y descubriste que sin él seguías siendo el mismo hombre, lo cual resultó ser tanto una liberación como una lección que nunca esperabas aprender. Pasaste veinte años en el exilio ayudando a gente que no sabía quién eras. Cuando tu nieto recuperó el reino, rechazaste volver al palacio. "Ya lo conozco", dijiste. "Prefiero este jardín."`,
      legend: `Halvard gobernó con justicia y fue traicionado por el primo al que más quería. La conspiración fue perfecta: en una semana perdió el trono, su ejército y sus aliados. Huyó con la ropa puesta y la dignidad intacta, que resultó ser lo único que no podían quitarle. Vivió veinte años como agricultor, maestro rural y sanador de pueblo en pueblo, sin revelar nunca quién había sido. Cuando su nieto lo encontró para pedirle consejo sobre cómo gobernar, Halvard le habló durante tres días de lo que había aprendido siendo nadie. Fue el mejor manual de gobierno que existía.`,
      abilities: [
        { icon: "👑", name: "Sabiduría de gobierno", pct: 97 },
        { icon: "❤️", name: "Compasión ganada", pct: 99 },
        { icon: "🧠", name: "Perspectiva sin trono", pct: 98 },
        { icon: "🤝", name: "Humildad auténtica", pct: 100 },
      ],
      verse: `"Me quitaron el cetro, la corona y el nombre,\n        y descubrí que no los necesitaba.\n        Lo que soy no lo da ningún hombre\n        y lo que tengo ningún trono lo iguala."`,
      verse_attr: "— Memorias de Halvard, dictadas en su jardín, sin fecha"
    },
  ],

  // ══════════════════════════════════════════
  //  MAYOR FEMENINO  (52+)
  // ══════════════════════════════════════════
  elder_female: [
    {
      name: "Rowena la Matriarca",
      title: "Reina Madre del Último Reino Libre de Ereveth",
      icon: "👑",
      era: "Siglo XI", reino: "Corona de Ereveth",
      imagePrompt: "elderly female medieval queen mother matriarch silver hair regal wise throne room noble commanding presence fantasy art",
      prophecy: `Gobernaste sin trono durante treinta años y fue el reinado más efectivo del siglo. Cinco reyes se sentaron en la silla que tú nunca quisiste y los cinco vinieron a pedirte consejo antes de cada decisión importante. Los cronistas tardaron dos generaciones en entender que el poder real de Ereveth no estaba en el trono sino en la habitación del fondo donde tú tomabas el té.`,
      legend: `Rowena enviudó a los treinta y dos años con cinco hijos, un reino amenazado y un consejo de nobles que esperaban que cediera en seis meses. No cedió. Forjó alianzas diplomáticas que los hombres llamaban imposibles simplemente porque a ellos no se les habían ocurrido. Educó a sus hijos con la convicción de que un buen rey no es el que tiene más poder sino el que necesita menos. Tres de ellos gobernaron reinos. Los dos restantes fueron los mejores consejeros de sus hermanos. Murió a los ochenta y cuatro años con la lucidez intacta y una lista pendiente de siete cosas por hacer.`,
      abilities: [
        { icon: "🤝", name: "Diplomacia maestra", pct: 99 },
        { icon: "🧠", name: "Estrategia política", pct: 97 },
        { icon: "👑", name: "Liderazgo invisible", pct: 100 },
        { icon: "❤️", name: "Sabiduría compasiva", pct: 98 },
      ],
      verse: `"Nunca pedí el trono, pero cargué su peso;\n        nunca busqué la guerra, pero gané la paz.\n        Lo que sembré con amor y con empeño\n        florece mucho más allá de mi edad."`,
      verse_attr: "— Memorial de Rowena, Gran Catedral de Ereveth, año 1074"
    },
    {
      name: "Ysabel la Gran Alquimista",
      title: "Maestra Suprema de los Cuatro Elementos",
      icon: "⚗️",
      era: "Siglo XIII", reino: "Academia de Verroth",
      imagePrompt: "elderly female medieval alchemist master laboratory formulas potions candles silver hair respected wise dark fantasy art",
      prophecy: `Convertiste el conocimiento en la única riqueza que no se puede robar y descubriste que era infinitamente más valiosa que el oro que todos los demás perseguían. Tu laboratorio produjo medicinas que salvaron miles de vidas y descubrimientos que la humanidad tardó tres siglos en comprender. Te llamaron hereje porque eras demasiado inteligente para la época. El tiempo te llamó pionera.`,
      legend: `Ysabel se presentó cinco veces ante el consejo de la Academia de Verroth antes de que decidieran que sería más vergonzoso seguir rechazándola que admitirla. Pasó treinta años en su laboratorio, mezclando, observando y tomando notas con una letra tan diminuta que se necesitaba lupa para leerla. Sus cuadernos, descubiertos doscientos años después, revelaron que había comprendido principios de química y biología que no serían oficialmente nombrados hasta el Renacimiento. El consejo que la rechazó cuatro veces tiene hoy su retrato en la entrada principal.`,
      abilities: [
        { icon: "⚗️", name: "Alquimia avanzada", pct: 99 },
        { icon: "🔬", name: "Observación científica", pct: 97 },
        { icon: "🔥", name: "Dominio de los elementos", pct: 88 },
        { icon: "📚", name: "Erudición universal", pct: 98 },
      ],
      verse: `"Busqué el oro y encontré la verdad;\n        busqué la eternidad y hallé el instante.\n        No hay elixir más poderoso en la humanidad\n        que la mente que pregunta y que avanza."`,
      verse_attr: "— Cuaderno VII de Ysabel de Verroth, circa 1244"
    },
    {
      name: "Circe la Gran Vidente",
      title: "Profetisa de las Tres Lunas de Nerin",
      icon: "🔮",
      era: "Siglo X", reino: "Oráculo de Nerin",
      imagePrompt: "elderly female medieval oracle prophetess white robes moonlight crystal sphere ancient temple serene powerful fantasy illustration",
      prophecy: `Tus profecías no fallaron en sesenta años de servicio, lo cual era al mismo tiempo tu mayor honor y tu mayor carga, porque sabías cosas que no podías cambiar. Aprendiste que el deber del vidente no es evitar el destino sino ayudar a las personas a encontrar la fortaleza para enfrentarlo. Esa sabiduría era más difícil de conseguir que cualquier visión.`,
      legend: `Circe llegó al Oráculo de Nerin a los veinte años como aprendiza escéptica que no creía en nada de lo que se enseñaba allí. A los veinticinco había visto suficiente para creer en todo. Pasó cuarenta años perfeccionando el arte de la profecía, que a diferencia de lo que la gente cree no consiste en predecir el futuro sino en comprender el presente tan profundamente que el futuro se vuelve evidente. Sus ochocientas profecías registradas tienen una tasa de precisión que los académicos modernos se niegan a explicar como coincidencia.`,
      abilities: [
        { icon: "🔮", name: "Profecía exacta", pct: 99 },
        { icon: "🌙", name: "Comunión lunar", pct: 96 },
        { icon: "👁️", name: "Visión profunda", pct: 100 },
        { icon: "🧘", name: "Serenidad ante el destino", pct: 97 },
      ],
      verse: `"Vi el ayer en las estrellas del mañana\n        y el mañana en las cenizas de hoy.\n        La profecía no es don sino campana\n        que avisa lo que ya inevitablemente soy."`,
      verse_attr: "— Último registro del Oráculo de Nerin, atribuido a Circe, siglo X"
    },
    {
      name: "Morrigan la Bruja Ancestral",
      title: "La Madre de Todas las Hechiceras del Mundo Viejo",
      icon: "🌙",
      era: "Siglo VIII", reino: "Tierras Olvidadas del Norte",
      imagePrompt: "elderly female medieval ancient witch grandmother forest cauldron black cat raven wise powerful dark fantasy art detailed",
      prophecy: `Te llamaron bruja porque no tenían una palabra mejor para lo que eras: alguien que entendía el tejido del mundo con más claridad que ningún rey o sacerdote. Enseñaste a tres generaciones de hechiceras el único principio que importa: el poder no corrompe, pero la ignorancia del poder sí. Tus discípulas protegieron a su pueblo durante siglos después de tu muerte.`,
      legend: `Morrigan no tenía edad conocida. Los más ancianos del pueblo recordaban que ya era vieja cuando ellos eran niños. Vivía en el lindero del gran bosque en una casa que la gente del pueblo visitaba cuando todo lo demás había fallado: los médicos, los sacerdotes, los consejeros. Rara vez les daba lo que pedían y siempre les daba lo que necesitaban, que resultaba ser diferente. Su gato negro, al que nadie había podido ponerle nombre porque cada persona que lo intentaba lo olvidaba al momento, era su único compañero declarado. Los demás eran innumerables.`,
      abilities: [
        { icon: "🌙", name: "Magia ancestral", pct: 100 },
        { icon: "🌿", name: "Conocimiento de hierbas", pct: 99 },
        { icon: "🐦", name: "Lenguaje animal", pct: 95 },
        { icon: "🔮", name: "Tejido del destino", pct: 97 },
      ],
      verse: `"Soy más vieja que el miedo y más joven que la tierra,\n        conozco el nombre de todo lo que el tiempo ha olvidado.\n        Bruja me llaman quienes no entienden la guerra\n        entre lo que es y lo que hubiera sido llamado."`,
      verse_attr: "— Dicho atribuido a Morrigan, tradición oral de las Tierras del Norte"
    },
    {
      name: "Valeria la Estratega",
      title: "La Mente detrás de Cien Victorias del Imperio",
      icon: "🗺️",
      era: "Siglo XI", reino: "Alianza de los Cinco Reinos",
      imagePrompt: "elderly female medieval war strategist battle maps military tent respected silver hair commanding general fantasy illustration",
      prophecy: `Nunca levantaste una espada en batalla y ganaste más guerras que cualquier general que lo hiciera. Tu arma era el tablero de mapas, tu ejército era la información, y tu campo de batalla era la mente del adversario. Los generales te llamaban para preguntarte cómo ganar. Los reyes te llamaban para preguntarte si debían pelear. Tu respuesta a los segundos solía ser que no.`,
      legend: `Valeria comenzó como secretaria de campaña del general Ardus el Grande, tomando notas en sus reuniones estratégicas. En la tercera campaña, Ardus tomó la costumbre de hacer exactamente lo contrario de lo que sus consejeros recomendaban y exactamente lo mismo que Valeria escribía en los márgenes de los informes. Ganó las tres. Cuando Ardus murió, su testamento decía simplemente: "El mando de mi ejército a quien realmente lo ha comandado estos doce años." Los generales protestaron durante una semana. Las victorias de Valeria les cerraron la boca para siempre.`,
      abilities: [
        { icon: "🗺️", name: "Estrategia militar", pct: 100 },
        { icon: "🧠", name: "Análisis de inteligencia", pct: 99 },
        { icon: "🤝", name: "Coordinación de alianzas", pct: 95 },
        { icon: "📜", name: "Conocimiento histórico", pct: 96 },
      ],
      verse: `"La batalla la gana quien piensa más lejos,\n        no quien más fuerte empuja la espada.\n        Soy los ojos que ven desde lejos los reflejos\n        de una guerra que ya di por ganada."`,
      verse_attr: "— Memorias de Valeria, dictadas a su nieta, circa 1087"
    },
  ],
}
