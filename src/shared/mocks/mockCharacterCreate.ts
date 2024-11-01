import type { CharacterCreateCommand } from "../../character/domain/character.entity";
import { mockCharacterAppearance } from "./mockCharacterAppearance";
import { mockCharacterAttributes } from "./mockCharacterAttributes";
import { mockCharacterCalculations } from "./mockCharacterCalculations";
import { mockCharacterChecks } from "./mockCharacterChecks";
import { mockCharacterDefenses } from "./mockCharacterDefenses";
import { mockCharacterInformation } from "./mockCharacterInformation";
import { mockCharacterLanguages } from "./mockCharacterLanguages";
import { mockCharacterMiscellaneous } from "./mockCharacterMiscellaneous";
import { mockCharacterPossessions } from "./mockCharacterPossessions";
import { mockCharacterSpells } from "./mockCharacterSpells";




const date =  new Date();
export const mockCharacterCreate: CharacterCreateCommand = {
  characterInformation: mockCharacterInformation,
  characterAttributes: mockCharacterAttributes,
  characterDefenses: mockCharacterDefenses,
  characterLanguages: mockCharacterLanguages,
  characterMiscellaneous: mockCharacterMiscellaneous,
  characterPossessions: mockCharacterPossessions,
  characterSpells: mockCharacterSpells,
  characterChecks: mockCharacterChecks,
  characterCalculations: mockCharacterCalculations,
  characterAppearance: mockCharacterAppearance,
  is_active: true,
  created_at: date,
  created_by: "Test Creator",
}