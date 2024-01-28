import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
stringToEvaluate:string="";

takeInput(num:string){
  this.stringToEvaluate=this.stringToEvaluate +num;
}
evaluateResult(){
  if(this.stringToEvaluate != ''){
    this.stringToEvaluate=eval(this.stringToEvaluate);
  }
  
}
reset(){
  this.stringToEvaluate="";
}
}
