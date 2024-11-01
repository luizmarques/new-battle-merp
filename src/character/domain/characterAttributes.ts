import { CharacterAttributesValidatorFactory } from "./characterAttributes.validator";

export class CharacterAttributes {
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

    constructor(props: CharacterAttributes) {
        this.realmpower = props.realmpower;
        this.powerpoints = props.powerpoints;
        this.basehp = props.basehp;
        this.totalhp = props.totalhp;
        this.actualhp = props.actualhp;
        this.attributes = props.attributes;
        this.temporaryAbbr = props.temporaryAbbr;
        this.potentialAbbr = props.potentialAbbr;
        this.developmentAbbr = props.developmentAbbr;
        this.baseAbbr = props.baseAbbr;
        this.raceAbbr = props.raceAbbr;
        this.totalAbbr = props.totalAbbr;
        this.constitution = props.constitution;
        this.agility = props.agility;
        this.selfdiscipline = props.selfdiscipline;
        this.memory = props.memory;
        this.reasoning = props.reasoning;
        this.strength = props.strength;
        this.quickness = props.quickness;
        this.presence = props.presence;
        this.empathy = props.empathy;
        this.intuition = props.intuition;
    }
    
    static create(props: CharacterAttributes): CharacterAttributes {
        const characterAppearance = new CharacterAttributes(props);
        CharacterAttributes.validate(characterAppearance);
        return characterAppearance
    }

    static validate(attr: any) {
        const validator = CharacterAttributesValidatorFactory.create();
        return validator.validate(attr);
    }
    
    changeCharacterAttributes(props: CharacterAttributes): void {
        Object.assign(this, props);
    }
}