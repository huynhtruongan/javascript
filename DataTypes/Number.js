// all number in javascript are stored in 64-bit format('double precision')
/*---| more way to write a number |---*/
	/*-- Exponentiation --*/
    let num  = 1e6; // e6 = six zero
    console.log(num); // 1000000
    /*-- Hexadecimal numbers --*/
    let hex = 0xfff; // leading with 0x or 0X (zero x or zero X) and range( 0123456789ABCDEF)
    /*-- Binary numbers --*/    
    let binary = 0b10100010;// leading with 0b or 0B (zero b or zero B) and range( 01 )
    /*-- Octal numbers --*/
    let octal = 0123; // leading with 0 (zero) and range( 01234567)

    console.log(`${num} : ${hex} : ${binary} : ${octal}`);
/*---[ end more way to write a number]---*/

/*---| toString() |---*/
    /*-- Syntax --*/
    // num.toString( Base);
    // or 1234..toString( Base);
        console.log(1234..toString(36));
    // or (1234).toString( Base);
        console.log((1234).toString(36));
    // Base default is 10 and vary from 2 to 36
        /*-- Common use cases  --*/
        let example = 255;
        console.log(example.toString()); // 255 because Base default is 10
        // base=16: hex colors, character endcoding, digits can be 0..9 or A..F
            console.log(example.toString(16)); // ff
        // base=2: bitwise operation, digits can be 0 and 1
            console.log(example.toString(2)); // 11111111
        // base=36: turn a long numeric identifier into something shorter
            console.log(example.toString(36)); // 73
/*---[ end toString() ]---*/                

/*---| rounding |---*/
    /*-- Math.floor --*/
        console.log(Math.floor(3.9)); // 3, round down
    /*-- Math.ceil --*/
        console.log(Math.ceil(3.1)); // 4 round up
    /*-- Math.round --*/
        // Rounds to nearest integer
        console.log(Math.round(3.1)); // 3
        console.log(Math.round(3.6)); // 4
    /*-- Math.trunc {- Not support by internet Explorer -} --*/
        // Remove any thing after decimal point without rounding 
        console.log(Math.trunc(3.9));// 3
    /*-- toFixed --*/
        // result is string
        // round to nearest integer
        console.log(123.17893.toFixed(1)); // 123.2
        console.log(typeof(123.17893.toFixed(1))); // string
/*---[ end rounding ]---*/ 
        
/*---| Imprecise calculations |---*/
    // if a number too big, it giving an infinity
    console.log(1e500); // Infinity
    console.log(9999999999999999); // 10000000000000000 - 16 digits or greater
    console.log(0.1 + 0.2); // 0.30000000000000004
    console.log((0.1 + 0.2).toFixed(20)); // 0.30000000000000004441
    // fix that problem
    console.log(+(0.1.toFixed(1))); // 0.1
    console.log(0.1 * 10 / 10); // 0.1
    console.log(1.1); // 1.1
    // two zeros
    console.log(0); // 0
    console.log(-0); // -0
    /*-- two specical numberic value --*/
     // infinity and -infinity : is a special numberic value that is greater(less) than anything
     // NaN represents an error
     /*-- isNaN(value) --*/
        // converts its argunment to a number an then test it for being NaN
        console.log(isNaN("string")); // true
        console.log(isNaN(NaN)); // true
        // NaN is unique , it dosen't equals anything including itself
        console.log(NaN === NaN); // false
    /*-- isInfinite(value) --*/
        // convets its argument to a number and return true if it's regular number, not 
        // NaN/Infinity/-Infinity
        console.log(isFinite("string")); // false
        console.log(isFinite(20 - 10)); // true
        console.log(isFinite(Infinity)); // false
        console.log(isFinite()); // false
        console.log(isFinite("")); // true, "" is treated as 0
        console.log(isFinite("  ")); //true,  spaceing is treated as 0
        console.log(isFinite(null)); // true
    /*-- Object.is(value1, value2) --*/
        // it sames as ===
        console.log(Object.is(0, -0)); // false
 /*---[ end Imprecise calculations ]---*/

 /*---| ParseInt and parseFloat |---*/
        // Numberic convertions using + or Number() are strict . 
        console.log(+ "100px"); // NaN
        // But parseInt and parseFloat can do that
         // parseInt return an  integer
        console.log(parseInt("100px")); // 100
        console.log(parseInt("100.23")); // 100, only return an  integer 
         // parseFloat return a floating-point number
        console.log(parseFloat("34.23em")); // 34.23
        console.log(parseFloat("2.3.4")); // 2.3 only return first point
        // other return NaN
        console.log(parseInt()); // NaN
        console.log(parseFloat("a34")); // NaN
    /*-- second argument parseInt(str, radix) --*/
        // it cans parse string to hex , binary number and so on.
        console.log(parseInt("0xff", 16)); // 255
        console.log(parseInt("ff", 16)); //255 - it works without 0x
/*---[ end ParseInt and parseFloat ]---*/

/*---| Other Math function |---*/
    /*-- Math.random --*/
        // returns a random number from 0 to < 1 
        console.log(Math.random()); // any number from 0 to < 1
    /*-- Math.max/Math.min --*/    
        // returns a greatest/smallest number from an arbitrary array
        console.log(Math.max(3, 4, 10, -2)); // 10
        console.log(Math.min(3, 4, 10, -2)); //-2
    /*-- Math.pow(n, power) --*/    
        // returns n rised the given power
        console.log(Math.pow(2, 10)); // 2**10 : 1024
        console.log(2**10); // 1024
        // More in the docs: 
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
/*---[ end Other Math function ]---*/        

/*---| Exercise |---*/
    /*-- sum number from visistor --*/
        // (function(){
        //     "use strict";
        //     let number1 = + prompt(" Nhap first number :", 10);
        //     let number2 = + prompt(" Nhap sencond number :", 0);
        //     let result = (number1 + number2 ) * 10 / 10;
        //     isFinite(number1) && isFinite(number2) && alert(`Result : ${result}`);
        // })();
    /*-- 7.35.toFixed(1) == 7.3????? --*/
    (function(){
        "use strict";
        console.log(Math.round(7.35 * 10)/10);
        console.log((7.35 * 10).toFixed(0)/10);
    })();
    /*-- Repeat until input is a number --*/
        // (function(){
        //     "use strict";
        //     let number; // must delare
        //     loop: do{
        //         number = prompt(" Enter a valid number : " ,0 );
        //         console.log(number);
        //         if(number === null || !isFinite(number) ){
        //             alert(" return : " + null);
        //             continue loop;
        //         }else{
        //             alert(" return : " + +number);
        //             break loop;
        //         }
        //    }while(number);
        // })();
    /*-- random number min to max --*/
        (function(){
            "use strict";
           let Random =(min, max) => min + Math.random() * (max - min);
                console.log(Random(2, 3));
        })();
    /*-- Random integer from min to max --*/
        (function(){
            "use strict";
            //......
        })();
        
         
    