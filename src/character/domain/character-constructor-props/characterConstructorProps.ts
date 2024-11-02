import type { CharacterAppearance } from "../character-appearance/characterAppearance";
import type { CharacterAttributes } from "../character-attributes/characterAttributes";
import type { CharacterCalculations } from "../character-calculations/characterCalculations";
import type { CharacterChecks } from "../character-checks/characterChecks";
import type { CharacterDefenses } from "../character-defenses/characterDefenses";
import type { CharacterInformation } from "../character-information/characterInformation";
import type { CharacterLanguages } from "../character-languages/characterLanguages";
import type { CharacterMiscellaneous } from "../character-miscellaneous/characterMiscellaneous";
import type { CharacterPossessions } from "../character-possessions/characterPossessions";
import type { CharacterSpells } from "../character-spells/characterSpells";

// Character Constructor Props
export type CharacterConstructorProps = {
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
    
};
