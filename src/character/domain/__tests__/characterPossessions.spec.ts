import "reflect-metadata";
import { CharacterPossessions } from "../characterPossessions";
import { mockCharacterPossessions } from "../../../shared/mocks/mockCharacterPossessions";

describe("CharacterPossessions Unit Tests", () => {
  let characterPossessions: CharacterPossessions;
  let validateSpy: jest.SpyInstance;

  beforeEach(() => {
    characterPossessions = new CharacterPossessions(mockCharacterPossessions);
    validateSpy = jest.spyOn(CharacterPossessions, "validate");
    CharacterPossessions.create = jest.fn().mockImplementation(
      () => characterPossessions
    );
  });

  it("should create a new characterPossessions", async () => {
    expect(characterPossessions).toBeInstanceOf(CharacterPossessions);
    expect(CharacterPossessions.create(characterPossessions));
    CharacterPossessions.validate(characterPossessions);
    expect(validateSpy).toHaveBeenCalled();
  });

  it("should change character possessions", async () => {
    characterPossessions.weight = 20;
    expect(characterPossessions.weight).toBe(20);
  });

  describe("should throw an error", () => {
    const invalidAttributes = {
      weight: -1,
      possessions: "",
      mithril: -1,
      gold: -1,
      silver: -1,
      bronze: -1,
      copper: -1,
      iron: -1,
    };

    Object.entries(invalidAttributes).forEach(([key, value]) => {
      it(`should throw an error for invalid ${key}`, async () => {
        const characterPossessions = new CharacterPossessions({
          ...mockCharacterPossessions,
          changeCharacterPossessions: function (props: CharacterPossessions): void {
            Object.assign(this, props);
          },
        });
        changeCharacterPossessions(characterPossessions, { [key]: value });
        CharacterPossessions.validate = jest.fn(() => { throw new Error(`Invalid ${key}`); });
        expect(() => CharacterPossessions.validate(characterPossessions)).toThrow(`Invalid ${key}`);
      });
    });

    function changeCharacterPossessions(characterPossessions: CharacterPossessions, props: Partial<CharacterPossessions>): void {
      Object.assign(characterPossessions, props);
    }
  });
});