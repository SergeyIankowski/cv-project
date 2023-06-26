import {FetchedProject} from "./FetchedProject";
import {SkillMasteryInput} from "./SkillMasteryInput";

export interface UpdatedProject extends Omit<FetchedProject, "id"> {
  skillsIds?: SkillMasteryInput[];
}
