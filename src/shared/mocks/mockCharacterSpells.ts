import type { CharacterSpells } from "../../character/domain/character-spells/characterSpells";

export const mockCharacterSpells: CharacterSpells = {
  changeCharacterSpells(props: CharacterSpells): void {
    Object.assign(this, props);
  },
  spelllists: 'Test Spell Lists',
  realm: 'Test Realm',
  listtype: 'Test List Type',
  levelmax: 10,
  learnchances: 10,
  bookandpage: 'Test Book and Page',
  spellname: 'Test Spell Name',
  spellclass: 'Test Spell Class',
  spellduration: 'Test Spell Duration',
  spellrange: 'Test Spell Range',
  description: 'Test Description',
  relations: 'Test Relations',
};
