import Character from './Character';

export default class Bowman extends Character {
  constructor(name) {
    super(name);
    super.type = 'Bowman';
    this.attack = 25;
    this.defence = 25;
  }
}
