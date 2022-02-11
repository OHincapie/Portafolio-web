import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-portafolio-card',
  templateUrl: './portafolio-card.component.html',
  styleUrls: ['./portafolio-card.component.scss']
})
export class PortafolioCardComponent implements OnInit {
  @Input() titulo: string='';
  @Input() subtitulo: string='';
  @Input() img: string='';
  @Input() descripcion: string='';
  @Input() git: string='';
  @Input() enlace: string='';
  constructor() { }

  ngOnInit(): void {
  }

}
