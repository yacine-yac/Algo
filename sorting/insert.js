function Sort(arr){
    /** the insertion sort consist of 
     * start the iteration from 1
     * the position 0 consider as the begining of the sorted arrat   [6,/2,3,5,4,8,9]
     *                                                                sorted / unsorted 
     * in each iteration we fix the element variable    eg: element = array[i]
     * so the element value will be compared to the previous values, the counter will pass the values [j] to [j+1] 
     * when the J loop finish (j==0 or arr[j]<element)
     * we replce the element in arr[j+1]  
     */
    for(let i=1;i<arr.length; i++){
        let element=arr[i],
                  j=i-1; 
            for(j;j>=0;j--){
                    if(arr[j]>element){
                        arr[j+1]=arr[j];
                    }else{
                        break;
                    } 
            }
            arr[j+1]=element;
    }   
    return arr
}
console.log(Sort([8,5,2,6,1,7,3]));
