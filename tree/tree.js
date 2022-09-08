class node{
    constructor(value,left=null,right=null){
        this.value=value;
        this.left=left;  // left children (by default null)
        this.right=right; // right children  (by default null)
    }
}

class Tree{
    constructor(value=null){ 
        // this.root=  value!==null ? new node(value) : null; 
        this.root=value;
    }
    push(value){  
       /** push node in the end of the tree (as leave) */
         let nodeElement=new node(value,null,null);
         if( this.root === null ) this.root= nodeElement;
         else{
              let parentNode=this.search(value);   
              parentNode.value > value ? parentNode.left=nodeElement : parentNode.right = nodeElement;
         }
        return this.root;
    }
    search(element){
        // this function traverse tree and return the node which will append the new node
        let data=this.root;
        while(true){
             if(data.value<element && data.right ==null){
                // return data;
                break;
             }else if(data.value >element && data.left==null){
               // return data
                break;
             }else{
                 data= data.value > element  ? data.left : data.right;
             }
        }
        return data;
    }
    InOrder(callback=undefined,element=this.root){
    // to traverse tree rule (left--> root--> right)
    // allow passing a callback function
          if(this.root!==null){
            element.left && this.InOrder(callback,element.left);
            callback ? callback(element.value) : console.log(element.value); 
            element.right && this.InOrder(callback,element.right);
          }  
    }
    PostOrder(callback=undefined,element=this.root){
      // traverse tree rule (left--> right--> root)
       if(this.root !==null){
          element.left  &&  this.PostOrder(callback,element.left);
          element.right &&  this.PostOrder(callback,element.right);
          callback ? callback(element.value): console.log(element.value);
        }
    }
    PreOrder(callback=undefined,element=this.root){
      // traverse tree rule (root--> left-->right)
        if(this.root!==null){
            callback ? callback(element.value): console.log(element.value);
            element.left  && this.PreOrder(callback,element.left);
            element.right && this.PreOrder(callback,element.right);
        }
    }
    getMin(){
        // return the lowset node in the tree or null if root tree is null
       if(this.root!==null){
          let data=this.root;
          while (true){
            if(data.left !==null)  data=data.left;
            else break;
          }
          return data.value;
       }else{
         return null;
       }
    }
    getMax(){
       if(this.root!==null){
          let data=this.root;
          while(true){
            if(data.right!==null )data=data.right;
            else break;
          }
          return data.value;
       }else{
         return null;
       }
    }
    getDepth(element){
      let data=this.root,counter=0;
        // while(true){
        //    counter++;
        //    if(data.left ===element || data.right===element){
        //        break;
        //    }else if(data.left==null && data.right==null){
        //       counter =null;
        //        break;
        //    }else{
        //      data=data.left;
        //    }
        // }
        return counter;
    }
}
let f=new Tree();
f.push(9);
f.push(5);
f.push(26);
f.push(2);
f.push(3);
let mp=f.PostOrder(e=>console.log(e+"my value ="+(e*2)));
// console.log(mp);
// console.log(f.getDepth(9));
