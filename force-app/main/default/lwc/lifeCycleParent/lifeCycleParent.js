import { LightningElement } from 'lwc';

export default class LifeCycleParent extends LightningElement {
    isChildComVis = false;
    // 'Mounting' phase in LWC
    constructor(){
        // default method super()
        super()
        console.log("Parent Constructor get called");
    }
    // When component will get inserted into DOM 
    // used mostly when we are fetching data from server
    connectedCallback(){
        console.log("Parent connectedCallback get called");
    }
    // when components get render
    renderedCallback(){
        console.log("Parent renderedCallback get called");
    }

    // comes under 'error' phase 
    errorCallback(error){
        console.log(error.message);
    }

    handleClick(){
        this.isChildComVis = !this.isChildComVis;
        // false = !false (true)
        // true  = ! true (false)
    }
}