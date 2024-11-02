import type { CharacterLanguages } from "../../character/domain/character-languages/characterLanguages";

export const mockCharacterLanguages: CharacterLanguages = {
  languages: 'Test Languages',
  spoken: 'Test Spoken',
  writen: 'Test Written',
  changeCharacterLanguages(props: CharacterLanguages): void {
    this.languages = props.languages;
    this.spoken = props.spoken;
    this.writen = props.writen;
  }
};
