import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'converter';
  fromCurrency: string="";
  toCurrency: string="";
  amount ="";
  resValue: string="";
  tocurr:string ="";
  fromcurr:string ="";
  value: string="";
  selectfrom(event:any){
    this.fromCurrency = event.target.value;
    this.fromcurr=this.fromCurrency;
  }
  selectto(event:any){
    this.toCurrency=event.target.value;
    this.tocurr=this.toCurrency;
  }
  getVal(val: string){
    let total = Math.round(Number(val)*Number(this.tocurr)/Number(this.fromcurr));
    var value = total.toFixed(2);
    this.resValue = value;
  }
  constructor(){}
  ngOnInit(){
    
  }

}