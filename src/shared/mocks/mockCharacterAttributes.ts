import type { CharacterAttributes } from "../../character/domain/character-attributes/characterAttributes";

export const mockCharacterAttributes: CharacterAttributes = {
  changeCharacterAttributes(props: CharacterAttributes): void {
    Object.assign(this, props);
  },
  realmpower: 10,
  powerpoints: 10,
  basehp: 10,
  totalhp: 10,
  actualhp: 10,
  attributes: 'Test Attributes',
  temporaryAbbr: 'TA',
  potentialAbbr: 'PA',
  developmentAbbr: 'DA',
  baseAbbr: 'BA',
  raceAbbr: 'RA',
  totalAbbr: 'TA',
  constitution: 10,
  agility: 10,
  selfdiscipline: 10,
  memory: 10,
  reasoning: 10,
  strength: 10,
  quickness: 10,
  presence: 10,
  empathy: 10,
  intuition: 10,
};
