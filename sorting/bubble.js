function swap(arr,x,y){
    let temporary=arr[x];
    arr[x]=arr[y];
    arr[y]=temporary;
}
/** BubbleSort let us to compare the current position with the next position 
 * if current> next so we swap the the values 
 */
function BubbleSort(array){
    for(let i=0;i<array.length;i++){
                if(array[i+1]<array[i]){
                    swap(array,i,i+1);
                }
    } 
}
/** BubbleSort sort allow us to compare two values and sorting them 
 * so to check if the array is sorted we should implement the BubbleSort n time
 */
function SortingAsc(array){
    for(let j=0;j<array.length;j++){
       BubbleSort(array); 
    }
    return array;
}

console.log(SortingAsc([5,2,6,1,7,3]));