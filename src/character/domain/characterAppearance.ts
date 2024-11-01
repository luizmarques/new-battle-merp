import { CharacterAppearanceValidatorFactory } from "./characterAppearance.validator";

// Appearance
export class CharacterAppearance {
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
    
    constructor(props: CharacterAppearance) {
        this.backgroundColor = props.backgroundColor;
        this.default = props.default;
        this.white = props.white;
        this.lilac = props.lilac;
        this.grayscale = props.grayscale;
        this.book = props.book;
        this.seasonSummer = props.seasonSummer;
        this.seasonFall = props.seasonFall;
        this.seasonWinter = props.seasonWinter;
        this.seasonSpring = props.seasonSpring;
        this.backgroundcolordesc = props.backgroundcolordesc;
    }

    static create(props: CharacterAppearance): CharacterAppearance {
        const characterAppearance = new CharacterAppearance(props);
        CharacterAppearance.validate(characterAppearance);
        return characterAppearance
    }

    static validate(attr: any) {
        const validator = CharacterAppearanceValidatorFactory.create();
        return validator.validate(attr);
    }
    
    changeCharacterAppearance(props: CharacterAppearance): void {
        Object.assign(this, props);
    }
}   

