import { Component } from '@angular/core';
import { FirstcomponentComponent } from './firstcomponent/firstcomponent.component'

function log(target, name, descriptor) {
  const original = descriptor.value;
  descriptor.value = function (...args) {
    const result = original.apply(this, args)
    console.log("The arguments were", args);
    return result;
  }
  return descriptor;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Second ';
  IsInputDisabled=false;
  constructor() {
    console.log("Running in Constructor", this.simplefunction(5));
    setInterval(()=>{
      this.title = Math.random().toString();
    },1000)

  }

  clickbuttonfunction() {
    this.IsInputDisabled = !this.IsInputDisabled
    console.log("Click is pressed")
  }


  @log
  simplefunction(a) {
    return a;
  }

}
