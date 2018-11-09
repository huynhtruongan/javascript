    /*-- 6 primitive types --*/
        // string, number, boolean, symbol, undefined, null.
        // different primitives type have different methods
   /*-- end --*/

/*---| how it work? |---*/
let cat = "con meo";
console.log( cat.toUpperCase() );
    // a special object is created call "object wrapper" that know value of cat and has
    // usefull method like toUpperCase() 
    // method runs and returns a new string
    // special object is destroyed, leaving primitive type
/*---[ end how it work? ]---*/ 

/*---| Constructors highly unrecommmended |---*/
    console.log( typeof 1 ); // number
    console.log( typeof new Number(1)); // object
/*---[ end Constructors highly unrecommmended ]---*/

/*---| null/undefined have no methods |---*/
    // console.log(null.test);// error
/*---[ end null/undefined have no methods ]---*/
        
/*---| example |---*/
let str = "hello";
str.test = 5;
console.log(str.test);// undefined (primitive is not object, can't store properties) 
/*---[ end example ]---*/