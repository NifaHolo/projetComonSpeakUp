import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-audioanglais',
  templateUrl: './audioanglais.component.html',
  styleUrls: ['./audioanglais.component.css']
})
export class AudioanglaisComponent implements OnInit {
  audio = [
    {
      numero: "audio 1 :",
      nom:"hello how are you",
      source: "../audio/1hellohowareyou.mp3",
    },
  ]
  video = [
    {
      numero: "audio 1 :",
      nom:"hello how are you",
      source: "1whatisyourname.mp3",
    },
 
  ]
   fileToPlay = "1whatisyourname.mp3";
  constructor() { }

  ngOnInit(): void {
  }

}
