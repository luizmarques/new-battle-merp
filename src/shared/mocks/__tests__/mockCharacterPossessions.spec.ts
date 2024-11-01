import { CharacterPossessions } from "../../../character/domain/characterPossessions";
import { mockCharacterPossessions } from "../mockCharacterPossessions";

describe("mockCharacterPossessions Unit Tests", () => {
  it("should create a new CharacterPossessions", () => {
    const characterPossessions = new CharacterPossessions(mockCharacterPossessions);
    expect(characterPossessions).toBeInstanceOf(CharacterPossessions);
    expect(characterPossessions.weight).toBe(10);
  });

  it("should change character possessions", () => {
    const characterPossessions = new CharacterPossessions(mockCharacterPossessions);
    characterPossessions.changeCharacterPossessions({ weight: 20});
    expect(characterPossessions.weight).toBe(20);
  });
});