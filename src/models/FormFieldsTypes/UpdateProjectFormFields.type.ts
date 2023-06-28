import {FetchedProject} from "@/models/FetchedProject.interface";
import {SkillMasteryInput} from "@/models/SkillMasteryInput";

export interface UpdateProjectFormFields extends Omit<FetchedProject, "id"> {
  skillsIds?: SkillMasteryInput[];
}
