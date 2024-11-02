import { CharacterSpellsValidatorFactory } from "./characterSpellsValidator";


// Spells
export class CharacterSpells {
    spelllists?: string;
    realm?: string;
    listtype?: string;
    levelmax?: number;
    learnchances?: number;
    bookandpage?: string;
    spellname?: string;
    spellclass?: string;
    spellduration?: string;
    spellrange?: string;
    description?: string;
    relations?: string;

    constructor(props: CharacterSpells){
        this.spelllists = props.spelllists;
        this.realm = props.realm;
        this.listtype = props.listtype;
        this.levelmax = props.levelmax;
        this.learnchances = props.learnchances;
        this.bookandpage = props.bookandpage;
        this.spellname = props.spellname;
        this.spellclass = props.spellclass;
        this.spellduration = props.spellduration;
        this.spellrange = props.spellrange;
        this.description = props.description;
        this.relations = props.relations;
    }

    static create(props: CharacterSpells): CharacterSpells {
        return new CharacterSpells(props);
    }

    static validate(attr: any) {
        const validator = CharacterSpellsValidatorFactory.create();
        return validator.validate(attr);
    }

    changeCharacterSpells(props: CharacterSpells): void{
        Object.assign(this, props);
    }
}
