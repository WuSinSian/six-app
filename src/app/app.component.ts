
import { Component, ViewChild } from '@angular/core';
import { FooterComponent } from "app/footer/footer.component";
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   inputHint: string = 'What needs to be done???';
   colspan : number = 2;

constructor(private http: Http) {


}


//11進階
   @ViewChild('myfooter') footer: FooterComponent;
//12
selectedType: string = 'all';

//06
 todos : any[] = [];
/*
 addTodo (evt: keyboardEvent){
    if(evt.keyCode === 13)
       let input = evt.target as HTMLInputElement;
       console.log( input.value);
   }

  addTodes(newTodes : string){
      if(newTodes){
          this.todos.push(newTodes)
      }
  }
*/
// 07
  //Todo = string ;
  /*
  todo : string ;
  addTodo() {
    // let input = evt.target as HTMLInputElement;
    if (this.todo) {
      // this.todos.push(input.value);
      // input.value = '';

      this.todos = [...this.todos, this.todo];

      this.todo = '';
    }
  }
*/

//08

  todo : string ;
  addTodo() {
    // let input = evt.target as HTMLInputElement;
    if (this.todo) {
      // this.todos.push(input.value);
      // input.value = '';
      //   this.todos.push(this.todo);  //寫法一
       this.todos = [...this.todos, { todo: this.todo, done: false }]; //寫法二 done 是check 的打勾
      //this.todos = [...this.todos, { todo: this.todo}];
      this.todo = '';
      this.footer.hello();
    }
  }


//11
 clearCompleted() {
    this.todos = this.todos.filter(data => !data.done);
  }


//12
  onSelectedType(evt) {
    console.log(evt);
    this.selectedType = evt;
  }

//13注入
  isToggleAll: boolean = false;
  toggleAll(){
        this.todos = this.todos.map(item=>{
          return item.done === this.isToggleAll ?
              {todo: item.todo, done:item.dnoe}:
              {todo: item.todo, done:!item.done};

        });
  }

  deleteTodo(item){
    this.todos = this.todos.filter( data => item != data);
  }




}



