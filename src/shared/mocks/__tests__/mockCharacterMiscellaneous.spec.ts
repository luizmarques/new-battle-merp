import { CharacterMiscellaneous } from "../../../character/domain/character-miscellaneous/characterMiscellaneous";
import { mockCharacterMiscellaneous } from "../mockCharacterMiscellaneous";

describe("mockCharacterMiscellaneous Unit Tests", () => {
  it("should create a new CharacterMiscellaneous", () => {
    const characterMiscellaneous = new CharacterMiscellaneous(mockCharacterMiscellaneous);
    expect(characterMiscellaneous).toBeInstanceOf(CharacterMiscellaneous);
    expect(characterMiscellaneous.miscellaneous).toBe("Test Miscellaneous");
  });

  it("should change character miscellaneous", () => {
    const characterMiscellaneous = new CharacterMiscellaneous(mockCharacterMiscellaneous);
    characterMiscellaneous.changeCharacterMiscellaneous({
      miscellaneous: "New Miscellaneous",
      changeCharacterMiscellaneous: function (props: CharacterMiscellaneous): void {
        throw new Error("Function not implemented.");
      }
    });
    expect(characterMiscellaneous.miscellaneous).toBe("New Miscellaneous");
  });
});