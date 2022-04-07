import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { QuestionnaireespComponent } from '../questionnaireesp.component';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  FormControl,
  ValidatorFn
} from '@angular/forms';

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

  onNoClick() {
    console.log(this.form.value.nom)
    this.dialogRef.close();
  }
  ngOnInit(): void {
  }

}
