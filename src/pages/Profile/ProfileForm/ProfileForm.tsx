import {FC, useEffect} from "react";
import {useParams} from "react-router-dom";
import {useForm} from "react-hook-form";
import {useTranslation} from "react-i18next";
import MenuItem from "@mui/material/MenuItem";
import {Box} from "@mui/material";
import {Input} from "@containers/Input";
import {Button} from "@containers/Button";
import {UpdateUserFormFields} from "@/models/FormFieldsTypes";
import {useDepartmentsQuery} from "@/graphql/hooks/useDepartmentsQuery";
import {usePositionsQuery} from "@/graphql/hooks/usePositionsQuery";
import {useUpdateUser} from "@/graphql/hooks/useUpdateUser";
import {convertProfileFormDataToRequestData} from "@/utils/convertProfileFormDataToRequestData";
import {useUserData} from "@/hooks/useUserData";
import {InputsContainerStyle} from "./ProfileFormStyle";
import {AuthInfoService} from "@/services/AuthInfoService";
import {PROFILE_FORM_KEYS} from "@/models/FormKeysNames";
import {ProgressSpinner} from "@view/ProgressSpinner/ProgressSpinner";

export const ProfileForm: FC = () => {
  const {t} = useTranslation();
  const {departments} = useDepartmentsQuery();
  const {positions} = usePositionsQuery();
  const {id} = useParams();
  const {userData, calledUserData, loadingUserData} = useUserData(id!);
  const {updateUser} = useUpdateUser();
  const {
    control,
    handleSubmit,
    formState: {isDirty},
    reset,
  } = useForm<UpdateUserFormFields>({
    defaultValues: {
      [PROFILE_FORM_KEYS.firstName]: userData.profile.first_name,
      [PROFILE_FORM_KEYS.lastName]: userData.profile.last_name,
      [PROFILE_FORM_KEYS.departmentId]: userData.department?.id,
      [PROFILE_FORM_KEYS.positionId]: userData.position?.id,
    },
    resetOptions: {keepDirtyValues: true},
  });
  const resetFields = () =>
    reset({
      [PROFILE_FORM_KEYS.firstName]: userData.profile.first_name,
      [PROFILE_FORM_KEYS.lastName]: userData.profile.last_name,
      [PROFILE_FORM_KEYS.departmentId]: userData.department?.id,
      [PROFILE_FORM_KEYS.positionId]: userData.position?.id,
    });
  useEffect(() => {
    const userIsUploaded = calledUserData && !loadingUserData && userData;
    if (userIsUploaded) resetFields();
  }, [calledUserData, loadingUserData, userData, positions, departments]);

  const onSubmit = async (data: UpdateUserFormFields) => {
    const dataForSend = convertProfileFormDataToRequestData(data);

    await updateUser(id!, dataForSend);
    resetFields();
  };
  if (loadingUserData) return <ProgressSpinner />;
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box sx={InputsContainerStyle}>
        <Input<UpdateUserFormFields>
          control={control}
          type="text"
          id="first_name"
          label={t("firstName")}
          name="first_name"
        />
        <Input<UpdateUserFormFields>
          control={control}
          type="text"
          id="lastName"
          label={t("lastName")}
          name="last_name"
        />
        <Input<UpdateUserFormFields>
          control={control}
          select
          id="department"
          label={t("department")}
          name="departmentId"
        >
          {departments.map((department: {name: string; id: number}) => (
            <MenuItem key={department.name} value={department.id}>
              {department.name}
            </MenuItem>
          ))}
        </Input>
        <Input<UpdateUserFormFields>
          control={control}
          select
          id="position"
          label={t("position")}
          name="positionId"
        >
          {positions.map((position: {name: string; id: number}) => (
            <MenuItem key={position.name} value={position.id}>
              {position.name}
            </MenuItem>
          ))}
        </Input>
        {AuthInfoService.isAuthorizedUser(id!) || AuthInfoService.isAdmin() ? (
          <Button
            variant="contained"
            color="error"
            size="small"
            type="submit"
            disabled={!isDirty}
          >
            {t("update")}
          </Button>
        ) : (
          ""
        )}
      </Box>
    </form>
  );
};
