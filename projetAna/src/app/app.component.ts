import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
    <ul>
      <ul>
        <li *ngFor="let test of id">bonjour {{ test.questions}}</li><br>
      </ul>
    </ul>
  `
})
export class AppComponent {
  title = 'projetAna';

  questions = [
    {
      nom: 'questions 1',
      desc: 'fait si'

    },
    {
      nom: 'questions 2',
      desc: 'fait sa'
    },
    {
      nom: 'questions 3',
      desc: 'MAIS G PAS QUE SA A FAIRE ENFAIT'
    },
    {
      nom: 'questions 4',
      desc: 'fait sa'
    },
    {
      nom: 'questions 5',
      desc: 'fait sa'
    },
    {
      nom: 'questions 6',
      desc: 'fait sa'
    }]
  



}
