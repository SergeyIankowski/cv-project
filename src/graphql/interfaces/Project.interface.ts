import {ID} from "./ID.type";
import {Skill} from "./Skill.interface";

export interface Project {
  id: ID;
  created_at: string;
  name: string;
  internal_name?: string;
  description: string;
  domain: string;
  start_date: string;
  end_date?: string;
  team_size: number;
  tech_stack: Skill[];
}
