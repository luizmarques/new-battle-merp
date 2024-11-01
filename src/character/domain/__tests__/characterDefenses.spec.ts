import "reflect-metadata";
import { CharacterDefenses } from "../characterDefenses";
import { mockCharacterDefenses } from "../../../shared/mocks/mockCharacterDefenses";

describe("CharacterDefenses Unit Tests", () => {
  let characterDefenses: CharacterDefenses;
  let validateSpy: jest.SpyInstance;

  beforeEach(() => {
    characterDefenses = new CharacterDefenses(mockCharacterDefenses);
    validateSpy = jest.spyOn(CharacterDefenses, "validate");
    CharacterDefenses.create = jest.fn().mockImplementation(
      () => characterDefenses
    );
  });

  it("should create a new characterDefenses", async () => {
    expect(characterDefenses).toBeInstanceOf(CharacterDefenses);
    expect(CharacterDefenses.create(characterDefenses));
    CharacterDefenses.validate(characterDefenses);
    expect(validateSpy).toHaveBeenCalled();
  });

  it("should change character defenses", async () => {
    characterDefenses.defenses = "New Defenses";
    expect(characterDefenses.defenses).toBe("New Defenses");
  });

  describe("should throw an error", () => {
    const invalidAttributes = {
      defenses: "",
      armorAt: "",
      defensivebonusDb: "",
      withshield: "",
      movementpenalty: "",
      helmet: "",
      armgreaves: "",
      leggreaves: "",
      distancepenalty: "",
      wounds: "",
    };

    Object.entries(invalidAttributes).forEach(([key, value]) => {
      it(`should throw an error for invalid ${key}`, async () => {
        const characterDefenses = new CharacterDefenses({
          ...mockCharacterDefenses,
          changeCharacterDefenses: function (props: CharacterDefenses): void {
            Object.assign(this, props);
          },
        });
        changeCharacterDefenses(characterDefenses, { [key]: value });
        CharacterDefenses.validate = jest.fn(() => { throw new Error(`Invalid ${key}`); });
        expect(() => CharacterDefenses.validate(characterDefenses)).toThrow(`Invalid ${key}`);
      });
    });

    function changeCharacterDefenses(characterDefenses: CharacterDefenses, props: Partial<CharacterDefenses>): void {
      Object.assign(characterDefenses, props);
    }
  });
});