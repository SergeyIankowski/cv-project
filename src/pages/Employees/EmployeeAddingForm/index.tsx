import {FC, useContext} from "react";
import {useForm} from "react-hook-form";
import {useTranslation} from "react-i18next";
import MenuItem from "@mui/material/MenuItem";
import {Input} from "@containers/Input";
import {Button} from "@containers/Button";
import {useDepartmentsQuery} from "@/graphql/hooks/useDepartmentsQuery";
import {usePositionsQuery} from "@/graphql/hooks/usePositionsQuery";
import {useCreateUser} from "@/graphql/hooks/useCreateUser";
import {convertCreatedUserDataToRequestData} from "@/utils/convertCreatedUserDataToRequestData";
import {ROLES} from "@/models/Roles";
import {Box} from "@mui/material";
import {ModalLayout} from "@view/MuiPagesStyles";
import {CreateUserFormFields} from "@/models/FormFieldsTypes";
import {ModalTemplateContext} from "@view/ModalTemplate/ModalTemplateContext";
import {FIELDS_VALIDATION_MESSAGES} from "@/models/fieldsValidationMessages";
import {ProgressSpinner} from "@view/ProgressSpinner/ProgressSpinner";
import {Department} from "@/graphql/interfaces/Department.interface";
import {Position} from "@/graphql/interfaces/Position.interface";

export const EmployeeAddingForm: FC = () => {
  const {departments} = useDepartmentsQuery();
  const {positions} = usePositionsQuery();
  const {closeModal} = useContext(ModalTemplateContext);
  const {createUser} = useCreateUser();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<CreateUserFormFields>();
  const {t} = useTranslation();

  const onSubmit = async (data: CreateUserFormFields) => {
    const dataToload = convertCreatedUserDataToRequestData(data);
    await createUser(dataToload);
    closeModal();
  };

  if (!positions || !departments) return <ProgressSpinner />;
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box sx={ModalLayout}>
        <Input<CreateUserFormFields>
          control={control}
          type="text"
          id="email"
          label={t("email")}
          name="email"
          rules={{required: true, pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/i}}
          error={Boolean(errors.email)}
          helperText={errors.email && FIELDS_VALIDATION_MESSAGES.incorrectEmail}
        />
        <Input<CreateUserFormFields>
          control={control}
          type="text"
          id="password"
          label={t("password")}
          name="password"
          error={Boolean(errors.password)}
          helperText={errors.password && FIELDS_VALIDATION_MESSAGES.emptyField}
          rules={{required: true}}
        />
        <Input<CreateUserFormFields>
          control={control}
          type="text"
          id="first_name"
          label={t("firstName")}
          name="first_name"
          error={Boolean(errors.first_name)}
          helperText={
            errors.first_name && FIELDS_VALIDATION_MESSAGES.emptyField
          }
          rules={{required: true}}
        />
        <Input
          control={control}
          type="text"
          id="lastName"
          label={t("lastName")}
          name="last_name"
          error={Boolean(errors.last_name)}
          helperText={errors.last_name && FIELDS_VALIDATION_MESSAGES.emptyField}
          rules={{required: true}}
        />
        <Input<CreateUserFormFields>
          control={control}
          select
          id="department"
          label={t("department")}
          name="departmentId"
          error={Boolean(errors.departmentId)}
        >
          {departments.map(
            (department: {name: Department["name"]; id: Department["id"]}) => (
              <MenuItem key={department.name} value={department.id}>
                {department.name}
              </MenuItem>
            )
          )}
        </Input>
        <Input<CreateUserFormFields>
          control={control}
          select
          id="position"
          label={t("position")}
          name="positionId"
          error={Boolean(errors.positionId)}
        >
          {positions.map(
            (position: {name: Position["name"]; id: Position["id"]}) => (
              <MenuItem key={position.name} value={position.id}>
                {position.name}
              </MenuItem>
            )
          )}
        </Input>
        <Input<CreateUserFormFields>
          control={control}
          select
          id="role"
          label={t("role")}
          name="role"
          error={Boolean(errors.role)}
          helperText={errors.role && FIELDS_VALIDATION_MESSAGES.emptyField}
          rules={{required: true}}
        >
          <MenuItem key={ROLES.admin} value={ROLES.admin}>
            {ROLES.admin}
          </MenuItem>
          <MenuItem key={ROLES.employee} value={ROLES.employee}>
            {ROLES.employee}
          </MenuItem>
        </Input>
        <Button variant="contained" color="error" size="small" type="submit">
          {t("createEmployee")}
        </Button>
      </Box>
    </form>
  );
};
