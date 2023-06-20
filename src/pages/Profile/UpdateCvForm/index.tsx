import {FC} from "react";
import {useForm} from "react-hook-form";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {ModalLayout} from "@view/MuiPagesStyles";
import {Input, InputFields} from "@containers/Input";
import {Button} from "@containers/Button";
import {Cv} from "@/models/Cv.type";
import {useUpdateCvMutation} from "@/graphql/hooks/useUpdateCvMutation";
import {convertUpdateCvFormDataToRequestData} from "@/utils/convertUpdateCvFormDataToRequestData";
import {useParams} from "react-router-dom";

interface UpdateCvFormProps {
  data: Cv;
}

export const UpdateCvForm: FC<UpdateCvFormProps> = ({data}) => {
  const {id} = useParams();
  const {updateCv} = useUpdateCvMutation();
  const {control, handleSubmit} = useForm<InputFields>({
    defaultValues: {
      name: data.name,
      description: data.description,
      is_template: data.is_template,
    },
  });
  const onSubmit = (cv: Cv) => {
    const userId = id || "";
    const dataToRequest = convertUpdateCvFormDataToRequestData(userId, cv);
    updateCv(data.id, dataToRequest);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box sx={ModalLayout}>
        <Input
          control={control}
          type="text"
          id="name"
          label="Name"
          name="name"
        />
        <Input
          control={control}
          type="text"
          id="description"
          label="Description"
          name="description"
        />
        <Typography>
          {"Template: "}
          <Input
            control={control}
            type="checkbox"
            id="is_template"
            name="is_template"
          />
        </Typography>
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
