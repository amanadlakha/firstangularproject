import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-firstcomponent',
  templateUrl: './firstcomponent.component.html',
  styleUrls: ['./firstcomponent.component.scss']
})
export class FirstcomponentComponent implements OnInit {

  constructor() { }

  text_entered_value="";
  data=[
  {
    "name":"Aman",
    "points":50
  },
  {
    "name":"Akshay",
    "points":90
  },

  ]

  ngOnInit(): void {
  }

  enterpressed(event){
  //getting input values
    this.text_entered_value= event.target.value
   //setting input values 
    event.target.value ="";
  }

}
