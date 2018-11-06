/*---| Convert object |---*/
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
    /*---[ End Convert object ]---*/