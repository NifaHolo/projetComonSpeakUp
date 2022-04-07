import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  FormControl,
  ValidatorFn
} from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PopupComponent } from './popup/popup.component';

declare let Email: any;
@Component({
  selector: 'app-questionnaireesp',
  templateUrl: './questionnaireesp.component.html',
  styleUrls: ['./questionnaireesp.component.css']
})
export class QuestionnaireespComponent implements OnInit {
  title = "projetAna";
  orders = this.getOrders();
  showAnswer =false;
  showforgetAnswer = false;
  questions = [
    {
      nom: "Question 1 :",
      grammar: "A. ¿De dónde …. ustedes? B. De Brasil.",
      reponses: [ "A. sois",
      "B. eres",
      "C. están",
        "D. son"],
      bonneReponses: 3,
     reponsesUser : -1},
    {
      nom: "Question 2 :",
      grammar: "A. ¿……………………..? B. Soy administrativo.",
      reponses: [ "A. ¿A qué te dedicas?",
      "B. ¿Qué es Rafael?",
       "C. ¿Qué hace aquí?",
        "D. ¿Qué eres?"],
      bonneReponses: 0,
     reponsesUser : -1},
    // {
    //   nom: "Question 3 :",
    //   grammar: "A. Esta ciudad es …… agradable.",
    //   reponses: [ "A. mucha",
    //   "B. mucho",
    //    "C. muy",
    //     "D. la"],
    //   bonneReponses: 2,
    //  reponsesUser : -1},
    // {
    //   nom: "Question 4 :",
    //   grammar: "A. Perdona, ¿tienes hora? B. Sí, …………….. y cuarto",
    //   reponses: [ "A. Sí, son las una…",
    //   "B. Sí, es la una …",
    //    "C. Sí, a la una …",
    //     "D. No, es la una…"],
    //   bonneReponses: 1,
    //   reponsesUser : -1
    // },
    // {
    //   nom: "Question 5 :",
    //   grammar: "A. ¿Hay una farmacia por aquí cerca? B. Sí, hay una ….. esta calle.",
    //   reponses: [ "A.  en el final de",
    //   "B. en la derecha de",
    //    "C. a la izquierda",
    //     "D. al final de"],
    //   bonneReponses: 3,
    //   reponsesUser : -1
    // },
    // {
    //   nom: "Question 6 :",
    //   grammar: "A.  ¿A qué hora …. levantas los domingos? B. Normalmente, los domingos…. levanto a las nueve o las diez.",
    //   reponses: [ "A. te/me",
    //   "B. se /le",
    //    "C. le/me",
    //     "D. te / se"],
    //   bonneReponses: 0,
    //   reponsesUser : -1
    // },
    // {
    //   nom: "Question 7 :",
    //   grammar: "A.  Buenos días, ¿puedo probarme estos pantalones vaqueros? B.Sí, claro, ¿qué …. usa?",
    //   reponses: [ "A. número",
    //   "B. altura",
    //    "C. medida",
    //     "D. talla"],
    //   bonneReponses: 3,
    //   reponsesUser : -1
    // },
    // {
    //   nom: "Question 8 :",
    //   grammar: " A. ¿Puedo cerrar la ventana?, tengo frío. B. ……………",
    //   reponses: [ "A. Sí, claro, ciérrala",
    //   "B. No puede",
    //    "C. No, cierra",
    //     "D. La cierras, claro"],
    //   bonneReponses: 0,
    //   reponsesUser : -1
    // }, 
    // {
    //   nom: "Question 9 :",
    //   grammar: "A. ¿A qué hora abren los bancos en tu ciudad?",
    //   reponses: [ "A. Las ocho en punto.",
    //   "B. En las ochon",
    //    "C. A la octava",
    //     "D. A las ocho"],
    //   bonneReponses: 3,
    //   reponsesUser : -1
    // },
    // {
    //   nom: "Question 10 :",
    //   grammar: "A. Yo ….. de casa todos los días a las siete …. la mañana",
    //   reponses: [ "A. sale… de",
    //   "B. salgo … por",
    //    "C. sale… por",
    //     "D. salgo …. de"],
    //   bonneReponses: 3,
    //   reponsesUser : -1
    // },
    // {
    //   nom: "Question 11 :",
    //   grammar: "A. ¿Te gusta la comida japonesa?",
    //   reponses: [ "A. Sí, me encanta",
    //   "B. Sí, me encanta mucho",
    //    "C. Sí, me la gusta",
    //     "D. Sí, me gusto"],
    //   bonneReponses: 0,
    //   reponsesUser : -1
    // },
    // {
    //   nom: "Question 12 :",
    //   grammar: "A. Normalmente en mi casa todos …. levantamos temprano.",
    //   reponses: [ "A. siempre",
    //   "B. cada día",
    //    "C. nos",
    //     "D. os"],
    //   bonneReponses: 2,
    //   reponsesUser : -1
    // },
    // {
    //   nom: "Question 13 :",
    //   grammar: "A.  ¿Podemos sentarnos aquí, en esta mesa? B. No, lo siento, …. reservada.",
    //   reponses: [ "A. es",
    //   "B. soy",
    //    "C. estamos",
    //     "D. está"],
    //   bonneReponses: 3,
    //   reponsesUser : -1
    // },
    // {
    //   nom: "Question 14 :",
    //   grammar: "A.  Tienes mala cara, ¿…………………………? B. Nada, es que estoy cansada.",
    //   reponses: [ "A. ¿Qué te pasa?",
    //   "B. ¿Te duele la cabeza?",
    //    "C. ¿Eres mala?",
    //     "D. ¿Quieres café?"],
    //   bonneReponses: 0,
    //   reponsesUser : -1
    // },
    // {
    //   nom: "Question 15 :",
    //   grammar: "A.  Mi mujer es más joven que yo,….. veinticinco años.",
    //   reponses: [ "A. es",
    //   "B. está",
    //    "C. tiene",
    //     "D. son"],
    //   bonneReponses: 2,
    //   reponsesUser : -1
    // },
    // {
    //   nom: "Question 16 :",
    //   grammar: " A. ¿Qué hiciste el domingo pasado? B.…. al cine",
    //   reponses: [ "A. Estuve",
    //   "B. Fui",
    //    "C. Estoy",
    //     "D. Voy"],
    //   bonneReponses: 1,
    //   reponsesUser : -1
    // },
    // {
    //   nom: "Question 17 :",
    //   grammar: "A.  ¿Qué hiciste el domingo pasado? B.…. al cine",
    //   reponses: [ "A. Estuve",
    //   "B. Fui",
    //    "C. Estoy",
    //     "D. les gusta"],
    //   bonneReponses: 0,
    //   reponsesUser : -1
    // },
    // {
    //   nom: "Question 18 :",
    //   grammar: "A.  ……………. un poco las piernas, voy a descansar.",
    //   reponses: [ "A. Me duele",
    //   "B. Me duelen",
    //    "C. Le duele",
    //     "D. Se duelen"],
    //   bonneReponses: 1,
    //   reponsesUser : -1
    // },
    // {
    //   nom: "Question 19 :",
    //   grammar: "A. He comprado una lechuga …… hacer ensalada.",
    //   reponses: [ "A. en",
    //   "B. por",
    //    "C. para",
    //     "D. a"],
    //   bonneReponses: 2,
    //   reponsesUser : -1
    // },
    // {
    //   nom: "Question 20 :",
    //   grammar: "A. El tren …. París llega …. la estación a las diez cuarenta y tres.",
    //   reponses: [ "A. de… a",
    //   "B. a ….en",
    //    "C. de …. en",
    //     "D. de … por"],
    //   bonneReponses: 0,
    //   reponsesUser : -1
    // },
    // {
    //   nom: "Question 21 :",
    //   grammar: "A.  ¿Qué plan tienes para el fin de semana? B.…………….. con mis amigos.",
    //   reponses: [ "A. Salimos",
    //   "B. voy a salir",
    //    "C. voy salir",
    //     "D. iré a salir"],
    //   bonneReponses: 1,
    //   reponsesUser : -1
    // },
    // {
    //   nom: "Question 22 :",
    //   grammar: "A.  ¿Tienes un lápiz? B. ……………",
    //   reponses: [ "A. Sí, tengo",
    //   "B. Sí, toma",
    //    "C. No, toma",
    //     "D. Claro que sí"],
    //   bonneReponses: 1,
    //   reponsesUser : -1
    // },
    // {
    //   nom: "Question 23 :",
    //   grammar: "A. ¿Quieres tomar algo?, yo …. invito.",
    //   reponses: [ "A. le",
    //   "B. me",
    //    "C. lo",
    //     "D. te"],
    //   bonneReponses: 3,
    //   reponsesUser : -1
    // },
    // {
    //   nom: "Question 24 :",
    //   grammar: "A. ¿Vamos al cine mañana? B. ………………..",
    //   reponses: [ "A. Vale, ¿a qué hora nos quedamos?",
    //   "B. Sí, nos quedamos",
    //    "C. Vale, ¿Dónde quedamos?",
    //     "D. No quedamos, no puedo."],
    //   bonneReponses: 2,
    //   reponsesUser : -1
    // },
    // {
    //   nom: "Question 25 :",
    //   grammar: "A.  ¿Conoces a mis padres? B. ………………",
    //   reponses: [ "A. Sí, los conocí en Navidad",
    //   "B. No, no les he conocido",
    //    "C. No los conozco nunca",
    //     "D. Sí, los encontramos en Navidad."],
    //   bonneReponses: 0,
    //   reponsesUser : -1
    // },
    // {
    //   nom: "Question 26 :",
    //   grammar: "A.  ¿Has estado en Barcelona alguna vez? B. ………..",
    //   reponses: [ "A. Nunca fui allí",
    //   "B. Sí, tres veces",
    //    "C. Sí, pero poco",
    //     "D. No, una vez"],
    //   bonneReponses: 1,
    //   reponsesUser : -1
    // },
    // {
    //   nom: "Question 27 :",
    //   grammar: "A. ¿No conoces a Javier Marías? ………… muchos libros.",
    //   reponses: [ "A. Escribió",
    //   "B. Escribe",
    //    "C. Ha escrito",
    //     "D. Escriba"],
    //   bonneReponses: 2,
    //   reponsesUser : -1
    // },
    // {
    //   nom: "Question 28 :",
    //   grammar: "A.  Cuando Andrés……… diez años ……… un accidente con la bicicleta.",
    //   reponses: [ "A.  tuvo… tuvo",
    //   "B. tuvo … tenía",
    //    "C. tenía … tuvo",
    //     "D. tenía … tenía"],
    //   bonneReponses: 2,
    //   reponsesUser : -1
    // },
    // {
    //   nom: "Question 29 :",
    //   grammar: "A. Hace cien años, en España las mujeres no …… votar en las elecciones.",
    //   reponses: [ "A. pudieron",
    //   "B. han podido",
    //    "C. pueden",
    //     "D. podían"],
    //   bonneReponses: 3,
    //   reponsesUser : -1
    // },
    // {
    //   nom: "Question 30 :",
    //   grammar: "A. ¿Me pasas el periódico? B. Sí, toma, …………",
    //   reponses: [ "A. lo estoy leyendo",
    //   "B. lo leí",
    //    "C. lo leía",
    //     "D. ya lo he leído"],
    //   bonneReponses: 3,
    //   reponsesUser : -1
    // },
    // {
    //   nom: "Question 31 :",
    //   grammar: "A.  Buenos días, llamo para reservar una habitación. B. ………….",
    //   reponses: [ "A. ¿Simple o doble?",
    //   "B.  ¿Individual o doble?",
    //    "C.  ¿Sencilla o grande?",
    //     "D. ¿Soltero o casado?"],
    //   bonneReponses: 1,
    //   reponsesUser : -1
    // },
    // {
    //   nom: "Question 32 :",
    //   grammar: "A. Cuando ….. pequeña, en verano siempre ……. de vacaciones al pueblo.",
    //   reponses: [ "A. fui … fui",
    //   "B. estuve… iba",
    //    "C. era… fui",
    //     "D. era…iba"],
    //   bonneReponses: 3,
    //   reponsesUser : -1
    // },
    // {
    //   nom: "Question 33 :",
    //   grammar: "A. Si …….. algún problema, …………",
    //   reponses: [ "A. tienes… llamas",
    //   "B. tienes… llámame",
    //    "C. tengas …. llamaré",
    //     "D. tengas, llámame"],
    //   bonneReponses: 1,
    //   reponsesUser : -1
    // },
    // {
    //   nom: "Question 34 :",
    //   grammar: "A. Para hacer una tortilla de patatas, ………. batir bien los huevos.",
    //   reponses: [ "A. tienes de",
    //   "B. hay de",
    //    "C. hay que",
    //     "D. es necesario que"],
    //   bonneReponses: 2,
    //   reponsesUser : -1
    // },
    // {
    //   nom: "Question 35 :",
    //   grammar: "A. ¿Puedes echarme una mano? ………… ha estropeado el ordenador.",
    //   reponses: [ "A. Se me",
    //   "B. me",
    //    "C. le",
    //     "D. se"],
    //   bonneReponses: 0,
    //   reponsesUser : -1
    // },
    // {
    //   nom: "Question 36 :",
    //   grammar: "A. Todos los padres esperan que sus hijos…… un buen trabajo.",
    //   reponses: [ "A. encontrar",
    //   "B. encuentran",
    //    "C. encontraron",
    //     "D. encuentren"],
    //   bonneReponses: 3,
    //   reponsesUser : -1
    // },
    // {
    //   nom: "Question 37 :",
    //   grammar: "A. Luisa quiere estudiar Arte Dramático, pero sus padres quieren ……… abogada.",
    //   reponses: [ "A. ser",
    //   "B. sea",
    //    "C. que es",
    //     "D. que sea"],
    //   bonneReponses: 3,
    //   reponsesUser : -1
    // },
    // {
    //   nom: "Question 38 :",
    //   grammar: "A. Siempre que Julián ……. a Madrid con sus alumnos, me ……. una visita",
    //   reponses: [ "A. venía …. hacía",
    //   "B. vino …. hizo",
    //    "C. venía … hizo",
    //     "D. viene... hizo"],
    //   bonneReponses: 0,
    //   reponsesUser : -1
    // },
    // {
    //   nom: "Question 39 :",
    //   grammar: "A. Mi hermana Rosa ….. muy simpática, pero hoy ………. de mal humor.",
    //   reponses: [ "A. es… está",
    //   "B. está … está",
    //    "C. es… es",
    //     "D. está... es"],
    //   bonneReponses: 0,
    //   reponsesUser : -1
    // },
    // {
    //   nom: "Question 40 :",
    //   grammar: "A. A Ernesto le gustaría ……. de vacaciones al Caribe.",
    //   reponses: [ "A. que vaya",
    //   "B. ir",
    //    "C. estar",
    //     ],
    //   bonneReponses: 1,
    //   reponsesUser : -1
    // },
    

  ];


  form: FormGroup;


  constructor(private formBuilder: FormBuilder, public dialog: MatDialog) {

    var obg = this.createArrayForm();
    console.log(obg)
    this.form = this.formBuilder.group(
      obg
    );

    this.orders = this.getOrders();
  }

  getOrders() {
    return [
      { id: '1', name: 'order 1' },
      { id: '2', name: 'order 2' },
      { id: '3', name: 'order 3' },
      { id: '4', name: 'order 4' }
    ];


  }

  createArrayForm ()
  {
    var obj: any = {}
    for (var y = 1; y <= this.questions.length; y++) {
      obj['Q_' + y] = ''
    }
    return obj;
  }
  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
  submit() {

    // For debug
    console.log(this.form.value);

    // Par default, il a tout saisie, 
    //  Si on vois une champs non saisie showforgetAnswer, sera a true
    this.showforgetAnswer = false;

    //  On boucle sur chaque question , 
    //    SI y'a eu une saisie on la met dans le tableau des questions
    //    Sinon on met showforgetAnswer a true pour indiquer un oublie dans la saisie
    for (var y = 0; y < this.questions.length; y++) {

      if (this.form.value['Q_' + (y + 1)] != '')
        this.questions[y].reponsesUser = this.form.value['Q_' + (y + 1)];
      else
        this.showforgetAnswer = true;
    }

    //  Si au moins une répones n'est pas saisie alors on affiche pas les résultats
    this.showAnswer = this.showforgetAnswer == true ? false : true;


    if (this.showAnswer == true) {



      //  envoyer le mail a anna

      var acc_good_answer = 0;
      for (var y = 0; y < this.questions.length; y++) {

        if (this.questions[y].reponsesUser == this.questions[y].bonneReponses)
          acc_good_answer++;

      }

    }
    var acc_good_answer = 0;
 
    for (var y = 0; y < this.questions.length; y++) {

      if (this.questions[y].reponsesUser == this.questions[y].bonneReponses)
        acc_good_answer++;

    }

 
    var QuestionsGrammaire = this.questions.length;

    const dialogRef = this.dialog.open(PopupComponent, {
      width: '500px',
      height: '300px',
      data: { acc_good_answer: acc_good_answer,QuestionsGrammaire: QuestionsGrammaire },
    });
    dialogRef.afterClosed().subscribe(result => {

      Email.send({
        Host: "smtp.netcorecloud.net",
        Username: "questionnaireanamailauto",
        Password: "questionnaireanamailauto_9243500db2b77467a4eaf7ee3d625d78",
        To: 'questionnaireanamailauto@gmail.com',
        From: "questionnaireanamailauto@pepisandbox.com",
        Subject: "This is the sqsdqdsqdsqsdubject",
        Body: "And this is theqsdqdqdsqds body"
      }).then((message: any) => {
        alert(message);

      });
    });

  }



  ngOnInit(): void {
  }

}
