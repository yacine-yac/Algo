function swap(arr,x,y){
    // this method consist of swaping the arr[x] value bu arr[y] value
       let temporary=arr[x];
       arr[x]=arr[y];
       arr[y]=temporary;
}
function SortingASC(arr){
  // start looping the arr 
  // in every position we will find the minimum position in the next value by using (min and j)
  // after that the minimum got will be compared to the value of (i position)
  // if the value of the minimum founed is less then the value of i position then we make swap values 
  for(let i=0;i<arr.length;i++){
    let min= i;
    for(let j=i+1;j<arr.length;j++){ 
      if(arr[j]<arr[min]){
             min=j;
      }
      if(arr[i]>arr[min]){ console.log(arr,"i=",i,' j=',j,"  min=",min);  
        swap(arr,min,i);
      }     
    } 
  }
  return arr;
}
console.log(SortingASC([5,2,6,1,7,3]));
