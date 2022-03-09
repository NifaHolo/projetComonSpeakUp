import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-questionnaire",
  templateUrl: "./questionnaire.component.html",
  styleUrls: ["./questionnaire.component.css"]
})
export class QuestionnaireComponent implements OnInit {
  title = "projetAna";

  questions = [
    {
      nom: "Question 1 :",
      grammar: "Kate ___ from Germany.",
      rep1: "a. is",
      rep2: "b. are",
      rep3: "c. am",
      rep4: "d. be"

    },
    {
      nom: "Question 2 :",
      grammar: "What’s ______ name?",
      rep1: "a. you",
      rep2: "b. your",
      rep3: "c. you're",
      rep4: "d. "
    },
    {
      nom: "Question 3 :",
      grammar: "Mark ______ in London.",
      rep1: "a. is work",
      rep2: "b. work",
      rep3: "c. working",
      rep4: "d. works"
    },
    {
      nom: "Question 4 :",
      grammar: "Where ______?",
      rep1: "a. live you",
      rep2: "b. do you live",
      rep3: "c. you live",
      rep4: "d. does you live"
    },
    {
      nom: "Question 5 :",
      grammar: "I ______ rain.",
      rep1: "a.  not like",
      rep2: "b. like not",
      rep3: "c. no like",
      rep4: "d. don’t like"
    },
    {
      nom: "Question 6 :",
      grammar: "Katrina doesn’t like ______ in the morning.",
      rep1: "a. to getting up",
      rep2: "b. get up",
      rep3: "c. getting up",
      rep4: "d. got up"
    },
    {
      nom: "Question 7 :",
      grammar: "Randolf can’t ______ very well.",
      rep1: "a. to drive",
      rep2: "b. drive",
      rep3: "c. driving",
      rep4: "d. drives"
    },  
    {
      nom: "Question 8 :",
      grammar: " What ____________ at the moment?",
      rep1: "a. you do",
      rep2: "b. are you doing",
      rep3: "c. do you do",
      rep4: "d. you are doing"
    }, {
      nom: "Question 9 :",
      grammar: "Oliver is interested ______ art.",
      rep1: "a. in",
      rep2: "b. on",
      rep3: "c. at",
      rep4: "d. to"
    }, {
      nom: "Question 10 :",
      grammar: "A dog is an animal ______ walks on four legs",
      rep1: "a. who",
      rep2: "b. which",
      rep3: "c. what",
      rep4: "d. whose"
    }, {
      nom: "Question 11 :",
      grammar: "What ______? It looks delicious.",
      rep1: "a. he’s eating",
      rep2: "b. is he eating",
      rep3: "c. does he eat",
      rep4: "d. he eats"
    }, {
      nom: "Question 12 :",
      grammar: "Julian is ______ person I’ve ever met",
      rep1: "a. the nicer",
      rep2: "b. the most nice",
      rep3: "c. the nicest",
      rep4: "d. the more nice"
    }, {
      nom: "Question 13 :",
      grammar: " ______ meet Paolo for lunch tomorrow.",
      rep1: "a. I’m to",
      rep2: "b. I go to",
      rep3: "c. I going to",
      rep4: "d. I’m going to"
    }, {
      nom: "Question 14 :",
      grammar: "That’s the guy ______ uncle lives next door to me.",
      rep1: "a. who",
      rep2: "b. which",
      rep3: "c. that",
      rep4: "d. whose"
    }, {
      nom: "Question 15 :",
      grammar: " I ______ a really funny YouTube video when you called me",
      rep1: "a. am watching",
      rep2: "b. watched",
      rep3: "c. have watched",
      rep4: "d. was watching"
    }, {
      nom: "Question 16 :",
      grammar: " I’m afraid I can’t meet you tomorrow. ______ lunch with an old friend.",
      rep1: "a.  I have",
      rep2: "b. a little",
      rep3: "c. few",
      rep4: "d. a few"
    }, {
      nom: "Question 17 :",
      grammar: "We need to hurry up. We have ______ time left",
      rep1: "a. little",
      rep2: "b. a little",
      rep3: "c. few",
      rep4: "d. a few"
    }, 
    {
      nom: "Question 18 :",
      grammar: "''______ sushi?'' ''Yes, many times.''",
      rep1: "a. Have you ever",
      rep2: "b. Did you ever eat",
      rep3: "c. Are you ever",
      rep4: "d. Do you ever eat"
    }, {
      nom: "Question 19 :",
      grammar: "Would you mind ______ me a little later?",
      rep1: "a. to call",
      rep2: "b. to calling",
      rep3: "c. if you call",
      rep4: "d. calling"
    }, {
      nom: "Question 20 :",
      grammar: "Can you tell me where ______ last night?",
      rep1: "a. did you go",
      rep2: "b. you went",
      rep3: "c. you have been",
      rep4: "d. you did go"
    }, {
      nom: "Question 21 :",
      grammar: "When ______ here, I’ll tell you everything.",
      rep1: "a. you’ll get",
      rep2: "b. you get",
      rep3: "c. you’ll have got",
      rep4: "d. you’re getting"
    }, {
      nom: "Question 22 :",
      grammar: "If I ______ you, I’d go to bed early",
      rep1: "a. am",
      rep2: "b. is",
      rep3: "c. were",
      rep4: "d.  have been"
    }, {
      nom: "Question 23 :",
      grammar: " It’s the end of the match! Spain ______ the World Cup!",
      rep1: "a. won",
      rep2: "b. had won",
      rep3: "c. have won",
      rep4: "d. is winning"
    }, {
      nom: "Question 24 :",
      grammar: " Michael works for BP and ______.",
      rep1: "a. so am I",
      rep2: "b. so I work",
      rep3: "c. so I do",
      rep4: "d. so do I"
    }, {
      nom: "Question 25 :",
      grammar: " What ______ if you won the lottery?",
      rep1: "a. do you do",
      rep2: "b. will you do",
      rep3: "c. would you do",
      rep4: "d. did you do"
    }, {
      nom: "Question 26 :",
      grammar: " I regret ______ the purple dress.",
      rep1: "a. not to buy",
      rep2: "b. not buying",
      rep3: "c. to not buy",
      rep4: "d. not have bought"
    }, {
      nom: "Question 27 :",
      grammar: " Where would you live if you ______ to live anywhere?",
      rep1: "a. can choose",
      rep2: "b. will choose",
      rep3: "c. choose",
      rep4: "d. could choose"
    }, {
      nom: "Question 28 :",
      grammar: " Where would you live if you ______ to live anywhere?",
      rep1: "a.  hadn’t had",
      rep2: "b. don’t have",
      rep3: "c. wouldn’t have",
      rep4: "d. didn’t have"
    }, {
      nom: "Question 29 :",
      grammar: "If only John ______ to my party tonight!",
      rep1: "a. was coming",
      rep2: "b. comes",
      rep3: "c. will come",
      rep4: "d.  is coming"
    }, {
      nom: "Question 30 :",
      grammar: "We should ______ that he wouldn’t come to the party.",
      rep1: "a. know",
      rep2: "b. have known",
      rep3: "c. had known",
      rep4: "d. known"
    }, {
      nom: "Question 31 :",
      grammar: "The side mirror of my car is broken. I need to ______. Do you know a good mechanic?",
      rep1: "a. fix it",
      rep2: "b.  have it fixed",
      rep3: "c.  have fixed it",
      rep4: "d. fixed it"
    }, {
      nom: "Question 32 :",
      grammar: "Rosie isn’t picking up her phone. She could ______.",
      rep1: "a. have slept",
      rep2: "b. sleep",
      rep3: "c. be sleeping",
      rep4: "d. to sleep"
    }, {
      nom: "Question 33 :",
      grammar: "Joe told me that ______ for over an hour.",
      rep1: "a. he’d been waiting",
      rep2: "b. he’s waited",
      rep3: "c.  he’s waiting",
      rep4: "d. he waits"
    }, {
      nom: "Question 34 :",
      grammar: "If I ______ about your problem, I would have tried to help you",
      rep1: "a. had known",
      rep2: "b. knew",
      rep3: "c. would know",
      rep4: "d. would have known"
    }, {
      nom: "Question 35 :",
      grammar: "I’d rather you ______ me every five minutes!",
      rep1: "a. don’t call",
      rep2: "b. wouldn’t call",
      rep3: "c. won’t call",
      rep4: "d. not called"
    }, {
      nom: "Question 36 :",
      grammar: "By this time next year, ______ a new car",
      rep1: "a. I would buy",
      rep2: "b. I’ll be buying",
      rep3: "c. I’ll have been buying",
      rep4: "d. I’ll have bought"
    },

  ]
  questions2 = [
    {
      nom2: "Question 1 :",
      Vocab: "Our next lesson is ______ Tuesday.",
      repV1: "a. in",
      repV2: "b. on",
      repV3: "c. at",
      repV4: "d. by"

    },
    {
      nom2: "Question 2 :",
      Vocab: "Alison ______ 12 years old.",
      repV1: "a. has",
      repV2: "b. have",
      repV3: "c. is",
      repV4: "d. has got"

    },
    {
      nom2: "Question 3 :",
      Vocab: "I ______ home at 6 o’clock every day.",
      repV1: "a. get",
      repV2: "b. move",
      repV3: "c. open",
      repV4: "d. live"

    },
    {
      nom2: "Question 4 :",
      Vocab: "Jane usually ______ shopping on Saturdays.",
      repV1: "a. makes",
      repV2: "b. has",
      repV3: "c. goes",
      repV4: "d. takes"

    },
    {
      nom2: "Question 5 :",
      Vocab: "I always ______ TV in the evening.",
      repV1: "a. watch",
      repV2: "b. see",
      repV3: "c. look",
      repV4: "d. hear"

    },
    {
      nom2: "Question 6 :",
      Vocab: "Peter never ______ the dishes after dinner.",
      repV1: "a. makes",
      repV2: "b. does",
      repV3: "c. takes",
      repV4: "d. runs"

    },
    {
      nom2: "Question 7 :",
      Vocab: "I never ______ rock music.",
      repV1: "a. hear",
      repV2: "b. see",
      repV3: "c. listen to",
      repV4: "d. feel"

    },
    {
      nom2: "Question 8 :",
      Vocab: "I always ______ sightseeing when I travel.",
      repV1: "a. go",
      repV2: "b. make",
      repV3: "c. get",
      repV4: "d. take"

    },
    {
      nom2: "Question 9 :",
      Vocab: "What clothes do you ______ at work?",
      repV1: "a. get",
      repV2: "b. use",
      repV3: "c. carry",
      repV4: "d. wear"

    },
    {
      nom2: "Question 10 :",
      Vocab: '"Can you pass me the salt?" "______."',
      repV1: "a. Here you are",
      repV2: "b. You’re welcome",
      repV3: "c. Yes, please",
      repV4: "d. Go ahead"

    },
    {
      nom2: "Question 11 :",
      Vocab: "Can you give me a ______ to the station?",
      repV1: "a. sign",
      repV2: "b. hand",
      repV3: "c. break",
      repV4: "d. lift"

    },
    {
      nom2: "Question 12 :",
      Vocab: '"Would you like a dessert?" "No, thanks. Just the ______, please."',
      repV1: "a. invoice",
      repV2: "b. receipt",
      repV3: "c. ticket",
      repV4: "d. bill"

    },
    {
      nom2: "Question 13 :",
      Vocab: "I can’t hear anything. It’s too quiet. Can you ______ the volume?",
      repV1: "a. turn down",
      repV2: "b. turn over",
      repV3: "c. turn in",
      repV4: "d. turn up"

    },
    {
      nom2: "Question 14 :",
      Vocab: "I went to the bakery to buy a ______ of bread.",
      repV1: "a. loaf",
      repV2: "b. packet",
      repV3: "c. tin",
      repV4: "d. can"

    },
    {
      nom2: "Question 15 :",
      Vocab: "You look different today. Have you ______ your hair?",
      repV1: "a. tanned",
      repV2: "b. dyed",
      repV3: "c. painted",
      repV4: "d. drawn"

    },
    {
      nom2: "Question 16 :",
      Vocab: "Can you ______ me your dictionary? I’ll give it back to you later.",
      repV1: "a. lend",
      repV2: "b. owe",
      repV3: "c. rent",
      repV4: "d. borrow"

    },
    {
      nom2: "Question 17 :",
      Vocab: "Jack has made a lot of money this year. He can ______ a luxury holiday.",
      repV1: "a. allow",
      repV2: "b. earn",
      repV3: "c. rent",
      repV4: "d. afford"

    },
    {
      nom2: "Question 18 :",
      Vocab: "When Joe found out that his wife was using his credit card again, he started to see ______.",
      repV1: "a. blue",
      repV2: "b. yellow",
      repV3: "c. green",
      repV4: "d. red"

    },
    {
      nom2: "Question 19 :",
      Vocab: "Carl ______ stealing the car radio, but nobody believed him.",
      repV1: "a. admitted",
      repV2: "b. denied",
      repV3: "c. told",
      repV4: "d. informed"

    },
    {
      nom2: "Question 20 :",
      Vocab: "It looked like a very interesting job, so I decided to ______ for it.",
      repV1: "a. register",
      repV2: "b. apply",
      repV3: "c. submit",
      repV4: "d. ask"

    },
    {
      nom2: "Question 21 :",
      Vocab: "During the meeting, Samuel argued that we need to hire more staff in order to develop the business. He made a good ______.",
      repV1: "a. sale",
      repV2: "b. story",
      repV3: "c. piece",
      repV4: "d. point"

    },
    {
      nom2: "Question 22 :",
      Vocab: "We couldn’t see the sun. The sky was completely ______.",
      repV1: "a. overcast",
      repV2: "b. overcovered",
      repV3: "c. overcome",
      repV4: "d. overcoated"

    },
    {
      nom2: "Question 23 :",
      Vocab: "The police arrested Derek for ______. He was caught with a stolen television set.",
      repV1: "a. mugging",
      repV2: "b. bribery",
      repV3: "c. assault",
      repV4: "d. burglary"

    },
    {
      nom2: "Question 24 :",
      Vocab: "I was over the ______ when I found out that I’d aced the English exam.",
      repV1: "a. hill",
      repV2: "b. fence",
      repV3: "c. moon",
      repV4: "d. world"

    },

  ]



  constructor() { }

  ngOnInit(): void {
  }

}
