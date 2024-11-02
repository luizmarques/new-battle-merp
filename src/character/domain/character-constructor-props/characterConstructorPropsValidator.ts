import { IsObject, IsBoolean, IsDateString, IsString, ValidateNested, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';
import type { CharacterConstructorProps } from './characterConstructorProps';
import { CharacterInformation } from '../character-information/characterInformation';
import { CharacterAttributes } from '../character-attributes/characterAttributes';
import { CharacterDefenses } from '../character-defenses/characterDefenses';
import { CharacterLanguages } from '../character-languages/characterLanguages';
import { CharacterMiscellaneous } from '../characterMiscellaneous';
import { CharacterPossessions } from '../character-possessions/characterPossessions';
import { CharacterChecks } from '../character-checks/characterChecks';
import { CharacterCalculations } from '../character-calculations/characterCalculations';
import { CharacterSpells } from '../character-spells/characterSpells';
import { CharacterAppearance } from '../character-appearance/characterAppearance';
import { ClassValidatorFields } from '../../../shared/domain/validators/class-validator-fields';

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