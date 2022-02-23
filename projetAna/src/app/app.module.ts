import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    QuestionnaireComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
