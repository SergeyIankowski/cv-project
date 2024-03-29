import {CreateUserFormFields} from "@/models/FormFieldsTypes";
import {CreatedUser} from "@/models/CreatedUser.type";

export const convertCreatedUserDataToRequestData = (
  data: CreateUserFormFields
) => {
  const requestData: CreatedUser = {
    auth: {
      email: data.email,
      password: data.password,
    },
    profile: {
      first_name: data.first_name,
      last_name: data.last_name,
    },
    departmentId: data.departmentId || "",
    positionId: data.positionId || "",
    cvsIds: [],
    role: data.role!,
  };

  return requestData;
};
