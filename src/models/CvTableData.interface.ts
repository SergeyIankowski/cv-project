import {Cv} from "@/graphql/interfaces/Cv.interface";
import {User} from "@/graphql/interfaces/User.interface";

export interface CvTableData {
  id: Cv["id"];
  name: Cv["name"];
  description: Cv["description"];
  userEmail: User["email"];
  isTemplate: Cv["is_template"];
}
