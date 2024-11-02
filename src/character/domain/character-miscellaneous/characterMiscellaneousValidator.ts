import { IsNumber, IsString, IsOptional, MaxLength } from 'class-validator';
import type { CharacterMiscellaneous } from './characterMiscellaneous';
import { ClassValidatorFields } from 'src/shared/domain/validators/class-validator-fields';

class CharacterMiscellaneousRules {
  @IsString()
  @IsOptional()
  @MaxLength(255, { groups: ['name'] })
  miscellaneous?: string;

  @IsString()
  @IsOptional()
  @MaxLength(255, { groups: ['name'] })
  hitdice?: string;

  @IsNumber()
  @IsOptional()
  developmentpoints?: number;

  @IsString()
  @IsOptional()
  @MaxLength(255, { groups: ['name'] })
  primaryskills?: string;

  @IsString()
  @IsOptional()
  @MaxLength(255, { groups: ['name'] })
  attributemodAbbr?: string;

  @IsNumber()
  @IsOptional()
  cost?: number;

  @IsString()
  @IsOptional()
  @MaxLength(255, { groups: ['name'] })
  professionAbbr?: string;

  @IsNumber()
  @IsOptional()
  nbranks?: number;

  @IsString()
  @IsOptional()
  @MaxLength(255, { groups: ['name'] })
  attributeAbbr?: string;

  @IsString()
  @IsOptional()
  @MaxLength(255, { groups: ['name'] })
  miscellaneousAbbr?: string;

  @IsString()
  @IsOptional()
  @MaxLength(255, { groups: ['name'] })
  itemAbbr?: string;

  @IsString()
  @IsOptional()
  @MaxLength(255, { groups: ['name'] })
  secondaryskills?: string;

  @IsString()
  @IsOptional()
  @MaxLength(255, { groups: ['name'] })
  weaponskills?: string;

  @IsNumber()
  @IsOptional()
  ob?: number;

  @IsNumber()
  @IsOptional()
  db?: number;

  @IsString()
  @IsOptional()
  @MaxLength(255, { groups: ['name'] })
  resistances?: string;

  @IsString()
  @IsOptional()
  @MaxLength(255, { groups: ['name'] })
  notes?: string;

  constructor(props: CharacterMiscellaneous) {
    Object.assign(this, props);
  }
}

export class CharacterMiscellaneousValidator extends ClassValidatorFields<CharacterMiscellaneousRules> {
  validate(entity: CharacterMiscellaneous) {
    return super.validate(new CharacterMiscellaneousRules(entity));
  }
}

export class CharacterMiscellaneousValidatorFactory {
  static create() {
    return new CharacterMiscellaneousValidator();
  }
}