console.log('hello');

function node(value,next=null){
    this.value=value;
    this.next=next;
}
function list(head=null){
    this.head=head; 
    this.size=function(){};
    this.Lastnode=function(){};
    this.firstnode=function(){};
    this.clear=function(){}
}

let j1=new node(1);
let j2=new node(2);
j1.next=j2;

let lista=new list(j1);
console.log(j2);

