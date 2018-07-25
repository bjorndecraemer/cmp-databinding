import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private evenNumberList : Array<number> = [];
  private oddNumberList : Array<number> = [];

  onEvenNumberGenerated(data : number){
    this.evenNumberList.push(data);
  }

  onOddNumberGenerated(data : number){
    this.oddNumberList.push(data);
  }
  onClearNumbers(){
    this.evenNumberList = [];
    this.oddNumberList = [];
  }


}
