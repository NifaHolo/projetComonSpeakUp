import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  FormControl,
  ValidatorFn
} from '@angular/forms';

@Component({
  selector: 'app-audioanglais',
  templateUrl: './audioanglais.component.html',
  styleUrls: ['./audioanglais.component.css']
})
export class AudioanglaisComponent implements OnInit {
  audio = [
    {
      numero: "audio 1 :",
      source: "../../assets/audio/1Hellohowareyou.mp3",
      reponseUser: "",
    },
    {
      numero: "audio 2 :",
      source: "../../assets/audio/2whatname.mp3",
      reponseUser: "",
    },
    {
      numero: "audio 3 :",
      source: "../../assets/audio/3howoldareyou.mp3",
      reponseUser: "",
    },
    {
      numero: "audio 4 :",
      source: "../../assets/audio/4whatfavouritecolour.mp3",
      reponseUser: "",
    },
    {
      numero: "audio 5 :",
      source: "../../assets/audio/5questioncolorflag.mp3",
      reponseUser: "",
    },
    {
      numero: "audio 6 :",
      source: "../../assets/audio/6whatthingsdoyouliketodo.mp3",
      reponseUser: "",
    },
    {
      numero: "audio 7 :",
      source: "../../assets/audio/7wherevacation.mp3",
      reponseUser: "",
    },
    {
      numero: "audio 8 :",
      source: "../../assets/audio/8howgettomainstreet.mp3",
      reponseUser: "",
    },
    {
      numero: "audio 9 :",
      source: "../../assets/audio/9whereareyougoing.mp3",
      reponseUser: "",
    },
    {
      numero: "audio 10 :",
      source: "../../assets/audio/10howmuchthiscosts.mp3",
      reponseUser: "",
    },
    {
      numero: "audio 11 :",
      source: "../../assets/audio/11haveseenmovie.mp3",
      reponseUser: "",
    },
    {
      numero: "audio 12 :",
      source: "../../assets/audio/12beautifuldayisntis.mp3",
      reponseUser: "",
    },
  ]
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
    for (var y = 1; y <= this.audio.length; y++) {
      obj['Q_' + y] = ''
    }
    return obj;
  }

  submit() {

    // For debug
    console.log(this.form.value);
  
    //  On boucle sur chaque question , 
    //    SI y'a eu une saisie on la met dans le tableau des questions
    //    Sinon on met showforgetAnswer a true pour indiquer un oublie dans la saisie
    for (var y = 0; y < this.audio.length; y++) {

      if (this.form.value['Q_' + (y + 1)] != '')
        this.audio[y].reponseUser = this.form.value['Q_' + (y + 1)];
    }


  }
  ngOnInit(): void {
  }

}
