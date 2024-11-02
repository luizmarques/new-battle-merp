import { Uuid } from '../domain/value-objects/uuid.vo';
import type { CharacterInformation } from '../../character/domain/character-information/characterInformation';


export const mockCharacterInformation: CharacterInformation = {
  changeCharacterInformation(props: CharacterInformation): void {
    Object.assign(this, props);
  },
  character_id: new Uuid(),
  characterName: 'Test Character',
  race: 'Test Race',
  profession: 'Test Profession',
  level: 10,
  experience: 1000,
  equipment: 'Test Equipment',
  magic: 'Test Magic',
  settings: 'Test Settings',
};
