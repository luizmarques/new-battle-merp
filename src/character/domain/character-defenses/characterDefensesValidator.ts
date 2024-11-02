import { IsString, IsOptional, MaxLength } from 'class-validator';
import type { CharacterDefenses } from './characterDefenses';
import { ClassValidatorFields } from '../../../shared/domain/validators/class-validator-fields';

class CharacterDefensesRules {
  @IsString()
  @IsOptional()
  @MaxLength(255, { groups: ['name'] })
  defenses?: string;

  @IsString()
  @IsOptional()
  @MaxLength(255, { groups: ['name'] })
  armorAt?: string;

  @IsString()
  @IsOptional()
  @MaxLength(255, { groups: ['name'] })
  defensivebonusDb?: string;

  @IsString()
  @IsOptional()
  @MaxLength(255, { groups: ['name'] })
  withshield?: string;

  @IsString()
  @IsOptional()
  @MaxLength(255, { groups: ['name'] })
  movementpenalty?: string;

  @IsString()
  @IsOptional()
  @MaxLength(255, { groups: ['name'] })
  helmet?: string;

  @IsString()
  @IsOptional()
  @MaxLength(255, { groups: ['name'] })
  armgreaves?: string;

  @IsString()
  @IsOptional()
  @MaxLength(255, { groups: ['name'] })
  leggreaves?: string;

  @IsString()
  @IsOptional()
  @MaxLength(255, { groups: ['name'] })
  distancepenalty?: string;

  @IsString()
  @IsOptional()
  @MaxLength(255, { groups: ['name'] })
  wounds?: string;

  constructor(props: CharacterDefenses) {
    Object.assign(this, props);
  }
}

export class CharacterDefensesValidator extends ClassValidatorFields<CharacterDefensesRules> {
  validate(entity: CharacterDefenses) {
    return super.validate(new CharacterDefensesRules(entity));
  }
}

export class CharacterDefensesValidatorFactory {
  static create() {
    return new CharacterDefensesValidator();
  }
}