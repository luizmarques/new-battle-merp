import { Character } from "../../../character/domain/character-entity/character.entity";
import { CharacterAppearance } from "../../../character/domain/character-appearance/characterAppearance";
import { CharacterAttributes } from "../../../character/domain/character-attributes/characterAttributes";
import { CharacterCalculations } from "../../../character/domain/character-calculations/characterCalculations";
import { CharacterChecks } from "../../../character/domain/character-checks/characterChecks";
import { CharacterDefenses } from "../../../character/domain/character-defenses/characterDefenses";
import { CharacterInformation } from "../../../character/domain/character-information/characterInformation";
import { CharacterLanguages } from "../../../character/domain/character-languages/characterLanguages";
import { CharacterPossessions } from "../../../character/domain/character-possessions/characterPossessions";
import { CharacterSpells } from "../../../character/domain/character-spells/characterSpells";
import { mockCharacterCreate } from "../mockCharacterCreate";
import { CharacterMiscellaneous } from "../../../character/domain/character-miscellaneous/characterMiscellaneous";


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
      race: "",
      profession: "",
      level: 0,
      experience: 0,
      equipment: "",
      magic: "",
      settings: "",
      changeCharacterInformation: function (props: CharacterInformation): void {
        throw new Error("Function not implemented.");
      }
    });
    expect(character.characterInformation.characterName).toBe("New Character Name");
  });

  it("should change character attributes", () => {
    character.characterAttributes.changeCharacterAttributes({
      realmpower: 20,
      powerpoints: 0,
      basehp: 0,
      totalhp: 0,
      actualhp: 0,
      attributes: "",
      temporaryAbbr: "",
      potentialAbbr: "",
      developmentAbbr: "",
      baseAbbr: "",
      raceAbbr: "",
      totalAbbr: "",
      constitution: 0,
      agility: 0,
      selfdiscipline: 0,
      memory: 0,
      reasoning: 0,
      strength: 0,
      quickness: 0,
      presence: 0,
      empathy: 0,
      intuition: 0,
      changeCharacterAttributes: function (props: CharacterAttributes): void {
        throw new Error("Function not implemented.");
      }
    });
    expect(character.characterAttributes.realmpower).toBe(20);
  });

  it("should change character defenses", () => {
    character.characterDefenses.changeCharacterDefenses({
      defenses: "New Defenses",
      changeCharacterDefenses: function (props: CharacterDefenses): void {
        throw new Error("Function not implemented.");
      }
    });
    expect(character.characterDefenses.defenses).toBe("New Defenses");
  });

  it("should change character languages", () => {
    character.characterLanguages.changeCharacterLanguages({
      languages: "New Languages",
      changeCharacterLanguages: function (props: CharacterLanguages): void {
        throw new Error("Function not implemented.");
      }
    });
    expect(character.characterLanguages.languages).toBe("New Languages");
  });

  it("should change character miscellaneous", () => {
    character.characterMiscellaneous.changeCharacterMiscellaneous({
      miscellaneous: "New Miscellaneous",
      changeCharacterMiscellaneous: function (props: CharacterMiscellaneous): void {
        throw new Error("Function not implemented.");
      }
    });
    expect(character.characterMiscellaneous.miscellaneous).toBe("New Miscellaneous");
  });

  it("should change character possessions", () => {
    character.characterPossessions.changeCharacterPossessions({
      weight: 20,
      changeCharacterPossessions: function (props: CharacterPossessions): void {
        throw new Error("Function not implemented.");
      }
    });
    expect(character.characterPossessions.weight).toBe(20);
  });

  it("should change character spells", () => {
    character.characterSpells.changeCharacterSpells({
      spelllists: "New Spell Lists",
      changeCharacterSpells: function (props: CharacterSpells): void {
        throw new Error("Function not implemented.");
      }
    });
    expect(character.characterSpells.spelllists).toBe("New Spell Lists");
  });

  it("should change character checks", () => {
    character.characterChecks.changeCharacterChecks({
      constitutioncheck: 20,
      changeCharacterChecks: function (props: CharacterChecks): void {
        throw new Error("Function not implemented.");
      }
    });
    expect(character.characterChecks.constitutioncheck).toBe(20);
  });

  it("should change character calculations", () => {
    character.characterCalculations.changeCharacterCalculations({
      devAbbr: "New Dev Abbr",
      changeCharacterCalculations: function (props: CharacterCalculations): void {
        throw new Error("Function not implemented.");
      }
    });
    expect(character.characterCalculations.devAbbr).toBe("New Dev Abbr");
  });

  it("should change character appearance", () => {
    character.characterAppearance.changeCharacterAppearance({
      backgroundColor: "New Background Color",
      changeCharacterAppearance: function (props: CharacterAppearance): void {
        throw new Error("Function not implemented.");
      }
    });
    expect(character.characterAppearance.backgroundColor).toBe("New Background Color");
  });
});