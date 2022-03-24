import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  FormControl,
  ValidatorFn
} from '@angular/forms';

@Component({
  selector: "app-questionnaire",
  templateUrl: "./questionnaire.component.html",
  styleUrls: ["./questionnaire.component.css"]
})
export class QuestionnaireComponent implements OnInit {

  title = "projetAna";
  
  //  Etat d'afficheage des reponces
  showAnswer = false;

  //  Liste des questions vocabulaires
  questions = [
    {
      nom: "Question 1 :",
      grammar: "Kate ___ from Germany.",
      reponses: ["a. is", "b. are", "c. am", "d. be" ], 
      bonneReponses: 0,
      reponsesUser : -1,
    },
    {
      nom: "Question 2 :",
      grammar: "What’s ______ name?",
      reponses: [ "a. you",
       "b. your",
       "c. you're",
        ],
      bonneReponses: 1,
      reponsesUser : -1
    },
    {
      nom: "Question 3 :",
      grammar: "Mark ______ in London.",
      reponses:[ "a. is work",
       "b. work",
       "c. working",
      "d. works"],
      bonneReponses: 3,
      reponsesUser : -1
    },
    {
      nom: "Question 4 :",
      grammar: "Where ______?",
      reponses:[ "a. live you",
       "b. do you live",
       "c. you live",
        "d. does you live"],
      bonneReponses:1,
      reponsesUser : -1
    },
    {
      nom: "Question 5 :",
      grammar: "I ______ rain.",
      reponses:[ "a. not like",
       "b. like not",
       "c. no like",
        "d. don’t like",
      ],
      bonneReponses: 3,
      reponsesUser : -1
    },
    {
      nom: "Question 6 :",
      grammar: "Katrina doesn’t like ______ in the morning.",
      reponses:[ "a. to getting up",
       "b. get up",
       "c. getting up",
        "d. got up"],
      bonneReponses: 2,
      reponsesUser : -1
    },
    {
      nom: "Question 7 :",
      grammar: "Randolf can’t ______ very well.",
      reponses:[ "a. to drive",
       "b. drive",
       "c. driving",
        "d. drives"],
      bonneReponses: 1,
      reponsesUser : -1
    },  
    {
      nom: "Question 8 :",
      grammar: " What ____________ at the moment?",
      reponses:[ "a. you do",
       "b. are you doing",
       "c. do you do",
        "d. you are doing"],
      bonneReponses: 1,
      reponsesUser : -1
    }, {
      nom: "Question 9 :",
      grammar: "Oliver is interested ______ art.",
      reponses:[ "a. in",
       "b. on",
       "c. at",
        "d. to"],
      bonneReponses: 0,
      reponsesUser : -1
    }, {
      nom: "Question 10 :",
      grammar: "A dog is an animal ______ walks on four legs",
      reponses:[ "a. who",
       "b. which",
       "c. what",
        "d. whose"],
      bonneReponses: 1,
      reponsesUser : -1
    }, {
      nom: "Question 11 :",
      grammar: "What ______? It looks delicious.",
      reponses:[ "a. he’s eating",
       "b. is he eating",
       "c. does he eat",
        "d. he eats"],
      bonneReponses: 1,
      reponsesUser : -1
    }, {
      nom: "Question 12 :",
      grammar: "Julian is ______ person I’ve ever met",
      reponses:[ "a. the nicer",
       "b. the most nice",
       "c. the nicest",
        "d. the more nice"],
      bonneReponses: 2,
      reponsesUser : -1
    }, {
      nom: "Question 13 :",
      grammar: " ______ meet Paolo for lunch tomorrow.",
      reponses:[ "a. I’m to",
       "b. I go to",
       "c. I going to",
        "d. I’m going to"],
      bonneReponses: 3,
      reponsesUser : -1
    }, {
      nom: "Question 14 :",
      grammar: "That’s the guy ______ uncle lives next door to me.",
      reponses:[ "a. who",
       "b. which",
       "c. that",
        "d. whose"],
      bonneReponses: 3,
      reponsesUser : -1
    }, {
      nom: "Question 15 :",
      grammar: " I ______ a really funny YouTube video when you called me",
      reponses:[ "a. am watching",
       "b. watched",
       "c. have watched",
        "d. was watching"],
      bonneReponses: 3,
      reponsesUser : -1
    }, {
      nom: "Question 16 :",
      grammar: " I’m afraid I can’t meet you tomorrow. ______ lunch with an old friend.",
      reponses:[ "a. I have",
       "b. a little",
       "c. few",
        "d. a few"],
      bonneReponses: 2,
      reponsesUser : -1
    }, {
      nom: "Question 17 :",
      grammar: "We need to hurry up. We have ______ time left",
      reponses:[ "a. little",
       "b. a little",
       "c. few",
        "d. a few"],
      bonneReponses: 0,
      reponsesUser : -1
    }, 
    {
      nom: "Question 18 :",
      grammar: "''______ sushi?'' ''Yes, many times.''",
      reponses:[ "a. Have you ever",
       "b. Did you ever eat",
       "c. Are you ever",
        "d. Do you ever eat"],
      bonneReponses: 0,
      reponsesUser : -1
    }, {
      nom: "Question 19 :",
      grammar: "Would you mind ______ me a little later?",
      reponses:[ "a. to call",
       "b. to calling",
       "c. if you call",
        "d. calling"],
      bonneReponses: 3,
      reponsesUser : -1
    }, {
      nom: "Question 20 :",
      grammar: "Can you tell me where ______ last night?",
      reponses:[ "a. did you go",
       "b. you went",
       "c. you have been",
        "d. you did go"],
      bonneReponses: 1,
      reponsesUser : -1
    }, {
      nom: "Question 21 :",
      grammar: "When ______ here, I’ll tell you everything.",
      reponses:[ "a. you’ll get",
       "b. you get",
       "c. you’ll have got",
        "d. you’re getting"],
      bonneReponses: 1,
      reponsesUser : -1
    }, {
      nom: "Question 22 :",
      grammar: "If I ______ you, I’d go to bed early",
      reponses:[ "a. am",
       "b. is",
       "c. were",
        "d. have been"],
      bonneReponses: 2,
      reponsesUser : -1
    }, {
      nom: "Question 23 :",
      grammar: " It’s the end of the match! Spain ______ the World Cup!",
      reponses:[ "a. won",
       "b. had won",
       "c. have won",
        "d. is winning"],
      bonneReponses: 2,
      reponsesUser : -1
    }, {
      nom: "Question 24 :",
      grammar: " Michael works for BP and ______.",
      reponses:[ "a. so am I",
       "b. so I work",
       "c. so I do",
        "d. so do I"],
      bonneReponses: 3,
      reponsesUser : -1
    }, {
      nom: "Question 25 :",
      grammar: " What ______ if you won the lottery?",
      reponses:[ "a. do you do",
       "b. will you do",
       "c. would you do",
        "d. did you do"],
      bonneReponses: 2,
      reponsesUser : -1
    }, {
      nom: "Question 26 :",
      grammar: " I regret ______ the purple dress.",
      reponses:[ "a. not to buy",
       "b. not buying",
       "c. to not buy",
        "d. not have bought"],
      bonneReponses: 1,
      reponsesUser : -1
    }, {
      nom: "Question 27 :",
      grammar: " Where would you live if you ______ to live anywhere?",
      reponses:[ "a. can choose",
       "b. will choose",
       "c. choose",
        "d. could choose"],
      bonneReponses: 3,
      reponsesUser : -1
    }, {
      nom: "Question 28 :",
      grammar: " Where would you live if you ______ to live anywhere?",
      reponses:[ "a. hadn’t had",
       "b. don’t have",
       "c. wouldn’t have",
        "d. didn’t have"],
      bonneReponses: 3,
      reponsesUser : -1
    }, {
      nom: "Question 29 :",
      grammar: "If only John ______ to my party tonight!",
      reponses:[ "a. was coming",
       "b. comes",
       "c. will come",
        "d. is coming"],
      bonneReponses: 0,
      reponsesUser : -1
    }, {
      nom: "Question 30 :",
      grammar: "We should ______ that he wouldn’t come to the party.",
      reponses:[ "a. know",
       "b. have known",
       "c. had known",
        "d. known"],
      bonneReponses: 1,
      reponsesUser : -1
    }, {
      nom: "Question 31 :",
      grammar: "The side mirror of my car is broken. I need to ______. Do you know a good mechanic?",
      reponses:[ "a. fix it",
       "b. have it fixed",
       "c. have fixed it",
        "d. fixed it"],
      bonneReponses: 1,
      reponsesUser : -1
    }, {
      nom: "Question 32 :",
      grammar: "Rosie isn’t picking up her phone. She could ______.",
      reponses:[ "a. have slept",
       "b. sleep",
       "c. be sleeping",
        "d. to sleep"],
      bonneReponses: 2,
      reponsesUser : -1
    }, {
      nom: "Question 33 :",
      grammar: "Joe told me that ______ for over an hour.",
      reponses:[ "a. he’d been waiting",
       "b. he’s waited",
       "c. he’s waiting",
        "d. he waits"],
      bonneReponses: 0,
      reponsesUser : -1
    }, {
      nom: "Question 34 :",
      grammar: "If I ______ about your problem, I would have tried to help you",
      reponses:[ "a. had known",
       "b. knew",
       "c. would know",
        "d. would have known"],
      bonneReponses: 0,
      reponsesUser : -1
    }, {
      nom: "Question 35 :",
      grammar: "I’d rather you ______ me every five minutes!",
      reponses:[ "a. don’t call",
       "b. wouldn’t call",
       "c. won’t call",
        "d. not called"],
      bonneReponses: 1,
      reponsesUser : -1
    }, {
      nom: "Question 36 :",
      grammar: "By this time next year, ______ a new car",
      reponses:[ "a. I would buy",
       "b. I’ll be buying",
       "c. I’ll have been buying",
        "d. I’ll have bought"],
      bonneReponses: 1,
      reponsesUser : -1
    },

  ]

  //  Liste des question grammaire
  questions2 = [
    {
      nom2: "Question 1 :",
      Vocab: "Our next lesson is ______ Tuesday.",
      reponses:[ "a. in",
      "b. on",
       "c. at",
        "d. by"],
      bonneReponses: 1
,
      reponsesUser : -1
    },
    {
      nom2: "Question 2 :",
      Vocab: "Alison ______ 12 years old.",
      reponses:[ "a. has",
      "b. have",
      "c. is",
      "d. has got"],
      bonneReponses: 2
,
      reponsesUser : -1
    },
    {
      nom2: "Question 3 :",
      Vocab: "I ______ home at 6 o’clock every day.",
      reponses:[ "a. get",
      "b. move",
       "c. open",
        "d. live"],
      bonneReponses: 0
,
      reponsesUser : -1
    },
    {
      nom2: "Question 4 :",
      Vocab: "Jane usually ______ shopping on Saturdays.",
      reponses:[ "a. makes",
      "b. has",
       "c. goes",
        "d. takes"],
      bonneReponses: 2
,
      reponsesUser : -1
    },
    {
      nom2: "Question 5 :",
      Vocab: "I always ______ TV in the evening.",
      reponses:[ "a. watch",
      "b. see",
       "c. look",
        "d. hear"],
      bonneReponses: 0
,
      reponsesUser : -1
    },
    {
      nom2: "Question 6 :",
      Vocab: "Peter never ______ the dishes after dinner.",
      reponses:[ "a. makes",
      "b. does",
       "c. takes",
        "d. runs"],
      bonneReponses: 1
,
      reponsesUser : -1
    },
    {
      nom2: "Question 7 :",
      Vocab: "I never ______ rock music.",
      reponses:[ "a. hear",
      "b. see",
       "c. listen to",
        "d. feel"],
      bonneReponses: 2
,
      reponsesUser : -1
    },
    {
      nom2: "Question 8 :",
      Vocab: "I always ______ sightseeing when I travel.",
      reponses:[ "a. go",
      "b. make",
       "c. get",
        "d. take"],
      bonneReponses: 0
,
      reponsesUser : -1
    },
    {
      nom2: "Question 9 :",
      Vocab: "What clothes do you ______ at work?",
      reponses:[ "a. get",
      "b. use",
       "c. carry",
        "d. wear"],
      bonneReponses: 3
,
      reponsesUser : -1
    },
    {
      nom2: "Question 10 :",
      Vocab: '"Can you pass me the salt?" "______."',
      reponses:[ "a. Here you are",
      "b. You’re welcome",
       "c. Yes, please",
        "d. Go ahead"],
      bonneReponses: 0
,
      reponsesUser : -1
    },
    {
      nom2: "Question 11 :",
      Vocab: "Can you give me a ______ to the station?",
      reponses:[ "a. sign",
      "b. hand",
       "c. break",
        "d. lift"],
      bonneReponses: 3
,
      reponsesUser : -1
    },
    {
      nom2: "Question 12 :",
      Vocab: '"Would you like a dessert?" "No, thanks. Just the ______, please."',
      reponses:[ "a. invoice",
      "b. receipt",
       "c. ticket",
        "d. bill"],
      bonneReponses: 3
,
      reponsesUser : -1
    },
    {
      nom2: "Question 13 :",
      Vocab: "I can’t hear anything. It’s too quiet. Can you ______ the volume?",
      reponses:[ "a. turn down",
      "b. turn over",
       "c. turn in",
        "d. turn up"],
      bonneReponses: 3
,
      reponsesUser : -1
    },
    {
      nom2: "Question 14 :",
      Vocab: "I went to the bakery to buy a ______ of bread.",
      reponses:[ "a. loaf",
      "b. packet",
       "c. tin",
        "d. can"],
      bonneReponses: 0
,
      reponsesUser : -1
    },
    {
      nom2: "Question 15 :",
      Vocab: "You look different today. Have you ______ your hair?",
      reponses:[ "a. tanned",
      "b. dyed",
       "c. painted",
        "d. drawn"],
      bonneReponses: 1
,
      reponsesUser : -1
    },
    {
      nom2: "Question 16 :",
      Vocab: "Can you ______ me your dictionary? I’ll give it back to you later.",
      reponses:[ "a. lend",
      "b. owe",
       "c. rent",
        "d. borrow"],
      bonneReponses: 0
,
      reponsesUser : -1
    },
    {
      nom2: "Question 17 :",
      Vocab: "Jack has made a lot of money this year. He can ______ a luxury holiday.",
      reponses:[ "a. allow",
      "b. earn",
       "c. rent",
        "d. afford"],
      bonneReponses: 3
,
      reponsesUser : -1
    },
    {
      nom2: "Question 18 :",
      Vocab: "When Joe found out that his wife was using his credit card again, he started to see ______.",
      reponses:[ "a. blue",
      "b. yellow",
       "c. green",
        "d. red"],
      bonneReponses: 3
,
      reponsesUser : -1
    },
    {
      nom2: "Question 19 :",
      Vocab: "Carl ______ stealing the car radio, but nobody believed him.",
      reponses:[ "a. admitted",
      "b. denied",
       "c. told",
        "d. informed"],
      bonneReponses: 1
,
      reponsesUser : -1
    },
    {
      nom2: "Question 20 :",
      Vocab: "It looked like a very interesting job, so I decided to ______ for it.",
      reponses:[ "a. register",
      "b. apply",
       "c. submit",
        "d. ask"],
      bonneReponses: 1
,
      reponsesUser : -1
    },
    {
      nom2: "Question 21 :",
      Vocab: "During the meeting, Samuel argued that we need to hire more staff in order to develop the business. He made a good ______.",
      reponses:[ "a. sale",
      "b. story",
       "c. piece",
        "d. point"],
      bonneReponses: 3
,
      reponsesUser : -1
    },
    {
      nom2: "Question 22 :",
      Vocab: "We couldn’t see the sun. The sky was completely ______.",
      reponses:[ "a. overcast",
      "b. overcovered",
       "c. overcome",
        "d. overcoated"],
      bonneReponses: 0
,
      reponsesUser : -1
    },
    {
      nom2: "Question 23 :",
      Vocab: "The police arrested Derek for ______. He was caught with a stolen television set.",
      reponses:[ "a. mugging",
      "b. bribery",
       "c. assault",
        "d. burglary"],
      bonneReponses: 3
,
      reponsesUser : -1
    },
    {
      nom2: "Question 24 :",
      Vocab: "I was over the ______ when I found out that I’d aced the English exam.",
      reponses:[ "a. hill",
      "b. fence",
       "c. moon",
        "d. world"],
      bonneReponses: 2
,
      reponsesUser : -1
    },

  ]

  // 
  form: FormGroup;


  constructor(private formBuilder: FormBuilder) {

    var form = this.createArrayForm();
   
   
    this.form = this.formBuilder.group(
      form,    
    );
   
  }

 

  createArrayForm() {

    //  initialisation de l'obgect form, contient une propriété pour chaque question vocab + grammaire
    var obj: any = {}

    //  Pour chaque question vocab on remplie le form obgect
    for (var y = 1; y <= this.questions.length; y++) {
      obj['Q_' + y] = ''
    }

    //  Pour chaque question grammaire on remplie le form obgect
    for (var y = 1; y <= this.questions2.length; y++) {
      obj['Q2_' + y] = ''
    }

    return obj;
  }
 
  //  Au click sur le button submit
  submit() {

    //  Change l'etat d'afficheage des reponces
    this.showAnswer = !this.showAnswer;

    console.log(this.form.value);

    for (var y = 0; y < this.questions.length; y++) {

 
      if (this.form.value['Q_' + (y + 1)] != '')
        this.questions[y].reponsesUser = this.form.value['Q_' + (y + 1)];

    }

   

    for (var y = 0; y < this.questions2.length; y++) {
      
      
      if (this.form.value['Q2_' + (y + 1)] != '')
        this.questions2[y].reponsesUser = this.form.value['Q2_' + (y + 1)];
    }


  }




  ngOnInit(): void {
  }

}

