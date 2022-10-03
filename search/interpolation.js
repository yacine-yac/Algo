function search(array,element){
    /**
     * this function depend of the interpolation of the element searched in the array
     *  we calcul the med by:
     *  start position + {(end position - start position)/ (array[end]-array[start])}*(element serached - array[start])
     * we use recursion to  reduce the interval 
     * @param {*} start  refer to start interval  in the array 
     * @param {*} end    refer to end interval in the array
     * @returns          if the element exists we return the element if else we return null
     */
    const implement=(start,end)=>{
       let med= start+Math.floor((element-array[start])*((end-start)/(array[end]-array[start])) );
       if(med>=start && med<= end){
                if(end-med==1 & med-start==1){
                    return array[med]==element ? array[med] : null;
                }else{
                        if(array[med]==element){
                                return array[med];
                        }else if(array[med]<element){
                                return implement(med,end);
                        }else if(array[med]>element){
                                return implement(start,med);
                        } 
                }
        }else{ return null;}
    }
    return implement(0,array.length-1);
}
 


