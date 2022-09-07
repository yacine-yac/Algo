class node{
    constructor(value,left=null,right=null){
        this.value=value;
        this.left=left;  // left children (by default null)
        this.right=right; // right children  (by default null)
    }
}

class Tree{
    constructor(value=null){ 
        this.root=  value!==null ? new node(value) : null; 
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
    
}
let f=new Tree();
 