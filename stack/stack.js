class Stack{
    constructor(){
       
        this.data=[]; this.length=0;
    }
    add(value){
           this.data.push(value);
           this.data++;
           return [value];
    }
}
let stack=new Stack();
console.log(stack);
console.log(stack.add(55));
console.log(stack.data,stack.length);