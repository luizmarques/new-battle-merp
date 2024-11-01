import { IsObject, IsBoolean, IsDateString, IsString, ValidateNested, IsOptional, validateSync } from 'class-validator'
import { Type } from 'class-transformer';
import { 
  Character,
  CharacterAttributesProps,
  CharacterChecksProps,
  CharacterDefensesProps,
  CharacterInformationProps,
  CharacterLanguagesProps,
  CharacterMiscellaneousProps,
  CharacterPossessionsProps,
  CharacterSpellsProps,
  CharacterCalculationsProps,
  CharacterAppearanceProps,
} from './character.entity';
import { Uuid } from '../../shared/domain/value-objects/uuid.vo';
import { ClassValidatorFields } from '../../shared/domain/validators/class-validator-fields';

const mockCharacterInformation: CharacterInformationProps = {
  character_id: new Uuid() || undefined,
  characterName: 'Test Character',
  race: 'Test Race',
  profession: 'Test Profession',
  level: 10,
  experience: 1000,
  equipment: 'Test Equipment',
  magic: 'Test Magic',
  settings: 'Test Settings',
};

const mockCharacterAttributes: CharacterAttributesProps = {
  realmpower: 10,
  powerpoints: 10,
  basehp: 10,
  totalhp: 10,
  actualhp: 10,
  attributes: 'Test Attributes',
  temporaryAbbr: 'TA',
  potentialAbbr: 'PA',
  developmentAbbr: 'DA',
  baseAbbr: 'BA',
  raceAbbr: 'RA',
  totalAbbr: 'TA',
  constitution: 10,
  agility: 10,
  selfdiscipline: 10,
  memory: 10,
  reasoning: 10,
  strength: 10,
  quickness: 10,
  presence: 10,
  empathy: 10,
  intuition: 10,
};

const mockCharacterDefenses: CharacterDefensesProps = {
  defenses: 'Test Defenses',
  armorAt: 'Test Armor',
  defensivebonusDb: 'Test DB',
  withshield: 'Test Shield',
  movementpenalty: 'Test Penalty',
  helmet: 'Test Helmet',
  armgreaves: 'Test Arm Greaves',
  leggreaves: 'Test Leg Greaves',
  distancepenalty: 'Test Distance Penalty',
  wounds: 'Test Wounds',
};

const mockCharacterLanguages: CharacterLanguagesProps = {
  languages: 'Test Languages',
  spoken: 'Test Spoken',
  writen: 'Test Written',
};

const mockCharacterMiscellaneous: CharacterMiscellaneousProps = {
  miscellaneous: 'Test Miscellaneous',
  hitdice: 'Test Hit Dice',
  developmentpoints: 10,
  primaryskills: 'Test Primary Skills',
  attributemodAbbr: 'Test Abbr',
  cost: 100,
  professionAbbr: 'Test Profession Abbr',
  nbranks: 10,
  attributeAbbr: 'Test Attribute Abbr',
  miscellaneousAbbr: 'Test Misc Abbr',
  itemAbbr: 'Test Item Abbr',
  secondaryskills: 'Test Secondary Skills',
  weaponskills: 'Test Weapon Skills',
  ob: 10,
  db: 10,
  resistances: 'Test Resistances',
  notes: 'Test Notes',
};

const mockCharacterPossessions: CharacterPossessionsProps = {
  weight: 10,
  possessions: 'Test Possessions',
  mithril: 10,
  gold: 10,
  silver: 10,
  bronze: 10,
  copper: 10,
  iron: 10,
};

const mockCharacterSpells: CharacterSpellsProps = {
  spelllists: 'Test Spell Lists',
  realm: 'Test Realm',
  listtype: 'Test List Type',
  levelmax: 10,
  learnchances: 10,
  bookandpage: 'Test Book and Page',
  spellname: 'Test Spell Name',
  spellclass: 'Test Spell Class',
  spellduration: 'Test Spell Duration',
  spellrange: 'Test Spell Range',
  description: 'Test Description',
  relations: 'Test Relations',
};

const mockCharacterChecks: CharacterChecksProps = {
  constitutioncheck: 10,
  agilitycheck: 10,
  selfdisciplinecheck: 10,
  memorycheck: 10,
  reasoningcheck: 10,
  strengthcheck: 10,
  quicknesscheck: 10,
  presencecheck: 10,
  empathycheck: 10,
  intuitioncheck: 10,
  resistancecheck: 10,
  ennemydb: 10,
  result: 'Test Result',
};

const mockCharacterCalculations: CharacterCalculationsProps = {
  devAbbr: 'Test Dev Abbr',
  loadcapacity: 10,
  weighttotal: 10,
  sheetColors: 'Test Colors',
  totalhpcalcmode: 'Test Mode',
  legacycalc: 'Test Legacy Calc',
  nocalc: 'Test No Calc',
  hpcalcdescription: 'Test HP Calc Desc',
  professionbonusmode: 'Test Prof Bonus Mode',
  legacyprofbonus: 'Test Legacy Prof Bonus',
  flatprofbonus: 'Test Flat Prof Bonus',
  profbonusmodedescription: 'Test Prof Bonus Mode Desc',
  bmr: 10,
  walk: 10,
  fastwalk: 10,
  run: 10,
  sprint: 10,
  accsprint: 10,
  dash: 10,
  skilldevmode: 'Test Skill Dev Mode',
  legacyskilldev: 'Test Legacy Skill Dev',
  flatskilldev: 'Test Flat Skill Dev',
  skilldevmodedescription: 'Test Skill Dev Mode Desc',
  secundarydevelopmentpoints: 10,
  secondaryskilldevmode: 'Test Secondary Skill Dev Mode',
  bonus10: 10,
  bonus20: 10,
  bonus25: 10,
  bonus30: 10,
  bonus40: 10,
  bonus50: 10,
  secondaryskilldevmodedescription: 'Test Secondary Skill Dev Mode Desc',
};

const mockCharacterAppearance: CharacterAppearanceProps = {
  backgroundColor: 'Test Background Color',
  default: 'Test Default',
  white: 'Test White',
  lilac: 'Test Lilac',
  grayscale: 'Test Grayscale',
  book: 'Test Book',
  seasonSummer: 'Test Summer',
  seasonFall: 'Test Fall',
  seasonWinter: 'Test Winter',
  seasonSpring: 'Test Spring',
  backgroundcolordesc: 'Test Background Color Desc',
};

const date = new Date();

class CharacterRules {
  @IsObject()
  @ValidateNested()
  @Type(() => Character)
  characterInformation: CharacterInformationProps;

  @IsObject()
  @ValidateNested()
  @Type(() => Character)
  characterAttributes: CharacterAttributesProps;

  @IsObject()
  @ValidateNested()
  @Type(() => Character)
  characterDefenses: CharacterDefensesProps;

  @IsObject()
  @ValidateNested()
  @Type(() => Character)
  characterLanguages: CharacterLanguagesProps;

  @IsObject()
  @ValidateNested()
  @Type(() => Character)
  characterMiscellaneous: CharacterMiscellaneousProps;

  @IsObject()
  @ValidateNested()
  @Type(() => Character)
  characterPossessions: CharacterPossessionsProps;

  @IsObject()
  @ValidateNested()
  @Type(() => Character)
  characterSpells: CharacterSpellsProps;

  @IsObject()
  @ValidateNested()
  @Type(() => Character)
  characterChecks: CharacterChecksProps;

  @IsObject()
  @ValidateNested()
  @Type(() => Character)
  characterCalculations: CharacterCalculationsProps;

  @IsObject()
  @ValidateNested()
  @Type(() => Character)
  characterAppearance: CharacterAppearanceProps;

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

export class CharacterValidatorFacry {
  static create() {
    return new CharacterValidator()
  }
}
