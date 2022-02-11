import { Component, OnInit, Input } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-lenguaje',
  templateUrl: './lenguaje.component.html',
  styleUrls: ['./lenguaje.component.scss']
})
export class LenguajeComponent implements OnInit {
  mode: ProgressSpinnerMode = 'determinate';
  @Input() value:number=100;
  @Input() img: string='';
  constructor() { }

  ngOnInit(): void {
  }

}
