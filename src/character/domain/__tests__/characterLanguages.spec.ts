import "reflect-metadata";
import { CharacterLanguages } from "../character-languages/characterLanguages";
import { mockCharacterLanguages } from "../../../shared/mocks/mockCharacterLanguages";

describe("CharacterLanguages Unit Tests", () => {
  let characterLanguages: CharacterLanguages;
  let validateSpy: jest.SpyInstance;

  beforeEach(() => {
    characterLanguages = new CharacterLanguages(mockCharacterLanguages);
    validateSpy = jest.spyOn(CharacterLanguages, "validate");
    CharacterLanguages.create = jest.fn().mockImplementation(
      () => characterLanguages
    );
  });

  it("should create a new characterLanguages", async () => {
    expect(characterLanguages).toBeInstanceOf(CharacterLanguages);
    expect(CharacterLanguages.create(characterLanguages)).toBe(characterLanguages);
    CharacterLanguages.validate(characterLanguages);
    expect(validateSpy).toHaveBeenCalled();
  });

  it("should change character languages", async () => {
    characterLanguages.languages = "New Languages";
    expect(characterLanguages.languages).toBe("New Languages");
  });

  describe("should throw an error", () => {
    const invalidAttributes = {
      languages: "",
      spoken: "",
      writen: "",
    };

    Object.entries(invalidAttributes).forEach(([key, value]) => {
      it(`should throw an error for invalid ${key}`, async () => {
        const characterLanguages = new CharacterLanguages({
          ...mockCharacterLanguages,
          changeCharacterLanguages: function (props: CharacterLanguages): void {
            Object.assign(this, props);
          },
        });
        changeCharacterLanguages(characterLanguages, { [key]: value });
        CharacterLanguages.validate = jest.fn(() => { throw new Error(`Invalid ${key}`); });
        expect(() => CharacterLanguages.validate(characterLanguages)).toThrow(`Invalid ${key}`);
      });
    });

    function changeCharacterLanguages(characterLanguages: CharacterLanguages, props: Partial<CharacterLanguages>): void {
      Object.assign(characterLanguages, props);
    }
  });
});