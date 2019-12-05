// const large = new Array(100000).fill('nemo');

// function findNemo(array){
//     // let t0= performance.now();
//     let t0= new Date();

//     for(let i=0; i<array.length;i++){
//         if(array[i]==='nemo'){
//             console.log("found Nemo");
//         }
//     }
//     // let t1 = performance.now();
//     let t1= new Date();

//     console.log('Call to find Nemo took '+(t1-t0)+' milliseconds');
// }
// findNemo(large);

const large = new Array(100000).fill('nemo');

async function findNemo(array){
    // let t0= performance.now();
    const  t0= await new Date();

    await Promise.all(await array.map(async item=>{
        if(await item==='nemo') console.log('found Nemo');
    }))
   
    // let t1 = performance.now();
    const t1=await new Date();

    console.log('Call to find Nemo took '+(t1-t0)+' milliseconds');
}
findNemo(large);