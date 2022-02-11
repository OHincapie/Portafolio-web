import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  sobre(){
    document.getElementById("sobremi")?.scrollIntoView({behavior:"smooth"});
  }

  habilidades(){
    document.getElementById("habilidades")?.scrollIntoView({behavior:"smooth"});
  }
  portafolio(){
    document.getElementById("portafolio")?.scrollIntoView({behavior:"smooth"});
  }

  links(){
    document.getElementById("links")?.scrollIntoView({behavior:"smooth"});
  }
}
