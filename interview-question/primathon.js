async function asyncTask(arr){

    for(const interval of arr){
      const stateMent =  await  intervalWait(interval);
      console.log(stateMent);
    }

}

function intervalWait(interval){
    return (
        new Promise((res , rej) =>{
            setTimeout(() => res(`Printed after ${interval}`)  , interval* 1000)
        })
    )
}

// asyncTask([ 2 ,3, 4 ,1])
const obj = {
    a:1,
    b:2
}
for(const item in obj){
    console.log({item})
}