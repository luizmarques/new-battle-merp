import "reflect-metadata";
import { CharacterMiscellaneous } from "../characterMiscellaneous";
import { mockCharacterMiscellaneous } from "../../../shared/mocks/mockCharacterMiscellaneous";

describe("CharacterMiscellaneous Unit Tests", () => {
  let characterMiscellaneous: CharacterMiscellaneous;
  let validateSpy: jest.SpyInstance;

  beforeEach(() => {
    characterMiscellaneous = new CharacterMiscellaneous(mockCharacterMiscellaneous);
    validateSpy = jest.spyOn(CharacterMiscellaneous, "validate");
    CharacterMiscellaneous.create = jest.fn().mockImplementation(
      () => characterMiscellaneous
    );
  });

  it("should create a new characterMiscellaneous", async () => {
    expect(characterMiscellaneous).toBeInstanceOf(CharacterMiscellaneous);
    CharacterMiscellaneous.create(characterMiscellaneous);
    expect(CharacterMiscellaneous.create).toHaveBeenCalled();
    CharacterMiscellaneous.validate(characterMiscellaneous);
    expect(validateSpy).toHaveBeenCalled();
  });

  it("should change character miscellaneous", async () => {
    characterMiscellaneous.miscellaneous = "New Miscellaneous";
    expect(characterMiscellaneous.miscellaneous).toBe("New Miscellaneous");
  });

  describe("should throw an error", () => {
    const invalidAttributes = {
      miscellaneous: "",
      hitdice: "",
      developmentpoints: -1,
      primaryskills: "",
      attributemodAbbr: "",
      cost: -1,
      professionAbbr: "",
      nbranks: -1,
      attributeAbbr: "",
      miscellaneousAbbr: "",
      itemAbbr: "",
      secondaryskills: "",
      weaponskills: "",
      ob: -1,
      db: -1,
      resistances: "",
      notes: "",
    };

    Object.entries(invalidAttributes).forEach(([key, value]) => {
      it(`should throw an error for invalid ${key}`, async () => {
        const characterMiscellaneous = new CharacterMiscellaneous({
          ...mockCharacterMiscellaneous,
          changeCharacterMiscellaneous: function (props: CharacterMiscellaneous): void {
            Object.assign(this, props);
          },
        });
        changeCharacterMiscellaneous(characterMiscellaneous, { [key]: value });
        CharacterMiscellaneous.validate = jest.fn(() => { throw new Error(`Invalid ${key}`); });
        expect(() => CharacterMiscellaneous.validate(characterMiscellaneous)).toThrow(`Invalid ${key}`);
      });
    });

    function changeCharacterMiscellaneous(characterMiscellaneous: CharacterMiscellaneous, props: Partial<CharacterMiscellaneous>): void {
      Object.assign(characterMiscellaneous, props);
    }
  });
});