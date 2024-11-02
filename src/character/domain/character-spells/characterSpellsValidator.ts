import { IsNumber, IsString, IsOptional, MaxLength } from 'class-validator';
import type { CharacterSpells } from './characterSpells';
import { ClassValidatorFields } from '../../../shared/domain/validators/class-validator-fields';

class CharacterSpellsRules {
  @IsString()
  @IsOptional()
  @MaxLength(255, { groups: ['name'] })
  spelllists?: string;

  @IsString()
  @IsOptional()
  @MaxLength(255, { groups: ['name'] })
  realm?: string;

  @IsString()
  @IsOptional()
  @MaxLength(255, { groups: ['name'] })
  listtype?: string;

  @IsNumber()
  @IsOptional()
  levelmax?: number;

  @IsNumber()
  @IsOptional()
  learnchances?: number;

  @IsString()
  @IsOptional()
  @MaxLength(255, { groups: ['name'] })
  bookandpage?: string;

  @IsString()
  @IsOptional()
  @MaxLength(255, { groups: ['name'] })
  spellname?: string;

  @IsString()
  @IsOptional()
  @MaxLength(255, { groups: ['name'] })
  spellclass?: string;

  @IsString()
  @IsOptional()
  @MaxLength(255, { groups: ['name'] })
  spellduration?: string;

  @IsString()
  @IsOptional()
  @MaxLength(255, { groups: ['name'] })
  spellrange?: string;

  @IsString()
  @IsOptional()
  @MaxLength(255, { groups: ['name'] })
  description?: string;

  @IsString()
  @IsOptional()
  @MaxLength(255, { groups: ['name'] })
  relations?: string;

  constructor(props: CharacterSpells) {
    Object.assign(this, props);
  }
}

export class CharacterSpellsValidator extends ClassValidatorFields<CharacterSpellsRules> {
  validate(entity: CharacterSpells) {
    return super.validate(new CharacterSpellsRules(entity));
  }
}

export class CharacterSpellsValidatorFactory {
  static create() {
    return new CharacterSpellsValidator();
  }
}