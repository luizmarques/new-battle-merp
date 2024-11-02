import { Uuid } from "../../../shared/domain/value-objects/uuid.vo";
import { CharacterInformationValidatorFactory } from "./characterInformationValidator";

// Character Information
export class CharacterInformation {
    character_id?: Uuid;
    characterName: string;
    race: string;
    profession: string;
    level: number;
    experience: number;
    equipment: string;
    magic: string;
    settings: string;
    

    constructor(props: CharacterInformation) {
        this.character_id = props.character_id || new Uuid();
        this.characterName = props.characterName;
        this.race = props.race;
        this.profession = props.profession;
        this.level = props.level;
        this.experience = props.experience;
        this.equipment = props.equipment;
        this.magic = props.magic;
        this.settings = props.settings;
    }

    static create(props: CharacterInformation): CharacterInformation {  
        return new CharacterInformation(props);
    }

    static validate(attr: any) {
        const validator = CharacterInformationValidatorFactory.create();
        return validator.validate(attr);
    }
    
    changeCharacterInformation(props: CharacterInformation): void {
        Object.assign(this, props);
    }
}
