import { CharacterSpells } from "../../../character/domain/character-spells/characterSpells";
import { mockCharacterSpells } from "../mockCharacterSpells";

describe("mockCharacterSpells Unit Tests", () => {
  it("should create a new CharacterSpells", () => {
    const characterSpells = new CharacterSpells(mockCharacterSpells);
    expect(characterSpells).toBeInstanceOf(CharacterSpells);
    expect(characterSpells.spelllists).toBe("Test Spell Lists");
  });

  it("should change character spells", () => {
    const characterSpells = new CharacterSpells(mockCharacterSpells);
    characterSpells.changeCharacterSpells({
      spelllists: "New Spell Lists",
      changeCharacterSpells: function (props: CharacterSpells): void {
        throw new Error("Function not implemented.");
      }
    });
    expect(characterSpells.spelllists).toBe("New Spell Lists");
  });
});