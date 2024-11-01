import { Character } from "../../../character/domain/character.entity";
import { CharacterAppearance } from "../../../character/domain/characterAppearance";
import { CharacterAttributes } from "../../../character/domain/characterAttributes";
import { CharacterCalculations } from "../../../character/domain/characterCalculations";
import { CharacterChecks } from "../../../character/domain/characterChecks";
import { CharacterDefenses } from "../../../character/domain/characterDefenses";
import { CharacterInformation } from "../../../character/domain/characterInformation";
import { CharacterLanguages } from "../../../character/domain/characterLanguages";
import { CharacterMiscellaneous } from "../../../character/domain/characterMiscellaneous";
import { CharacterPossessions } from "../../../character/domain/characterPossessions";
import { CharacterSpells } from "../../../character/domain/characterSpells";
import { mockCharacterCreate } from "../mockCharacterCreate";


describe("mockCharacterCreate Unit Tests", () => {
  let character: Character;

  beforeEach(() => {
    character = new Character({
      ...mockCharacterCreate,
      characterInformation: new CharacterInformation(mockCharacterCreate.characterInformation),
      characterAttributes: new CharacterAttributes(mockCharacterCreate.characterAttributes),
      characterDefenses: new CharacterDefenses(mockCharacterCreate.characterDefenses),
      characterLanguages: new CharacterLanguages(mockCharacterCreate.characterLanguages),
      characterMiscellaneous: new CharacterMiscellaneous(mockCharacterCreate.characterMiscellaneous),
      characterPossessions: new CharacterPossessions(mockCharacterCreate.characterPossessions),
      characterSpells: new CharacterSpells(mockCharacterCreate.characterSpells),
      characterChecks: new CharacterChecks(mockCharacterCreate.characterChecks),
      characterCalculations: new CharacterCalculations(mockCharacterCreate.characterCalculations),
      characterAppearance: new CharacterAppearance(mockCharacterCreate.characterAppearance),
    });
  });

  it("should create a new Character", () => {
    expect(character).toBeInstanceOf(Character);
    expect(character.characterInformation).toBeInstanceOf(CharacterInformation);
    expect(character.characterAttributes).toBeInstanceOf(CharacterAttributes);
    expect(character.characterDefenses).toBeInstanceOf(CharacterDefenses);
    expect(character.characterLanguages).toBeInstanceOf(CharacterLanguages);
    expect(character.characterMiscellaneous).toBeInstanceOf(CharacterMiscellaneous);
    expect(character.characterPossessions).toBeInstanceOf(CharacterPossessions);
    expect(character.characterSpells).toBeInstanceOf(CharacterSpells);
    expect(character.characterChecks).toBeInstanceOf(CharacterChecks);
    expect(character.characterCalculations).toBeInstanceOf(CharacterCalculations);
    expect(character.characterAppearance).toBeInstanceOf(CharacterAppearance);
  });

  it("should change character information", () => {
    character.characterInformation.changeCharacterInformation({ 
      characterName: "New Character Name",
      
    });
    expect(character.characterInformation.characterName).toBe("New Character Name");
  });

  it("should change character attributes", () => {
    character.characterAttributes.changeCharacterAttributes({ realmpower: 20 });
    expect(character.characterAttributes.realmpower).toBe(20);
  });

  it("should change character defenses", () => {
    character.characterDefenses.changeCharacterDefenses({ defenses: "New Defenses" });
    expect(character.characterDefenses.defenses).toBe("New Defenses");
  });

  it("should change character languages", () => {
    character.characterLanguages.changeCharacterLanguages({ languages: "New Languages" });
    expect(character.characterLanguages.languages).toBe("New Languages");
  });

  it("should change character miscellaneous", () => {
    character.characterMiscellaneous.changeCharacterMiscellaneous({ miscellaneous: "New Miscellaneous" });
    expect(character.characterMiscellaneous.miscellaneous).toBe("New Miscellaneous");
  });

  it("should change character possessions", () => {
    character.characterPossessions.changeCharacterPossessions({ weight: 20 });
    expect(character.characterPossessions.weight).toBe(20);
  });

  it("should change character spells", () => {
    character.characterSpells.changeCharacterSpells({ spelllists: "New Spell Lists" });
    expect(character.characterSpells.spelllists).toBe("New Spell Lists");
  });

  it("should change character checks", () => {
    character.characterChecks.changeCharacterChecks({ constitutioncheck: 20 });
    expect(character.characterChecks.constitutioncheck).toBe(20);
  });

  it("should change character calculations", () => {
    character.characterCalculations.changeCharacterCalculations({ devAbbr: "New Dev Abbr" });
    expect(character.characterCalculations.devAbbr).toBe("New Dev Abbr");
  });

  it("should change character appearance", () => {
    character.characterAppearance.changeCharacterAppearance({ backgroundColor: "New Background Color" });
    expect(character.characterAppearance.backgroundColor).toBe("New Background Color");
  });
});