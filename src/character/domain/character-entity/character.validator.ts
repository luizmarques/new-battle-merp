import { IsObject, IsBoolean, IsDateString, IsString, ValidateNested, IsOptional } from 'class-validator'
import { Type } from 'class-transformer';
import { 
  Character,
} from './character.entity';
import { CharacterInformation } from '../character-information/characterInformation';
import { CharacterAttributes } from '../character-attributes/characterAttributes';
import { CharacterDefenses } from '../character-defenses/characterDefenses';
import { CharacterLanguages } from '../character-languages/characterLanguages';
import { CharacterPossessions } from '../character-possessions/characterPossessions';
import { CharacterChecks } from '../character-checks/characterChecks';
import { CharacterCalculations } from '../character-calculations/characterCalculations';
import { CharacterAppearance } from '../character-appearance/characterAppearance';
import { CharacterSpells } from '../character-spells/characterSpells';
import { CharacterMiscellaneous } from '../character-miscellaneous/characterMiscellaneous';
import { ClassValidatorFields } from 'src/shared/domain/validators/class-validator-fields';

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
