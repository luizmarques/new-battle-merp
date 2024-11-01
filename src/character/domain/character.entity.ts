import 'reflect-metadata';
import type { CharacterConstructorProps } from "./characterConstructorProps";
import { CharacterInformation } from "./characterInformation";
import { CharacterAttributes } from "./characterAttributes";
import { CharacterDefenses } from "./characterDefenses";
import { CharacterLanguages } from "./characterLanguages";
import { CharacterMiscellaneous } from "./characterMiscellaneous";
import { CharacterPossessions } from "./characterPossessions";
import { CharacterChecks } from "./characterChecks";
import { CharacterCalculations } from "./characterCalculations";
import { CharacterValidatorFactory } from "./character.validator";
import { CharacterAppearance } from './characterAppearance';
import { CharacterSpells } from './characterSpells';

export class CharacterCreateCommand {
    characterInformation: CharacterInformation;
    characterAttributes: CharacterAttributes;
    characterDefenses: CharacterDefenses;
    characterLanguages: CharacterLanguages;
    characterMiscellaneous: CharacterMiscellaneous;
    characterPossessions: CharacterPossessions;
    characterSpells: CharacterSpells;
    characterChecks: CharacterChecks;
    characterCalculations: CharacterCalculations;
    characterAppearance: CharacterAppearance;
    is_active?: boolean;
    created_at?: Date;
    created_by?: string;
}

// Character Class
export class Character {
    characterInformation: CharacterInformation;
    characterAttributes: CharacterAttributes;
    characterDefenses: CharacterDefenses;
    characterLanguages: CharacterLanguages;
    characterMiscellaneous: CharacterMiscellaneous;
    characterPossessions: CharacterPossessions;
    characterSpells: CharacterSpells;
    characterChecks: CharacterChecks;
    characterCalculations: CharacterCalculations;
    characterAppearance: CharacterAppearance;
    is_active?: boolean;
    created_at: Date;
    created_by?: string;

    constructor(props: CharacterConstructorProps) {
        this.characterInformation = props.characterInformation;
        this.characterAttributes = props.characterAttributes;
        this.characterDefenses = props.characterDefenses;
        this.characterLanguages = props.characterLanguages;
        this.characterMiscellaneous = props.characterMiscellaneous;
        this.characterPossessions = props.characterPossessions;
        this.characterSpells = props.characterSpells;
        this.characterChecks = props.characterChecks;
        this.characterCalculations = props.characterCalculations;
        this.characterAppearance = props.characterAppearance;
        this.is_active = props.is_active;
        this.created_at = props.created_at;
        this.created_by = props.created_by;
    }

    static create(props: CharacterCreateCommand): Character {
        const entities = {
            characterInformation: CharacterInformation,
            characterAttributes: CharacterAttributes,
            characterDefenses: CharacterDefenses,
            characterLanguages: CharacterLanguages,
            characterMiscellaneous: CharacterMiscellaneous,
            characterPossessions: CharacterPossessions,
            characterSpells: CharacterSpells,
            characterChecks: CharacterChecks,
            characterCalculations: CharacterCalculations,
            characterAppearance: CharacterAppearance,
        };

        const createdProps = Object.entries(entities).reduce((acc, [key, Entity]) => {
            acc[key] = Entity.create(props[key as keyof CharacterCreateCommand] as any);
            return acc;
        }, {} as any);

        const character = new Character({ ...props, ...createdProps });
        
        Character.validate(character);
        return character;
    }

    activateCharacter(): void {
        this.is_active = true;
    }

    deactivateCharacter(): void {
        this.is_active = false;
    }

    static validate(attr: any) {
        const validator = CharacterValidatorFactory.create();
        return validator.validate(attr);
    }

    toJSON() {
        return {
            characterInformation: this.characterInformation,
            characterAttributes: this.characterAttributes,
            characterDefenses: this.characterDefenses,
            characterLanguages: this.characterLanguages,
            characterMiscellaneous: this.characterMiscellaneous,
            characterPossessions: this.characterPossessions,
            characterSpells: this.characterSpells,
            characterChecks: this.characterChecks,
            characterCalculations: this.characterCalculations,
            characterAppearance: this.characterAppearance,
            is_active: this.is_active,
            created_at: this.created_at,
            created_by: this.created_by,
        };
    }
}