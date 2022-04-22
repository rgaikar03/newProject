import { LightningElement } from 'lwc';

export default class AboutNewTutorial extends LightningElement {
        greetings = 'hello javascript+';
changeHand(event){
    this.greetings = event.target.value;
}

}