import {node} from "./LinkedList.mjs";

class CircularList{
    constructor(head=null){
       this.head=head; 
       this.length=0;
    } 
    insert(value,next=null){
      /**this method insert element in the list (beginning,middle,end)
       * it returns the node element created 
       * if the pointer doesn't exists the method returns node object null
       * the method use previous method to searching the element previous of the pointer
       */
         const nodeElement = new node(value,next); 
         if(this.head===null){
              this.head=nodeElement;
              this.head.next=this.head;   
              this.length++;
         }else{
            const searchnode=this.previous(next); 
            if(searchnode==="head"){ 
                nodeElement.next=this.head; 
                this.Lastnode().next=nodeElement;  
                this.head=nodeElement;  
                this.length++;
            }else if(searchnode=== null){
               nodeElement.value=null;
               nodeElement.next=null;
            }else{
                nodeElement.next=searchnode.next;
                searchnode.next=nodeElement;
                this.length++;
            }
         }
         return nodeElement;
    }
    previous(element=null,list=this.head){
        /** previous return the previous element of the searching element
         * this method return null if the element doesn't exists or head if the element is the first element in the list
         */
             if(list===null || list.value=== element){
                  return "head";
             }
             else if(list.next === this.head){
                  return element === null ? list : null ;
             }
             else if(list.next.value  === element){
                  return list;
             }
             else{ 
               return  this.previous(element,list.next);
             }
    }
    search(){

    }
    Lastnode(list=this.head){
     /**this search the last node in the list 
      * if the element doesn't exists it will be return an empty object
      */
        if(this.head !==null){
             if(list.next===this.head){
                return list;
             }else{
               return this.Lastnode(list.next);
             }
         }else{
            return {};
        }
    }
}

let f= new CircularList();
f.insert(55);
f.insert(100);
f.insert(7,55);
f.insert(88,88);
// f.insert(200);
// f.insert(565)

console.log("result",f);
console.log(f.head); 
