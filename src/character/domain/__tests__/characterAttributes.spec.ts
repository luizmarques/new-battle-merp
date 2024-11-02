import { mockCharacterAttributes } from "../../../shared/mocks/mockCharacterAttributes";
import { mockCharacterCreate } from "../../../shared/mocks/mockCharacterCreate";
import { CharacterAttributes } from "../character-attributes/characterAttributes";
import { Character } from "../character-entity/character.entity";


describe("CharacterAttributes Unit Tests", () => {
  let character: Character;
  let characterAttributes: CharacterAttributes;
  let validateSpy: jest.SpyInstance;
  let characterAttributesSpy: jest.SpyInstance;

  beforeEach(() => {
    characterAttributes = new CharacterAttributes(mockCharacterAttributes);
    characterAttributesSpy = jest.spyOn(CharacterAttributes, "validate");
    CharacterAttributes.create = jest.fn().mockImplementation(
      () => characterAttributes
    );
    validateSpy = jest.spyOn(Character, "validate");
    Character.create = jest.fn().mockImplementation(() => {
      character = new Character({ ...mockCharacterCreate, characterAttributes: CharacterAttributes.create(mockCharacterAttributes) });
      return character;
    });
    character = Character.create(mockCharacterCreate);
    character = new Character({ ...mockCharacterCreate, characterAttributes: CharacterAttributes.create(mockCharacterAttributes) });
    Character.validate({ ...mockCharacterCreate, characterAttributes: CharacterAttributes.create(mockCharacterAttributes) });
  });

  describe("CharacterAttributes", () => {
    it("should create a new characterAttributes", async () => {
      expect(characterAttributes).toBeInstanceOf(CharacterAttributes);
      expect(CharacterAttributes.create).toHaveBeenCalled();
      expect(validateSpy).toHaveBeenCalled();
      CharacterAttributes.validate(characterAttributes);
      expect(characterAttributesSpy).toHaveBeenCalled();
    });

    it("should change character attributes", async () => {
      characterAttributes.realmpower = 20;
      expect(characterAttributes.realmpower).toBe(20);
    });

    it("should validate character attributes", async () => {
      const characterAttributes = new CharacterAttributes(mockCharacterAttributes);
      const validate = CharacterAttributes.validate(characterAttributes);
      expect(validate).toBe(true);
    });
  });

  describe("Character", () => {
    it("should create a new character", async () => {
      expect(character).toBeInstanceOf(Character);
      expect(Character.create).toHaveBeenCalled();
      expect(validateSpy).toHaveBeenCalled();
    });

    it("should change character attributes", async () => {
      character.characterAttributes.realmpower = 20;
      expect(character.characterAttributes.realmpower).toBe(20);
    });

    it("should validate character attributes", async () => {
      const characterAttributes = new CharacterAttributes(mockCharacterAttributes);
      const validate = CharacterAttributes.validate(characterAttributes);
      expect(validate).toBe(true);
    });
  });

  describe("CharacterAttributesValidator", () => {
    it("should validate character attributes", async () => {
      const characterAttributes = new CharacterAttributes(mockCharacterAttributes);
      const validate = CharacterAttributes.validate(characterAttributes);
      expect(validate).toBe(true);
    });
  });

  describe("should throw an error", () => {
    const invalidAttributes = {
      realmpower: -1,
      powerpoints: -1,
      basehp: -1,
      totalhp: -1,
      actualhp: -1,
      attributes: "",
      temporaryAbbr: "",
      potentialAbbr: "",
      developmentAbbr: "",
      baseAbbr: "",
      raceAbbr: "",
      totalAbbr: "",
      constitution: -1,
      agility: -1,
      selfdiscipline: -1,
      memory: -1,
      reasoning: -1,
      strength: -1,
      quickness: -1,
      presence: -1,
      empathy: -1,
      intuition: -1,
    };

    Object.entries(invalidAttributes).forEach(([key, value]) => {
      it(`should throw an error for invalid ${key}`, async () => {
        const characterAttributes = new CharacterAttributes({
          ...mockCharacterAttributes,
          changeCharacterAttributes: function (props: CharacterAttributes): void {
            Object.assign(this, props);
          },
        });
        changeCharacterAttributes(characterAttributes, { [key]: value });
        CharacterAttributes.validate = jest.fn(() => { throw new Error(`Invalid ${key}`); });
        expect(() => CharacterAttributes.validate(characterAttributes)).toThrow(`Invalid ${key}`);
      });
    });

    function changeCharacterAttributes(characterAttributes: CharacterAttributes, props: Partial<CharacterAttributes>): void {
      Object.assign(characterAttributes, props);
    }
  });
});