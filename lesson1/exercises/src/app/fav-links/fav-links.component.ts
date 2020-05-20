import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  title='Links';
  favLinks = ['https://education.launchcode.org/intro-to-professional-web-dev/chapters/angular-lsn1/exercises.html','https://github.com/LaunchCodeEducation/angular-lc101-projects']
  giphy = 'https://media.giphy.com/media/PiQejEf31116URju4V/giphy.gif';
  constructor() { }

  ngOnInit() {
  }

}
