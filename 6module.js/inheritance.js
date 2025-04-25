class Hero {
  constructor({ name = 'hero', xp = 0 } = {}) {
    this.name = name;
    this.xp = xp;
  }
  gainXp(amount) {
    console.log(`${this.name} отримує ${amount} досвіду`);
    this.xp += amount;
  }
}

class Warrior extends Hero {
  constructor({ weapon, ...restProps } = {}) {
    super({ ...restProps });

    this.weapon = weapon;
  }

  attack() {
    console.log(`${this.name} атакує за допомогою ${this.weapon}`);
  }
}
const mango = new Warrior({
  name: 'Mango',
  xp: 1000,
  weapon: 'sword',
});

console.log(mango);

mango.attack();
mango.gainXp(100);

class Berserk extends Warrior {
  constructor({ warcry, ...restProps } = {}) {
    super({ ...restProps });

    this.warcry = warcry;
  }

  babyRage() {
    console.log(this.warcry);
  }
}

const qiwi = new Berserk({
  name: 'Qiwi',
  xp: 10000,
  weapon: 'AXE',
  warcry: `waaaaaah`,
});

console.log(qiwi);
qiwi.babyRage();
qiwi.attack();
qiwi.gainXp(200);

class Mage extends Hero {
  constructor({ spells, ...restProps } = {}) {
    super({ ...restProps });

    this.spells = spells;
  }
  cast() {
    console.log(`${this.name} кастує спел ${this.spells}`);
  }
}

const poly = new Mage({
  name:'Poly', 
  xp: 2000, 
  spells:'fireball',
});

console.log(poly);
poly.cast();
poly.gainXp(200);

class Archer extends Hero {
  constructor({ arrows, ...restProps } = {}) {
    super({ ...restProps });

    this.arrows = arrows;
  }

  throw() {
    console.log(`${this.name} випускає ${this.arrows} стріл`);
  }
}

const ajax = new Archer({
  name:'Ajax', 
  xp:5000, 
  arrows:30,
});
console.log(ajax);
ajax.throw();
ajax.gainXp(200);
