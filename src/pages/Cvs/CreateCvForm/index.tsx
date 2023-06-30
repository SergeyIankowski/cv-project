/* eslint-disable react/jsx-props-no-spreading */
import {FC, useContext} from "react";
import {useFieldArray, useForm} from "react-hook-form";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";

import {Input} from "@containers/Input";
import {Button} from "@containers/Button";
import {SkillsInputsGroup} from "@containers/SkillsInputsGroup";
import {LanguagesInputsGroup} from "@containers/LanguagesInputsGroup";
import {ModalLayout} from "@view/MuiPagesStyles";
import {ModalTemplateContext} from "@view/ModalTemplate/ModalTemplateContext";
import {CreateCvFormFields} from "@/models/FormFieldsTypes";
import {FIELDS_VALIDATION_MESSAGES} from "@/models/fieldsValidationMessages";
import {LanguagesProficiency} from "@/models/LanguagesProficiency";
import {SkillsMastery} from "@/models/SkillsMastery";
import {useEmployeesQuery} from "@/graphql/hooks/useEmployeesQuery";
import {User} from "@/graphql/interfaces/User.interface";

export const CreateCvForm: FC = () => {
  const {closeModal} = useContext(ModalTemplateContext);
  const {users} = useEmployeesQuery();
  const {
    control,
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<CreateCvFormFields>({
    defaultValues: {
      userId: "",
      is_template: false,
    },
  });

  const {
    fields: fieldsSkills,
    append: appendSkill,
    remove: removeSkill,
  } = useFieldArray({
    control,
    name: "skills" as never,
  });
  const {
    fields: fieldsLanguages,
    append: appendLanguage,
    remove: removeLanguage,
  } = useFieldArray({
    control,
    name: "languages" as never,
  });

  const onSubmit = async (data: CreateCvFormFields) => {
    console.log(data);
    closeModal();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box sx={ModalLayout}>
        <Input<CreateCvFormFields>
          control={control}
          type="text"
          id="name"
          label="Name *"
          name="name"
          rules={{required: true}}
          error={Boolean(errors.name)}
          helperText={errors.name && FIELDS_VALIDATION_MESSAGES.emptyField}
        />
        <Input<CreateCvFormFields>
          control={control}
          type="text"
          id="description"
          label="Description *"
          name="description"
          rules={{required: true}}
          error={Boolean(errors.description)}
          helperText={errors.name && FIELDS_VALIDATION_MESSAGES.emptyField}
        />
        <Input<CreateCvFormFields>
          control={control}
          select
          id="userId"
          label="User"
          name="userId"
        >
          {users.map((user: User) => (
            <MenuItem key={user.email} value={user.id}>
              {user.email}
            </MenuItem>
          ))}
        </Input>
        <SkillsInputsGroup<CreateCvFormFields>
          fieldName="skills"
          fields={fieldsSkills}
          register={register}
          append={appendSkill}
          remove={removeSkill}
          clearSkill={{skill_name: "", mastery: SkillsMastery.advanced}}
          removeButtonTitle="Remove Skill"
          addButtonTitle="Add Skill"
        />
        <LanguagesInputsGroup<CreateCvFormFields>
          name="languages"
          fields={fieldsLanguages}
          register={register}
          append={appendLanguage}
          remove={removeLanguage}
          clearLanguage={{
            language_name: "",
            proficiency: LanguagesProficiency.a1,
          }}
          removeButtonTitle="Remove Language"
          addButtonTitle="Add Language"
        />
        <Input<CreateCvFormFields>
          control={control}
          type="checkbox"
          id="is_template"
          label="Template*"
          name="is_template"
        />
        <Button variant="contained" color="error" size="small" type="submit">
          Create Cv
        </Button>
      </Box>
    </form>
  );
};
