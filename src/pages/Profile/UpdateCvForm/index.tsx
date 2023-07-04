import {FC, useContext} from "react";
import {useForm} from "react-hook-form";
import Box from "@mui/material/Box";
import {ModalLayout} from "@view/MuiPagesStyles";
import {Input} from "@containers/Input";
import {Button} from "@containers/Button";
import {UpdateCvFormFields} from "@/models/FormFieldsTypes";
import {useUpdateCvMutation} from "@/graphql/hooks/useUpdateCvMutation";
import {convertUpdateCvFormDataToRequestData} from "@/utils/convertUpdateCvFormDataToRequestData";
import {useParams} from "react-router-dom";
import {Cv} from "@/graphql/interfaces/Cv.interface";
import {ModalTemplateContext} from "@view/ModalTemplate/ModalTemplateContext";

interface UpdateCvFormProps {
  cvId: Cv["id"];
  cv: Pick<Cv, "name" | "description" | "is_template">;
}

export const UpdateCvForm: FC<UpdateCvFormProps> = ({cv, cvId}) => {
  const {id} = useParams();
  const {updateCv} = useUpdateCvMutation();
  const {closeModal} = useContext(ModalTemplateContext);
  const {control, handleSubmit} = useForm<UpdateCvFormFields>({
    defaultValues: {
      name: cv.name,
      description: cv.description,
      is_template: cv.is_template,
    },
  });
  const onSubmit = async (cv: UpdateCvFormFields) => {
    const userId = id || "";
    const dataToRequest = convertUpdateCvFormDataToRequestData(userId, cv);
    await updateCv(cvId, dataToRequest);
    closeModal();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box sx={ModalLayout}>
        <Input<UpdateCvFormFields>
          control={control}
          type="text"
          id="name"
          label="Name"
          name="name"
        />
        <Input<UpdateCvFormFields>
          control={control}
          type="text"
          id="description"
          label="Description"
          name="description"
        />
        <Input<UpdateCvFormFields>
          control={control}
          type="checkbox"
          label="Template"
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
          Update CV
        </Button>
      </Box>
    </form>
  );
};
