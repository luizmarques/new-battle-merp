import { CharacterMiscellaneous } from "../../../character/domain/characterMiscellaneous";
import { mockCharacterMiscellaneous } from "../mockCharacterMiscellaneous";

describe("mockCharacterMiscellaneous Unit Tests", () => {
  it("should create a new CharacterMiscellaneous", () => {
    const characterMiscellaneous = new CharacterMiscellaneous(mockCharacterMiscellaneous);
    expect(characterMiscellaneous).toBeInstanceOf(CharacterMiscellaneous);
    expect(characterMiscellaneous.miscellaneous).toBe("Test Miscellaneous");
  });

  it("should change character miscellaneous", () => {
    const characterMiscellaneous = new CharacterMiscellaneous(mockCharacterMiscellaneous);
    characterMiscellaneous.changeCharacterMiscellaneous({ miscellaneous: "New Miscellaneous",  });
    expect(characterMiscellaneous.miscellaneous).toBe("New Miscellaneous");
  });
});