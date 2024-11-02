import { CharacterCalculationsValidatorFactory } from "./characterCalculationsValidator";


// Calculations
export class CharacterCalculations {
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

    constructor(props: CharacterCalculations){
        this.devAbbr = props.devAbbr;
        this.loadcapacity = props.loadcapacity;
        this.weighttotal = props.weighttotal;
        this.sheetColors = props.sheetColors;
        this.totalhpcalcmode = props.totalhpcalcmode;
        this.legacycalc = props.legacycalc;
        this.nocalc = props.nocalc;
        this.hpcalcdescription = props.hpcalcdescription;
        this.professionbonusmode = props.professionbonusmode;
        this.legacyprofbonus = props.legacyprofbonus;
        this.flatprofbonus = props.flatprofbonus;
        this.profbonusmodedescription = props.profbonusmodedescription;
        this.bmr = props.bmr;
        this.walk = props.walk;
        this.fastwalk = props.fastwalk;
        this.run = props.run;
        this.sprint = props.sprint;
        this.accsprint = props.accsprint;
        this.dash = props.dash;
        this.skilldevmode = props.skilldevmode;
        this.legacyskilldev = props.legacyskilldev;
        this.flatskilldev = props.flatskilldev;
        this.skilldevmodedescription = props.skilldevmodedescription;
        this.secundarydevelopmentpoints = props.secundarydevelopmentpoints;
        this.secondaryskilldevmode = props.secondaryskilldevmode;
        this.bonus10 = props.bonus10;
        this.bonus20 = props.bonus20;
        this.bonus25 = props.bonus25;
        this.bonus30 = props.bonus30;
        this.bonus40 = props.bonus40;
        this.bonus50 = props.bonus50;
        this.secondaryskilldevmodedescription = props.secondaryskilldevmodedescription;
    }

    static create(props: CharacterCalculations): CharacterCalculations {
        return new CharacterCalculations(props);
    }

    static validate(attr: any) {
        const validator = CharacterCalculationsValidatorFactory.create();
        return validator.validate(attr);
    }

    changeCharacterCalculations(props: CharacterCalculations): void {
        Object.assign(this, props);
    }
}
