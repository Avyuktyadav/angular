import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent {
  login(){
    console.log("login succsess");
  }
  // print(){
  //   console.log("mouse over");
  // }

  getData(data:any){
     console.log("change event fired" ,data.target.value)
  }
  
}
  


