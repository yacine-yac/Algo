class Stack{
    constructor(){
       
        this.data=[]; this.length=0;
      
    }
    add(value){
           this.data.push(value);
           this.length++;
           return [value];
    }
    isEmpty(){  
        // check if data is empty or no 
        // empty ==> return true 
        // not empty ==> false 
        return  this.length>0 ? false :true;
    }
    pop(){ // return the deleted item (the last item)
        return   this.data.pop();  
    }
    peek(){
        // this method return the most element in the stack 
           return this.data[this.length-1];
    }
    get(position){
        // this method return a specific item by his position in array
        // if the array haven't the position it return undefined
          return this.data[position] ?? undefined;
    }
}
let stack=new Stack();
console.log(stack);
console.log(stack.add(55));
console.log(stack.add(60));
console.log(stack.add(70));
console.log(stack.data,stack.length);
console.log('pop',stack.pop());
console.log('peek',stack.peek(1));