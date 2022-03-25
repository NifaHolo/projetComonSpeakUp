import { getNgModuleById, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { QuestionnaireespComponent } from './questionnaireesp/questionnaireesp.component';
import { DescnivComponent } from './descniv/descniv.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AudioanglaisComponent } from './audioanglais/audioanglais.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { PopupComponent } from './questionnaire/popup/popup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


const appRoutes: Routes = [
  { path : 'questionnaire'       , component:QuestionnaireComponent },
  { path : 'questionnaireesp'       , component:QuestionnaireespComponent },
  { path : 'descniv'       , component:DescnivComponent },
  { path : 'acceuil'       , component:AccueilComponent },
  { path : 'audioanglais'       , component:AudioanglaisComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    QuestionnaireComponent,
    QuestionnaireespComponent,
    DescnivComponent,
    AccueilComponent,
    AudioanglaisComponent,
    PopupComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
