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
    
 