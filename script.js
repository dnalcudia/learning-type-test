var visual = 0;
var auditory = 0;
var kinesthetic = 0;

let questionIndex = 0;

const test = document.getElementById('test');
const answerOptions = document.querySelectorAll('.answer');
const questionText = document.getElementById('question');
const aText = document.getElementById('a_text');
const bText = document.getElementById('b_text');
const cText = document.getElementById('c_text');
const submitBtn = document.getElementById('submit');

const testData = [
  {
    question: '¿Cuál de las siguientes actividades disfrutas más?',
    auditory: 'Escuchar música',
    visual: 'Ver películas',
    kinesthetic: 'Bailar con buena música',
  },
  {
    question: '¿Qué programa de televisión prefieres?',
    auditory: 'Noticias del mundo',
    visual: 'Reportajes de descubrimientos y lugares',
    kinesthetic: 'Cómico y de entretenimiento',
  },
  {
    question: 'Cuando conversas con otra persona, tú:',
    auditory: 'La escuchas atentamente',
    visual: 'La observas',
    kinesthetic: 'Tiendes a tocarla',
  },
  {
    question:
      'Si pudieras adquirir uno de los siguientes artículos, ¿cuál elegirías?',
    auditory: 'Un estéreo',
    visual: 'Un televisor',
    kinesthetic: 'Un jacuzzi',
  },
  {
    question: '¿Qué prefieres hacer un sábado por la tarde?',
    kinesthetic: 'Quedarte en casa',
    visual: 'Ir al cine',
    auditory: 'Ir a un concierto',
  },
  {
    question: '¿Qué tipo de exámenes se te facilitan más?',
    visual: 'Examen escrito',
    auditory: 'Examen oral',
    kinesthetic: 'Examen de opción múltiple',
  },
  {
    question: '¿Cómo te orientas más fácilmente?',
    auditory: 'A través de la intuición',
    visual: 'Mediante el uso de un mapa',
    kinesthetic: 'Pidiendo indicaciones',
  },
  {
    question: '¿En qué prefieres ocupar tu tiempo en un lugar de descanso?',
    auditory: 'Pensar',
    visual: 'Caminar por los alrededores',
    kinesthetic: 'Descansar',
  },
  {
    question: '¿Qué te halaga más?',
    auditory: 'Que te digan que tienes una convesación interesante',
    visual: 'Que te digan que tienes buen aspecto',
    kinesthetic: 'Que te digan que tienes buen aspecto',
  },
  {
    question: '¿Cuál de estos ambientes te atrae más?',
    auditory: 'Uno en el que se escuchen las olas del mar',
    visual: 'Uno con una hermosa vista al océano',
    kinesthetic: 'Uno en el que se sienta un clima agradable',
  },
  {
    question: '¿De qué manera se te facilita aprender algo?',
    auditory: 'Repitiendo en voz alta',
    visual: 'Escribiéndolo varias veces',
    kinesthetic: 'Relacionándolo con algo divertido',
  },
  {
    question: '¿A qué evento preferirías asistir?',
    auditory: 'A una conferencia',
    visual: 'A una exposición de arte',
    kinesthetic: 'A una reunión social',
  },
  {
    question: '¿De qué manera te formas una opinión de otras personas?',
    auditory: 'Por la sinceridad de su voz',
    visual: 'Por su aspecto',
    kinesthetic: 'Por la forma de estrecharte la mano',
  },
  {
    question: '¿Cómo te consideras?',
    auditory: 'Intelectual',
    visual: 'Atlético',
    kinesthetic: 'Sociable',
  },
  {
    question: '¿Qué tipo de películas te gustan más?',
    auditory: 'Clásicas',
    visual: 'De acción',
    kinesthetic: 'De amor',
  },
  {
    question: '¿Cómo prefieres mantenerte en contacto con otra persona?',
    auditory: 'Por teléfono',
    visual: 'Por correo electrónico',
    kinesthetic: 'Tomando un café juntos',
  },
  {
    question: '¿Cuál de las siguientes frases se identifican más contigo?',
    auditory: 'Percibo hasta el mas ligero ruido que hace mi coche',
    visual: 'Es importante que mi coche esté limpio por fuera y por dentro',
    kinesthetic: 'Me gusta que mi coche se sienta bien al conducirlo',
  },
  {
    question: '¿Cómo prefieres pasar el tiempo con tu novia o novio?',
    auditory: 'Conversando',
    visual: 'Mirando algo juntos',
    kinesthetic: 'Acariciándose',
  },
  {
    question: 'Si no encuentras las llaves en una bolsa',
    auditory: 'Sacudes la bolsa para oír el ruido',
    visual: 'La buscas mirando',
    kinesthetic: 'Buscas al tacto',
  },
  {
    question: 'Cuando tratas de recordar algo, ¿cómo lo haces?',
    auditory: 'A través de sonidos',
    visual: 'A través de imágenes',
    kinesthetic: 'A través de emociones',
  },
  {
    question: 'Si tuvieras dinero, ¿qué harías?',
    auditory: 'Adquirir un estudio de grabación',
    visual: 'Viajar y conocer el mundo',
    kinesthetic: 'Comprar una casa',
  },
  {
    question: '¿Con qué frase te identificas más?',
    auditory: 'Reconozco a las personas por su voz',
    visual: 'Recuerdo el aspecto de alguien, pero no su nombre',
    kinesthetic: 'No recuerdo el aspecto de la gente',
  },
  {
    question:
      'Si tuvieras que quedarte en una isla desierta, ¿qué preferirías llevar contigo?',
    auditory: 'Un radio portátil de alta frecuencia',
    visual: 'Algunos buenos libros',
    kinesthetic: 'Golosinas y comida enlatada',
  },
  {
    question: '¿Cuál de los siguientes entretenimientos prefieres?',
    auditory: 'Tocar un instrumento musical',
    visual: 'Sacar fotografías',
    kinesthetic: 'Actividades manuales',
  },
  {
    question: '¿Cómo es tu forma de vestir?',
    auditory: 'Informal',
    visual: 'Impecable',
    kinesthetic: 'Muy informal',
  },
  {
    question: '¿Qué es lo que más te gusta de una fogata nocturna?',
    auditory: 'El sonido del fuego quemando la leña',
    visual: 'Mirar el fuego y las estrellas',
    kinesthetic: 'El calor del fuego y los bombones asados',
  },
  {
    question: '¿Cómo se te facilita entender algo?',
    auditory: 'Cuando te lo explican verbalmente',
    visual: 'Cuando utilizan medios visuales',
    kinesthetic: 'Cuando se realiza a través de alguna actividad',
  },
  {
    question: '¿Por qué te distingues?',
    auditory: 'Por ser un buen conversador',
    visual: 'Por ser un buen observador',
    kinesthetic: 'Por tener una gran intuición',
  },
  {
    question: '¿Qué es lo que más disfrutas de un amanecer?',
    auditory: 'El canto de las aves',
    visual: 'Las tonalidades del cielo',
    kinesthetic: 'La emoción de vivir un nuevo día',
  },
  {
    question: 'Si pudieras elegir ¿qué preferirías ser?',
    auditory: 'Un gran músico',
    visual: 'Un gran pintor',
    kinesthetic: 'Un gran médico',
  },
  {
    question: 'Cuando eliges tu ropa, ¿qué es lo más importante para ti?',
    auditory: 'Que sea adecuada',
    visual: 'Que luzca bien',
    kinesthetic: 'Que sea cómoda',
  },
  {
    question: '¿Qué es lo que más disfrutas de una habitación?',
    auditory: 'Que sea silenciosa',
    visual: 'Que esté limpia y ordenada',
    kinesthetic: 'Que sea confortable',
  },
  {
    question: '¿Qué es más sexy para ti?',
    auditory: 'Cierto tipo de música',
    visual: 'Una iluminación tenue',
    kinesthetic: 'El perfume',
  },
  {
    question: '¿A qué tipo de espectáculo preferirías asistir?',
    auditory: 'A un concierto de música',
    visual: 'A un espectáculo de magia',
    kinesthetic: 'A una muestra gastronómica',
  },
  {
    question: '¿Qué te atrae más de una persona?',
    auditory: 'Su conversación',
    visual: 'Su aspecto físico',
    kinesthetic: 'Su trato y forma de ser',
  },
  {
    question: 'Cuando vas de compras,¿en dónde pasas mucho tiempo?',
    auditory: 'En una tienda de discos',
    visual: 'En una librería',
    kinesthetic: 'En una perfumería',
  },
  {
    question: '¿Cuáles tu idea de una noche romántica?',
    auditory: 'Con música romántica',
    visual: 'A la luz de las velas',
    kinesthetic: 'Bailando tranquilamente',
  },
  {
    question: '¿Qué es lo que más disfrutas de viajar?',
    auditory: 'Aprender sobre otras costumbres',
    visual: 'Conocer lugares nuevos',
    kinesthetic: 'Conocer personas y hacer nuevos amigos',
  },
  {
    question:
      'Cuando estás en la ciudad, ¿qué es lo que más hechas de menos del campo?',
    auditory: 'La tranquilidad',
    visual: 'Los paisajes',
    kinesthetic: 'El aire limpio y refrescante',
  },
  {
    question:
      'Si te ofrecieran uno de los siguientes empleos, ¿cuál elegirías?',
    auditory: 'Director de una estación de radio',
    visual: 'Director de una revista',
    kinesthetic: 'Director de un club deportivo',
  },
];

function loadTest() {
  deselectAnswers();

  const currentQuestionData = testData[questionIndex];
  questionText.innerText = currentQuestionData.question;

  aText.innerText = currentQuestionData.auditory;
  bText.innerText = currentQuestionData.visual;
  cText.innerText = currentQuestionData.kinesthetic;
}

function getSelected() {
  let selectedAnswer = undefined;

  answerOptions.forEach((answerOption) => {
    if (answerOption.checked) {
      selectedAnswer = answerOption.id;
    }
  });

  return selectedAnswer;
}

function deselectAnswers() {
  answerOptions.forEach((answerOption) => {
    answerOption.checked = false;
  });
}

submitBtn.addEventListener('click', () => {
  const selectedAnswer = getSelected();

  console.log(selectedAnswer);
  if (selectedAnswer) {
    switch (selectedAnswer) {
      case 'a':
        auditory++;
        break;
      case 'b':
        visual++;
        break;
      case 'c':
        kinesthetic++;
        break;

      default:
        break;
    }

    questionIndex++;
    if (questionIndex < testData.length) {
      loadTest();
    } else {
      test.innerHTML = `
        <h2>Visual: ${visual}</h2>
        <h2>Auditivo: ${auditory}</h2>
        <h2>Kinestesico: ${kinesthetic}</h2>

        <div class="d-flex justify-content-center mt-3 mb-5">
        <button class="btn btn-warning mt-3 align-self-center id="submit">Profile</button>
        </div>
      `;

      visual = (visual / 40) * 100;
      auditory = (auditory / 40) * 100;
      kinesthetic = (kinesthetic / 40) * 100;
    }
  } else {
    alert('Tienes que seleccionar una opción');
  }
});

loadTest();
