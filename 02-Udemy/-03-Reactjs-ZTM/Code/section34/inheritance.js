class Elf {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }
  attack() {
    return "atack with this.weapon";
  }
}
const fiona = new Elf(" Fiona", " ninja stars");
const orge = { ...fiona };
console.log(fiona === orge);

class Elf extends Character {
  constructor(name, weapon, type) {
    super(name, weapon);
    this.type = type;
  }
}

const dolby = new Elf("Dolby", " cloth", " house");
dolby;
dolby.attack();
