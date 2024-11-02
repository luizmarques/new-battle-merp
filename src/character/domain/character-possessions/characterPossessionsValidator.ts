import { IsNumber, IsString, IsOptional, MaxLength } from 'class-validator';
import type { CharacterPossessions } from './characterPossessions';
import { ClassValidatorFields } from '../../../shared/domain/validators/class-validator-fields';

class CharacterPossessionsRules {
  @IsNumber()
  @IsOptional()
  weight?: number;

  @IsString()
  @IsOptional()
  @MaxLength(255, { groups: ['name'] })
  possessions?: string;

  @IsNumber()
  @IsOptional()
  mithril?: number;

  @IsNumber()
  @IsOptional()
  gold?: number;

  @IsNumber()
  @IsOptional()
  silver?: number;

  @IsNumber()
  @IsOptional()
  bronze?: number;

  @IsNumber()
  @IsOptional()
  copper?: number;

  @IsNumber()
  @IsOptional()
  iron?: number;

  constructor(props: CharacterPossessions) {
    Object.assign(this, props);
  }
}

export class CharacterPossessionsValidator extends ClassValidatorFields<CharacterPossessionsRules> {
  validate(entity: CharacterPossessions) {
    return super.validate(new CharacterPossessionsRules(entity));
  }
}

export class CharacterPossessionsValidatorFactory {
  static create() {
    return new CharacterPossessionsValidator();
  }
}