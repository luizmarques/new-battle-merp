import { CharacterPossessions } from "../../../character/domain/character-possessions/characterPossessions";
import { mockCharacterPossessions } from "../mockCharacterPossessions";

describe("mockCharacterPossessions Unit Tests", () => {
  it("should create a new CharacterPossessions", () => {
    const characterPossessions = new CharacterPossessions(mockCharacterPossessions);
    expect(characterPossessions).toBeInstanceOf(CharacterPossessions);
    expect(characterPossessions.weight).toBe(10);
  });

  it("should change character possessions", () => {
    const characterPossessions = new CharacterPossessions(mockCharacterPossessions);
    characterPossessions.changeCharacterPossessions({
      weight: 20,
      changeCharacterPossessions: function (props: CharacterPossessions): void {
        throw new Error("Function not implemented.");
      }
    });
    expect(characterPossessions.weight).toBe(20);
  });
});