// REF: call
const wizard = {
    name: 'Merlin',
    health: 100,
    heal: function(num1, num2) {
      this.health += num1 + num2;
    }
  }
  
  const archer = {
    name: 'Robin Hood',
    health: 50
  }
  // REF: call
  wizard.heal.call(archer, 50, 60)
  // REF: apply
  wizard.heal.apply(archer, [20, 30])
  archer
  // function borrowing
  // REF: bind
  const healArcher = wizard.heal.bind(archer, 50, 60);
  console.log(archer)
  healArcher()
  console.log(archer)
  