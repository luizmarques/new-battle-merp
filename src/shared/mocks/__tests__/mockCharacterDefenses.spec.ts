import { CharacterDefenses } from "../../../character/domain/characterDefenses";
import { mockCharacterDefenses } from "../mockCharacterDefenses";

describe("mockCharacterDefenses Unit Tests", () => {
  it("should create a new CharacterDefenses", () => {
    const characterDefenses = new CharacterDefenses(mockCharacterDefenses);
    expect(characterDefenses).toBeInstanceOf(CharacterDefenses);
    expect(characterDefenses.defenses).toBe("Test Defenses");
  });

  it("should change character defenses", () => {
    const characterDefenses = new CharacterDefenses(mockCharacterDefenses);
    characterDefenses.changeCharacterDefenses({ ...mockCharacterDefenses, defenses: "New Defenses" });
    expect(characterDefenses.defenses).toBe("New Defenses");
  });
});