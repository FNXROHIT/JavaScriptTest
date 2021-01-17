import { LightningElement } from 'lwc';
//this is for git testing
//this is third try
//for branchingsdfsad
//this is new
//fifth
//sixth
//seventh
//tenth
export default class HelloWorld extends LightningElement {
  greeting = 'World';
  changeHandler(event) {
    this.greeting = event.target.value;
  }
}