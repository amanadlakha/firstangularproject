import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  test="new_class"
  test_input="";
  buttonevent(event){
    console.log( event.type)
  }
  ngOnInit(): void {
  }

}
