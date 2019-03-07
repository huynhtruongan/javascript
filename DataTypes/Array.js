/*---| Declaration |---*/
    //  there are two sintax for creating an empty array
        let arr = new Array();
        let arrEmpty = [];
        let fruits = ['Apple', 'Orange', 'Plum',];
    // We can get an element by its number in square the bracket
        console.log(`${fruits[1]}`);
    // We can replace element
        fruits[2] = 'Pear';
    // Or add a new one to the array
        fruits[3] = 'Lemon';
    // Total count of the elements in array is its length
        console.log( `${fruits.length}` ); // 4
    // We can also show the whole array
        console.log( fruits ); // [ 'Apple', 'Orange', 'Pear', 'Lemon' ]
    // An array can store elements of any type
        arr = [ `Apple`, {name: `John`}, true, function(){ console.log(`hello`); }, ]; 
        console.log(arr);
        console.log( arr[1].name );
        arr[3]();
    // An array, just like an object, may end with a comma
/*---[ end Declaration ]---*/            
/*---| Methods that work with the end of the array |---*/
    /*-- push --*/
    // Append the element to the end of array
        fruits.push( `Guava` );
        fruits.push( `Coconut`, `strawberry`, );
        console.log( fruits );
    /*-- pop --*/
    // Extracts the last element of the array and return it
        console.log( fruits.pop() );
        console.log( fruits );
/*---[ end Methods that work with the end of the array  ]---*/
/*---| Methods that work with the beginning of the array |---*/
    /*-- shift --*/
    // Extracts the first element and return it
        console.log( fruits.shift() );
        console.log( fruits );
    /*---[ end unshift ]---*/
    // Add the element of the beginning of the array
        fruits.unshift( `Mango` );
        fruits.unshift( `Blueberry`, `Lychee`, );
        console.log( fruits );
/*---[ end Methods that work with the beginning of the array ]---*/
/*---| Internals |---*/    
    // it is coppied by reference
    arrEmpty = fruits;
    console.log( fruits === arrEmpty );
    console.log( arrEmpty );
    //push,pop is fast and shift, unshift is low