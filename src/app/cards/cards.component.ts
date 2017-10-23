import { Component, OnInit,EventEmitter,Output,Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  constructor() { }
  @Input()
  data:any;
  @Output()
  clickcards :EventEmitter<any> = new EventEmitter<any>();
  ngOnInit() {
  }

  increment(data) {
    this.clickcards.emit(data);
   }
}
