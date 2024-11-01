import { IsObject, IsBoolean, IsDateString, IsString, ValidateNested, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';
import type { CharacterConstructorProps } from './characterConstructorProps';
import { CharacterInformation } from './characterInformation';
import { CharacterAttributes } from './characterAttributes';
import { CharacterDefenses } from './characterDefenses';
import { CharacterLanguages } from './characterLanguages';
import { CharacterMiscellaneous } from './characterMiscellaneous';
import { CharacterPossessions } from './characterPossessions';
import { CharacterChecks } from './characterChecks';
import { CharacterCalculations } from './characterCalculations';
import { CharacterSpells } from './characterSpells';
import { CharacterAppearance } from './characterAppearance';
import { ClassValidatorFields } from '../../shared/domain/validators/class-validator-fields';

class CharacterConstructorPropsRules {
  @IsObject()
  @ValidateNested()
  @Type(() => CharacterInformation)
  characterInformation: CharacterInformation;

  @IsObject()
  @ValidateNested()
  @Type(() => CharacterAttributes)
  characterAttributes: CharacterAttributes;

  @IsObject()
  @ValidateNested()
  @Type(() => CharacterDefenses)
  characterDefenses: CharacterDefenses;

  @IsObject()
  @ValidateNested()
  @Type(() => CharacterLanguages)
  characterLanguages: CharacterLanguages;

  @IsObject()
  @ValidateNested()
  @Type(() => CharacterMiscellaneous)
  characterMiscellaneous: CharacterMiscellaneous;

  @IsObject()
  @ValidateNested()
  @Type(() => CharacterPossessions)
  characterPossessions: CharacterPossessions;

  @IsObject()
  @ValidateNested()
  @Type(() => CharacterSpells)
  characterSpells: CharacterSpells;

  @IsObject()
  @ValidateNested()
  @Type(() => CharacterChecks)
  characterChecks: CharacterChecks;

  @IsObject()
  @ValidateNested()
  @Type(() => CharacterCalculations)
  characterCalculations: CharacterCalculations;

  @IsObject()
  @ValidateNested()
  @Type(() => CharacterAppearance)
  characterAppearance: CharacterAppearance;

  @IsBoolean()
  @IsOptional()
  is_active?: boolean;

  @IsDateString()
  @IsOptional()
  created_at?: Date;

  @IsString()
  @IsOptional()
  created_by?: string;

  constructor(props: CharacterConstructorProps) {
    Object.assign(this, props);
  }
}

export class CharacterConstructorPropsValidator extends ClassValidatorFields<CharacterConstructorPropsRules> {
  validate(entity: CharacterConstructorProps) {
    return super.validate(new CharacterConstructorPropsRules(entity));
  }
}

export class CharacterConstructorPropsValidatorFactory {
  static create() {
    return new CharacterConstructorPropsValidator();
  }
}