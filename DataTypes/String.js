// internal format is always UTF-16
/*---| Quotes |---*/
    // single and double quotes are essentially same.
        let single = 'as sd ';
        let double = "dfj jd ";
    // backticks allow us to embed any expression , including function calls, multiple line
        let backticks = ` sd fgd `;
        let home = `toilet,
                        kitchen,
                        bedroom.
                        `;
    // template function
        (function(){
            "use strict";
            let number = `number ${ isFinite(10) ? 10 : 0}`;
            console.log(number);
    })();
    // tagged template
        (function(){;
            "use strict";
            let a = 10;
            let b = 20;
            
            function Sum(strings, a, b){
            
                let str0 = strings[0];
                let str1 = strings[1];
                let str3 = strings[2];

                return `${str0}${a}${str1}${b}${str3}${a + b}`;
            }
            let output = Sum`tong ${a} voi ${b} la `;
            console.log(output);
        })();
/*---[ end Quotes ]---*/

/*---| Special characters |---*/
    /*-- Charactor                    Description --*/
    /*         \b                             Backspace
                \f                              Form feed
                \n                              New line
                \r                              Carriage return
                \t                              Tab
                \uNNNN                    A unicode symbol with the hex code NNN
                \u{NNNNNNNN}        Some rare characters are encoded with two unicode symbol
                                                 taking up to 4 bye. This long unicode requires braces around it                                           
    */
    /*-- example --*/
        console.log("Backspace :\bBackspace");
        console.log("Form feed:\f Form feed");
        console.log("New line:\nNewline");
        console.log("Carriage return:  \r01234");
        console.log("Tab:\tTab");
        console.log("unicode: \u00A9");
        console.log("long unicode: \u{23234}");
        console.log("another unicode: \u{1F60D}");
    // Escape charactor: \
        console.log('i\'m coder ');
        console.log('hey man: \\');
/*---[ end Special character ]---*/

    /*-- String length --*/
    // is A Numberic property, not a function

        console.log("Heo\n".length);// 4
        //console.log("Heo\n".length()); Not works
    /*-- Accessing character --*/    
        let str = `Hello`;
        console.log(str[0]); // H
        console.log(str.charAt(0));// H
    // No character is found
        console.log(str[10000]); // undefinded
        console.log(str.charAt(1000)); // empty string ''
    // For...of...
    for(let char of str){
        console.log(char);
    }
    // Strings are immutable
        str[0] = 'h';
        console.log(str[0]);
    // changing the string
        let heo = `Heo`;
        heo  = `h` + heo[1] +heo[2];
        console.log(heo);
    // changing the case
        let howitwork = `how it work`;
        console.log(howitwork.toUpperCase()); // HOW IT WORK
        console.log(howitwork.toUpperCase().toLowerCase()); // how it work

/*---| Searching for a substring |---*/
    /*-- str.indexOf --*/
    // return position or -1 if not found
        (function(){
            let title = `I'm title`;
            console.log( title.indexOf(`m`)); // 2
            console.log( title.indexOf(`Title`)); // -1
            
        })();
    // search start point
        (function(){
            let title = `I'm title`;
            console.log( title.indexOf(`t`));
            console.log( title.indexOf(`t`, 5));
        })();
    /*-- str.lastIndexOf(pos) --*/
        (function(){
            let title = `I'm title`;
            console.log( title.lastIndexOf(`t`));
        })();
    /*-- indexOf trick --*/
    // ~number: - ( number + 1)
        (function(){
            `use strict`;
            let check = "you found me , @@";
            if(~check.indexOf("me")) console.log(`you found me at ${check.indexOf("me")}`); 
        })();
    /*-- includes --*/
    // check and return boolen value
        (function(){
            `use strict`;
            let me = `me true or false`;
            console.log(me.includes(`false`));
        })();
    /*-- startsWith , endsWith --*/
    (function(){
        `use strict`;
        let dream = `asd, me said`;
        console.log(`dream start with :\'${(dream.startsWith(`asd`))&&(`asd`)
        }\' and end with tell:${dream.endsWith(`tell`)}`);
    })();
/*---[ end Searching for a substring ]---*/

/*---| Getting a substring |---*/
    /*-- str.slice(start [, end]) --*/
    // return part of string not include end
    (function(){
        `use strict`;
        let sunny = `what's the weather like today?`;
        console.log(sunny.slice(0,sunny.length-1)); // what's the weather like today
        console.log(sunny.slice(0)); // what's the weather like today?
        console.log(sunny.slice(0, 1000)); // what's the weather like today?
        console.log(sunny.slice(400,500)); // empty string
        console.log(sunny.slice(-4,-2)); // da
        console.log(sunny.slice(!-2, 4)); // !-2 not supported !-2 treat as 0, it mean (0, 4)
        console.log(sunny.slice(6, 2)); // empty string
    })();    
    /*-- str.substr(start [, length]) --*/
    // Returns the part of the string from start, with the given length
    (function(){
        `use strict`;
        let str = `substring`;
        console.log( str.substr(2, 6)); // bstrin
        console.log( str.substr(6, 2)); // in
    })();
    /*-- str.substring --*/    
    // Returns the part of the string from start to before end
    (function(){
        `use strict`;
        let str = `subtring`;
        console.log( str.substring(2, 6)); // btri
        console.log( str.substring(2, 6)); // btri
    })();    
/*---[ end Getting a substring ]---*/
/*---| Comparing strings |---*/        
    // A lowercase letter is always greater than the uppercase
        console.log('a' > 'A'); // true
    // Letter with diacritical marks are "out of order"
        console.log('Öster' > 'zdf'); // true
    // Returns the code for the character at position pos
    /*-- str.codePointAt(pos) --*/    
        console.log( 'zab'.codePointAt(0) ); //122
        console.log( 'zab'.codePointAt(1) ); //97
    // Create a character by its by numeric code    
    /*-- String.fromCodePoint(code) --*/
        console.log( String.fromCodePoint(122) ); // z
    // We also add unicode character by their codes using \u followed by the hex code    
    /*-- \u --*/
        console.log('\u005a'); // Z
    // see the character from 65 to 220    
        (function(){
            `use strict`;
            let str = '';
            for (let i = 65; i <= 220; i++){
                str += String.fromCodePoint(i);
            }
            console.log(str);   // ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~

                                // ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜ
            
        })();
    