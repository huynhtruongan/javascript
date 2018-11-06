/*---| Regular syntax |---*/
    //name with First capital letter
function User(name) {
    //this = {};

    //add properties to this
    this.name = name;
    this.isAdmin = false;

    //return this
}

let user = new User("AN");

    // if we have many lines of code all about creation of a single complex object,
    // we can wrap them in constructor function
let admin = new function(){
    this.name = "John";
    this.isAdmin = true;

    // other code for  admin creation
    // maybe complex logic and statement
    // local variable
    // etc..
};

// console.log(user.name);
// console.log(user.isAdmin);

/*---[ End  Regular syntax ]---*/

/*---| Dual-syntax Constructors: new.target |---*/

function Mom(name){
    // You call me without new
    if(!new.target) { 
        // I will add new to you
       return new Mom(name);
       // throw "you should call me with new ";
    }
    this.name = name;
    // console.log("It work!!");
}

let mama =  Mom("Hedera");// Delare mama without new
// console.log(mama.name);

/*---[ End Dual-syntax ]---*/

/*---| Return constructor |---*/

function BigUser() {   
    this.name = "John";
    return { name: "Soul"};// Return object 
    // return "asd";// not work, it wills automatically return this
}

    // console.log( new BigUser().name );// Soul

function SmallUser() {
    this.name = "John";
    return; //finish execution and return this
}

    // console.log( new SmallUser().name );// John

    //not "Good style" but it is permitted
let brother = new SmallUser; // we can omit parentheses after new if it has not arguments

// console.log(brother);

/*---[ End Return constructor ]---*/

/*---| Methods in constructor |---*/

function Heo(name) {
    
    this.name = name;
    this.sayHi = function() {// give a great deal of flexibility
        console.log( ` Un in ot.. ot.. : ${this.name} `);
    };

}

let mori = new Heo("Mori");
// mori.sayHi();

/*---[ End Methods in constructor ]---*/
/*---| Note |---*/

    // Common use first capital letter for name
    // Main purpose of constructor : to implement reusable object creation code

/*---[ End Note ]---*/

/*---| Example |---*/
	/*-- exp1 --*/
        // both two constructor returm one object
        // them equals

    let obj = {};

function A(){ return obj;}
function B(){ return obj;}

let a = new A();
let b = new B();

console.log(a == b);

    /*-- End exp1 --*/
    /*-- exp2: Create new calculator --*/

        // using three methods:
        // read() : take two values and save 
        // sum() : take result of sum two value
        // mul() : take result of multiplication two value

function Calculator() {

    this.read = function() {
        this.value1 = prompt(" please enter your value 1 :", 100);// string 
        this.value2 = prompt(" please enter your value 2 :", 200);// string
    };
    this.sum = function() {
         this.result = +this.value1 + +this.value2; // convert to number
         return this.result;
    };
    this.mul = function() {
        this.result = this.value1 * this.value2;// automatically convert to number
        return this.result;
    };
}
let calculator = new Calculator();
calculator.read();
alert( `Sum result : `+ calculator.sum() );
alert(` Multiplication result : ${calculator.mul()}`);

    /*-- End exp2 --*/
    /*-- exp3: Create a new Acumulator --*/
        // two method
        // read(): take new value and add it to "value"
        // value: return value
function Acumulator(staringValue) {
    this.value = staringValue;
    this.read = function() {
        this.value += +prompt(" Enter new value ", 1);
    };
}

let acumulator = new Acumulator(1);
acumulator.read();
acumulator.read();
alert(" Value : " + acumulator.value);

    /*-- End exp3 --*/
/*---[ End example ]---*/