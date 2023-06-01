import {FC, useEffect} from "react";
import {useParams} from "react-router-dom";
import {useForm} from "react-hook-form";
import MenuItem from "@mui/material/MenuItem";
import {Box} from "@mui/material";
import {Input, InputFields} from "@containers/Input";
import {Button} from "@containers/Button";
import {UploadedUser} from "@/models/UploadedUser.type";
import {useDepartmentsQuery} from "@/graphql/hooks/useDepartmentsQuery";
import {usePositionsQuery} from "@/graphql/hooks/usePositionsQuery";
import {useUpdateUser} from "@/graphql/hooks/useUpdateUser";
import {convertProfileFormDataToRequestData} from "@/utils/convertProfileFormDataToRequestData";
import {useUserData} from "@/hooks/useUserData";
import {InputsContainerStyle} from "./ProfileFormStyle";

export const ProfileForm: FC = () => {
  const {departments} = useDepartmentsQuery();
  const {positions} = usePositionsQuery();
  const {id} = useParams();
  const {loadProfileInfo, userData, called, loadingUserData} = useUserData(id!);
  const {updateUser} = useUpdateUser();
  const {
    control,
    handleSubmit,
    formState: {isDirty},
    reset,
  } = useForm<InputFields>({
    defaultValues: {
      first_name: userData.profile.first_name,
      last_name: userData.profile.last_name,
      departmentId: userData.department?.id,
      positionId: userData.position?.id,
    },
    resetOptions: {keepDirtyValues: true},
  });
  const resetFields = () =>
    reset({
      first_name: userData.profile.first_name,
      last_name: userData.profile.last_name,
      departmentId: userData.department?.id,
      positionId: userData.position?.id,
    });
  useEffect(() => {
    if (called && !loadingUserData && userData) {
      resetFields();
    }
  }, [called, loadingUserData, userData, positions, departments]);

  const onSubmit = async (data: UploadedUser) => {
    try {
      const dataForSend = convertProfileFormDataToRequestData(data);

      await updateUser({
        variables: {
          id: id,
          user: dataForSend,
        },
      });

      loadProfileInfo;
    } catch (e) {
      console.error(e);
    }
    resetFields();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box sx={InputsContainerStyle}>
        <Input
          control={control}
          type="text"
          id="first_name"
          label="First Name"
          name="first_name"
        />
        <Input
          control={control}
          type="text"
          id="lastName"
          label="Last Name"
          name="last_name"
        />
        <Input
          control={control}
          select
          id="department"
          label="Departments"
          name="departmentId"
        >
          {departments.map((department: {name: string; id: number}) => (
            <MenuItem key={department.name} value={department.id}>
              {department.name}
            </MenuItem>
          ))}
        </Input>
        <Input
          control={control}
          select
          id="position"
          label="Position"
          name="positionId"
        >
          {positions.map((position: {name: string; id: number}) => (
            <MenuItem key={position.name} value={position.id}>
              {position.name}
            </MenuItem>
          ))}
        </Input>
        <Button
          variant="contained"
          color="error"
          size="small"
          type="submit"
          disabled={!isDirty}
        >
          Update
        </Button>
      </Box>
    </form>
  );
};
