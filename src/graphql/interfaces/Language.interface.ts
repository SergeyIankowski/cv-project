import {ID} from "./ID.type";

export interface Language {
  id: ID;
  created_at: string;
  iso2: string;
  name: string;
  native_name?: string;
}
