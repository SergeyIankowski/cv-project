import {Cv} from "@/graphql/interfaces/Cv.interface";
import {Project} from "@/graphql/interfaces/Project.interface";
import {User} from "@/graphql/interfaces/User.interface";

export interface CvTableData {
  id: Cv["id"];
  name: Cv["name"];
  description: Cv["description"];
  userEmail: User["email"];
  projects: Project["name"][];
  isTemplate: Cv["is_template"];
}
