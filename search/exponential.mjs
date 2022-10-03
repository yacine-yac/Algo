import Binarysearch from "./binary.mjs";
function search(array,element){
       /**
        * @param array 
        * @param element 
        * @returns 
        */
       let result =null;
       if(array[0]==element || array[1]==element){
                result= element;
       }else{
           let i=2;
           while (i<array.length && array[i]<=element){
                if(array[i]=== element){ result = array[i];break;}
                i*=2;
           }
           if(result==null){
                // do binary search 
             let end = i>array.length ? array.length : i;
             let final= i >array.length ? i/2 : i;
      result=array[i/2]<element ?  
                Binarysearch(array.slice(i/2,end),element)
             :              
                Binarysearch(array.slice(i/4,final),element);
           }
       }
       return result;

}
console.log(search([1,2,3,4,5,6,7,8,9],4),"result") 

