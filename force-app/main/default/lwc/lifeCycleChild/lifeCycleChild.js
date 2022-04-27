import { LightningElement } from 'lwc';

export default class LifeCycleChild extends LightningElement {
     // Mounting phase in LWC
    constructor(){
        // default method super()
        super()
        console.log("Child Construsctor get called");
    }
    // When component will get inserted into DOM 
    // used mostly when we are fetching data from server
    connectedCallback(){
        console.log("Child connectedCallback get called");
        throw new Error("Chill loding failed !");
    }
    // when components get render
    renderedCallback(){
        console.log("Child renderedCallback get called");
    }

    // comes under Unmounting phase
    // invoked once component get removed from DOM
    disconnectedCallback(){
        alert("Child disconnectedCallBack called");
    }
}