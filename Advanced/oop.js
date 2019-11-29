class Elf {
    constructor(name, weapon) {
      this.name = name;
      this.weapon = weapon;
    }
    attack() {
      return 'atack with ' + this.weapon
    }
  }
  
  const fiona = new Elf('Fiona', 'ninja stars');
  console.log(fiona instanceof Elf) // 
  const ben = new Elf('Ben', 'bow');
  fiona.attack()
  //Constructor Functions
// function Elf(name, weapon) {
//     this.name = name;
//     this.weapon = weapon;
//   }
  
//   Elf.prototype.attack = function() { 
//     return 'atack with ' + this.weapon
//   }
//   const sam = new Elf('Sam', 'bow');
//   const peter = new Elf('Peter', 'bow');
//   sam.attack()