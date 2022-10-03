export default function Binarysearch(array,element){
    // search accept the array which we want search inside and the element which we want search
    // check if the element searched belong to the sorted array // if not we return null
    // we should determine the mediane value of the array 
    // we compare the value of the median to the element searched 
    // then we implement a search from the left of the median if the element < median value
    // or by the right if the element > median value 

    const divide=(start,end)=>{
            

        if(element >=array[0] && element<=array[array.length-1]){
            let median=start+Math.floor((end-start)/2);  
            if(end-median==1 && median-start==1){
                            return array[median]==element ? array[median] : array[end]==element ? array[end]  : array[start]==element ? array[start] : null;
            }else{
                if(array[median]===element){
                            return array[median];
                }else{
                        return  array[median] < element ? divide(median,end) : divide(start,median);  
                }
                
            }
        }else{
            return null;
        }
    }
     return divide(0,array.length-1);   
}

// console.log(search([1,3,4,5,6,7],2),"okk");

