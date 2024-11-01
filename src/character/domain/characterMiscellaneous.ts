import { CharacterMiscellaneousValidatorFactory } from "./characterMiscellaneousValidator";



// Miscellaneous
export class CharacterMiscellaneous {
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

    constructor(props: CharacterMiscellaneous){
        this.miscellaneous = props.miscellaneous;
        this.hitdice = props.hitdice;
        this.developmentpoints = props.developmentpoints;
        this.primaryskills = props.primaryskills;
        this.attributemodAbbr = props.attributemodAbbr;
        this.cost = props.cost;
        this.professionAbbr = props.professionAbbr;
        this.nbranks = props.nbranks;
        this.attributeAbbr = props.attributeAbbr;
        this.miscellaneousAbbr = props.miscellaneousAbbr;
        this.itemAbbr = props.itemAbbr;
        this.secondaryskills = props.secondaryskills;
        this.weaponskills = props.weaponskills;
        this.ob = props.ob;
        this.db = props.db;
        this.resistances = props.resistances;
        this.notes = props.notes;
    }

    static create(props: CharacterMiscellaneous): CharacterMiscellaneous {
        return new CharacterMiscellaneous(props);
    } 
    
    static validate(attr: any) {
        const validator = CharacterMiscellaneousValidatorFactory.create();
        return validator.validate(attr);
    }

    changeCharacterMiscellaneous(props: CharacterMiscellaneous): void{
        Object.assign(this, props);
    }
}
