import { CharacterSpells } from "../../../character/domain/characterSpells";
import { mockCharacterSpells } from "../mockCharacterSpells";

describe("mockCharacterSpells Unit Tests", () => {
  it("should create a new CharacterSpells", () => {
    const characterSpells = new CharacterSpells(mockCharacterSpells);
    expect(characterSpells).toBeInstanceOf(CharacterSpells);
    expect(characterSpells.spelllists).toBe("Test Spell Lists");
  });

  it("should change character spells", () => {
    const characterSpells = new CharacterSpells(mockCharacterSpells);
    characterSpells.changeCharacterSpells({ spelllists: "New Spell Lists" });
    expect(characterSpells.spelllists).toBe("New Spell Lists");
  });
});