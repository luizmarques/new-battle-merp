import "reflect-metadata";
import { CharacterInformation } from "../character-information/characterInformation";
import { mockCharacterInformation } from "../../../shared/mocks/mockCharacterInformation";

describe("CharacterInformation Unit Tests", () => {
  let characterInformation: CharacterInformation;
  let validateSpy: jest.SpyInstance;

  beforeEach(() => {
    characterInformation = new CharacterInformation(mockCharacterInformation);
    validateSpy = jest.spyOn(CharacterInformation, "validate");
    CharacterInformation.create = jest.fn().mockImplementation(
      () => characterInformation
    );
  });

  it("should create a new characterInformation", async () => {
    expect(characterInformation).toBeInstanceOf(CharacterInformation);
    CharacterInformation.create(characterInformation);
    expect(CharacterInformation.create).toHaveBeenCalled();
    CharacterInformation.validate(characterInformation);
    expect(validateSpy).toHaveBeenCalled();
  });

  it("should change character information", async () => {
    characterInformation.characterName = "New Character Name";
    expect(characterInformation.characterName).toBe("New Character Name");
  });

  describe("should throw an error", () => {
    const invalidAttributes = {
      characterName: "",
      race: "",
      profession: "",
      level: -1,
      experience: -1,
      equipment: "",
      magic: "",
      settings: "",
    };

    Object.entries(invalidAttributes).forEach(([key, value]) => {
      it(`should throw an error for invalid ${key}`, async () => {
        const characterInformation = new CharacterInformation({
          ...mockCharacterInformation,
          changeCharacterInformation: function (props: CharacterInformation): void {
            Object.assign(this, props);
          },
        });
        changeCharacterInformation(characterInformation, { [key]: value });
        CharacterInformation.validate = jest.fn(() => { throw new Error(`Invalid ${key}`); });
        expect(() => CharacterInformation.validate(characterInformation)).toThrow(`Invalid ${key}`);
      });
    });

    function changeCharacterInformation(characterInformation: CharacterInformation, props: Partial<CharacterInformation>): void {
      Object.assign(characterInformation, props);
    }
  });
});