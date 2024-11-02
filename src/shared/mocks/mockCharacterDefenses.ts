import type { CharacterDefenses } from "../../character/domain/character-defenses/characterDefenses";

export const mockCharacterDefenses: CharacterDefenses = {
  changeCharacterDefenses: (props: CharacterDefenses) => {},
  defenses: 'Test Defenses',
  armorAt: 'Test Armor',
  defensivebonusDb: 'Test DB',
  withshield: 'Test Shield',
  movementpenalty: 'Test Penalty',
  helmet: 'Test Helmet',
  armgreaves: 'Test Arm Greaves',
  leggreaves: 'Test Leg Greaves',
  distancepenalty: 'Test Distance Penalty',
  wounds: 'Test Wounds',
};
