import { IsNumber, IsString, IsOptional, MaxLength } from 'class-validator';
import type { CharacterInformation } from './characterInformation';
import { ClassValidatorFields } from '../../shared/domain/validators/class-validator-fields';

class CharacterInformationRules {
  @IsString()
  @IsOptional()
  @MaxLength(255, { groups: ['name'] })
  characterName?: string;

  @IsString()
  @IsOptional()
  @MaxLength(255, { groups: ['name'] })
  race?: string;

  @IsString()
  @IsOptional()
  @MaxLength(255, { groups: ['name'] })
  profession?: string;

  @IsNumber()
  @IsOptional()
  level?: number;

  @IsNumber()
  @IsOptional()
  experience?: number;

  @IsString()
  @IsOptional()
  @MaxLength(255, { groups: ['name'] })
  equipment?: string;

  @IsString()
  @IsOptional()
  @MaxLength(255, { groups: ['name'] })
  magic?: string;

  @IsString()
  @IsOptional()
  @MaxLength(255, { groups: ['name'] })
  settings?: string;

  constructor(props: CharacterInformation) {
    Object.assign(this, props);
  }
}

export class CharacterInformationValidator extends ClassValidatorFields<CharacterInformationRules> {
  validate(entity: CharacterInformation) {
    return super.validate(new CharacterInformationRules(entity));
  }
}

export class CharacterInformationValidatorFactory {
  static create() {
    return new CharacterInformationValidator();
  }
}