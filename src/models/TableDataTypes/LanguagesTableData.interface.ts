import {Language} from "@/graphql/interfaces/Language.interface";

export interface LanguagesTableData {
  id: Language["id"];
  name: Language["name"];
  nativeName: Language["native_name"];
  iso2: Language["iso2"];
}
