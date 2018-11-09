// all number in javascript are stored in 64-bit format('double precision')
/*---| more way to write a number |---*/
	/*-- Exponentiation --*/
    let num  = 1e6;// e6 = six zero
    console.log(num);// 1000000
    /*-- Hexadecimal numbers --*/
    let hex = 0xfff;// leading with 0x or 0X (zero x or zero X) and range( 0123456789ABCDEF)
    /*-- Binary numbers --*/    
    let binary = 0b10100010;// leading with 0b or 0B (zero b or zero B) and range( 01 )
    /*-- Octal numbers --*/
    let octal = 0123;// leading with 0 (zero) and range( 01234567)

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
        console.log(example.toString());// 255 because Base default is 10
        // base=16: hex colors, character endcoding, digits can be 0..9 or A..F
            console.log(example.toString(16));// ff
        // base=2: bitwise operation, digits can be 0 and 1
            console.log(example.toString(2));// 11111111
        // base=36: turn a long numeric identifier into something shorter
            console.log(example.toString(36));// 73
/*---[ end toString() ]---*/                

/*---| rounding |---*/
    /*-- Math.floor --*/
    console.log(Math.floor(3.9));// 3, round down
    /*-- Math.ceil --*/
    console.log(Math.ceil(3.1));//4 round up
    /*-- Ma --*/
    