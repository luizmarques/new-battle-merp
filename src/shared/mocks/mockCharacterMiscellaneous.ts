import type { CharacterMiscellaneous } from "../../character/domain/characterMiscellaneous";

export const mockCharacterMiscellaneous: CharacterMiscellaneous = {
  changeCharacterMiscellaneous(props: CharacterMiscellaneous): void {
    Object.assign(this, props);
  },
  miscellaneous: 'Test Miscellaneous',
  hitdice: 'Test Hit Dice',
  developmentpoints: 10,
  primaryskills: 'Test Primary Skills',
  attributemodAbbr: 'Test Abbr',
  cost: 100,
  professionAbbr: 'Test Profession Abbr',
  nbranks: 10,
  attributeAbbr: 'Test Attribute Abbr',
  miscellaneousAbbr: 'Test Misc Abbr',
  itemAbbr: 'Test Item Abbr',
  secondaryskills: 'Test Secondary Skills',
  weaponskills: 'Test Weapon Skills',
  ob: 10,
  db: 10,
  resistances: 'Test Resistances',
  notes: 'Test Notes',
};
