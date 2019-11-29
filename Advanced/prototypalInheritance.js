// REF: prototypal Inheritance
let dragon = {
    name: 'Tanya',
    fire: true,
    fight() {
      return 5
    },
    sing() {
      if (this.fire) {
        return `I am ${this.name}, the breather of fire`
      }
    }
  }
  
  let lizard = {
    name: 'Kiki',
    fight() {
      return 1
    }
  }
  // Don't do this, bad performance. Show with bind.
  lizard.__proto__ = dragon;
  dragon.isPrototypeOf(lizard);
  console.log(lizard.fire)
  console.log(lizard.sing())
  const lizardFire =dragon.sing.bind(lizard)
  console.log(lizardFire())
  // NOTE: Lizard dosen't has sing(), lookup to prototype chain and sing is there
  // Create our own prototypes:
var human = {mortal: true}
var socrates = Object.create(human);
human.isPrototypeOf(socrates); // true
  // NOTE: only function have the prototype property
  // NOTE: __proto__ always point to prototype
  // REF: using prototypes we avoid repeating ourselves
  // REF: we avoid adding a same code over and over
  // REF: being efficient with our memory 

  Date.prototype.lastYear = function(){ 
      
        return this.getFullYear()-1;
    
  } 
  new Date('1900-10-10').lastYear()
  Function.prototype.bind = function(whoIsCallingMe){
    const self = this;
    return function(){
      return self.apply(whoIsCallingMe, arguments);
    };
  }