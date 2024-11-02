// Possessions

import { CharacterPossessionsValidatorFactory } from "./characterPossessionsValidator";

export class CharacterPossessions {
    weight?: number;
    possessions?: string;
    mithril?: number;
    gold?: number;
    silver?: number;
    bronze?: number;
    copper?: number;
    iron?: number;

    constructor(props: CharacterPossessions){
        this.weight = props.weight;
        this.possessions = props.possessions;
        this.mithril = props.mithril;
        this.gold = props.gold;
        this.silver = props.silver;
        this.bronze = props.bronze;
        this.copper = props.copper;
        this.iron = props.iron;
    }

    static create(props: CharacterPossessions): CharacterPossessions { 
        return new CharacterPossessions(props);
    }

    static validate(attr: any) {
        const validator = CharacterPossessionsValidatorFactory.create();
        return validator.validate(attr);
    }

    changeCharacterPossessions(props: CharacterPossessions): void{
        Object.assign(this, props);
    }
}
