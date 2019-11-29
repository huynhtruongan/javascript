function addTo80(n){
    console.log("long time");
    return 80 + n;
}


function memoizedAddTo80(){
    let cache = {};
    return function(n){
        if(n in cache){
            return cache[n];
        } else {
            console.log("long time");
            cache[n] = n + 80;
            return cache[n];
        }
    }
}

const memoized = memoizedAddTo80();
memoized(5);
memoized(5);
memoized(5);



// NOTE: performent + optimized code