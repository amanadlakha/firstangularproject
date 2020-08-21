import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-firstcomponent',
  templateUrl: './firstcomponent.component.html',
  styleUrls: ['./firstcomponent.component.scss']
})
export class FirstcomponentComponent implements OnInit {

  constructor(private firstservice:UserService) {
   }

  text_entered_value="";
  text_value=""
  
  data=[]

  ngOnChanges(){
    console.log("Changes occured")
  }
  ngOnInit(): void {
  this.data=  this.firstservice.getData()
  }

  removeItem(index){
    this.data.splice(index,1);
  }
  enterpressed(event){
  //getting input values
    this.text_entered_value= event.target.value
   //setting input values 
    event.target.value ="";
  }

}
