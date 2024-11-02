import { IsString, IsOptional, MaxLength } from 'class-validator';
import type { CharacterLanguages } from './characterLanguages';
import { ClassValidatorFields } from '../../../shared/domain/validators/class-validator-fields';

class CharacterLanguagesRules {
  @IsString()
  @IsOptional()
  @MaxLength(255, { groups: ['name'] })
  languages?: string;

  @IsString()
  @IsOptional()
  @MaxLength(255, { groups: ['name'] })
  spoken?: string;

  @IsString()
  @IsOptional()
  @MaxLength(255, { groups: ['name'] })
  writen?: string;

  constructor(props: CharacterLanguages) {
    Object.assign(this, props);
  }
}

export class CharacterLanguagesValidator extends ClassValidatorFields<CharacterLanguagesRules> {
  validate(entity: CharacterLanguages) {
    return super.validate(new CharacterLanguagesRules(entity));
  }
}

export class CharacterLanguagesValidatorFactory {
  static create() {
    return new CharacterLanguagesValidator();
  }
}