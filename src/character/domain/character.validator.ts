import { IsObject, IsBoolean, IsDateString, IsString, ValidateNested, IsOptional } from 'class-validator'
import { Type } from 'class-transformer';
import { 
  Character,
} from './character.entity';
import type { CharacterInformation } from './characterInformation';
import type { CharacterAttributes } from './characterAttributes';
import type { CharacterDefenses } from './characterDefenses';
import type { CharacterLanguages } from './characterLanguages';
import type { CharacterMiscellaneous } from './characterMiscellaneous';
import type { CharacterPossessions } from './characterPossessions';
import type { CharacterChecks } from './characterChecks';
import type { CharacterCalculations } from './characterCalculations';
import { ClassValidatorFields } from '../../shared/domain/validators/class-validator-fields';
import type { CharacterAppearance } from './characterAppearance';
import type { CharacterSpells } from './characterSpells';

const date = new Date();

class CharacterRules {
  @IsObject()
  @ValidateNested()
  @Type(() => Character)
  characterInformation: CharacterInformation;

  @IsObject()
  @ValidateNested()
  @Type(() => Character)
  characterAttributes: CharacterAttributes;

  @IsObject()
  @ValidateNested()
  @Type(() => Character)
  characterDefenses: CharacterDefenses;

  @IsObject()
  @ValidateNested()
  @Type(() => Character)
  characterLanguages: CharacterLanguages;

  @IsObject()
  @ValidateNested()
  @Type(() => Character)
  characterMiscellaneous: CharacterMiscellaneous;

  @IsObject()
  @ValidateNested()
  @Type(() => Character)
  characterPossessions: CharacterPossessions;

  @IsObject()
  @ValidateNested()
  @Type(() => Character)
  characterSpells: CharacterSpells;

  @IsObject()
  @ValidateNested()
  @Type(() => Character)
  characterChecks: CharacterChecks;

  @IsObject()
  @ValidateNested()
  @Type(() => Character)
  characterCalculations: CharacterCalculations;

  @IsObject()
  @ValidateNested()
  @Type(() => Character)
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

  constructor({
    characterInformation,
    characterAttributes,
    characterDefenses,
    characterLanguages,
    characterMiscellaneous,
    characterPossessions,
    characterSpells,
    characterChecks,
    characterCalculations,
    characterAppearance,
    is_active,
    created_at,
    created_by,
  }: Character) {
    Object.assign(this, {
      characterInformation,
      characterAttributes,
      characterDefenses,
      characterLanguages,
      characterMiscellaneous,
      characterPossessions,
      characterSpells,
      characterChecks,
      characterCalculations,
      characterAppearance,
      is_active,
      created_at,
      created_by,
    });
  }
}

export class CharacterValidator extends ClassValidatorFields<CharacterRules>{
  validate(entity: Character) {
    return super.validate(new CharacterRules(entity));
  }
}

export class CharacterValidatorFactory {
  static create() {
    return new CharacterValidator()
  }
}
