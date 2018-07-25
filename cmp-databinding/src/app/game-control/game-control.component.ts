import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {


  @Output() evenNumberGenerated = new EventEmitter<number>();
  @Output() oddNumberGenerated = new EventEmitter<number>();
  @Output() clearNumbers = new EventEmitter<boolean>();

  private intervalRef : any;
  private currentNumberTotal = 0;

  constructor() { }

  ngOnInit() {
  }

  onStartClicked(){
    console.log("Start clicked!");
    this.intervalRef = setInterval(()=> {this.generateAndEmitNumbers()},1000);
  }

  onStopClicked(){
    console.log("Stop clicked!");
    clearInterval(this.intervalRef);
    this.clearNumbers.emit(true);
  }

  private generateAndEmitNumbers(){
    console.log("Generating numbers called!!!");
    this.currentNumberTotal += this.generateRandomNumber();
    if(this.currentNumberTotal%2 === 0){
      this.evenNumberGenerated.emit(this.currentNumberTotal);
    }
    else{
      this.oddNumberGenerated.emit(this.currentNumberTotal);
    }
  }
  private generateRandomNumber() : number{
      return Math.floor(Math.random() * (9 - 1)) + 1;
  }

}
