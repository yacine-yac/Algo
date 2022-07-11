console.log('hello');

function node(value,next=null){
    this.value=value;
    this.next=next;
}
function list(head=null){
    this.head=head; 
    this.length=0;
    this.insert=function(value,point=null){
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
        this.search=function(element){   
            let prev=this.previous(this.head,element);
            return prev ===null ? null  : prev.next ;
        }
        this.previous=function(obj=this.head,element){
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
        this.next=function(element){ 
            let objectElement=  this.search(element);
            return objectElement !=null ? objectElement.next : null;
            
        }
        this.looping=function(){

        }
    this.Lastnode=function(list=this.head){
        if(list.next ===null){
            return list;
        }else{
            
            return this.Lastnode(list.next);
        }
    };
    this.firstnode=function(){
        return this.length>0 ? this.head:null;
    }; 
    this.clear=function(){
       return this.head=null;
    }
    this.delete=function(element){
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
let a= new list();

