import {LanguagesProficiency} from "./LanguagesProficiency";

export interface LanguagesProficiencyInput {
  language_name: string;
  proficiency:
    | LanguagesProficiency.a1
    | LanguagesProficiency.a2
    | LanguagesProficiency.b1
    | LanguagesProficiency.b2
    | LanguagesProficiency.c1
    | LanguagesProficiency.c2
    | LanguagesProficiency.native;
}
