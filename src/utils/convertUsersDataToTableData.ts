import {User} from "@/graphql/interfaces/User.interface";
import {UserTableData} from "@/models/TableDataTypes";

type ConvertUsersDataToTableData = (data: User[]) => UserTableData[];
export const convertUsersDataToTableData: ConvertUsersDataToTableData =
  data => {
    return data.map((user: User) => {
      return {
        id: user.id,
        imgPath: user.profile.avatar,
        firstName: user.profile.first_name,
        lastName: user.profile.last_name,
        email: user.email,
        department: user.department_name,
        position: user.position_name,
      };
    });
  };
