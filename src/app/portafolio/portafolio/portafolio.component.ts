import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.scss']
})
export class PortafolioComponent implements OnInit {

  portafolio=[
    {
      titulo: 'Landing page',
      subtitulo: 'HTML, CSS, TS, ANGULAR',
      img: 'assets/img/portafolio.PNG',
      descripcion: 'Landing page como esta, realizada con angular material, inputs entre componentes y Lazy Loading',
      enlace: '#',
      github:''
    },
    {
    titulo: 'MarvelDEX',
    subtitulo: 'HTML,CSS, TS, ANGULAR',
    img: 'assets/img/marvel.PNG',
    descripcion: 'Consulta de tus personajes favoritos de Marvel, usando la API de Marvel con login incluido.',
    enlace: 'https://ohincapie.github.io/MarvelDEX/',
    github:'https://github.com/OHincapie/MarvelDEX'
  },
    {
    titulo: 'App salon',
    subtitulo: 'HTML, CSS, JS',
    img: 'assets/img/appsalon.PNG',
    descripcion: 'Aplicación web para pedir reservaciones en salon de belleza',
    enlace: 'https://ohincapie.github.io/Salon-De-Belleza/',
      github:'https://github.com/OHincapie/Salon-De-Belleza'
  },
  {
    titulo: 'Bienes Raices',
    subtitulo: 'HTML, CSS, TS, ANGULAR',
    img: 'assets/img/bienes.PNG',
    descripcion: 'Página web para visualizar propiedades en venta',
    enlace: 'https://ohincapie.github.io/Bienes-Raices/',
    github:'https://github.com/OHincapie/Bienes-Raices'
  },
  {
    titulo: 'Festival de Música',
    subtitulo: 'HTML, CSS, JS',
    img: 'assets/img/festival.PNG',
    descripcion: 'Página web informativa de un evento de música',
    enlace: 'https://ohincapie.github.io/FestivalMusica/',
      github:'https://github.com/OHincapie/FestivalMusica'
  },
  {
    titulo: 'Platzi Store',
    subtitulo: 'HTML, CSS, TS, ANGULAR',
    img: 'assets/img/platzi.PNG',
    descripcion: 'Tienda web realizando consultas a una API de platzi, con angular HttpClient y angular material',
    enlace: 'https://ohincapie.github.io/PlatziStore/',
      github:'https://github.com/OHincapie/PlatziStore'
  },
  {
    titulo: 'Tareas App',
    subtitulo: 'HTML, CSS, TS, ANGULAR',
    img: 'assets/img/tareas.PNG',
    descripcion: 'Aplicación web para guardar tareas pendientes, con comunicacion entre varios componentes.',
    enlace: 'https://ohincapie.github.io/ListaDeTareas/',
      github:'https://github.com/OHincapie/ListaDeTareas'
  },
  {
    titulo: 'Laberinto Python',
    subtitulo: 'Python',
    img: 'assets/img/python.png',
    descripcion: 'Aplicación con inteligencia artificial que permite al sistema encontrar la salida del laberinto por si sola',
    enlace: 'https://github.com/OHincapie/Laberinto-Python',
      github:'https://github.com/OHincapie/Laberinto-Python'
  },
]
  constructor() { }

  ngOnInit(): void {
  }

}
