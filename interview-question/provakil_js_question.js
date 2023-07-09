var obj = {
    "x" : {"y": 100},
    "some": "whatever",
    "deep": {
        "one": {
            "two": {"three": "this a deeply nested object"}
        }
    }
}

function getResult(key) {
    // Write your logic here
    const keyPath = key.split('.').filter(x => !!x) ;// to get the property path arr ;
    let accessObj =  {...obj};
    let solution = null ;
    for(let i = 0 ; i < keyPath.length ; i++){
        const currentKey = keyPath[i];
        
        if(! (currentKey in accessObj) ){
            throw new Error('Path Not Found') 
        }
        
        accessObj = solution  = accessObj[currentKey];
        
        // console.log({currentKey , accessObj , keyPath , solution})

    }


    return solution
}

console.log(getResult("x")) 
console.log(getResult("x.y"))
console.log(getResult("deep.one.two"))
console.log(getResult("deep.one.some_path")) // error

// Output
// 1.  getResult("x")
//     // {"y": 100}
// 2.  getResult("x.y")
//     // 100
// 3.  getResult("deep.one.two")
//     // {"three": "this a deeply nested object"}
// 4.  getResult("x.xyz")
//     // "Path not found"
// 5.  getResult("deep.one.some_path")
//     // - "Path not found"