export const ARCHETYPES = {
  // ─── JOVEN MASCULINO (< 28) ───
  young_male: [
    {
      name: "Alaric el Trovador",
      title: "Bardo Errante de los Caminos",
      icon: "🎭",
      stats: { era: "Siglo XII", reino: "Provenza", edad_vivida: "23 años" },
      prophecy: `Tu voz era tu espada. Caminaste por mil posadas y castillos,
entonando baladas que hacían llorar a los caballeros más duros.
El amor fue tu condena y tu gloria: siete corazones rotos
te inspiraron siete canciones que el mundo aún canta en sueños.`,
      legend: `Alaric nació bajo una estrella errante y jamás pudo quedarse quieto.
Se dice que aprendió el arte de la música de un hada del bosque a cambio
de prometer que nunca dormiría dos noches en el mismo lugar. Cumplió su promesa
hasta el final. Murió como vivió: cantando bajo las estrellas, con una copa de vino
en la mano y una sonrisa misteriosa en los labios.`,
      abilities: [
        { icon: "🎵", name: "Canto mágico", pct: 95 },
        { icon: "🗡️", name: "Esgrima", pct: 40 },
        { icon: "💘", name: "Encanto", pct: 90 },
        { icon: "📜", name: "Poesía", pct: 88 },
      ],
      verse: `"De pueblo en pueblo llevé mi laúd,\n        mi única fortuna fue la juventud.\n        Mas cada canción que el viento se llevó\n        fue un alma que el tiempo nunca olvidó."`,
      verse_attr: "— Balada de Alaric, cancionero de Provenza, 1147"
    },
    {
      name: "Darian el Paje",
      title: "Escudero del Reino de Valoria",
      icon: "⚔️",
      stats: { era: "Siglo XIII", reino: "Valoria", edad_vivida: "19 años" },
      prophecy: `Portabas el estandarte del rey con más orgullo que él mismo.
Tu valor en la Batalla de los Tres Ríos salvó la vida de tu señor
cuando ya todos huían. Aún no eras caballero, pero todos te llamaban así.`,
      legend: `Darian era hijo de un herrero, pero su destino no estaba en la fragua sino en el campo de batalla.
El gran caballero Ser Edric lo tomó como paje al verle detener a un caballo desbocado con sus propias manos.
Aprendió cada arte marcial con una velocidad sobrenatural. Los más viejos soldados murmuraban
que llevaba sangre de guerrero antiguo en sus venas.`,
      abilities: [
        { icon: "🛡️", name: "Defensa", pct: 82 },
        { icon: "⚔️", name: "Combate", pct: 78 },
        { icon: "🏇", name: "Equitación", pct: 85 },
        { icon: "🎯", name: "Puntería", pct: 65 },
      ],
      verse: `"No busco gloria ni riqueza ni honor,\n        solo ser digno de mi señor.\n        Que cuando caiga la noche y llegue el fin,\n        me recuerden valiente desde el principio al fin."`,
      verse_attr: "— Epitafio del Escudo de Valoria, Crónicas del Norte"
    }
  ],

  // ─── JOVEN FEMENINO (< 28) ───
  young_female: [
    {
      name: "Seraphine la Vidente",
      title: "Oráculo de la Torre Plateada",
      icon: "🔮",
      stats: { era: "Siglo XI", reino: "Mírelia", edad_vivida: "22 años" },
      prophecy: `Veías el futuro en el fondo de las aguas quietas. Los reyes te temían
y te necesitaban a partes iguales. Profetizaste tres guerras, dos traiciones
y el nacimiento de un rey legendario. Nadie dudó jamás de tus palabras,
porque siempre se cumplieron. Tu misterio fue tu corona más poderosa.`,
      legend: `Seraphine fue hallada de niña a orillas del Lago Plateado, envuelta en seda blanca
y con los ojos abiertos al cielo. Nadie supo de dónde venía. La abadesa del convento cercano
la crió como una hija, pero los dones de la muchacha superaban todo lo conocido.
A los catorce años ya predijo la muerte del rey Aldric con una precisión escalofriante.
Vivió sola en su torre, visitada solo por quienes desesperadamente necesitaban su guía.`,
      abilities: [
        { icon: "👁️", name: "Videncia", pct: 98 },
        { icon: "✨", name: "Magia lunar", pct: 85 },
        { icon: "📜", name: "Escritura rúnica", pct: 80 },
        { icon: "🌿", name: "Herbología", pct: 70 },
      ],
      verse: `"Miro el agua y veo el ayer,\n        miro el fuego y veo el mañana.\n        Lo que el destino teje en su telar\n        yo lo leo antes que el alba."`,
      verse_attr: "— Libro de las Profecías de Mírelia, circa 1032"
    },
    {
      name: "Isolde la Arquera",
      title: "Guardiana de los Bosques del Norte",
      icon: "🏹",
      stats: { era: "Siglo XII", reino: "Bosques de Arvel", edad_vivida: "24 años" },
      prophecy: `Tu arco nunca falló. Viviste donde los árboles son más altos que los castillos
y el cielo se ve solo en pedacitos entre las hojas. Protegiste a tu aldea de tres invasiones
con solo diez guerreros a tu mando. Los lobos del bosque te seguían como perros fieles.`,
      legend: `Isolde aprendió a disparar el arco antes de aprender a leer. Su madre, una cazadora legendaria,
le enseñó que el bosque no es el enemigo del hombre, sino su maestro más sabio.
Se convirtió en la primera mujer en liderar la Guardia del Bosque cuando su capitán cayó en batalla.
Nadie cuestionó su liderazgo: una flecha suya era más convincente que cualquier discurso.`,
      abilities: [
        { icon: "🏹", name: "Arquería", pct: 99 },
        { icon: "🌲", name: "Rastreo", pct: 92 },
        { icon: "🐺", name: "Trato con bestias", pct: 80 },
        { icon: "⚔️", name: "Combate cuerpo a cuerpo", pct: 68 },
      ],
      verse: `"El viento me dijo a dónde volar,\n        el roble me enseñó a aguantar.\n        Soy la flecha, soy el arco,\n        soy la sombra entre los árboles y el claro."`,
      verse_attr: "— Cantares del Bosque de Arvel, tradición oral"
    }
  ],

  // ─── ADULTO MASCULINO (28-52) ───
  adult_male: [
    {
      name: "Malachar el Arcano",
      title: "Gran Mago del Consejo de los Siete",
      icon: "🧙",
      stats: { era: "Siglo X", reino: "Imperio de Keldrath", edad_vivida: "47 años" },
      prophecy: `Cuarenta años estudiando los secretos del universo te dieron poder
suficiente para doblar la realidad. Derrotaste al Nigromante del Este
con un hechizo que solo tú podías pronunciar sin enloquecer.
Los reyes te pedían consejo, pero rara vez seguían tus advertencias,
lo cual siempre fue su perdición.`,
      legend: `Malachar comenzó su camino como aprendiz de un alquimista borracho en los callejones de Keldrath.
Pero su mente devoraba conocimiento como el fuego devora la madera seca.
A los treinta años ya había leído cada libro de la Gran Biblioteca.
A los cuarenta, escribió tres que eclipsaron todo lo anterior.
Se rumoreaba que podía ver los pensamientos ajenos y que su bastón
estaba tallado de la madera del Árbol del Mundo.`,
      abilities: [
        { icon: "🔥", name: "Conjuración", pct: 96 },
        { icon: "📚", name: "Conocimiento arcano", pct: 99 },
        { icon: "🌀", name: "Transmutación", pct: 88 },
        { icon: "⚡", name: "Invocación", pct: 91 },
      ],
      verse: `"Soy la tormenta que el sabio conjura,\n        soy la calma que el necio no aguanta.\n        En cada runa está mi locura,\n        en cada hechizo, mi alma que canta."`,
      verse_attr: "— Epigrama de Malachar, grabado en la puerta de la Torre Arcana"
    },
    {
      name: "Roderick el Conquistador",
      title: "Rey de las Tierras del Oeste",
      icon: "👑",
      stats: { era: "Siglo XI", reino: "Westmark", edad_vivida: "44 años" },
      prophecy: `Conquistaste siete reinos no con la fuerza, sino con la inteligencia.
Tu mesa redonda era legendaria: reuniste a los mejores guerreros,
sabios y poetas de la era. Llevaste paz a tierras que solo conocían la guerra
desde hacía cien años. Tu espada descansó más de lo que peleó,
y eso te hizo el mayor rey de todos.`,
      legend: `Roderick no era de sangre real. Era el tercer hijo de un conde menor,
destinado a la vida clerical. Pero la suerte, o el destino, tiene un sentido
del humor retorcido. En diez años pasó de estudiante a general, de general a duque,
de duque a rey. Su reinado de veinte años fue llamado La Era Dorada del Oeste.
Murió en su cama, cosa inusual para un conquistador, rodeado de sus hijos y de sus libros.`,
      abilities: [
        { icon: "⚔️", name: "Táctica militar", pct: 94 },
        { icon: "👑", name: "Liderazgo", pct: 97 },
        { icon: "🤝", name: "Diplomacia", pct: 85 },
        { icon: "📜", name: "Legislación", pct: 79 },
      ],
      verse: `"No fui el más fuerte ni el más temido,\n        pero sí el que más lejos fue y más alto subió.\n        Construí mi corona de lo que otros han perdido\n        y dejé un reino mejor que el que yo conoció."`,
      verse_attr: "— Epitafio de Roderick I, Crónicas de Westmark, 1089"
    },
    {
      name: "Aldric el Paladín",
      title: "Campeón de la Fe y la Justicia",
      icon: "⚔️",
      stats: { era: "Siglo XII", reino: "Orden de la Llama Eterna", edad_vivida: "38 años" },
      prophecy: `Tu fe fue tu armadura más resistente. Caminaste a través del fuego
de la herejía y las llamas de la injusticia sin quemarte jamás.
Liberaste tres ciudades de tiranos, no porque alguien te lo pidiera,
sino porque era lo correcto. Los pobres te llamaban santo. Los reyes, un problema.
Ambos tenían razón.`,
      legend: `Aldric hizo sus votos de paladín en la Capilla del Alba cuando tenía veinte años.
Desde ese día no hubo batalla injusta que no enfrentara, ni oprimido que no defendiera.
Su espada, llamada Justicia, se decía que brillaba sola en presencia de la maldad.
Algunos decían que era exageración. Quienes la vieron brillar no lo decían.`,
      abilities: [
        { icon: "✝️", name: "Fe divina", pct: 97 },
        { icon: "🛡️", name: "Defensa sagrada", pct: 93 },
        { icon: "💊", name: "Curación", pct: 75 },
        { icon: "⚔️", name: "Combate justo", pct: 90 },
      ],
      verse: `"No busco la gloria sino la justicia,\n        no el oro sino la verdad.\n        Mi vida entera es la milicia\n        al servicio de quien no tiene más que su humildad."`,
      verse_attr: "— Código del Paladín Aldric, Orden de la Llama Eterna"
    }
  ],

  // ─── ADULTA FEMENINA (28-52) ───
  adult_female: [
    {
      name: "Morgana la Hechicera",
      title: "Señora de las Artes Prohibidas",
      icon: "🧙‍♀️",
      stats: { era: "Siglo IX", reino: "Islas de Avaleth", edad_vivida: "39 años" },
      prophecy: `El mundo te temía porque no lo necesitabas. Tu magia nació de
la pérdida, del dolor convertido en poder. Derrocaste a un rey tirano
con una sola noche de tormenta. Luego desapareciste en la niebla,
dejando solo tu leyenda y el temblor en los corazones de los poderosos.`,
      legend: `Morgana fue desterrada de la corte a los dieciocho años por revelar verdades
que los nobles preferían mantener ocultas. En el exilio encontró su verdadero poder.
Los años en el bosque prohibido la transformaron. Aprendió de los espíritus del árbol,
de las brujas antiguas, de los libros que ningún hombre se atrevía a abrir.
Cuando regresó, lo hizo con el viento a sus espaldas y la tormenta en sus manos.`,
      abilities: [
        { icon: "🌩️", name: "Magia de tormenta", pct: 97 },
        { icon: "🔮", name: "Clarividencia", pct: 89 },
        { icon: "🌙", name: "Magia lunar", pct: 95 },
        { icon: "📖", name: "Hechizos antiguos", pct: 91 },
      ],
      verse: `"Me llamaron bruja, hereje, maldita;\n        yo me llamé libre, sabia, infinita.\n        Que tiemble el rey en su trono dorado:\n        lo que la magia da, la magia ha tomado."`,
      verse_attr: "— Inscripción en la Torre de Avaleth, atribuida a Morgana"
    },
    {
      name: "Elara la Sanadora",
      title: "Alta Sacerdotisa del Templo del Alba",
      icon: "🌿",
      stats: { era: "Siglo XII", reino: "Provincia de Solheim", edad_vivida: "35 años" },
      prophecy: `Tus manos devolvieron la vida donde la muerte ya había puesto su sello.
Curaste la Gran Plaga del Norte cuando todos los médicos del reino habían huido.
No pediste oro ni honores. Solo pediste que construyeran un hospital para los pobres.
Te lo concedieron. Fue el primero de veinte que fundaste en tu vida.`,
      legend: `Elara creció entre hierbas medicinales y oraciones. Su madre fue una partera famosa
y su padre un herbolario de gran reputación. Heredó el conocimiento de ambos
y lo multiplicó por diez con su insaciable curiosidad.
La gente caminaba días enteros para que ella los tocara.
Se decía que sus manos olían a tomillo y que ese olor solo se sentía
cuando la curación era genuina.`,
      abilities: [
        { icon: "💚", name: "Curación", pct: 99 },
        { icon: "🌿", name: "Herbología", pct: 96 },
        { icon: "🙏", name: "Fe sanadora", pct: 88 },
        { icon: "📋", name: "Medicina antigua", pct: 84 },
      ],
      verse: `"Cada herida que cierro es una guerra ganada,\n        cada fiebre que rompo, una vida rescatada.\n        No soy maga ni santa ni elegida:\n        solo soy las manos que la vida ha necesitado."`,
      verse_attr: "— Epitafio del Templo del Alba, Solheim"
    }
  ],

  // ─── MAYOR MASCULINO (52+) ───
  elder_male: [
    {
      name: "Theron el Cronista",
      title: "Guardián de la Memoria del Mundo",
      icon: "📜",
      stats: { era: "Siglo X", reino: "Gran Biblioteca de Aethon", edad_vivida: "67 años" },
      prophecy: `Escribiste la historia de cuatro reinos con tanta justicia y precisión
que los reyes te odiaban y los historiadores te adoraban.
Viste caer tres dinastías, nacer dos y morir a cuarenta personas importantes.
Todo quedó escrito con tu tinta inmortal.
Eres el único rey que nunca necesitó un trono.`,
      legend: `Theron comenzó como copista en la Gran Biblioteca, copiando textos ajenos con mano diligente.
Pero su ojo crítico y su memoria prodigiosa lo elevaron pronto por encima de su oficio.
Se convirtió en el historiador oficial de tres reyes consecutivos.
Los tres intentaron en algún momento que alterara la historia.
Los tres fracasaron. Su pluma fue más fuerte que sus espadas.`,
      abilities: [
        { icon: "📜", name: "Historia", pct: 99 },
        { icon: "🔍", name: "Investigación", pct: 96 },
        { icon: "✍️", name: "Escritura", pct: 98 },
        { icon: "🧠", name: "Memoria eterna", pct: 94 },
      ],
      verse: `"Los reyes mueren, los castillos caen,\n        la guerra se olvida, los nombres se pierden.\n        Pero las palabras que en el pergamino laten\n        sobreviven todo, aunque el mundo se incendie."`,
      verse_attr: "— Prólogo de las Grandes Crónicas de Aethon, por Theron"
    },
    {
      name: "Brennan el Druida",
      title: "Sumo Sacerdote del Bosque Eterno",
      icon: "🌳",
      stats: { era: "Siglo VIII", reino: "Las Tierras Verdes del Oeste", edad_vivida: "74 años" },
      prophecy: `Hablabas con los árboles y ellos te respondían. Para ti, el mundo
era un ser vivo enorme que respiraba lentamente. Pasaste setenta años aprendiendo
su idioma. Al final, el bosque mismo te acogió como uno de los suyos.
Se dice que cuando moriste, un roble de mil años floreció en pleno invierno.`,
      legend: `Brennan nunca construyó un templo ni predicó desde un púlpito.
Su lugar sagrado fue siempre el claro del bosque donde la luz entra oblicua al amanecer.
Guardó los secretos de veinte generaciones y los llevó consigo a la tumba.
Excepto uno: enseñó a sus discípulos que toda vida es sagrada,
desde el roble más antiguo hasta el musgo más humilde.`,
      abilities: [
        { icon: "🌲", name: "Comunión con la naturaleza", pct: 100 },
        { icon: "🌙", name: "Magia natural", pct: 92 },
        { icon: "🦅", name: "Transformación", pct: 78 },
        { icon: "🌿", name: "Curación druídica", pct: 88 },
      ],
      verse: `"Soy más viejo que los reyes y más joven que el roble;\n        soy la voz del viento cuando el bosque tiembla.\n        No busco el cielo ni temo al doble:\n        soy la tierra misma que respira y sueña."`,
      verse_attr: "— Canto del Último Druida, tradición oral céltica"
    }
  ],

  // ─── MAYOR FEMENINO (52+) ───
  elder_female: [
    {
      name: "Rowena la Matriarca",
      title: "Reina Madre del Último Reino Libre",
      icon: "👑",
      stats: { era: "Siglo XI", reino: "Corona de Ereveth", edad_vivida: "63 años" },
      prophecy: `Gobernaste sin nunca sentarte en el trono. Tus hijos reinaron,
tus nietos reinarán, pero el hilo invisible del poder siempre pasó por tus manos.
No con tiranía, sino con sabiduría. Salvaste al reino tres veces
con decisiones que nadie más se atrevía a tomar.`,
      legend: `Rowena enviudó a los treinta y dos años con cinco hijos pequeños y un reino amenazado.
Donde otros habrían cedido, ella construyó. Forjó alianzas diplomáticas imposibles,
negoció paces entre enemigos irreconciliables y educó a sus hijos con mano de hierro
y corazón de oro.
Los cronistas la llamaron la más grande reina que nunca tuvo corona.`,
      abilities: [
        { icon: "🤝", name: "Diplomacia", pct: 99 },
        { icon: "🧠", name: "Estrategia", pct: 95 },
        { icon: "👑", name: "Liderazgo", pct: 97 },
        { icon: "❤️", name: "Sabiduría compasiva", pct: 98 },
      ],
      verse: `"Nunca pedí el trono pero cargué su peso;\n        nunca busqué la guerra pero gané la paz.\n        Lo que sembré con amor y con empeño\n        florecerá mucho más allá de mi edad."`,
      verse_attr: "— Memorial de Rowena, Ereveth, año 1073"
    },
    {
      name: "Ysabel la Alquimista",
      title: "Maestra de los Cuatro Elementos",
      icon: "⚗️",
      stats: { era: "Siglo XIII", reino: "Ciudad-Estado de Verroth", edad_vivida: "58 años" },
      prophecy: `Convertiste el conocimiento en tu única riqueza y fue más valiosa que todo el oro del reino.
Tu laboratorio produjo medicinas que salvaron miles de vidas
y descubrimientos que la humanidad tardó tres siglos en comprender.
Te llamaron hereje. El tiempo te llamó precursora.`,
      legend: `Ysabel fue la primera mujer en ser admitida en la Academia de Filosofía Natural de Verroth,
después de presentarse cinco veces hasta que el consejo no pudo ignorar
la brillantez de su trabajo. Pasó treinta años en su laboratorio,
mezclando sustancias, observando reacciones, tomando notas con letra diminuta.
Sus cuadernos, descubiertos siglos después, revelaron conocimientos asombrosos.`,
      abilities: [
        { icon: "⚗️", name: "Alquimia", pct: 98 },
        { icon: "🔬", name: "Filosofía natural", pct: 96 },
        { icon: "🔥", name: "Dominio del fuego", pct: 85 },
        { icon: "📚", name: "Erudición", pct: 97 },
      ],
      verse: `"Busqué el oro pero encontré la verdad,\n        busqué la eternidad y hallé el instante.\n        No hay elixir más poderoso en la humanidad\n        que la mente que pregunta y que avanza."`,
      verse_attr: "— Cuaderno VII de Ysabel de Verroth, circa 1241"
    }
  ]
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
