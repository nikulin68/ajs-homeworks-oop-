import Character from './Character';

export default class Undead extends Character {
  constructor(name) {
    super(name);
    super.type = 'Undead';
    this.attack = 25;
    this.defence = 25;
  }
}
