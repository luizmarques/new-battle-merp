import type { CharacterPossessions } from "../../character/domain/character-possessions/characterPossessions";

export const mockCharacterPossessions: CharacterPossessions = {
  weight: 10,
  possessions: 'Test Possessions',
  mithril: 10,
  gold: 10,
  silver: 10,
  bronze: 10,
  copper: 10,
  iron: 10,
  changeCharacterPossessions(props: CharacterPossessions): void {
    Object.assign(this, props);
  }
};
