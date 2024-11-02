// Defenses

import { CharacterDefensesValidatorFactory } from "./characterDefensesValidator";

export class CharacterDefenses {
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

    constructor(props: CharacterDefenses){
        this.defenses = props.defenses;
        this.armorAt = props.armorAt;
        this.defensivebonusDb = props.defensivebonusDb;
        this.withshield = props.withshield;
        this.movementpenalty = props.movementpenalty;
        this.helmet = props.helmet;
        this.armgreaves = props.armgreaves;
        this.leggreaves = props.leggreaves;
        this.distancepenalty = props.distancepenalty;
        this.wounds = props.wounds;
    }

    static create(props: CharacterDefenses): CharacterDefenses {
        return new CharacterDefenses(props);
    }

    static validate(attr: any) {
        const validator = CharacterDefensesValidatorFactory.create();
        return validator.validate(attr);
    }

    changeCharacterDefenses(props: CharacterDefenses): void{
        Object.assign(this, props);
    }
}
