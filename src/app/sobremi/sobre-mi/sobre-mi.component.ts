import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.scss']
})
export class SobreMiComponent implements OnInit {
  llave:string='{';
  masSobreMi:boolean=false;
  masSobreMiString: string= 'false'
  constructor() { }

  ngOnInit(): void {
  }

  click(){
    if(this.masSobreMi){
      this.masSobreMi = false
      this.masSobreMiString='false'
    }else{
      this.masSobreMi = true
      this.masSobreMiString='true'
    }
    console.log(this.masSobreMi)
  }

}
