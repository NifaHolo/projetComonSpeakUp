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
      source: "../../assets/audio/1Hellohowareyou.mp3",
    },
    {
      numero: "audio 2 :",
      source: "../../assets/audio/2whatname.mp3",
    },
    {
      numero: "audio 3 :",
      source: "../../assets/audio/3howoldareyou.mp3",
    },
    {
      numero: "audio 4 :",
      source: "../../assets/audio/4whatfavouritecolour.mp3",
    },
    {
      numero: "audio 5 :",
      source: "../../assets/audio/5questioncolorflag.mp3",
    },
    {
      numero: "audio 6 :",
      source: "../../assets/audio/6whatthingsdoyouliketodo.mp3",
    },
    {
      numero: "audio 7 :",
      source: "../../assets/audio/7wherevacation.mp3",
    },
    {
      numero: "audio 8 :",
      source: "../../assets/audio/8howgettomainstreet.mp3",
    },
    {
      numero: "audio 9 :",
      source: "../../assets/audio/9whereareyougoing.mp3",
    },
    {
      numero: "audio 10 :",
      source: "../../assets/audio/10howmuchthiscosts.mp3",
    },
    {
      numero: "audio 11 :",
      source: "../../assets/audio/11haveseenmovie.mp3",
    },
    {
      numero: "audio 12 :",
      source: "../../assets/audio/12beautifuldayisntis.mp3",
    },
  ]
 
  constructor() { }
 

  ngOnInit(): void {
  }

}
