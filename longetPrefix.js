input = ["flat" ,"flower" , "flcc" , 'fl']; // output ;


// flat
//f => l 
//l => [f , fl]
// a =>  [a , la , [if fl is done][fla];
//t => [[if fla is done] flat , [la] ]


// reject  rejectObj 
// getOtherArrItem = (ith , input) => input.slice(ith , (ith == input.length- 1) ? undefined : 1);
getOtherArrItem = (ith , input) =>{ let testArr = [...input] ; testArr.splice(ith , 1); return testArr };
input.forEach((word , ith) =>{
    const charArr = word.split('');
   const otherItemsArr =  getOtherArrItem(ith );
    let isEnded = true ;
    let isStrAccepted = {}
    

        for(let i = 0 ; i< charArr.length ; i++){
            let currentChar = charArr[ith];
            let isFirstItem = i == 0 ;
            let permutationArr = [];
            
            if(isFirstItem){
                permutationArr = [currentChar]
            }
            if(!isFirstItem){

                // need to create a permutation arr 
            }
            for(const str of permutationArr){
                let isStrRejected = false 
                for(const $word of otherItemsArr){

                    const isInclded = $word.includes(str);
                    if(!isInclded){
                        if(str in isStrAccepted ){
                            delete isStrAccepted[str]
                        }
                        isStrRejected = isInclded;
                        rejectedObj[str] = null 
                        break ;
                    }
                    
                }
                if(isStrRejected) continue ;
                isStrAccepted[str] = str ;
            }
            
            
        }


     
    
    
})







let getAllPermutation = (input ) =>{ let arr = [];
[...input].forEach(($word , ith) =>{
    const strLen = $word.length;
    arr[ith] = {}
    for(let i = 1 ; i < strLen+1 ; i++){
        arr[ith][$word.slice(0, i )] = null
        
    }
    
    
}); return arr }

let final = (input ) =>{
const permutationArr = getAllPermutation(input);
    let acceptedInAll = {};
    let blockKeys = {}
permutationArr.forEach( (obj , ith) =>{
    const otherArr = getOtherArrItem(ith , permutationArr);
    const permutationWordChar = Object.keys(obj).reverse();

    for(let i = 0 ; i < permutationWordChar.length ; i++){
        let $word = permutationWordChar[i];
        if($word in blockKeys){
            delete obj[$word]
            continue
        }
        let isacceptable = true ;
        
        for(const $obj of otherArr){
            // search in other words
            if($word in $obj ){
                isacceptable = true 
                continue  ;
                
            }
            blockKeys[$word] = null 
            delete obj[$word]
            isacceptable = false
            break 
            
        }
        if(isacceptable){
               acceptedInAll[$word] = null
            break ;// you got the largest word
        }
        
        
    }
    
})
    console.log({permutationArr ,acceptedInAll , blockKeys})
    return acceptedInAll

}

getOtherArrItem = (ith , input) =>{ let testArr = [...input] ; testArr.splice(ith , 1); return testArr };