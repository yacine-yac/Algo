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
    InOrder(element=this.root){
    // to traverse tree rule (left--> root--> right)
          if(this.root!==null){
            element.left && this.PreOrder(element.left);
            console.log(element?.value); 
            element.right && this.PreOrder(element.right);
          }  
    }
    PostOrder(element=this.root){
      // traverse tree rule (left--> right--> root)
       if(this.root !==null){
          element.left  &&  this.PostOrder(element.left);
          element.right &&  this.PostOrder(element.right);
          console.log(element.value);
        }
    }
    PreOrder(element=this.root){
      // traverse tree rule (root--> left-->right)
        if(this.root!==null){
            console.log(element.value);
            element.left  && this.PreOrder(element.left);
            element.right && this.PreOrder(element.right);
        }
    }
}
let f=new Tree();
f.push(9);
f.push(5);
f.push(26);
f.push(2);
f.push(6);
let mp=f.PreOrder();
console.log(mp);
