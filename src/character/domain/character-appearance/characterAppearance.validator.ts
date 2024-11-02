import { IsString, IsOptional, MaxLength } from 'class-validator';
import { ClassValidatorFields } from '../../../shared/domain/validators/class-validator-fields';
import type { CharacterAppearance } from './characterAppearance';

class CharacterAppearanceRules {
  @IsString()
  @IsOptional()
  @MaxLength(255, { groups: ['name'] })
  backgroundColor?: string;

  @IsString()
  @IsOptional()
  @MaxLength(255, { groups: ['name'] })
  default?: string;

  @IsString()
  @IsOptional()
  @MaxLength(255, { groups: ['name'] })
  white?: string;

  @IsString()
  @IsOptional()
  @MaxLength(255, { groups: ['name'] })
  lilac?: string;

  @IsString()
  @IsOptional()
  @MaxLength(255, { groups: ['name'] })
  grayscale?: string;

  @IsString()
  @IsOptional()
  @MaxLength(255, { groups: ['name'] })
  book?: string;

  @IsString()
  @IsOptional()
  @MaxLength(255, { groups: ['name'] })
  seasonSummer?: string;

  @IsString()
  @IsOptional()
  @MaxLength(255, { groups: ['name'] })
  seasonFall?: string;

  @IsString()
  @IsOptional()
  @MaxLength(255, { groups: ['name'] })
  seasonWinter?: string;

  @IsString()
  @IsOptional()
  @MaxLength(255, { groups: ['name'] })
  seasonSpring?: string;

  @IsString()
  @IsOptional()
  @MaxLength(255, { groups: ['name'] })
  backgroundcolordesc?: string;

  constructor( {
    backgroundColor,
    default: default_,
    white,
    lilac,
    grayscale,
    book,
    seasonSummer,
    seasonFall,
    seasonWinter,
    seasonSpring,
    backgroundcolordesc,
  }: CharacterAppearance) {
    Object.assign(this, {
      backgroundColor,
      default: default_,
      white,
      lilac,
      grayscale,
      book,
      seasonSummer,
      seasonFall,
      seasonWinter,
      seasonSpring,
      backgroundcolordesc,
    });
  }
}

export class CharacterAppearanceValidator extends ClassValidatorFields<CharacterAppearanceRules> {
  validate(entity: CharacterAppearance) {
    return super.validate(new CharacterAppearanceRules(entity));
  }
}

export class CharacterAppearanceValidatorFactory {
  static create() {
    return new CharacterAppearanceValidator();
  }
}