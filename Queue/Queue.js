class Queue{
    constructor(){
        this.REAR=-1,this.FRONT=-1,this.length=0;
        this.data=[];
    }
    add(value){
       this.REAR++,this.length++;
       this.FRONT=== -1 && this.FRONT++ ;
       this.data[this.REAR]=value;
       return this.data;
    }
    Dequeue(){
          this.length--,this.REAR--;
          this.REAR ===-1 && this.FRONT--;
       return  this.data.splice(this.FRONT,1);
    }
    isEmpty(){
         return this.REAR !==-1 ? false : true;
    }
}
let r=new Queue();
r.add(7);
r.add(15);
r.add(40);

console.log(r);
console.log(r.Dequeue(),r);
