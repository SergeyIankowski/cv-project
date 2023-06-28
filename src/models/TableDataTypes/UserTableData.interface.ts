import {Profile} from "@/graphql/interfaces/Profile.interface";
import {User} from "@/graphql/interfaces/User.interface";

export interface UserTableData {
  id: User["id"];
  imgPath: Profile["avatar"];
  firstName: Profile["first_name"];
  lastName: Profile["last_name"];
  email: User["email"];
  department: User["department_name"];
  position: User["position_name"];
}
