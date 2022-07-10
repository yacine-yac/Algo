console.log('hello');

function node(value,next=null){
    this.value=value;
    this.next=next;
}
function list(head=null){
    this.head=head; 
}

let j1=new node(1);
let j2=new node(2);
j1.next=j2;
console.log(j2);

