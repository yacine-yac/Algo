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
   // push(prev,element){
   //     let insert=this.insert(element,prev);
   //     if(insert===true)
   //        return {prev:prev,value:element,next:null};

   // }
   pop(element){
      let nodeElement=new node(element); 
      nodeElement.prev=null;
      if(this.head !==null ){
           this.head.prev=element;
           nodeElement.next=this.head;
           this.head=nodeElement;
      }else{ 
          this.head=nodeElement;
      }
      return  this.nodeElement;
   }
   search(value){
       
   }
   nodePrevious(prev=null,point=null,data=this.head){
          /**check value by previous and next by next parameter */ 
      if(this.head!== null){ 
               
               if(prev===null  && data.prev===null){ return "head";}
               if(data.next!==null){
                        
                        if(data.next.next==null && data.value== prev){ return data;}
                        else if(data.value== prev && data.next.next.value  == point ){  return data;}
                        else{   return  this.nodePrevious(prev,point,data.next);}

               }else{ 
                        if(data.value !== prev){ return null;}else{ return data;}
               }
               
      }else{  
                 return "head";
      }
   }
   nodeNext(prev,next){
      /** return next node using the ressources of nodePrevious method and check some situations  */
      let previousnode=this.nodePrevious(prev,next); 
       if(previousnode!==null){
          if(previousnode ==="head"){
            return this.head.next !== null? this.head.next : {};
          }else{ 
            return previousnode.next !==null ? previousnode.next.next!== null ? previousnode.next.next: {} : {}; 
          }
       }else{
           return {};
       }
   }
   delete(prev,element,point){
      /** for deleting a node we should have his properties (previous,value,next) 
       * we looking for the previous node of our node that we looking for by nodePrevious method
       * this method return (head, null, node)
       *  null: that means our node not exists so we can't delete anything  (return empty object)
       *  head : that means our node if the first node in the list so we delete it ( return the whole head)
       * node : in this case we check the node value and checking if the node is last one or not (return the deleted node)
      */
         let getnode=this.nodePrevious(prev,point);
         if(getnode!=null){
               if(getnode==="head"){
                  this.head =this.head.next;
                  this.head.prev=null; 
                  this.length--;
                  return this.head;  
               }else{
                   if(getnode.next.value===element){
                      if(getnode.next.next!==null){
                          getnode.next.next.prev=getnode.value;
                          getnode.next=getnode.next.next;
                          this.length--;
                          return {prev:prev,value:element,next:point};   
                      }else{
                          getnode.next=null;
                          this.length--;
                          return {prev,element,point}
                      }

                   }else{
                      return {};
                   }
               }
         }else{  
            return {};
         }   
   }
   clear(){
      /**this method clear the whole node in the list   */
      this.length=0;
      this.head=null;
   }
}
let p=new Dlist();
p.insert(12);
p.insert(13,12);
p.insert(5,13);
p.insert(2,5);

// && data.value===point
// console.log(p.insert('yacine',12,5));


// console.log("search",p.nodePrevious(null,13));
// let gig=p.delete(null,12,13);
// console.log("deleted",gig);
console.log(p.nodeNext(null,13));
console.log(p.head,'p instance',p.length);

p.pop(888);
console.log('jdsd',p.head,p.length);
// console.log("",p.head);
 //p.insert('malki',12,5);  

 
