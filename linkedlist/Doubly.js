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
                       previousnode.next=  nodeElement;
            }else{
               this.length >0 ? (this.head.prev=nodeElement.value) : null;
               this.head=nodeElement;
            }; 
         this.length++;
    }else{
       throw Error(" hi what's up");
    }
    
   }
   search(){
    
   }
   nodePrevious(prev=null,point=null,data=this.head){
          /**check value by previous and next by next parameter */
          console.log("prev:",prev,"||| point",point,'||| data',data);
      if(data!== null  ){  
               if(data.value== prev && data.next== point ){
                        return data ;
               }
               else if(data.next===null && data.prev==prev){ 
                        return  data;
               }else if(data.next===null && data.prev!==prev){console.log('nuuuuuuuuuuuuuuuuul');
                  return null;
               }
               else if(data.prev!==null && data.value===point){
                  return  data;
               }
               else{
                        return  this.nodePrevious(prev,point,data.next);
               } 
         
  
      }else{  
                 return "head";
      }
   }
}
let p=new Dlist();
p.insert(12);
p.insert(5,12);
p.insert('yacine',5);

 p.insert('malki',12,5);  
console.log(p.head,'p instance');
 
