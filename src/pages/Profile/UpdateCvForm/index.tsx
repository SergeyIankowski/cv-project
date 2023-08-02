import {FC, useContext} from "react";
import {useForm} from "react-hook-form";
import Box from "@mui/material/Box";
import {ModalLayout} from "@view/MuiPagesStyles";
import {Input} from "@containers/Input";
import {Button} from "@containers/Button";
import {UpdateCvFormFields} from "@/models/FormFieldsTypes";
import {useUpdateCvMutation} from "@/graphql/hooks/useUpdateCvMutation";
import {addMissingCvFieldsToRequest} from "@/utils/addMissingCvFieldsToRequest";
import {Cv} from "@/graphql/interfaces/Cv.interface";
import {ModalTemplateContext} from "@view/ModalTemplate/ModalTemplateContext";
import {User} from "@/graphql/interfaces/User.interface";
import {useCvQuery} from "@/graphql/hooks/useCvQuery";
import {FIELDS_VALIDATION_MESSAGES} from "@/models/fieldsValidationMessages";
import {UPDATE_CV_FORM_KEYS} from "@/models/FormKeysNames";
import {useTranslation} from "react-i18next";

interface UpdateCvFormProps {
  cvId: Cv["id"];
  cv: Cv;
  userId: User["id"] | undefined;
}

export const UpdateCvForm: FC<UpdateCvFormProps> = ({cv, cvId, userId}) => {
  const {updateCv} = useUpdateCvMutation();
  const {loadCv} = useCvQuery();
  const {closeModal} = useContext(ModalTemplateContext);
  const {t} = useTranslation();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<UpdateCvFormFields>({
    defaultValues: {
      [UPDATE_CV_FORM_KEYS.name]: cv.name,
      [UPDATE_CV_FORM_KEYS.description]: cv.description,
      [UPDATE_CV_FORM_KEYS.is_template]: cv.is_template,
    },
  });
  const onSubmit = async (formData: UpdateCvFormFields) => {
    const dataToRequest = addMissingCvFieldsToRequest(userId, formData, cv);
    await updateCv(cvId, dataToRequest);
    await loadCv(cvId);
    closeModal();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box sx={ModalLayout}>
        <Input<UpdateCvFormFields>
          control={control}
          type="text"
          id="name"
          label={t("name")}
          name="name"
          rules={{required: true}}
          error={Boolean(errors.name)}
          helperText={errors.name && FIELDS_VALIDATION_MESSAGES.emptyField}
        />
        <Input<UpdateCvFormFields>
          control={control}
          type="text"
          id="description"
          label={t("description")}
          name="description"
          rules={{required: true}}
          error={Boolean(errors.description)}
          helperText={
            errors.description && FIELDS_VALIDATION_MESSAGES.emptyField
          }
        />
        <Input<UpdateCvFormFields>
          control={control}
          type="checkbox"
          label={t("template")}
          id="is_template"
          name="is_template"
        />
        <Button
          sx={{alignSelf: "center"}}
          variant="contained"
          color="error"
          size="small"
          type="submit"
        >
          {t("updateCv")}
        </Button>
      </Box>
    </form>
  );
};
