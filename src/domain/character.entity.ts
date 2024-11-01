// Character Information
export type CharacterInformationProps = {
    character_id: number;
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
    defenses: string;
    armorAt: string;
    defensivebonusDb: string;
    withshield: string;
    movementpenalty: string;
    helmet: string;
    armgreaves: string;
    leggreaves: string;
    distancepenalty: string;
    wounds: string;
}

// Languages
export type CharacterLanguagesProps = {
    languages: string;
    spoken: string;
    writen: string;
}

// Miscellaneous
export type CharacterMiscellaneousProps = {
    miscellaneous: string;
    hitdice: string;
    developmentpoints: number;
    primaryskills: string;
    attributemodAbbr: string;
    cost: number;
    professionAbbr: string;
    nbranks: number;
    attributeAbbr: string;
    miscellaneousAbbr: string;
    itemAbbr: string;
    secondaryskills: string;
    weaponskills: string;
    ob: number;
    db: number;
    resistances: string;
    notes: string;
}

// Possessions
export type CharacterPossessionsProps = {
    weight: number;
    possessions: string;
    mithril: number;
    gold: number;
    silver: number;
    bronze: number;
    copper: number;
    iron: number;
}

// Spells
export type CharacterSpellsProps = {
    spelllists: string;
    realm: string;
    listtype: string;
    levelmax: number;
    learnchances: number;
    bookandpage: string;
    spellname: string;
    spellclass: string;
    spellduration: string;
    spellrange: string;
    description: string;
    relations: string;
}

// Checks
export type CharacterChecksProps = {
    constitutioncheck: number;
    agilitycheck: number;
    selfdisciplinecheck: number;
    memorycheck: number;
    reasoningcheck: number;
    strengthcheck: number;
    quicknesscheck: number;
    presencecheck: number;
    empathycheck: number;
    intuitioncheck: number;
    resistancecheck: number;
    ennemydb: number;
    result: string;
}

// Calculations
export type CharacterCalculationsProps = {
    devAbbr: string;
    loadcapacity: number;
    weighttotal: number;
    sheetColors: string;
    totalhpcalcmode: string;
    legacycalc: string;
    nocalc: string;
    hpcalcdescription: string;
    professionbonusmode: string;
    legacyprofbonus: string;
    flatprofbonus: string;
    profbonusmodedescription: string;
    bmr: number;
    walk: number;
    fastwalk: number;
    run: number;
    sprint: number;
    accsprint: number;
    dash: number;
    skilldevmode: string;
    legacyskilldev: string;
    flatskilldev: string;
    skilldevmodedescription: string;
    secundarydevelopmentpoints: number;
    secondaryskilldevmode: string;
    bonus10: number;
    bonus20: number;
    bonus25: number;
    bonus30: number;
    bonus40: number;
    bonus50: number;
    secondaryskilldevmodedescription: string;
}

// Appearance
export type CharacterAppearanceProps = {
    backgroundColor: string;
    default: string;
    white: string;
    lilac: string;
    grayscale: string;
    book: string;
    seasonSummer: string;
    seasonFall: string;
    seasonWinter: string;
    seasonSpring: string;
    backgroundcolordesc: string;
}

// Character Constructor Props
export type CharacterConstructorProps = {
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
    is_active: boolean;
    created_at: Date;
    created_by: string;
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
    is_active: boolean;
    created_at: Date();


    constructor(props: CharacterConstructorProps) {
        Object.assign(this, props);
    }
}