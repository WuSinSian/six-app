
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
// export class FooterComponent implements OnInit ,OnChanges {
//    moreThanFive: boolean = false;

//   ngOnChanges() {
//     console.log('ngOnChanges');
//     if (this.myTodos.length >= 5) {
//      // if (this.todos.length >= 5) {
//       this.moreThanFive = true;
//     }

//   }

export class FooterComponent implements OnInit  {
// in
private _todos: any[] = [];

  get todos() {
    return this._todos;
  }

  @Input() set todos(value) {
    this._todos = value;
  }

//task13
 selectedType: string = 'all';
@Output() onSelectTypeChange = new EventEmitter();

//out 12
@Output() onClearCompeted = new EventEmitter();


  clearCompleted() {
    this.onClearCompeted.emit();
  }

  constructor() { }
  ngOnInit() {
  }

    hello() {
    console.log('Hello, Angular4');
  }
//13

   onSelectedType(type) {
    this.selectedType = type;
    this.onSelectTypeChange.emit(type);
  }
}
