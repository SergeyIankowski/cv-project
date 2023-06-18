import {FC} from "react";
import {Button} from "@/components/containers/Button";
import {useUnbindCvMutation} from "@/graphql/hooks/useUnbindCvMutation";
import {CvData} from "@/models/CvData";

interface UnbindCvButtonProps {
  id: CvData["id"];
}

export const UnbindCvButton: FC<UnbindCvButtonProps> = ({id}) => {
  const {unbindCv} = useUnbindCvMutation();

  const clickHandler = async () => {
    await unbindCv(id);
  };
  return (
    <Button
      sx={{alignSelf: "center"}}
      variant="contained"
      color="error"
      size="small"
      onClick={clickHandler}
    >
      Unbind CV
    </Button>
  );
};
