// Character Information
export type CharacterInformationProps = {
    character_id?: string;
    characterName: string;
    race: string;
    profession: string;
    level: number;
    experience: number;
    equipment: string;
    magic: string;
    settings: string;
}

// Attributes
export type CharacterAttributesProps = {
    realmpower: number;
    powerpoints: number;
    basehp: number;
    totalhp: number;
    actualhp: number;
    attributes: string;
    temporaryAbbr: string;
    potentialAbbr: string;
    developmentAbbr: string;
    baseAbbr: string;
    raceAbbr: string;
    totalAbbr: string;
    constitution: number;
    agility: number;
    selfdiscipline: number;
    memory: number;
    reasoning: number;
    strength: number;
    quickness: number;
    presence: number;
    empathy: number;
    intuition: number;
}

// Defenses
export type CharacterDefensesProps = {
    defenses?: string;
    armorAt?: string;
    defensivebonusDb?: string;
    withshield?: string;
    movementpenalty?: string;
    helmet?: string;
    armgreaves?: string;
    leggreaves?: string;
    distancepenalty?: string;
    wounds?: string;
}

// Languages
export type CharacterLanguagesProps = {
    languages?: string;
    spoken?: string;
    writen?: string;
}

// Miscellaneous
export type CharacterMiscellaneousProps = {
    miscellaneous?: string;
    hitdice?: string;
    developmentpoints?: number;
    primaryskills?: string;
    attributemodAbbr?: string;
    cost?: number;
    professionAbbr?: string;
    nbranks?: number;
    attributeAbbr?: string;
    miscellaneousAbbr?: string;
    itemAbbr?: string;
    secondaryskills?: string;
    weaponskills?: string;
    ob?: number;
    db?: number;
    resistances?: string;
    notes?: string;
}

// Possessions
export type CharacterPossessionsProps = {
    weight?: number;
    possessions?: string;
    mithril?: number;
    gold?: number;
    silver?: number;
    bronze?: number;
    copper?: number;
    iron?: number;
}

// Spells
export type CharacterSpellsProps = {
    spelllists?: string;
    realm?: string;
    listtype?: string;
    levelmax?: number;
    learnchances?: number;
    bookandpage?: string;
    spellname?: string;
    spellclass?: string;
    spellduration?: string;
    spellrange?: string;
    description?: string;
    relations?: string;
}

// Checks
export type CharacterChecksProps = {
    constitutioncheck?: number;
    agilitycheck?: number;
    selfdisciplinecheck?: number;
    memorycheck?: number;
    reasoningcheck?: number;
    strengthcheck?: number;
    quicknesscheck?: number;
    presencecheck?: number;
    empathycheck?: number;
    intuitioncheck?: number;
    resistancecheck?: number;
    ennemydb?: number;
    result?: string;
}

// Calculations
export type CharacterCalculationsProps = {
    devAbbr?: string;
    loadcapacity?: number;
    weighttotal?: number;
    sheetColors?: string;
    totalhpcalcmode?: string;
    legacycalc?: string;
    nocalc?: string;
    hpcalcdescription?: string;
    professionbonusmode?: string;
    legacyprofbonus?: string;
    flatprofbonus?: string;
    profbonusmodedescription?: string;
    bmr?: number;
    walk?: number;
    fastwalk?: number;
    run?: number;
    sprint?: number;
    accsprint?: number;
    dash?: number;
    skilldevmode?: string;
    legacyskilldev?: string;
    flatskilldev?: string;
    skilldevmodedescription?: string;
    secundarydevelopmentpoints?: number;
    secondaryskilldevmode?: string;
    bonus10?: number;
    bonus20?: number;
    bonus25?: number;
    bonus30?: number;
    bonus40?: number;
    bonus50?: number;
    secondaryskilldevmodedescription?: string;
}

// Appearance
export type CharacterAppearanceProps = {
    backgroundColor?: string;
    default?: string;
    white?: string;
    lilac?: string;
    grayscale?: string;
    book?: string;
    seasonSummer?: string;
    seasonFall?: string;
    seasonWinter?: string;
    seasonSpring?: string;
    backgroundcolordesc?: string;
}

// Character Constructor Props
export type CharacterConstructorProps = {
    characterInformation?: CharacterInformationProps;
    characterAttributes?: CharacterAttributesProps;
    characterDefenses?: CharacterDefensesProps;
    characterLanguages?: CharacterLanguagesProps;
    characterMiscellaneous?: CharacterMiscellaneousProps;
    characterPossessions?: CharacterPossessionsProps;
    characterSpells?: CharacterSpellsProps;
    characterChecks?: CharacterChecksProps;
    characterCalculations?: CharacterCalculationsProps;
    characterAppearance?: CharacterAppearanceProps;
    is_active?: boolean;
    created_at?: Date;
    created_by?: string;
}

export type CharacterCreateCommand = {
    characterInformation: CharacterInformationProps;
    characterAttributes: CharacterAttributesProps;
    characterDefenses: CharacterDefensesProps;
    characterLanguages: CharacterLanguagesProps;
    characterMiscellaneous: CharacterMiscellaneousProps;
    characterPossessions: CharacterPossessionsProps;
    characterSpells: CharacterSpellsProps;
    characterChecks: CharacterChecksProps;
    characterCalculations: CharacterCalculationsProps;
    characterAppearance: CharacterAppearanceProps;
    is_active?: boolean;
    created_at?: Date;
    created_by?: string;
}

// Character Class
export class Character {
    characterInformation: CharacterInformationProps;
    characterAttributes: CharacterAttributesProps;
    characterDefenses: CharacterDefensesProps;
    characterLanguages: CharacterLanguagesProps;
    characterMiscellaneous: CharacterMiscellaneousProps;
    characterPossessions: CharacterPossessionsProps;
    characterSpells: CharacterSpellsProps;
    characterChecks: CharacterChecksProps;
    characterCalculations: CharacterCalculationsProps;
    characterAppearance: CharacterAppearanceProps;
    is_active?: boolean;
    created_at: Date;
    created_by?: string;

    constructor(props: CharacterConstructorProps) {
        this.characterInformation = props.characterInformation ?? { characterName: '', race: '', profession: '', level: 0, experience: 0, equipment: '', magic: '', settings: '' };
        this.characterAttributes = props.characterAttributes ?? { realmpower: 0, powerpoints: 0, basehp: 0, totalhp: 0, actualhp: 0, attributes: '', temporaryAbbr: '', potentialAbbr: '', developmentAbbr: '', baseAbbr: '', raceAbbr: '', totalAbbr: '', constitution: 0, agility: 0, selfdiscipline: 0, memory: 0, reasoning: 0, strength: 0, quickness: 0, presence: 0, empathy: 0, intuition: 0 };
        this.characterDefenses = props.characterDefenses ?? {};
        this.characterLanguages = props.characterLanguages ?? {};
        this.characterMiscellaneous = props.characterMiscellaneous ?? {};
        this.characterPossessions = props.characterPossessions ?? {};
        this.characterSpells = props.characterSpells ?? {};
        this.characterChecks = props.characterChecks ?? {};
        this.characterCalculations = props.characterCalculations ?? {};
        this.characterAppearance = props.characterAppearance ?? {};
        this.is_active = props.is_active ?? true;
        this.created_at = props.created_at ?? new Date();
        this.created_by = props.created_by ?? '';

    }

    static create(props: CharacterCreateCommand): Character {
        return new Character(props);
    }

    changeCharacterInformation(props: CharacterInformationProps): void {
        this.characterInformation = props;
    }

    changeCharacterAttributes(props: CharacterAttributesProps): void{
        this.characterAttributes = props;
    }

    changeCharacterDefenses(props: CharacterDefensesProps): void{
        this.characterDefenses = props;
    }

    changeCharacterLanguages(props: CharacterLanguagesProps): void{
        this.characterLanguages = props;
    } 

    changeCharacterMiscellaneous(props: CharacterMiscellaneousProps): void{
        this.characterMiscellaneous = props;
    }

    changeCharacterPossessions(props: CharacterPossessionsProps): void{
    
        this.characterPossessions = props;
    }

    changeCharacterSpells(props: CharacterSpellsProps): void{
        this.characterSpells = props;
    }

    changeCharacterChecks(props: CharacterChecksProps): void{
        this.characterChecks = props;
    }

    changeCharacterCalculations(props: CharacterCalculationsProps): void{
        this.characterCalculations = props;
    }

    changeCharacterAppearance(props: CharacterAppearanceProps): void{
        this.characterAppearance = props;
    }

    activateCharacter(): void{
        this.is_active = true;

    }

    deactivateCharacter(): void {
        this.is_active =false;
    }

    toJSON() {
        return {
            characterInformation: this.characterInformation,
            characterAttributes: this.characterAttributes,
            characterDefenses: this.characterDefenses,
            characterLanguages: this.characterLanguages,
            characterMiscellaneous: this.characterMiscellaneous,
            characterPossessions: this.characterPossessions,
            characterSpells: this.characterSpells,
            characterChecks: this.characterChecks,
            characterCalculations: this.characterCalculations,
            characterAppearance: this.characterAppearance,
            is_active: this.is_active,
            created_at: this.created_at,
            created_by: this.created_by,
        }
    }
}