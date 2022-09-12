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
              let parentNode=this.getLeave(value);   
              parentNode.value > value ? parentNode.left=nodeElement : parentNode.right = nodeElement;
         }
        return this.root;
    }
    search(element){ 
        let data=this.root,Depth=-1; 
        while(true){
            Depth++; 
            if(data?.value==element){
                 break;
             }else{
               if(data !==null)  data= data.value > element  ? data.left : data.right;
               else{Depth=-1;  break;}
             }
        }
        return {nodeSearch:data,Depth};
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
            callback ? callback(element.value,element): console.log(element.value);
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
      const {Depth}=this.search(element);
      return Depth;
    }
    getLeave(element){
       // get leave return the last node in the tree branch 
       // this function traverse tree and return the node which will append the new node
       let data=this.root; 
       while(true){ 
            if(data.value<element && data.right ==null){
               break;
            }else if(data.value >element && data.left==null){
              break;
            }else{
                data= data.value > element  ? data.left : data.right;
            }
       }
       return data;
    }
    getTreeHeight(tree=this.root){
      /** this function return the hight of tree 
       * we can pass to it a specific sub-tree if no the default tree is the root tree
       * this method depend on recursion functions (post traverse) left->right->root 
       * in every level we will return the max highest of the node 
       *  in the first level (the deepest level) we will check if tree is null so the heighest of the node is the default value(-1) +1 
       */
         if(tree==null) return -1;
         let left_value=this.getTreeHeight(tree.left),
             right_value= this.getTreeHeight(tree.right);
         return Math.max(left_value,right_value) +1;
    }
    getHight(element){
     let {nodeSearch}=this.search(element);
     return nodeSearch !==null ?  this.getTreeHeight(nodeSearch) : null;
    }
   
}
let f=new Tree();
f.push(9);
f.push(5);
f.push(26);
f.push(28);
f.push(25);
f.push(2);
f.push(3);
f.push(1);
f.push(7);
let rc=f.getTreeHeight();
console.log(rc);
// let mp=f.PostOrder(e=>console.log(e+"my value ="+(e*2)));
// console.log(mp);
// console.log(f.getDepth(9));
