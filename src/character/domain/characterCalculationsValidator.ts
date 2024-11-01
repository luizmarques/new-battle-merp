import { IsNumber, IsString, IsOptional, MaxLength } from 'class-validator';
import type { CharacterCalculations } from './characterCalculations';
import { ClassValidatorFields } from '../../shared/domain/validators/class-validator-fields';

class CharacterCalculationsRules {
  @IsString()
  @IsOptional()
  @MaxLength(255, { groups: ['name'] })
  devAbbr?: string;

  @IsNumber()
  @IsOptional()
  loadcapacity?: number;

  @IsNumber()
  @IsOptional()
  weighttotal?: number;

  @IsString()
  @IsOptional()
  @MaxLength(255, { groups: ['name'] })
  sheetColors?: string;

  @IsString()
  @IsOptional()
  @MaxLength(255, { groups: ['name'] })
  totalhpcalcmode?: string;

  @IsString()
  @IsOptional()
  @MaxLength(255, { groups: ['name'] })
  legacycalc?: string;

  @IsString()
  @IsOptional()
  @MaxLength(255, { groups: ['name'] })
  nocalc?: string;

  @IsString()
  @IsOptional()
  @MaxLength(255, { groups: ['name'] })
  hpcalcdescription?: string;

  @IsString()
  @IsOptional()
  @MaxLength(255, { groups: ['name'] })
  professionbonusmode?: string;

  @IsString()
  @IsOptional()
  @MaxLength(255, { groups: ['name'] })
  legacyprofbonus?: string;

  @IsString()
  @IsOptional()
  @MaxLength(255, { groups: ['name'] })
  flatprofbonus?: string;

  @IsString()
  @IsOptional()
  @MaxLength(255, { groups: ['name'] })
  profbonusmodedescription?: string;

  @IsNumber()
  @IsOptional()
  bmr?: number;

  @IsNumber()
  @IsOptional()
  walk?: number;

  @IsNumber()
  @IsOptional()
  fastwalk?: number;

  @IsNumber()
  @IsOptional()
  run?: number;

  @IsNumber()
  @IsOptional()
  sprint?: number;

  @IsNumber()
  @IsOptional()
  accsprint?: number;

  @IsNumber()
  @IsOptional()
  dash?: number;

  @IsString()
  @IsOptional()
  @MaxLength(255, { groups: ['name'] })
  skilldevmode?: string;

  @IsString()
  @IsOptional()
  @MaxLength(255, { groups: ['name'] })
  legacyskilldev?: string;

  @IsString()
  @IsOptional()
  @MaxLength(255, { groups: ['name'] })
  flatskilldev?: string;

  @IsString()
  @IsOptional()
  @MaxLength(255, { groups: ['name'] })
  skilldevmodedescription?: string;

  @IsNumber()
  @IsOptional()
  secundarydevelopmentpoints?: number;

  @IsString()
  @IsOptional()
  @MaxLength(255, { groups: ['name'] })
  secondaryskilldevmode?: string;

  @IsNumber()
  @IsOptional()
  bonus10?: number;

  @IsNumber()
  @IsOptional()
  bonus20?: number;

  @IsNumber()
  @IsOptional()
  bonus25?: number;

  @IsNumber()
  @IsOptional()
  bonus30?: number;

  @IsNumber()
  @IsOptional()
  bonus40?: number;

  @IsNumber()
  @IsOptional()
  bonus50?: number;

  @IsString()
  @IsOptional()
  @MaxLength(255, { groups: ['name'] })
  secondaryskilldevmodedescription?: string;

  constructor(props: CharacterCalculations) {
    Object.assign(this, props);
  }
}

export class CharacterCalculationsValidator extends ClassValidatorFields<CharacterCalculationsRules> {
  validate(entity: CharacterCalculations) {
    return super.validate(new CharacterCalculationsRules(entity));
  }
}

export class CharacterCalculationsValidatorFactory {
  static create() {
    return new CharacterCalculationsValidator();
  }
}