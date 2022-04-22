import { LightningElement } from 'lwc';

export default class AboutNewTutorial extends LightningElement {
        greetings = 'hello javascript1+';
changeHand(event){
    this.greetings = event.target.value;
}

}