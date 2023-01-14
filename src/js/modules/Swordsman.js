import Character from './Character';

export default class Swordsman extends Character {
  constructor(name) {
    super(name);
    super.type = 'Swordsman';
    this.attack = 40;
    this.defence = 10;
  }
}
