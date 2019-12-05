// TODO: Array.from() 
    // REF: Array.from() creates a new, shallow-copied Array instance from an array-like or iterable object
    // REF: Array.from() syntax Array.from(arrayLike, mapFunction(thisArr))
    (function(){
        `use strict`;
        console.log('new array from string: foo ',Array.from('foo'));
        console.log('map function [1,2,3]',Array.from([1,2,3],x => x + x));
    })();