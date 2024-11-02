import "reflect-metadata";
import { CharacterCalculations } from "../character-calculations/characterCalculations";
import { mockCharacterCalculations } from "../../../shared/mocks/mockCharacterCalculations";

describe("CharacterCalculations Unit Tests", () => {
  let characterCalculations: CharacterCalculations;
  let validateSpy: jest.SpyInstance;

  beforeEach(() => {
    characterCalculations = new CharacterCalculations(mockCharacterCalculations);
    validateSpy = jest.spyOn(CharacterCalculations, "validate");
    CharacterCalculations.create = jest.fn().mockImplementation(
      () => characterCalculations
    );
  });

  it("should create a new characterCalculations", async () => {
    expect(characterCalculations).toBeInstanceOf(CharacterCalculations);
    expect(CharacterCalculations.create(characterCalculations));
    CharacterCalculations.validate(characterCalculations);
    expect(validateSpy).toHaveBeenCalled();
  });

  it("should change character calculations", async () => {
    characterCalculations.devAbbr = "New Dev Abbr";
    expect(characterCalculations.devAbbr).toBe("New Dev Abbr");
  });

  describe("should throw an error", () => {
    const invalidAttributes = {
      devAbbr: "",
      loadcapacity: -1,
      weighttotal: -1,
      sheetColors: "",
      totalhpcalcmode: "",
      legacycalc: "",
      nocalc: "",
      hpcalcdescription: "",
      professionbonusmode: "",
      legacyprofbonus: "",
      flatprofbonus: "",
      profbonusmodedescription: "",
      bmr: -1,
      walk: -1,
      fastwalk: -1,
      run: -1,
      sprint: -1,
      accsprint: -1,
      dash: -1,
      skilldevmode: "",
      legacyskilldev: "",
      flatskilldev: "",
      skilldevmodedescription: "",
      secundarydevelopmentpoints: -1,
      secondaryskilldevmode: "",
      bonus10: -1,
      bonus20: -1,
      bonus25: -1,
      bonus30: -1,
      bonus40: -1,
      bonus50: -1,
      secondaryskilldevmodedescription: "",
    };

    Object.entries(invalidAttributes).forEach(([key, value]) => {
      it(`should throw an error for invalid ${key}`, async () => {
        const characterCalculations = new CharacterCalculations({
          ...mockCharacterCalculations,
          changeCharacterCalculations: function (props: CharacterCalculations): void {
            Object.assign(this, props);
          },
        });
        changeCharacterCalculations(characterCalculations, { [key]: value });
        CharacterCalculations.validate = jest.fn(() => { throw new Error(`Invalid ${key}`); });
        expect(() => CharacterCalculations.validate(characterCalculations)).toThrow(`Invalid ${key}`);
      });
    });

    function changeCharacterCalculations(characterCalculations: CharacterCalculations, props: Partial<CharacterCalculations>): void {
      Object.assign(characterCalculations, props);
    }
  });
});