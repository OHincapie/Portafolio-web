import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-tecnologias',
  templateUrl: './tecnologias.component.html',
  styleUrls: ['./tecnologias.component.scss']
})
export class TecnologiasComponent implements OnInit {
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'determinate';
  value = 50;
  hola='aaa'
  lenguajes=[
    {
      nombre: 'HTML',
      value: 100,
      img: 'assets/img/html.png'
    },
    {
      nombre: 'CSS',
      value: 90,
      img: 'assets/img/css.png'
    },
    {
      nombre: 'JS',
      value: 80,
      img: 'assets/img/js.png'
    },
    {
      nombre: 'TS',
      value: 80,
      img: 'assets/img/ts.png'
    },
    {
      nombre: 'Python',
      value: 70,
      img: 'assets/img/python.png'
    },
    {
      nombre: 'Angular',
      value: 80,
      img: 'assets/img/angular.png'
    },
    {
      nombre: 'MySQL',
      value: 70,
      img: 'assets/img/mysql.png'
    },
    {
      nombre: 'GIT',
      value: 80,
      img: 'assets/img/git.png'
    },
    {
      nombre: 'npm',
      value: 100,
      img: 'assets/img/npm.png'
    }


    
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
