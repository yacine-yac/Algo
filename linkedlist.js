console.log('hello');

function node(value,next=null){
    this.value=value;
    this.next=next;
}
function list(head=null){
    this.head=head; 
    this.insert=function(value,point,index=null){
          let nodeElement =new node(value);
          nodeElement.next=point;
          if(this.head==null){
            this.head=nodeElement;
          }else{
              let searching =this.search(undefined,point);
              if(searching!==null){
                 nodeElement.next=searching.next;
                 searching.next=nodeElement;
                 console.log("rr",nodeElement);
              }
          }
        };
        this.search=function(obj=this.head,element){   
            if(obj.value !==element && obj.next==null){
                      return null;
            }else{  
                if(obj.next.value == element){
                    return obj;
                }else{  
                    return this.search(obj.next,element);  
                }
            }
                
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
    this.Lastnode=function(){};
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

// let j1=new node(1);
// let j2=new node(2);
// j1.next=j2;

// let z=new list(j1);

