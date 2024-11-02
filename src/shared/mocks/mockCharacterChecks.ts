import type { CharacterChecks } from "../../character/domain/character-checks/characterChecks";

export const mockCharacterChecks: CharacterChecks = {
  changeCharacterChecks(props: CharacterChecks): void {
    Object.assign(this, props);
  },
  constitutioncheck: 10,
  agilitycheck: 10,
  selfdisciplinecheck: 10,
  memorycheck: 10,
  reasoningcheck: 10,
  strengthcheck: 10,
  quicknesscheck: 10,
  presencecheck: 10,
  empathycheck: 10,
  intuitioncheck: 10,
  resistancecheck: 10,
  ennemydb: 10,
  result: 'Test Result',
};
