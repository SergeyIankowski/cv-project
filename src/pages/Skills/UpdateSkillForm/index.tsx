import {FC, useContext} from "react";
import {useForm} from "react-hook-form";
import Box from "@mui/material/Box";
import {Input} from "@containers/Input";
import {Button} from "@containers/Button";
import {ModalTemplateContext} from "@view/ModalTemplate/ModalTemplateContext";
import {ModalLayout} from "@view/MuiPagesStyles";
import {SkillInput} from "@/graphql/interfaces/SkillInput";
import {UpdateSkillFormFields} from "@/models/FormFieldsTypes";
import {Skill} from "@/graphql/interfaces/Skill.interface";
import {useUpdateSkillMutation} from "@/graphql/hooks/useUpdateSkillMutation";
import {useTranslation} from "react-i18next";

interface UpdateSkillFormProps {
  id: Skill["id"];
  name: SkillInput["name"];
}

export const UpdateSkillForm: FC<UpdateSkillFormProps> = ({id, name}) => {
  const {control, handleSubmit} = useForm<UpdateSkillFormFields>({
    defaultValues: {
      name,
    },
  });
  const {closeModal} = useContext(ModalTemplateContext);
  const {updateSkill} = useUpdateSkillMutation();
  const {t} = useTranslation();

  const onSubmit = async (data: SkillInput) => {
    await updateSkill(id, data);
    closeModal();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box sx={ModalLayout}>
        <Input<UpdateSkillFormFields>
          control={control}
          id="name"
          label={t("name")}
          name="name"
        />
        <Button variant="contained" color="error" size="small" type="submit">
          {t("create")}
        </Button>
      </Box>
    </form>
  );
};
