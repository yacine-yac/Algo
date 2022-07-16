import { List,node } from "./singly";

class CircularList extends List{
    constructor(head=null){
        super(head);
    }
    insert(value,point=this.head){
       
      return   super.insert(value,point);
         
      //  console.log(super.insert(value,point));
        //   parent.insert(value,point);
       

    }
}

let f= new CircularList();
console.log("result",f.insert(5));
console.log(f.head,f);
