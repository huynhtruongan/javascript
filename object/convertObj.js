/*---| Conversion object |---*/
    /*--toPrimitive --*/
    let user = {
        name: " AN ",
        price: 10000,
        [Symbol.toPrimitive](hint){
            //hint == string return name
            //hint == number or default return price
            return hint == 'string' ? `name : ${this.name}` : this.price;
        }
    };
        /*-- End  toPrimitive --*/
        /*-- toString --*/
    let human = {
         name: " AN ",
         price: 20000,
         // hint = string return name
         toString(){
             return `{name: "${this.name}"}`;
         },
         // hint = number or default return price
         valueOf(){
             return this.price;
         }
    };
        /*-- End toString --*/
    /*---[ End Conversion object ]---*/
    
/*---| Note about conversion object |---*/
    
    // "string" (for alert and another string conversionn)
    // "number" (for math)
    // "default" (few operators)

    // 1. Call obj[Symbol.toPrimitive](hint){..} if method exits
    // 2. if hint is "string" try obj.toString() and obj.valueOf() whatever exits
    // 3. if hint is "number" or "default" try obj.valuerOf() and obj.toString() whatever exits
    // it often implement only obj.toString() return "human-readable" for logging or debugging purposes

/*---[ End note about conversion object ]---*/
