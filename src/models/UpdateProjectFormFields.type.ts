import {FetchedProject} from "./FetchedProject";
import {SkillMasteryInput} from "./SkillMasteryInput";

export interface UpdateProjectFormFields extends Omit<FetchedProject, "id"> {
  skillsIds?: SkillMasteryInput[];
}
