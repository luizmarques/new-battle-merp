import { CharacterLanguages } from "../../../character/domain/characterLanguages";
import { mockCharacterLanguages } from "../mockCharacterLanguages";

describe("mockCharacterLanguages Unit Tests", () => {
  it("should create a new CharacterLanguages", () => {
    const characterLanguages = new CharacterLanguages(mockCharacterLanguages);
    expect(characterLanguages).toBeInstanceOf(CharacterLanguages);
    expect(characterLanguages.languages).toBe("Test Languages");
  });

  it("should change character languages", () => {
    const characterLanguages = new CharacterLanguages(mockCharacterLanguages);
    characterLanguages.changeCharacterLanguages({ languages: "New Languages",  });
    expect(characterLanguages.languages).toBe("New Languages");
  });
});