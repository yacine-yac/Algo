import { node, LinkedList } from "./linkedlist";
class List extends LinkedList{
    constructor(head=null){
        super(head);
    }
   
    insert(value,point=null){
          let nodeElement =new node(value),searching;
          if(this.head==null){
            nodeElement.next=point;
            this.head=nodeElement;
            this.length++;
          }else{ 
              searching = point===null ? this.Lastnode(this.head) : this.previous(undefined,point);
              if(searching!==null){ 
                if(searching ==="head"){
                    nodeElement.next=this.head;
                    this.head=nodeElement ;
                }else{
                    nodeElement.next=searching.next;
                    searching.next=nodeElement;
                } 
                this.length++;
              } 
          } 
        };
    search(element){   
            let prev=this.previous(this.head,element);
            return prev ===null ? null  : prev.next ;
        }
    previous(obj=this.head,element){
            if(obj===null){   
               return null;
            }else if(this.head.value===element){
                  return "head";
            }else{  
                  if(obj.next===null){
                       return null
                  }else if(obj.next.value == element){
                       return obj;
                 }else{  
                       return this.previous(obj.next,element);  
                 }
            }
        }
    next(element){ 
            let objectElement=  this.search(element);
            return objectElement !=null ? objectElement.next : null;
            
        }
    Lastnode(list=this.head){
        if(list.next ===null){
            return list;
        }else{
            
            return this.Lastnode(list.next);
        }
    };
    firstnode(){
        return this.length>0 ? this.head:null;
    }; 
    clear(){
       return this.head=null;
    }
    delete(element){
       let prev=this.previous(undefined,element);
       prev ===null ? 
                     null 
        :
                     prev==="head" ?
                            this.head=this.head.next 
                     :
                            prev.next !==null ?
                                    prev.next=prev.next.next
                              : 
                                    prev.next=null;
       
    }
}
let a= new List();
export { List,node};

