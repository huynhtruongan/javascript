/*---| delete |---*/
        let arr = ["shopping", "fishing", "fucking"];
        delete arr[1]; // remove fishing
        console.log( arr[1] ); // undefined
    // now arr = ["shopping", , "fucking"];
        console.log(arr.length); // 3
    // element was removed but the place still there
/*---[ end delete ]---*/
/*---| splice |---*/
    //syntax
        // arr.splice(index, countDelete, elementInsert1, elementInsert2 .. elementInsertN );
    // The splice method is a swiss army knife, it can do anything: insert, remove 
    // and replace element
        let army = ["tank", "helicopter", "grenade"];
        army.splice(1, 1); // from index 1 remove 1 element
        console.log( army ); // ["tank", "grenade"]
    
    // Then we remove 2 elements and replace them with another
        army.splice(0, 2, "nife", "medicine");
        console.log( army );
        
    // The splice method is also able to insert the element without any removal
    // by set delete count by 0
        army.splice(1, 0, "shortgun", "machinegun");
        console.log( army );
    
    // Negative indexs are allowed

        army.splice(-1, 0, "bulletproof vest"); // index -1 : one step from the end
        console.log( army ); //[ 'nife', 'shortgun', 'machinegun',"bulletproof vest", 'medicine' ]
/*---[ end splice ]---*/
/*---| slice |---*/
    // syntax 
        // arr.slice(start, end);
    
    // much simpler than splice method
    // return elements from startNumber and before endNumber
    // Not change arr, it just coppy
        console.log( army.slice(1,3));
        console.log( army.slice(-2));
        console.log( army.slice(-2, 1));
        console.log( army ); 
        
/*---[ end slice ]---*/
/*---| concat |---*/
    //Syntax
        // arr.concat(arg1, arg2);
    // Method concat joins the arrays with other arrays and/or items
    // if argument is an array or has Symbol.isConcatSpreadable property
    console.log(army.concat(["warship"])); // merge arr witdh arr

    console.log(army.concat(["warship","nuclear submarine"])); 
    
    console.log(army.concat(["warship"],"nuclear submarine")); // merge arr with arr and element
    console.log(army); // but origin arr still constant, it just coppy
    
    (function(){
        `use strict`;
        let array = [1, 2];
        let arrLike = {
            0: "something",
            length: 1
        };
        console.log( array.concat(arrLike)); // [ 1, 2, { '0': 'something', length: 1 } ]
        let arrSimilar = {
            0: "something",
            length: 1,
            [Symbol.isConcatSpreadable] : true 
        };
        console.log( array.concat(arrSimilar)); // [ 1, 2, 'something' ]
        
    })();

/*---[ end concat ]---*/
