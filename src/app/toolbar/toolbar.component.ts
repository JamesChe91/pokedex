import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
languageSelected: string='EN';

  languages = [
    {value: 'EN', viewValue: 'English'},
    {value: 'ES', viewValue: 'Spanish'},
    {value: 'GER', viewValue: 'German'},
    {value: 'FRE', viewValue: 'French'},
    {value: 'JAP', viewValue: 'Japanese'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
