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
            return prev ===null ? null : prev ==="head" ? "head" : prev.next ;
        }
        this.previous=function(obj=this.head,element){
            if(this.length ===0 || obj.next==null){
               return null;
            }else if(this.head.value===element){
                  return "head";
            }else{  
                 if(obj.next.value == element){
                       return obj;
                 }else{  
                       return this.previous(obj.next,element);  
                 }
            }
        }
        this.next=function(){
              
        }
        

    // this.size=function(){ 
    //     if(this.head != null){
    //         //let i=this.head;
    //         let count=0;
    //         for(i in this.head){
    //             i=i.next;
    //             count++;
    //         }
    //         return count;
    //     }else{
    //         return 0;
    //     }
    // };
    this.Lastnode=function(element){
        if(element.next ===null){
            return element;
        }else{
            return this.Lastnode(element.next);
        }
    };
    this.firstnode=function(){};
    this.h=0;
    this.clear=function(){
        if(this.h>4){
          // console.log(this.h,"final");
        }else{ 
            this.h++;
            console.log(this.h,"hhhh"); 
            yield* this.h;
            this.clear(); 
            
       
        }
        return this.h;
        
    }
}
let a= new list();
// let j1=new node(1);
// let j2=new node(2);
// j1.next=j2;

// let z=new list(j1);

