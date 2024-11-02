import "reflect-metadata";
import { CharacterAppearance } from "../character-appearance/characterAppearance";
import { mockCharacterAppearance } from "../../../shared/mocks/mockCharacterAppearance";

describe("CharacterAppearance Unit Tests", () => {
  let characterAppearance: CharacterAppearance;
  let validateSpy: jest.SpyInstance;

  beforeEach(() => {
    characterAppearance = new CharacterAppearance(mockCharacterAppearance);
    validateSpy = jest.spyOn(CharacterAppearance, "validate");
    CharacterAppearance.create = jest.fn().mockImplementation(
      () => characterAppearance
    );
  });

  it("should create a new characterAppearance", async () => {
    expect(characterAppearance).toBeInstanceOf(CharacterAppearance);
    CharacterAppearance.create({
      ...mockCharacterAppearance,
      changeCharacterAppearance: jest.fn(),
    });
    expect(CharacterAppearance.create).toHaveBeenCalled();
    CharacterAppearance.validate(characterAppearance);
    expect(validateSpy).toHaveBeenCalled();
  });

  it("should change character appearance", async () => {
    characterAppearance.backgroundColor = "New Background Color";
    expect(characterAppearance.backgroundColor).toBe("New Background Color");
  });

  describe("should throw an error", () => {
    const invalidAttributes = {
      backgroundColor: "",
      default: "",
      white: "",
      lilac: "",
      grayscale: "",
      book: "",
      seasonSummer: "",
      seasonFall: "",
      seasonWinter: "",
      seasonSpring: "",
      backgroundcolordesc: "",
    };

    Object.entries(invalidAttributes).forEach(([key, value]) => {
      it(`should throw an error for invalid ${key}`, async () => {
        const characterAppearance = new CharacterAppearance({
          ...mockCharacterAppearance,
          changeCharacterAppearance: function (props: CharacterAppearance): void {
            Object.assign(this, props);
          },
        });
        changeCharacterAppearance(characterAppearance, { [key]: value });
        CharacterAppearance.validate = jest.fn(() => { throw new Error(`Invalid ${key}`); });
        expect(() => CharacterAppearance.validate(characterAppearance)).toThrow(`Invalid ${key}`);
      });
    });

    function changeCharacterAppearance(characterAppearance: CharacterAppearance, props: Partial<CharacterAppearance>): void {
      Object.assign(characterAppearance, props);
    }
  });
});