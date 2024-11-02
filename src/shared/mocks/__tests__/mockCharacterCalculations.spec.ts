import { CharacterCalculations } from "../../../character/domain/character-calculations/characterCalculations";
import { mockCharacterCalculations } from "../mockCharacterCalculations";

describe("mockCharacterCalculations Unit Tests", () => {
  it("should create a new CharacterCalculations", () => {
    const characterCalculations = new CharacterCalculations(mockCharacterCalculations);
    expect(characterCalculations).toBeInstanceOf(CharacterCalculations);
    expect(characterCalculations.devAbbr).toBe("Test Dev Abbr");
  });

  it("should change character calculations", () => {
    const characterCalculations = new CharacterCalculations(mockCharacterCalculations);
    characterCalculations.changeCharacterCalculations({
      devAbbr: "New Dev Abbr",
      changeCharacterCalculations: function (props: CharacterCalculations): void {
        throw new Error("Function not implemented.");
      }
    });
    expect(characterCalculations.devAbbr).toBe("New Dev Abbr");
  });
});