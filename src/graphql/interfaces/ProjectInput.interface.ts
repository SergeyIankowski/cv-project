import {Project} from "./Project.interface";
import {Skill} from "./Skill.interface";

export interface ProjectInput
  extends Omit<Project, "id" | "created_at" | "tech_stack"> {
  skillsIds: Skill["id"][];
}
