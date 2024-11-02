import { CharacterDefenses } from "../../../character/domain/character-defenses/characterDefenses";
import { mockCharacterDefenses } from "../mockCharacterDefenses";

describe("mockCharacterDefenses Unit Tests", () => {
  it("should create a new CharacterDefenses", () => {
    const characterDefenses = new CharacterDefenses(mockCharacterDefenses);
    expect(characterDefenses).toBeInstanceOf(CharacterDefenses);
    expect(characterDefenses.defenses).toBe("Test Defenses");
  });

  it("should change character defenses", () => {
    const characterDefenses = new CharacterDefenses(mockCharacterDefenses);
    characterDefenses.changeCharacterDefenses({
      ...mockCharacterDefenses, defenses: "New Defenses",
      changeCharacterDefenses: function (props: CharacterDefenses): void {
        throw new Error("Function not implemented.");
      }
    });
    expect(characterDefenses.defenses).toBe("New Defenses");
  });
});