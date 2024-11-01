// Checks

import { CharacterChecksValidatorFactory } from "./characterChecksValidator";

export class CharacterChecks {
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

    constructor(props: CharacterChecks){
        this.constitutioncheck = props.constitutioncheck;
        this.agilitycheck = props.agilitycheck;
        this.selfdisciplinecheck = props.selfdisciplinecheck;
        this.memorycheck = props.memorycheck;
        this.reasoningcheck = props.reasoningcheck;
        this.strengthcheck = props.strengthcheck;
        this.quicknesscheck = props.quicknesscheck;
        this.presencecheck = props.presencecheck;
        this.empathycheck = props.empathycheck;
        this.intuitioncheck = props.intuitioncheck;
        this.resistancecheck = props.resistancecheck;
        this.ennemydb = props.ennemydb;
        this.result = props.result;
    }

    static create(props: CharacterChecks): CharacterChecks {
        return new CharacterChecks(props);
    }

    static validate(attr: any) {
        const validator = CharacterChecksValidatorFactory.create();
        return validator.validate(attr);
    }

    changeCharacterChecks(props: CharacterChecks): void{
        Object.assign(this, props);
    }
}
