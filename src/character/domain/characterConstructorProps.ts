import type { CharacterAppearance } from "./characterAppearance";
import type { CharacterAttributes } from "./characterAttributes";
import type { CharacterCalculations } from "./characterCalculations";
import type { CharacterChecks } from "./characterChecks";
import type { CharacterDefenses } from "./characterDefenses";
import type { CharacterInformation } from "./characterInformation";
import type { CharacterLanguages } from "./characterLanguages";
import type { CharacterMiscellaneous } from "./characterMiscellaneous";
import type { CharacterPossessions } from "./characterPossessions";
import type { CharacterSpells } from "./characterSpells";

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
