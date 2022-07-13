import {LinkedList, node} from './LinkedList';
 

class Dlist extends LinkedList{
   constructor(head=null){
      super(head); 
   }
   insert(element,prev=null,point=null){ 
         let previousnode=this.nodePrevious(prev,point),nodeElement;   
    if(previousnode !=null){ 
            nodeElement= new node(element,point); 
            nodeElement.prev= previousnode==="head" ? null  : previousnode.value;
            nodeElement.next= previousnode == "head" ? this.length>0 ? this.head:null : previousnode.next ;
            if(previousnode !=="head"){ 
                     previousnode.next !== null ? previousnode.next.prev=nodeElement.value: null;
                     previousnode.next=  nodeElement;
            }else{
               this.length >0 ? (this.head.prev=nodeElement.value) : null;
               this.head=nodeElement;
            }; 
         this.length++;
         return true;
    }else{ 
       return  Error('links not exists');
    }
   }
   search(value){
       
   }
   nodePrevious(prev=null,point=null,data=this.head){
          /**check value by previous and next by next parameter */ 
      if(this.head!== null){  
               if(prev===null && data.value===point && data.prev===null){ return "head";}
               else if(data.next==null && data.value !== prev){ return null;}
               else if(data.value== prev && (data.next===null ||  data.next.value  == point ) ){ return data;}
               else{   return  this.nodePrevious(prev,point,data.next);}
      }else{  
                 return "head";
      }
   }
   delete(prev,element,point){
         let nodePrevious=this.nodePrevious(prev,point);
         console.log(prev,point,'insss',nodePrevious);
         nodePrevious.next.next.prev=nodePrevious.value;
         nodePrevious.next=nodePrevious.next.next;

   }
   clear(){
      this.length=0;
      this.head=null;
   }
}
let p=new Dlist();
p.insert(12);
p.insert(13,12);
p.insert(5,13);
p.insert(2,5);


// console.log(p.insert('yacine',12,5));
console.log(p.head,'p instance',p.length);
p.delete(13,5,2);
console.log("after",p.head);
 //p.insert('malki',12,5);  

 
