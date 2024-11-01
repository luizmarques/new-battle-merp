import { IsNumber, IsString, MaxLength } from 'class-validator';
import type { CharacterAttributes } from './characterAttributes';
import { ClassValidatorFields } from '../../shared/domain/validators/class-validator-fields';

class CharacterAttributesRules {
  @IsNumber()
  realmpower: number;

  @IsNumber()
  powerpoints: number;

  @IsNumber()
  basehp: number;

  @IsNumber()
  totalhp: number;

  @IsNumber()
  actualhp: number;

  @IsString()
  @MaxLength(255, { groups: ['name'] })
  attributes: string;

  @IsString()
  @MaxLength(255, { groups: ['name'] })
  temporaryAbbr: string;

  @IsString()
  @MaxLength(255, { groups: ['name'] })
  potentialAbbr: string;

  @IsString()
  @MaxLength(255, { groups: ['name'] })
  developmentAbbr: string;

  @IsString()
  @MaxLength(255, { groups: ['name'] })
  baseAbbr: string;

  @IsString()
  @MaxLength(255, { groups: ['name'] })
  raceAbbr: string;

  @IsString()
  @MaxLength(255, { groups: ['name'] })
  totalAbbr: string;

  @IsNumber()
  constitution: number;

  @IsNumber()
  agility: number;

  @IsNumber()
  selfdiscipline: number;

  @IsNumber()
  memory: number;

  @IsNumber()
  reasoning: number;

  @IsNumber()
  strength: number;

  @IsNumber()
  quickness: number;

  @IsNumber()
  presence: number;

  @IsNumber()
  empathy: number;

  @IsNumber()
  intuition: number;

  constructor(props: CharacterAttributes) {
    Object.assign(this, props);
  }
}
export class CharacterAttributesValidator extends ClassValidatorFields<CharacterAttributesRules> {
  validate(entity: CharacterAttributes) {
    return super.validate(new CharacterAttributesRules(entity));
  }
}

export class CharacterAttributesValidatorFactory {
  static create() {
    return new CharacterAttributesValidator();
  }
}