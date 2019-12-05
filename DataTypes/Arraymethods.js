/*---| TODO:delete |---*/
        let arr = ["shopping", "fishing", "fucking"];
        delete arr[1]; // remove fishing
        console.log( arr[1] ); // undefined
    // now arr = ["shopping", , "fucking"];
        console.log(arr.length); // 3
    // element was removed but the place still there
/*---[ end delete ]---*/
/*---| TODO:splice |---*/
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
/*---| TODO:slice |---*/
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
/*---| TODO:concat |---*/
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
/*---| TODO:Iterate: forEach |---*/
    // Syntax
        // arr.forEach(function(items, index, array)){
        // do something with item
        // });
    // Instance
        ["Bilbo", "Gandalf", "Nazgul"].forEach(console.log);
        ["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => 
            {console.log(`${item} is at index ${index} in array ${array}`)}
        );
/*---[ end Iterate: forEach ]---*/
/*---| TODO:Searching in array |---*/
    let arrSearch = [1, 0, false, NaN]; 
    // indexOf
        // arr.indexOf(item, fromIndex) looks for item starting from index , and returns
        // the index where it found, otherwise -1.
            console.log(arrSearch.indexOf(0)); // 1
            console.log(arrSearch.indexOf(0, 2)); // -1
            console.log(arrSearch.indexOf(false)); // 2
            console.log(arrSearch.indexOf(null)); // -1
    // lastIndexOf
        // arr.lastIndexOf(item, from) same but look for item from right to left
            console.log(arrSearch.lastIndexOf(1)); // 0
            console.log(arrSearch.lastIndexOf(null)); // -1
    // includes
        // arr.includes(item, from) looks for item from index, and returns true if it was found
            console.log(arrSearch.includes(1)); // true
    // Case NaN
        // includes success
            console.log(arrSearch.indexOf(NaN)); // -1
            console.log(arrSearch.includes(NaN)); // true  
/*---[ end Searching in array ]---*/
/*---| TODO:find and findIndex |---*/
    // Look for a single(first) element that makes the function return true.
    // Syntax
     let result = arr.find(function(item, index, array){
        // if true is returned, item is returned and iteration is stopped
        // for falsy scenario returns undefined
      });
    // Example:
      let users = [
          {id: 1, name: "John"},
          {id: 2, name: "Pete"},
          {id: 3, name: "Mary"}
      ];
      let user = users.find(item => item.id == 1 );
      console.log(user.name);
      let result2 = arr.findIndex(function(item, index, array){
        // if true is returned, index is returned and iteration is stopped
        // for falsy scenario returns -1
      });
      let userIndex = users.findIndex(item => item.name == "John");
      console.log(userIndex);
       
/*---[ end find and findIndex ]---*/
/*---| TODO: filter |---*/
    // Look for many element
    let filterResult = arr.filter(function(item, index, array){
        // if true item is pushed to results and iteration continues
        // returns empty array for complete falsy scenario
    });
    let someUsers = users.filter(item => item.id < 3);
    console.log(someUsers);
    
/*---[ end filter ]---*/
/*---| TODO: Transform an array |---*/
    /*-- map --*/
        // it calls the function for each element of the array and returns the array of results
        // Syntax
        let mapSyntax = arr.map(function(item, index, array){
            // return the new value instead of item
        });
        // Example
        let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
        console.log(lengths);
    /*-- sort(fn) --*/
        // sort the array in place
        // items are sorted as strings by default
        // Exxample
        (function(){
            `use strict`;
            let arr = [1, 2, 15];
            arr.sort(); // reorders the content of arr (and return it)
            console.log(arr);
            let secondArr = [1, -2, 15, 2, 0, 8];
            // use arrow function for the best
            secondArr.sort((a,b) => (a - b));
            console.log(secondArr);
        })();
    /*-- reverse --*/
        // reverse the order of elements in arr
        // Example 
        (function(){
            `use strict`;
            let arr = [1, 2, 3, 4, 5, 15];
            arr.reverse();
            console.log(arr);
            
        })();
    /*-- split and join --*/
        // TODO:split
            // Situation from real life : John, Anna, Petter. how to convert it to an array?
            let items = "John, Anna, Petter";
            // Syntax
            let arrAfterSplit = items.split(', ');
            // Instance
            console.log(arrAfterSplit); // [ 'John', 'Anna', 'Petter' ]
            let arrAfterSplitLimmitLenght = items.split(', ', 2); // add lenght limmit is 2
            console.log(arrAfterSplitLimmitLenght); // [ 'John', 'Anna' ]
            // split into letters
            // The call to split(s) with an empty s would split the string into an array of letters
            let letterSplit = "test";
            console.log(letterSplit.split(''));
            // if empty , add item to an array
            console.log(letterSplit.split());
        // TODO: join
            // reverse to split. It creates a string of arr items glued by separator between them
            //Syntax and Instance
            let strAfterJoin = arrAfterSplit.join('; ');
            console.log(strAfterJoin);
        // TODO: reduce/reduceTight
            // iterate and caculate to a single value base on the array
            // Syntax
            // let value = arr.reduce(function(previousValue, item, index, array){
                   
            // }, initial);
            (function(){
                `use strict`;
                let arr = [1, 2, 3, 4, 5];
                let result = arr.reduce((sum, current)=> sum + current, 100);
                console.log(result); // 115
                // initial sum = 100;
                // iterate and sum += current;
                let resultOmitInitial = arr.reduce((sum, current)=> sum + current);
                console.log(resultOmitInitial); // 15
                // if omit initial , method take first element of the array as the initial value
                // and start iteration from the 2nd element
                // if array is empty , the method call without initial value give and error

            })();
                //  reduceRight doses the same but goses from right to left
/*---[ end Transform an array ]---*/
/*---| TODO: Array.isArray |---*/
    // Array form base on object
    // typeof dose not help distinguish a plain object from an array
    console.log(typeof{} === typeof[]); // true
    // but array are used so often that there's a special method for that Array.isArray(value)
    // it return true if the value is an array, and false otherwise
    console.log(Array.isArray({})===Array.isArray([])); // false
/*---[ end Array.isArray ]---*/
/*---| TODO: MOst methods support "thisArg" |---*/
    
/*---[ end MOst methods support "thisArg" ]---*/

    