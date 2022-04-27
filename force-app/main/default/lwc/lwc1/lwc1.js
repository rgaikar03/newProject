import { LightningElement } from 'lwc';

export default class Lwc1 extends LightningElement {
    greeting = 'Worl0d';
  changeHandler(event) {
    this.greeting = event.target.value;
  }
}