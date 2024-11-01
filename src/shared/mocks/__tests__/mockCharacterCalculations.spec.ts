import { CharacterCalculations } from "../../../character/domain/characterCalculations";
import { mockCharacterCalculations } from "../mockCharacterCalculations";

describe("mockCharacterCalculations Unit Tests", () => {
  it("should create a new CharacterCalculations", () => {
    const characterCalculations = new CharacterCalculations(mockCharacterCalculations);
    expect(characterCalculations).toBeInstanceOf(CharacterCalculations);
    expect(characterCalculations.devAbbr).toBe("Test Dev Abbr");
  });

  it("should change character calculations", () => {
    const characterCalculations = new CharacterCalculations(mockCharacterCalculations);
    characterCalculations.changeCharacterCalculations({ devAbbr: "New Dev Abbr" });
    expect(characterCalculations.devAbbr).toBe("New Dev Abbr");
  });
});