import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questionnaireesp',
  templateUrl: './questionnaireesp.component.html',
  styleUrls: ['./questionnaireesp.component.css']
})
export class QuestionnaireespComponent implements OnInit {
  title = "projetAna";

  questions = [
    {
      nom: "Question 1 :",
      grammar: "¿De dónde …. ustedes? B. De Brasil.",
      rep1: "a. sois",
      rep2: "b. eres",
      rep3: "c. están",
      rep4: "d. son"

    },
    {
      nom: "Question 2 :",
      grammar: "¿……………………..? B. Soy administrativo.",
      rep1: "a. ¿A qué te dedicas?",
      rep2: "b. ¿Qué es Rafael?",
      rep3: "c. ¿Qué hace aquí?",
      rep4: "d. ¿Qué eres?"
    },
    {
      nom: "Question 3 :",
      grammar: "Esta ciudad es …… agradable.",
      rep1: "a. mucha",
      rep2: "b. mucho",
      rep3: "c. muy",
      rep4: "d. la"
    },
    {
      nom: "Question 4 :",
      grammar: "Perdona, ¿tienes hora? B. Sí, …………….. y cuarto",
      rep1: "a. Sí, son las una…",
      rep2: "b. Sí, es la una …",
      rep3: "c. Sí, a la una …",
      rep4: "d. No, es la una…"
    },
    {
      nom: "Question 5 :",
      grammar: "¿Hay una farmacia por aquí cerca? B. Sí, hay una ….. esta calle.",
      rep1: "a.  en el final de",
      rep2: "b. en la derecha de",
      rep3: "c. a la izquierda",
      rep4: "d. al final de"
    },
    {
      nom: "Question 6 :",
      grammar: "A. ¿A qué hora …. levantas los domingos? B. Normalmente, los domingos…. levanto a las nueve o las diez.",
      rep1: "a. te/me",
      rep2: "b. se /le",
      rep3: "c. le/me",
      rep4: "d. te / se"
    },
    {
      nom: "Question 7 :",
      grammar: "A. Buenos días, ¿puedo probarme estos pantalones vaqueros? B.Sí, claro, ¿qué …. usa?",
      rep1: "a. número",
      rep2: "b. altura",
      rep3: "c. medida",
      rep4: "d. talla"
    },  
    {
      nom: "Question 8 :",
      grammar: " A. ¿Puedo cerrar la ventana?, tengo frío. B. ……………",
      rep1: "a. Sí, claro, ciérrala",
      rep2: "b. No puede",
      rep3: "c. No, cierra",
      rep4: "d. La cierras, claro"
    }, {
      nom: "Question 9 :",
      grammar: "¿A qué hora abren los bancos en tu ciudad?",
      rep1: "a. Las ocho en punto.",
      rep2: "b. En las ochon",
      rep3: "c. A la octava",
      rep4: "d. A las ocho"
    }, {
      nom: "Question 10 :",
      grammar: "Yo ….. de casa todos los días a las siete …. la mañana",
      rep1: "a. sale… de",
      rep2: "b. salgo … por",
      rep3: "c. sale… por",
      rep4: "d. salgo …. de"
    }, {
      nom: "Question 11 :",
      grammar: "¿Te gusta la comida japonesa?",
      rep1: "a. Sí, me encanta",
      rep2: "b. Sí, me encanta mucho",
      rep3: "c. Sí, me la gusta",
      rep4: "d. Sí, me gusto"
    }, {
      nom: "Question 12 :",
      grammar: "Normalmente en mi casa todos …. levantamos temprano.",
      rep1: "a. siempre",
      rep2: "b. cada día",
      rep3: "c. nos",
      rep4: "d. os"
    }, {
      nom: "Question 13 :",
      grammar: "A. ¿Podemos sentarnos aquí, en esta mesa? B. No, lo siento, …. reservada.",
      rep1: "a. es",
      rep2: "b. soy",
      rep3: "c. estamos",
      rep4: "d. está"
    }, {
      nom: "Question 14 :",
      grammar: "A. Tienes mala cara, ¿…………………………? B. Nada, es que estoy cansada.",
      rep1: "a. ¿Qué te pasa?",
      rep2: "b. ¿Te duele la cabeza?",
      rep3: "c. ¿Eres mala?",
      rep4: "d. ¿Quieres café?"
    }, {
      nom: "Question 15 :",
      grammar: " Mi mujer es más joven que yo,….. veinticinco años.",
      rep1: "a. es",
      rep2: "b. está",
      rep3: "c. tiene",
      rep4: "d. son"
    }, {
      nom: "Question 16 :",
      grammar: " A. ¿Qué hiciste el domingo pasado? B.…. al cine",
      rep1: "a. Estuve",
      rep2: "b. Fui",
      rep3: "c. Estoy",
      rep4: "d. Voy"
    }, {
      nom: "Question 17 :",
      grammar: "A. ¿Qué hiciste el domingo pasado? B.…. al cine",
      rep1: "a. Estuve",
      rep2: "b. Fui",
      rep3: "c. Estoy",
      rep4: "d. les gusta"
    }, {
      nom: "Question 18 :",
      grammar: " ……………. un poco las piernas, voy a descansar.",
      rep1: "a. Me duele",
      rep2: "b. Me duelen",
      rep3: "c. Le duele",
      rep4: "d. Se duelen"
    }, {
      nom: "Question 19 :",
      grammar: "He comprado una lechuga …… hacer ensalada.",
      rep1: "a. en",
      rep2: "b. por",
      rep3: "c. para",
      rep4: "d. a"
    }, {
      nom: "Question 20 :",
      grammar: "El tren …. París llega …. la estación a las diez cuarenta y tres.",
      rep1: "a. de… a",
      rep2: "b. a ….en",
      rep3: "c. de …. en",
      rep4: "d. de … por"
    }, {
      nom: "Question 21 :",
      grammar: "A. ¿Qué plan tienes para el fin de semana? B.…………….. con mis amigos.",
      rep1: "a. Salimos",
      rep2: "b. voy a salir",
      rep3: "c. voy salir",
      rep4: "d. iré a salir"
    }, {
      nom: "Question 22 :",
      grammar: "A. ¿Tienes un lápiz? B. ……………",
      rep1: "a. Sí, tengo",
      rep2: "b. Sí, toma",
      rep3: "c. No, toma",
      rep4: "d. Claro que sí"
    }, {
      nom: "Question 23 :",
      grammar: "¿Quieres tomar algo?, yo …. invito.",
      rep1: "a. le",
      rep2: "b. me",
      rep3: "c. lo",
      rep4: "d. te"
    }, {
      nom: "Question 24 :",
      grammar: "¿Vamos al cine mañana? B. ………………..",
      rep1: "a. Vale, ¿a qué hora nos quedamos?",
      rep2: "b. Sí, nos quedamos",
      rep3: "c. Vale, ¿Dónde quedamos?",
      rep4: "d. No quedamos, no puedo."
    }, {
      nom: "Question 25 :",
      grammar: " ¿Conoces a mis padres? B. ………………",
      rep1: "a. Sí, los conocí en Navidad",
      rep2: "b. No, no les he conocido",
      rep3: "c. No los conozco nunca",
      rep4: "d. Sí, los encontramos en Navidad."
    }, {
      nom: "Question 26 :",
      grammar: "A. ¿Has estado en Barcelona alguna vez? B. ………..",
      rep1: "a. Nunca fui allí",
      rep2: "b. Sí, tres veces",
      rep3: "c. Sí, pero poco",
      rep4: "d. No, una vez"
    }, {
      nom: "Question 27 :",
      grammar: "¿No conoces a Javier Marías? ………… muchos libros.",
      rep1: "a. Escribió",
      rep2: "b. Escribe",
      rep3: "c. Ha escrito",
      rep4: "d. Escriba"
    }, {
      nom: "Question 28 :",
      grammar: " Cuando Andrés……… diez años ……… un accidente con la bicicleta.",
      rep1: "a.  tuvo… tuvo",
      rep2: "b. tuvo … tenía",
      rep3: "c. tenía … tuvo",
      rep4: "d. tenía … tenía"
    }, {
      nom: "Question 29 :",
      grammar: "Hace cien años, en España las mujeres no …… votar en las elecciones.",
      rep1: "a. pudieron",
      rep2: "b. han podido",
      rep3: "c. pueden",
      rep4: "d. podían"
    }, {
      nom: "Question 30 :",
      grammar: "¿Me pasas el periódico? B. Sí, toma, …………",
      rep1: "a. lo estoy leyendo",
      rep2: "b. lo leí",
      rep3: "c. lo leía",
      rep4: "d. ya lo he leído"
    }, {
      nom: "Question 31 :",
      grammar: "A. Buenos días, llamo para reservar una habitación. B. ………….",
      rep1: "a. ¿Simple o doble?",
      rep2: "b.  ¿Individual o doble?",
      rep3: "c.  ¿Sencilla o grande?",
      rep4: "d. ¿Soltero o casado?"
    }, {
      nom: "Question 32 :",
      grammar: "Cuando ….. pequeña, en verano siempre ……. de vacaciones al pueblo.",
      rep1: "a. fui … fui",
      rep2: "b. estuve… iba",
      rep3: "c. era… fui",
      rep4: "d. era…iba"
    }, {
      nom: "Question 33 :",
      grammar: "Si …….. algún problema, …………",
      rep1: "a. tienes… llamas",
      rep2: "b. tienes… llámame",
      rep3: "c. tengas …. llamaré",
      rep4: "d. tengas, llámame"
    }, {
      nom: "Question 34 :",
      grammar: "Para hacer una tortilla de patatas, ………. batir bien los huevos.",
      rep1: "a. Se me",
      rep2: "b. me",
      rep3: "c. Le",
      rep4: "d. Se te"
    }, {
      nom: "Question 35 :",
      grammar: "¿Puedes echarme una mano? ………… ha estropeado el ordenador.",
      rep1: "a. don’t call",
      rep2: "b. wouldn’t call",
      rep3: "c. won’t call",
      rep4: "d. not called"
    }, {
      nom: "Question 36 :",
      grammar: "Todos los padres esperan que sus hijos…… un buen trabajo.",
      rep1: "a. encontrar",
      rep2: "b. encuentran",
      rep3: "c. encontraron",
      rep4: "d. encuentren"
    },{
      nom: "Question 37 :",
      grammar: "Luisa quiere estudiar Arte Dramático, pero sus padres quieren ……… abogada.",
      rep1: "a. ser",
      rep2: "b. sea",
      rep3: "c. que es",
      rep4: "d. que sea"
    },{
      nom: "Question 38 :",
      grammar: "Siempre que Julián ……. a Madrid con sus alumnos, me ……. una visita",
      rep1: "a. venía …. hacía",
      rep2: "b. vino …. hizo",
      rep3: "c. venía … hizo",
      rep4: "d. viene... hizo"
    },{
      nom: "Question 39 :",
      grammar: "Mi hermana Rosa ….. muy simpática, pero hoy ………. de mal humor.",
      rep1: "a. es… está",
      rep2: "b. está … está",
      rep3: "c. es… es",
      rep4: "d. está... es"
    },{
      nom: "Question 40 :",
      grammar: "A Ernesto le gustaría ……. de vacaciones al Caribe.",
      rep1: "a. que vaya",
      rep2: "b. ir",
      rep3: "c. estar",
      rep4: "d. "
    },

  ]


  constructor() {

    
   }

  ngOnInit(): void {
  }

}
