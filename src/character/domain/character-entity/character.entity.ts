import 'reflect-metadata';
import type { CharacterConstructorProps } from "../character-constructor-props/characterConstructorProps";
import { CharacterInformation } from "../character-information/characterInformation";
import { CharacterAttributes } from "../character-attributes/characterAttributes";
import { CharacterDefenses } from "../character-defenses/characterDefenses";
import { CharacterLanguages } from "../character-languages/characterLanguages";
import { CharacterPossessions } from "../character-possessions/characterPossessions";
import { CharacterChecks } from "../character-checks/characterChecks";
import { CharacterCalculations } from "../character-calculations/characterCalculations";
import { CharacterAppearance } from '../character-appearance/characterAppearance';
import { CharacterSpells } from '../character-spells/characterSpells';
import { CharacterValidatorFactory } from './character.validator';
import { CharacterMiscellaneous } from '../character-miscellaneous/characterMiscellaneous';

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
        this.created_at = props.created_at ?? new Date();
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

    static validate(attr: any) {
        const validator = CharacterValidatorFactory.create();
        return validator.validate(attr);
    }

    activateCharacter(): void {
        this.is_active = true;
    }

    deactivateCharacter(): void {
        this.is_active =false;
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