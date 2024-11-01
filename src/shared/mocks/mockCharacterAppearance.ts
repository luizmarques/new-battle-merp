import type { CharacterAppearance } from "../../character/domain/characterAppearance";

export const mockCharacterAppearance: CharacterAppearance = {
  changeCharacterAppearance(props: CharacterAppearance): void {
    Object.assign(this, props);
  },
  backgroundColor: 'Test Background Color',
  default: 'Test Default',
  white: 'Test White',
  lilac: 'Test Lilac',
  grayscale: 'Test Grayscale',
  book: 'Test Book',
  seasonSummer: 'Test Summer',
  seasonFall: 'Test Fall',
  seasonWinter: 'Test Winter',
  seasonSpring: 'Test Spring',
  backgroundcolordesc: 'Test Background Color Desc',
};
