import { LightningElement, track } from 'lwc';

export default class Comp1 extends LightningElement {
    welcome = "Hello Solidity";

    changeHandler(event){
        this.welcome = event.target.value
    }

    // @track 
    address = { 
        city : 'Nashik',
        country : 'India'
    }

    // trackHandler(event){
    ///     this.address.city = event.target.value
    // }
    trackHandler(event){
        this.address = {...this.address, "city" : event.target.value}
    }

    // getter 
    num1 = 10
    num2 = 5
    get sum(){
        return this.num1 + this.num2
    }

    users = ["Muk","Umk","Kum"];
    // str = users[0];
    get emelemntFromArray(){
       return this.users[0]
    } 
}