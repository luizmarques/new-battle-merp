import { IsNumber, IsString, IsOptional, MaxLength } from 'class-validator';
import type { CharacterChecks } from './characterChecks';
import { ClassValidatorFields } from '../../shared/domain/validators/class-validator-fields';

class CharacterChecksRules {
  @IsNumber()
  @IsOptional()
  constitutioncheck?: number;

  @IsNumber()
  @IsOptional()
  agilitycheck?: number;

  @IsNumber()
  @IsOptional()
  selfdisciplinecheck?: number;

  @IsNumber()
  @IsOptional()
  memorycheck?: number;

  @IsNumber()
  @IsOptional()
  reasoningcheck?: number;

  @IsNumber()
  @IsOptional()
  strengthcheck?: number;

  @IsNumber()
  @IsOptional()
  quicknesscheck?: number;

  @IsNumber()
  @IsOptional()
  presencecheck?: number;

  @IsNumber()
  @IsOptional()
  empathycheck?: number;

  @IsNumber()
  @IsOptional()
  intuitioncheck?: number;

  @IsNumber()
  @IsOptional()
  resistancecheck?: number;

  @IsNumber()
  @IsOptional()
  ennemydb?: number;

  @IsString()
  @IsOptional()
  @MaxLength(255, { groups: ['name'] })
  result?: string;

  constructor(props: CharacterChecks) {
    Object.assign(this, props);
  }
}

export class CharacterChecksValidator extends ClassValidatorFields<CharacterChecksRules> {
  validate(entity: CharacterChecks) {
    return super.validate(new CharacterChecksRules(entity));
  }
}

export class CharacterChecksValidatorFactory {
  static create() {
    return new CharacterChecksValidator();
  }
}