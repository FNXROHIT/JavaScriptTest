import { LightningElement } from 'lwc';
//this is for git testing
//this is third try
//this is new
export default class HelloWorld extends LightningElement {
  greeting = 'World';
  changeHandler(event) {
    this.greeting = event.target.value;
  }
}