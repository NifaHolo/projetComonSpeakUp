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
  selector: 'app-audioanglais',
  templateUrl: './audioanglais.component.html',
  styleUrls: ['./audioanglais.component.css']
})
export class AudioanglaisComponent implements OnInit {
  showAnswer = false;
  showforgetAnswer = false;
  name = -1;
  audio = [
    {
      numero: "audio 1 :",
      source: "../../assets/audio/1Hellohowareyou.mp3",
      reponseUser: -1,
    },
    {
      numero: "audio 2 :",
      source: "../../assets/audio/2whatname.mp3",
      reponseUser: -1,
    },
    {
      numero: "audio 3 :",
      source: "../../assets/audio/3howoldareyou.mp3",
      reponseUser: -1,
    },
    {
      numero: "audio 4 :",
      source: "../../assets/audio/4whatfavouritecolour.mp3",
      reponseUser: -1,
    },
    {
      numero: "audio 5 :",
      source: "../../assets/audio/5questioncolorflag.mp3",
      reponseUser: -1,
    },
    {
      numero: "audio 6 :",
      source: "../../assets/audio/6whatthingsdoyouliketodo.mp3",
      reponseUser: -1,
    },
    {
      numero: "audio 7 :",
      source: "../../assets/audio/7wherevacation.mp3",
      reponseUser: -1,
    },
    {
      numero: "audio 8 :",
      source: "../../assets/audio/8howgettomainstreet.mp3",
      reponseUser: -1,
    },
    {
      numero: "audio 9 :",
      source: "../../assets/audio/9whereareyougoing.mp3",
      reponseUser: -1,
    },
    {
      numero: "audio 10 :",
      source: "../../assets/audio/10howmuchthiscosts.mp3",
      reponseUser: -1,
    },
    {
      numero: "audio 11 :",
      source: "../../assets/audio/11haveseenmovie.mp3",
      reponseUser: -1,
    },
    {
      numero: "audio 12 :",
      source: "../../assets/audio/12beautifuldayisntis.mp3",
      reponseUser: -1,
    },
  ]
  form: FormGroup;
  constructor(private formBuilder: FormBuilder, public dialog: MatDialog) {

    var form = this.createArrayForm();


    this.form = this.formBuilder.group(
      form,
    );

  }
  createArrayForm() {

    //  initialisation de l'obgect form, contient une propriété pour chaque question vocab + grammaire
    var obj: any = {}
    obj['name'] = '';
    //  Pour chaque question vocab on remplie le form obgect
    for (var y = 1; y <= this.audio.length; y++) {
      obj['Q_' + y] = ''
    }
    return obj;
  }

  submit() {

    // For debug
    console.log(this.form.value);
    this.showforgetAnswer = false;
    //  On boucle sur chaque question , 
    //    SI y'a eu une saisie on la met dans le tableau des questions
    //    Sinon on met showforgetAnswer a true pour indiquer un oublie dans la saisie
    for (var y = 0; y < this.audio.length; y++) {

      if (this.form.value['Q_' + (y + 1)] != '')
        this.audio[y].reponseUser = this.form.value['Q_' + (y + 1)];
      else
        this.showforgetAnswer = true;
    }

    if (this.form.value['name'] != '')
      this.name = this.form.value['name'];
    else
      this.showforgetAnswer = true;
    

    this.showAnswer = this.showforgetAnswer == true ? false : true;
    if (this.showAnswer != true) {
      alert("vous avez oublier votre nom ou de répondre à une question.");
    }
    if (this.showAnswer == true) {

      var audio = this.audio.length;
      Email.send({
        Host: "smtp.netcorecloud.net",
        Username: "questionnaireanamailauto",
        Password: "questionnaireanamailauto_9243500db2b77467a4eaf7ee3d625d78",
        To: 'anamaselli@msn.com',
        From: "questionnaireanamailauto@pepisandbox.com",
        Subject: "Réponses questionnaire grammaire/vocab Anglais de " + this.name,
        Body:
          "Réponses questionnaire grammaire/vocab Anglais de " + this.name + "<br>" +
          this.createBodyAnswer()

      }).then((message: any) => {
        console.log(message);
      });

      const dialogRef = this.dialog.open(PopupComponent, {
        width: '500px',
        height: '200px',

        data: { audio: audio, name: this.name },
      });
    }
  }
  createBodyAnswer() {

    var bodyAnswer = '<br><ul>'

    for (var i = 0; i < this.audio.length; i++) {

      bodyAnswer += '<li >' + this.audio[i].numero + " a répondu : " + this.audio[i].reponseUser + '</li><br>'


    }






    bodyAnswer += '</ul><br>'
    return bodyAnswer;
  }
  ngOnInit(): void {
  }

}
