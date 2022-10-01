function search(array,element){
    /**search accept array contains elements and element searched
     * we check firt if the element search is part of the interval of array elements
     * after we calculat avrg1 (1/3) and avrg2 (2/3) of the elements 
     * we run recursion looking for the most small interval
     * in every recursion we compare the element searched to the avrg elements
     */
    const divide =(start,end)=>{
      if(element>=array[0] &&  element<=array[array.length-1]){
        let avrg1=start+( Math.floor((end-start)/3)==0 ?  1 : Math.floor((end-start)/3) ),
            avrg2= avrg1+ (Math.floor((end-start)/3) ==0 ? 1 : Math.floor((end-start)/3));
        if(array[avrg1]==element || array[avrg2]==element){
                return element; 
        }else if(avrg1-start<=1 || end-avrg2<=1){
            return (array[start]== element || array[end]==element) ? element : null 
        }else{
                if(avrg1 >= element){
                    return divide(start,avrg1);
                }else{
                    return avrg2 < element ? divide(avrg2,end) : divide(avrg1,avrg2);
                }
        }   
      }else{
        return null;
      }
    }
   return divide(0,array.length-1);
} 
