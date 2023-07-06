import {Language} from "./Language.interface";

export type LanguageInput = Pick<Language, "name" | "native_name" | "iso2">;
