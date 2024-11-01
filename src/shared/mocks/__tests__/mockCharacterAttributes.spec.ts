import { CharacterAttributes } from "../../../character/domain/characterAttributes";
import { mockCharacterAttributes } from "../mockCharacterAttributes";

describe("mockCharacterAttributes Unit Tests", () => {
  it("should create a new CharacterAttributes", () => {
    const characterAttributes = new CharacterAttributes(mockCharacterAttributes);
    expect(characterAttributes).toBeInstanceOf(CharacterAttributes);
    expect(characterAttributes.realmpower).toBe(10);
  });

  it("should change character attributes", () => {
    const characterAttributes = new CharacterAttributes(mockCharacterAttributes);
    characterAttributes.changeCharacterAttributes(
      { ...mockCharacterAttributes,        realmpower: 20, 
       });
    expect(characterAttributes.realmpower).toBe(20);
  });
});