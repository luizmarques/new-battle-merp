import { Uuid } from "../../../shared/domain/value-objects/uuid.vo";
import "reflect-metadata";
import { Character } from "../character.entity";
import { CharacterInformation } from "../characterInformation";
import { mockCharacterInformation } from "../../../shared/mocks/mockCharacterInformation";
import { mockCharacterAttributes } from "../../../shared/mocks/mockCharacterAttributes";
import { mockCharacterDefenses } from "../../../shared/mocks/mockCharacterDefenses";
import { mockCharacterLanguages } from "../../../shared/mocks/mockCharacterLanguages";
import { mockCharacterMiscellaneous } from "../../../shared/mocks/mockCharacterMiscellaneous";
import { mockCharacterPossessions } from "../../../shared/mocks/mockCharacterPossessions";
import { mockCharacterSpells } from "../../../shared/mocks/mockCharacterSpells";
import { mockCharacterChecks } from "../../../shared/mocks/mockCharacterChecks";
import { mockCharacterCalculations } from "../../../shared/mocks/mockCharacterCalculations";
import { mockCharacterAppearance } from "../../../shared/mocks/mockCharacterAppearance";
import { CharacterAttributes } from "../characterAttributes";

const date = new Date();

describe("Character Entity", () => {
  let character: Character;
  let validateSpy: any;

  beforeEach(() => {
    character = new Character({
      characterInformation: mockCharacterInformation,
      characterAttributes: mockCharacterAttributes,
      characterDefenses: mockCharacterDefenses,
      characterLanguages: mockCharacterLanguages,
      characterMiscellaneous: mockCharacterMiscellaneous,
      characterPossessions: mockCharacterPossessions,
      characterSpells: mockCharacterSpells,
      characterChecks: mockCharacterChecks,
      characterCalculations: mockCharacterCalculations,
      characterAppearance: mockCharacterAppearance,
      is_active: true,
      created_at: date,
      created_by: "Test Creator",
    });
    Character.create = jest.fn().mockImplementation(Character.create);
    validateSpy = jest.spyOn(Character, "validate");
  });

  describe("Character Unit Tests", () => {
    it("constructor", () => {
      const uuid = character.characterInformation.character_id;
      expect(character).toBeInstanceOf(Character);
      expect(character.characterInformation).toEqual(mockCharacterInformation);
      expect(uuid).toBeInstanceOf(Uuid);
      expect(character.characterAttributes).toEqual(mockCharacterAttributes);
      expect(character.characterDefenses).toEqual(mockCharacterDefenses);
      expect(character.characterLanguages).toEqual(mockCharacterLanguages);
      expect(character.characterMiscellaneous).toEqual(
        mockCharacterMiscellaneous
      );
      expect(character.characterPossessions).toEqual(mockCharacterPossessions);
      expect(character.characterSpells).toEqual(mockCharacterSpells);
      expect(character.characterChecks).toEqual(mockCharacterChecks);
      expect(character.characterCalculations).toEqual(
        mockCharacterCalculations
      );
      expect(character.characterAppearance).toEqual(mockCharacterAppearance);
      expect(character.is_active).toBe(true);
      expect(character.created_at).toEqual(date);
      expect(character.created_by).toBe("Test Creator");
    });
  });

  describe("CharacterCreateCommand", () => {
    it("should create a new character", async () => {
      const character = Character.create({
        characterInformation: mockCharacterInformation,
        characterAttributes: mockCharacterAttributes,
        characterDefenses: mockCharacterDefenses,
        characterLanguages: mockCharacterLanguages,
        characterMiscellaneous: mockCharacterMiscellaneous,
        characterPossessions: mockCharacterPossessions,
        characterSpells: mockCharacterSpells,
        characterChecks: mockCharacterChecks,
        characterCalculations: mockCharacterCalculations,
        characterAppearance: mockCharacterAppearance,
        is_active: true,
        created_at: date,
        created_by: "Test Creator",
      });

      expect(character).toBeInstanceOf(Character);
      expect(Character.create).toHaveBeenCalledTimes(1);
      expect(validateSpy).toHaveBeenCalledTimes(1);
    });
    
    it("should create a new characterInformation", async () => {
      const characterInformation = CharacterInformation.create(
        mockCharacterInformation);
      expect(characterInformation).toBeInstanceOf(CharacterInformation);
      expect(characterInformation.character_id).toBeInstanceOf(Uuid);
    })

    it("should create a new characterAttributes", async () => {
      const characterAttributes = CharacterAttributes.create(mockCharacterAttributes);
      expect(characterAttributes.strength).toBe(10);
    })

    it("should change character information", () => {
      const updatedCharacterInformation = {
        ...mockCharacterInformation,
        characterName: "New Character Name",
      };
      character.characterInformation.changeCharacterInformation(
        updatedCharacterInformation as CharacterInformation & { 
          characterName: string;
          character_id?: Uuid;
          race: string;
          profession: string;
          level: number;
          experience: number;
          equipment: string;
          magic: string;
          settings: string;
        }
      );
      expect(character.characterInformation.characterName).toBe(
        "New Character Name"
      );
    });
  });

  describe("changeCharacterInformation", () => {
    it("should change character information", async () => {
      character.characterInformation.characterName = "New Character Name";
      expect(character.characterInformation.characterName).toBe(
        "New Character Name"
      );
    });
  });

  describe("changeCharacterAttributes", () => {
    it("should change character attributes", async () => {
      character.characterAttributes.realmpower = 20;
      expect(character.characterAttributes.realmpower).toBe(20);
    });
  });
  describe("changeCharacterDefenses", () => {
    it("should change character defenses", async () => {
      character.characterDefenses.defenses = "New Defenses";
      expect(character.characterDefenses.defenses).toBe("New Defenses");
    });

    describe("changeCharacterLanguages", () => {
      it("should change character languages", async () => {
        character.characterLanguages.languages = "New Languages";
        expect(character.characterLanguages.languages).toBe("New Languages");
      });
    });

    describe("changeCharacterMiscellaneous", () => {
      it("should change character miscellaneous", async () => {
        character.characterMiscellaneous.miscellaneous = "New Miscellaneous";
        expect(character.characterMiscellaneous.miscellaneous).toBe(
          "New Miscellaneous"
        );
      });
    });

    describe("changeCharacterPossessions", () => {
      it("should change character possessions", async () => {
        character.characterPossessions.weight = 20;
        expect(character.characterPossessions.weight).toBe(20);
      });
    });

    describe("changeCharacterSpells", () => {
      it("should change character spells", async () => {
        character.characterSpells.spelllists = "New Spell Lists";
        expect(character.characterSpells.spelllists).toBe("New Spell Lists");
      });
    });

    describe("changeCharacterChecks", () => {
      it("should change character checks", async () => {
        character.characterChecks.constitutioncheck = 20;
        expect(character.characterChecks.constitutioncheck).toBe(20);
      });
    });

    describe("changeCharacterCalculations", () => {
      it("should change character calculations", async () => {
        character.characterCalculations.devAbbr = "New Dev Abbr";
        expect(character.characterCalculations.devAbbr).toBe("New Dev Abbr");
      });
    });

    describe("changeCharacterAppearance", () => {
      it("should change character appearance", async () => {
        character.characterAppearance.backgroundColor = "New Background Color";
        expect(character.characterAppearance.backgroundColor).toBe(
          "New Background Color"
        );
      });
    });

    describe("activateCharacter", () => {
      it("should activate character", async () => {
        character.is_active = false;
        expect(character.is_active).toBe(false);
        const activateCharacterSpy = jest.spyOn(
          Character.prototype,
          "activateCharacter"
        );
        character.activateCharacter();
        expect(activateCharacterSpy).toHaveBeenCalledTimes(1);
        activateCharacterSpy.mockRestore();
      });
    });

    describe("deactivateCharacter", () => {
      it("should deactivate character", async () => {
        character.is_active = true;
        expect(character.is_active).toBe(true);
        const deactivateCharacterSpy = jest.spyOn(
          Character.prototype,
          "deactivateCharacter"
        );
        character.deactivateCharacter();
        expect(deactivateCharacterSpy).toHaveBeenCalledTimes(1);
        deactivateCharacterSpy.mockRestore();
      });
    });

    describe("toJSON", () => {
      it("should return a JSON object", async () => {
        const characterJSON = character.toJSON();
        expect(characterJSON.characterAttributes).toEqual(
          mockCharacterAttributes
        );
        expect(characterJSON.characterDefenses).toEqual(mockCharacterDefenses);
        expect(characterJSON.characterLanguages).toEqual(
          mockCharacterLanguages
        );
        expect(characterJSON.characterMiscellaneous).toEqual(
          mockCharacterMiscellaneous
        );
        expect(characterJSON.characterPossessions).toEqual(
          mockCharacterPossessions
        );
        expect(characterJSON.characterSpells).toEqual(mockCharacterSpells);
        expect(characterJSON.characterChecks).toEqual(mockCharacterChecks);
        expect(characterJSON.characterCalculations).toEqual(
          mockCharacterCalculations
        );
        expect(characterJSON.characterAppearance).toEqual(
          mockCharacterAppearance
        );
        expect(characterJSON.is_active).toBe(true);
        expect(characterJSON.created_at).toEqual(date);
        expect(characterJSON.created_by).toBe("Test Creator");
      });
    });

    describe("CharacterCreateCommand", () => {
      it("should create a new character", async () => {
        const character = Character.create({
          characterInformation: mockCharacterInformation,
          characterAttributes: mockCharacterAttributes,
          characterDefenses: mockCharacterDefenses,
          characterLanguages: mockCharacterLanguages,
          characterMiscellaneous: mockCharacterMiscellaneous,
          characterPossessions: mockCharacterPossessions,
          characterSpells: mockCharacterSpells,
          characterChecks: mockCharacterChecks,
          characterCalculations: mockCharacterCalculations,
          characterAppearance: mockCharacterAppearance,
          is_active: true,
          created_at: date,
          created_by: "Test Creator",
        });

        expect(character).toBeInstanceOf(Character);
        expect(Character.create).toHaveBeenCalledTimes(1);
      });
    });

    describe("characterInformation.character_id field", () => {
      const arrange = [
        { character_id: null },
        { character_id: null },
        { character_id: new Uuid() },
      ];

      it.each(arrange)("id = %j", ({ character_id }) => {
        const character = new Character({
          characterInformation: {
            character_id: character_id || new Uuid(),
            characterName: "Test Character",
            race: "Test Race",
            profession: "Test Profession",
            level: 10,
            experience: 1000,
            equipment: "Test Equipment",
            magic: "Test Magic",
            settings: "Test Settings",
            changeCharacterInformation: mockCharacterInformation.changeCharacterInformation,
          },
          characterAttributes: mockCharacterAttributes,
          characterDefenses: mockCharacterDefenses,
          characterLanguages: mockCharacterLanguages,
          characterMiscellaneous: mockCharacterMiscellaneous,
          characterPossessions: mockCharacterPossessions,
          characterSpells: mockCharacterSpells,
          characterChecks: mockCharacterChecks,
          characterCalculations: mockCharacterCalculations,
          characterAppearance: mockCharacterAppearance,
          is_active: true,
          created_at: date,
          created_by: "Test Creator",
        });
        expect(character.characterInformation.character_id).toBeInstanceOf(
          Uuid
        );
        if (character_id instanceof Uuid) {
          expect(character.characterInformation.character_id).toEqual(
            character_id
          );
        }
      });
    });

    it("should change character information", () => {
      const newCharacterInformation: CharacterInformation = {
        character_id: new Uuid(),
        characterName: "New Character Name",
        race: "New Race",
        profession: "New Profession",
        level: 20,
        experience: 2000,
        equipment: "New Equipment",
        magic: "New Magic",
        settings: "New Settings",
        changeCharacterInformation: function (
          props: CharacterInformation
        ): void {
          Object.assign(this, props);
        },
      };
      character.characterInformation.changeCharacterInformation(
        newCharacterInformation
      );
      expect(character.characterInformation.characterName).toBe(
        "New Character Name"
      );
    });

    it("should change character attributes", () => {
      character.characterAttributes.realmpower = 20;
      expect(character.characterAttributes.realmpower).toBe(20);
    });

    it("should change character defenses", () => {
      character.characterDefenses.defenses = "New Defenses";
      expect(character.characterDefenses.defenses).toBe("New Defenses");
    });

    it("should change character languages", () => {
      character.characterLanguages.languages = "New Languages";
      expect(character.characterLanguages.languages).toBe("New Languages");
    });

    it("should change character miscellaneous", () => {
      character.characterMiscellaneous.miscellaneous = "New Miscellaneous";
      expect(character.characterMiscellaneous.miscellaneous).toBe(
        "New Miscellaneous"
      );
    });

    it("should change character possessions", () => {
      character.characterPossessions.weight = 20;
      expect(character.characterPossessions.weight).toBe(20);
    });

    it("should change character spells", () => {
      character.characterSpells.spelllists = "New Spell Lists";
      expect(character.characterSpells.spelllists).toBe("New Spell Lists");
    });

    it("should change character checks", () => {
      character.characterChecks.constitutioncheck = 20;
      expect(character.characterChecks.constitutioncheck).toBe(20);
    });

    it("should change character calculations", () => {
      character.characterCalculations.devAbbr = "New Dev Abbr";
      expect(character.characterCalculations.devAbbr).toBe("New Dev Abbr");
    });

    it("should change character appearance", () => {
      character.characterAppearance.backgroundColor = "New Background Color";
      expect(character.characterAppearance.backgroundColor).toBe(
        "New Background Color"
      );
    });
  });
});
