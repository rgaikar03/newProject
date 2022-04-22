 import { LightningElement } from 'lwc';

export default class ConditionalRendering extends LightningElement {
    inVisible = false
    names 
    name = false
    //rohit 
    handleClick(event){
       this.inVisible = true 
    }

    // changeHandler(event){
    //     this.names = event.target.value
    //     if( this.names === 'hello'){
    //         this.name = true
    //     }
    // }

    get name(){
        return this.names === 'hello'
    }
}