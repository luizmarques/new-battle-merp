import type { CharacterCalculations } from "../../character/domain/character-calculations/characterCalculations";

export const mockCharacterCalculations: CharacterCalculations = {
  changeCharacterCalculations(props: CharacterCalculations): void {
    Object.assign(this, props);
  },
  devAbbr: 'Test Dev Abbr',
  loadcapacity: 10,
  weighttotal: 10,
  sheetColors: 'Test Colors',
  totalhpcalcmode: 'Test Mode',
  legacycalc: 'Test Legacy Calc',
  nocalc: 'Test No Calc',
  hpcalcdescription: 'Test HP Calc Desc',
  professionbonusmode: 'Test Prof Bonus Mode',
  legacyprofbonus: 'Test Legacy Prof Bonus',
  flatprofbonus: 'Test Flat Prof Bonus',
  profbonusmodedescription: 'Test Prof Bonus Mode Desc',
  bmr: 10,
  walk: 10,
  fastwalk: 10,
  run: 10,
  sprint: 10,
  accsprint: 10,
  dash: 10,
  skilldevmode: 'Test Skill Dev Mode',
  legacyskilldev: 'Test Legacy Skill Dev',
  flatskilldev: 'Test Flat Skill Dev',
  skilldevmodedescription: 'Test Skill Dev Mode Desc',
  secundarydevelopmentpoints: 10,
  secondaryskilldevmode: 'Test Secondary Skill Dev Mode',
  bonus10: 10,
  bonus20: 10,
  bonus25: 10,
  bonus30: 10,
  bonus40: 10,
  bonus50: 10,
  secondaryskilldevmodedescription: 'Test Secondary Skill Dev Mode Desc',
};
