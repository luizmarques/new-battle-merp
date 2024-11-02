// Languages

import { CharacterLanguagesValidatorFactory } from "./characterLanguagesValidator";

export class CharacterLanguages {
    languages?: string;
    spoken?: string;
    writen?: string;

    constructor(props: CharacterLanguages){
        this.languages = props.languages;
        this.spoken = props.spoken;
        this.writen = props.writen;
    }

    static create(props: CharacterLanguages): CharacterLanguages {
        return new CharacterLanguages(props);
    }

    static validate(attr: any) {
        const validator = CharacterLanguagesValidatorFactory.create();
        return validator.validate(attr);
    }

    changeCharacterLanguages(props: CharacterLanguages): void{
        Object.assign(this, props);
    } 
}
