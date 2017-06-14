import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-toolbar',
  templateUrl: './main-toolbar.component.html',
  styleUrls: ['./main-toolbar.component.css']
})
export class MainToolbarComponent implements OnInit {
languageSelected: string='ENG';

  languages = [
    {value: 'ENG', viewValue: 'English'},
    {value: 'ESP', viewValue: 'Español'},
    {value: 'DEU', viewValue: 'Deutsch'},
    {value: 'FRA', viewValue: 'Française'},
    {value: 'JAP', viewValue: '日本語'}
  ];


  constructor() { }

  ngOnInit() {
  }

}
