import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
 firstName:string="mike";

 employeeobj:any={
  employeeName:"mike",
  salary:50000,
  designation:"Angular developer"
 }
 isbtndisable:boolean=false;


 message1:string="welcome";
 todayDate = new Date();
 totalPrice:number=4245.4521;

}
