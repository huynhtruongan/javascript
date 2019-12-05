// REF: syntax new Set([iterable])
// REF: set objects are collections of values, may only occur once , each value in the Set has to be unique, the value equality will be checked
// NOTE: NaN and undefined can also be stored in a Set, NaN treat equal NaN(although NaN !== NaN)
(function(){
    `use strict`;
    let mySet = new Set([1, 2, 3]);
    console.log('create mySet object: ', mySet);
    // TODO: Set.length equal 0
    console.log(Set.length);// 0
    
    //PA: Properties

        // REF: Set.prototype, allows the addition of properties to all Set object
        // REF: Set.size return the number value of set
            console.log('length of mySet', mySet.size)
    //PA: Methods
        // REF: Set.add(value) append a new elemnets to the Set object, return Set object
            console.log('add 4 to the Set object', mySet.add(4));
        // REF: Set.clear() remove all element from the Set object
        // REF: Set.delete(value) remove the element from the set object return true/false
            console.log('remove [1,2] from mySet', mySet.delete(1,2), mySet);
        // REF: Set.entries() return a new iterator object that contains an array of [value, value]
            console.log('Set.entries', mySet.entries())
        // REF: Set.forEach(callbackFunction(thisArg))
            mySet.forEach(x=>{
                console.log('mySet.forEach',x);
            })
        // REF: Set.has(value) return boolean true/false
            console.log('Set.has', mySet.has(3,4));
            console.log('Set.has', mySet.has(1,4));
        // REF: Set.keys() && Set.values()
            console.log('Set.keys', mySet.keys());
            console.log('Set.keys', mySet.values());
        // REF: [...Set] && [...new Set(Args)]
            console.log('[...Set]',[...mySet]);
            console.log('[...new Set(numbers)]', [...new Set([1,'a','b'])]);
            

})();