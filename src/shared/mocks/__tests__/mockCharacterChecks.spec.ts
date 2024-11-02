import { CharacterChecks } from "../../../character/domain/character-checks/characterChecks";
import { mockCharacterChecks } from "../mockCharacterChecks";

describe("mockCharacterChecks Unit Tests", () => {
  it("should create a new CharacterChecks", () => {
    const characterChecks = new CharacterChecks(mockCharacterChecks);
    expect(characterChecks).toBeInstanceOf(CharacterChecks);
    expect(characterChecks.constitutioncheck).toBe(10);
  });

  it("should change character checks", () => {
    const characterChecks = new CharacterChecks(mockCharacterChecks);
    characterChecks.changeCharacterChecks({
      ...mockCharacterChecks, constitutioncheck: 20,
      changeCharacterChecks: function (props: CharacterChecks): void {
        throw new Error("Function not implemented.");
      }
    });
    expect(characterChecks.constitutioncheck).toBe(20);
  });
});