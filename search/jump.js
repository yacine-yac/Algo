function search(array,element){
    let index = 0;
    let result=null;
    while (index<array.length ){ console.log(index,array[index],"==",element);
           if(array[index] < element){
                  index += array.length-1-index < 2 ? 1 :  2;
           }
           else if(array[index]==element){
             result=array[index];
             break; 
           }
           else{
              result=  array[index-1]==element ? array[index-1] : null;
              break;
           }
    }
    return result;
}
 