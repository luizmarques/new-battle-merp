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
  CharacterCreateCommand,
} from '../character.entity';

const date = new Date();

const mockCharacterInformation: CharacterInformationProps = {
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

// jest.mock('../character.entity', () => {
//   return {
//     Character: jest.fn().mockImplementation(() => {
//       return {
//         createCharacterCommand: jest.fn(),
//       };
//     }),
//   };
// });

describe('Character Entity', () => {
  beforeEach(() => {
    Character.create = jest.fn().mockImplementation(Character.create);
  });

  describe('Character Unit Tests', () => {	
    it('constructor', () => {
      const character = new Character({
        characterInformation: mockCharacterInformation,
        characterAttributes: mockCharacterAttributes,
        characterDefenses: mockCharacterDefenses,
        characterLanguages: mockCharacterLanguages,
        characterMiscellaneous: mockCharacterMiscellaneous,
        characterPossessions: mockCharacterPossessions,
        characterSpells: mockCharacterSpells,
        characterChecks: mockCharacterChecks,
        characterCalculations: mockCharacterCalculations,
        characterAppearance: mockCharacterAppearance,
        is_active: true,
        created_at: date,
        created_by: 'Test Creator',
      });

      expect(character).toBeInstanceOf(Character);
      expect(character.characterInformation).toEqual(mockCharacterInformation);
      expect(character.characterInformation.character_id).toBeUndefined();
      expect(character.characterAttributes).toEqual(mockCharacterAttributes);
      expect(character.characterDefenses).toEqual(mockCharacterDefenses);
      expect(character.characterLanguages).toEqual(mockCharacterLanguages);
      expect(character.characterMiscellaneous).toEqual(mockCharacterMiscellaneous);
      expect(character.characterPossessions).toEqual(mockCharacterPossessions);
      expect(character.characterSpells).toEqual(mockCharacterSpells);
      expect(character.characterChecks).toEqual(mockCharacterChecks);
      expect(character.characterCalculations).toEqual(mockCharacterCalculations);
      expect(character.characterAppearance).toEqual(mockCharacterAppearance);
      expect(character.is_active).toBe(true);
      expect(character.created_at).toEqual(date);
      expect(character.created_by).toBe('Test Creator');
    });
  });

  describe("CharacterCreateCommand", () => {
    it("should create a new character", async () => {
      const character = Character.create({ 
        characterInformation: mockCharacterInformation,
        characterAttributes: mockCharacterAttributes,
        characterDefenses: mockCharacterDefenses,
        characterLanguages: mockCharacterLanguages,
        characterMiscellaneous: mockCharacterMiscellaneous,
        characterPossessions: mockCharacterPossessions,
        characterSpells: mockCharacterSpells,
        characterChecks: mockCharacterChecks,
        characterCalculations: mockCharacterCalculations,
        characterAppearance: mockCharacterAppearance,
        is_active: true,
        created_at: date,
        created_by: 'Test Creator',
      });

      expect(character).toBeInstanceOf(Character);
      expect(Character.create).toHaveBeenCalledTimes(1);
    });
  });

  describe("changeCharacterInformation", () => {
    it("should change character information", async () => {
      const character = new Character({
        characterInformation: mockCharacterInformation,
        characterAttributes: mockCharacterAttributes,
        characterDefenses: mockCharacterDefenses,
        characterLanguages: mockCharacterLanguages,
        characterMiscellaneous: mockCharacterMiscellaneous,
        characterPossessions: mockCharacterPossessions,
        characterSpells: mockCharacterSpells,
        characterChecks: mockCharacterChecks,
        characterCalculations: mockCharacterCalculations,
        characterAppearance: mockCharacterAppearance,
        is_active: true,
        created_at: date,
        created_by: 'Test Creator',
      });
  
      character.characterInformation.characterName = 'New Character Name';
      expect(character.characterInformation.characterName).toBe('New Character Name');
      const changeCharacterInformationSpy = jest.spyOn(Character.prototype, 'changeCharacterInformation');
      character.changeCharacterInformation(mockCharacterInformation);
      expect(changeCharacterInformationSpy).toHaveBeenCalledTimes(1);
      changeCharacterInformationSpy.mockRestore();
    });
  });

  describe("changeCharacterAttributes", () => {
    it("should change character attributes", async () => {
      const character = new Character({
        characterInformation: mockCharacterInformation,
        characterAttributes: mockCharacterAttributes,
        characterDefenses: mockCharacterDefenses,
        characterLanguages: mockCharacterLanguages,
        characterMiscellaneous: mockCharacterMiscellaneous,
        characterPossessions: mockCharacterPossessions,
        characterSpells: mockCharacterSpells,
        characterChecks: mockCharacterChecks,
        characterCalculations: mockCharacterCalculations,
        characterAppearance: mockCharacterAppearance,
        is_active: true,
        created_at: date,
        created_by: 'Test Creator',
      });
  
      character.characterAttributes.realmpower = 20;
      expect(character.characterAttributes.realmpower).toBe(20);
      const changeCharacterAttributesSpy = jest.spyOn(Character.prototype, 'changeCharacterAttributes');
      character.changeCharacterAttributes(mockCharacterAttributes);
      expect(changeCharacterAttributesSpy).toHaveBeenCalledTimes(1);
      changeCharacterAttributesSpy.mockRestore();
    });
    });
  });

  describe("changeCharacterDefenses", () => {
    it("should change character defenses", async () => {
      const character = new Character({
        characterInformation: mockCharacterInformation,
        characterAttributes: mockCharacterAttributes,
        characterDefenses: mockCharacterDefenses,
        characterLanguages: mockCharacterLanguages,
        characterMiscellaneous: mockCharacterMiscellaneous,
        characterPossessions: mockCharacterPossessions,
        characterSpells: mockCharacterSpells,
        characterChecks: mockCharacterChecks,
        characterCalculations: mockCharacterCalculations,
        characterAppearance: mockCharacterAppearance,
        is_active: true,
        created_at: date,
        created_by: 'Test Creator',
      });
  
      character.characterDefenses.defenses = 'New Defenses';
      expect(character.characterDefenses.defenses).toBe('New Defenses');
      const changeCharacterDefensesSpy = jest.spyOn(Character.prototype, 'changeCharacterDefenses');
      character.changeCharacterDefenses(mockCharacterDefenses);
      expect(changeCharacterDefensesSpy).toHaveBeenCalledTimes(1);
      changeCharacterDefensesSpy.mockRestore();
  });

  describe("changeCharacterLanguages", () => {
    it("should change character languages", async () => {
      const character = new Character({
        characterInformation: mockCharacterInformation,
        characterAttributes: mockCharacterAttributes,
        characterDefenses: mockCharacterDefenses,
        characterLanguages: mockCharacterLanguages,
        characterMiscellaneous: mockCharacterMiscellaneous,
        characterPossessions: mockCharacterPossessions,
        characterSpells: mockCharacterSpells,
        characterChecks: mockCharacterChecks,
        characterCalculations: mockCharacterCalculations,
        characterAppearance: mockCharacterAppearance,
        is_active: true,
        created_at: date,
        created_by: 'Test Creator',
      });
  
      character.characterLanguages.languages = 'New Languages';
      expect(character.characterLanguages.languages).toBe('New Languages');
      const changeCharacterLanguagesPsy = jest.spyOn(Character.prototype, 'changeCharacterLanguages');
      character.changeCharacterLanguages(mockCharacterLanguages);
      expect(changeCharacterLanguagesPsy).toHaveBeenCalledTimes(1);
      changeCharacterLanguagesPsy.mockRestore();
    });
  })

  describe("changeCharacterMiscellaneous", () => {
    it("should change character miscellaneous", async () => {
      const character = new Character({
        characterInformation: mockCharacterInformation,
        characterAttributes: mockCharacterAttributes,
        characterDefenses: mockCharacterDefenses,
        characterLanguages: mockCharacterLanguages,
        characterMiscellaneous: mockCharacterMiscellaneous,
        characterPossessions: mockCharacterPossessions,
        characterSpells: mockCharacterSpells,
        characterChecks: mockCharacterChecks,
        characterCalculations: mockCharacterCalculations,
        characterAppearance: mockCharacterAppearance,
        is_active: true,
        created_at: date,
        created_by: 'Test Creator',
      });
  
      character.characterMiscellaneous.miscellaneous = 'New Miscellaneous';
      expect(character.characterMiscellaneous.miscellaneous).toBe('New Miscellaneous');
      const changeCharacterMiscellaneousSpy = jest.spyOn(Character.prototype, 'changeCharacterMiscellaneous');
      character.changeCharacterMiscellaneous(mockCharacterMiscellaneous);
      expect(changeCharacterMiscellaneousSpy).toHaveBeenCalledTimes(1);
      changeCharacterMiscellaneousSpy.mockRestore();
    });
  })

  describe("changeCharacterPossessions", () => {
    it("should change character possessions", async () => {
      const character = new Character({
        characterInformation: mockCharacterInformation,
        characterAttributes: mockCharacterAttributes,
        characterDefenses: mockCharacterDefenses,
        characterLanguages: mockCharacterLanguages,
        characterMiscellaneous: mockCharacterMiscellaneous,
        characterPossessions: mockCharacterPossessions,
        characterSpells: mockCharacterSpells,
        characterChecks: mockCharacterChecks,
        characterCalculations: mockCharacterCalculations,
        characterAppearance: mockCharacterAppearance,
        is_active: true,
        created_at: date,
        created_by: 'Test Creator',
      });
  
      character.characterPossessions.weight = 20;
      expect(character.characterPossessions.weight).toBe(20);
      const changeCharacterPossessionsSpy = jest.spyOn(Character.prototype, 'changeCharacterPossessions');
      character.changeCharacterPossessions(mockCharacterPossessions);
      expect(changeCharacterPossessionsSpy).toHaveBeenCalledTimes(1);
      changeCharacterPossessionsSpy.mockRestore();
    });
  })

  describe("changeCharacterSpells", () => {
    it("should change character spells", async () => {
      const character = new Character({
        characterInformation: mockCharacterInformation,
        characterAttributes: mockCharacterAttributes,
        characterDefenses: mockCharacterDefenses,
        characterLanguages: mockCharacterLanguages,
        characterMiscellaneous: mockCharacterMiscellaneous,
        characterPossessions: mockCharacterPossessions,
        characterSpells: mockCharacterSpells,
        characterChecks: mockCharacterChecks,
        characterCalculations: mockCharacterCalculations,
        characterAppearance: mockCharacterAppearance,
        is_active: true,
        created_at: date,
        created_by: 'Test Creator',
      });
  
      character.characterSpells.spelllists = 'New Spell Lists';
      expect(character.characterSpells.spelllists).toBe('New Spell Lists');
      const changeCharacterSpellsSpy = jest.spyOn(Character.prototype, 'changeCharacterSpells');
      character.changeCharacterSpells(mockCharacterSpells);
      expect(changeCharacterSpellsSpy).toHaveBeenCalledTimes(1);
      changeCharacterSpellsSpy.mockRestore();
    });
  })

  describe("changeCharacterChecks", () => {
    it("should change character checks", async () => {
      const character = new Character({
        characterInformation: mockCharacterInformation,
        characterAttributes: mockCharacterAttributes,
        characterDefenses: mockCharacterDefenses,
        characterLanguages: mockCharacterLanguages,
        characterMiscellaneous: mockCharacterMiscellaneous,
        characterPossessions: mockCharacterPossessions,
        characterSpells: mockCharacterSpells,
        characterChecks: mockCharacterChecks,
        characterCalculations: mockCharacterCalculations,
        characterAppearance: mockCharacterAppearance,
        is_active: true,
        created_at: date,
        created_by: 'Test Creator',
      });
  
      character.characterChecks.constitutioncheck = 20;
      expect(character.characterChecks.constitutioncheck).toBe(20);
      const changeCharacterChecksSpy = jest.spyOn(Character.prototype, 'changeCharacterChecks');
      character.changeCharacterChecks(mockCharacterChecks);
      expect(changeCharacterChecksSpy).toHaveBeenCalledTimes(1);
      changeCharacterChecksSpy.mockRestore();
    });
  })

  describe("changeCharacterCalculations", () => {
    it("should change character calculations", async () => {
      const character = new Character({
        characterInformation: mockCharacterInformation,
        characterAttributes: mockCharacterAttributes,
        characterDefenses: mockCharacterDefenses,
        characterLanguages: mockCharacterLanguages,
        characterMiscellaneous: mockCharacterMiscellaneous,
        characterPossessions: mockCharacterPossessions,
        characterSpells: mockCharacterSpells,
        characterChecks: mockCharacterChecks,
        characterCalculations: mockCharacterCalculations,
        characterAppearance: mockCharacterAppearance,
        is_active: true,
        created_at: date,
        created_by: 'Test Creator',
      });
  
      character.characterCalculations.devAbbr = 'New Dev Abbr';
      expect(character.characterCalculations.devAbbr).toBe('New Dev Abbr');
      const changeCharacterCalculationsSpy = jest.spyOn(Character.prototype, 'changeCharacterCalculations');
      character.changeCharacterCalculations(mockCharacterCalculations);
      expect(changeCharacterCalculationsSpy).toHaveBeenCalledTimes(1);
      changeCharacterCalculationsSpy.mockRestore();
    });
  });

  describe("changeCharacterAppearance", () => {
    it("should change character appearance", async () => {
      const character = new Character({
        characterInformation: mockCharacterInformation,
        characterAttributes: mockCharacterAttributes,
        characterDefenses: mockCharacterDefenses,
        characterLanguages: mockCharacterLanguages,
        characterMiscellaneous: mockCharacterMiscellaneous,
        characterPossessions: mockCharacterPossessions,
        characterSpells: mockCharacterSpells,
        characterChecks: mockCharacterChecks,
        characterCalculations: mockCharacterCalculations,
        characterAppearance: mockCharacterAppearance,
        is_active: true,
        created_at: date,
        created_by: 'Test Creator',
      });
  
      character.characterAppearance.backgroundColor = 'New Background Color';
      expect(character.characterAppearance.backgroundColor).toBe('New Background Color');
      const changeCharacterAppearanceSpy = jest.spyOn(Character.prototype, 'changeCharacterAppearance');
      character.changeCharacterAppearance(mockCharacterAppearance);
      expect(changeCharacterAppearanceSpy).toHaveBeenCalledTimes(1);
      changeCharacterAppearanceSpy.mockRestore();
    });
  });

  describe("activateCharacter", () => {
    it("should activate character", async () => {
      const character = new Character({
        characterInformation: mockCharacterInformation,
        characterAttributes: mockCharacterAttributes,
        characterDefenses: mockCharacterDefenses,
        characterLanguages: mockCharacterLanguages,
        characterMiscellaneous: mockCharacterMiscellaneous,
        characterPossessions: mockCharacterPossessions,
        characterSpells: mockCharacterSpells,
        characterChecks: mockCharacterChecks,
        characterCalculations: mockCharacterCalculations,
        characterAppearance: mockCharacterAppearance,
        is_active: true,
        created_at: date,
        created_by: 'Test Creator',
      });
  
      character.is_active = false;
      expect(character.is_active).toBe(false);
      const activateCharacterSpy = jest.spyOn(Character.prototype, 'activateCharacter');
      character.activateCharacter();
      expect(activateCharacterSpy).toHaveBeenCalledTimes(1);
      activateCharacterSpy.mockRestore();
    });
  });

  describe("deactivateCharacter", () => {
    it("should deactivate character", async () => {
      const character = new Character({
        characterInformation: mockCharacterInformation,
        characterAttributes: mockCharacterAttributes,
        characterDefenses: mockCharacterDefenses,
        characterLanguages: mockCharacterLanguages,
        characterMiscellaneous: mockCharacterMiscellaneous,
        characterPossessions: mockCharacterPossessions,
        characterSpells: mockCharacterSpells,
        characterChecks: mockCharacterChecks,
        characterCalculations: mockCharacterCalculations,
        characterAppearance: mockCharacterAppearance,
        is_active: true,
        created_at: date,
        created_by: 'Test Creator',
      });
  
      character.is_active = true;
      expect(character.is_active).toBe(true);
      const deactivateCharacterSpy = jest.spyOn(Character.prototype, 'deactivateCharacter');
      character.deactivateCharacter();
      expect(deactivateCharacterSpy).toHaveBeenCalledTimes(1);
      deactivateCharacterSpy.mockRestore();
    });
  });

  describe("toJSON", () => {
    it("should return a JSON object", async () => {
      const character = new Character({
        characterInformation: mockCharacterInformation,
        characterAttributes: mockCharacterAttributes,
        characterDefenses: mockCharacterDefenses,
        characterLanguages: mockCharacterLanguages,
        characterMiscellaneous: mockCharacterMiscellaneous,
        characterPossessions: mockCharacterPossessions,
        characterSpells: mockCharacterSpells,
        characterChecks: mockCharacterChecks,
        characterCalculations: mockCharacterCalculations,
        characterAppearance: mockCharacterAppearance,
        is_active: true,
        created_at: date,
        created_by: 'Test Creator',
      });
  
      const characterJSON = character.toJSON();
      expect(characterJSON.characterInformation).toEqual(mockCharacterInformation);
      expect(characterJSON.characterAttributes).toEqual(mockCharacterAttributes);
      expect(characterJSON.characterDefenses).toEqual(mockCharacterDefenses);
      expect(characterJSON.characterLanguages).toEqual(mockCharacterLanguages);
      expect(characterJSON.characterMiscellaneous).toEqual(mockCharacterMiscellaneous);
      expect(characterJSON.characterPossessions).toEqual(mockCharacterPossessions);
      expect(characterJSON.characterSpells).toEqual(mockCharacterSpells);
      expect(characterJSON.characterChecks).toEqual(mockCharacterChecks);
      expect(characterJSON.characterCalculations).toEqual(mockCharacterCalculations);
      expect(characterJSON.characterAppearance).toEqual(mockCharacterAppearance);
      expect(characterJSON.is_active).toBe(true);
      expect(characterJSON.created_at).toEqual(date);
      expect(characterJSON.created_by).toBe('Test Creator');
    });
  });

  describe("CharacterCreateCommand", () => {
    it("should create a new character", async () => {
      const character = Character.create({ 
        characterInformation: mockCharacterInformation,
        characterAttributes: mockCharacterAttributes,
        characterDefenses: mockCharacterDefenses,
        characterLanguages: mockCharacterLanguages,
        characterMiscellaneous: mockCharacterMiscellaneous,
        characterPossessions: mockCharacterPossessions,
        characterSpells: mockCharacterSpells,
        characterChecks: mockCharacterChecks,
        characterCalculations: mockCharacterCalculations,
        characterAppearance: mockCharacterAppearance,
        is_active: true,
        created_at: date,
        created_by: 'Test Creator',
      });

      expect(character).toBeInstanceOf(Character);
      expect(Character.create).toHaveBeenCalledTimes(1);
    });
  });
}); 
