import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { QuestionnaireComponent } from '../questionnaire.component';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  FormControl,
  ValidatorFn
} from '@angular/forms';
declare let Email: any;

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
nom = '';
toto = '';
  form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<PopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder
  ) {



    this.form = this.formBuilder.group(
      {

        nom: this.nom
      }
    );
   }

   sendEmail() {
     console.log("envoie du mail")
    Email.send({
      Host: "smtp.netcorecloud.net",
      Username: "questionnaireanamailauto",
      Password: "Mycross-7781",
      To: 'julien.leconte2002@gmail.com',
      From: "info@pepisandbox.com",
      Subject: "This is the subject",
      Body: "And this is the body"
    })
    
}
  onNoClick() {
    console.log(this.form.value.nom)
    this.dialogRef.close();
  }
  ngOnInit(): void {
  }

}
