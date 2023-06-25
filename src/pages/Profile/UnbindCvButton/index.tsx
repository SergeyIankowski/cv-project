import {FC} from "react";
import {Button} from "@/components/containers/Button";
import {useUnbindCvMutation} from "@/graphql/hooks/useUnbindCvMutation";
import {UpdatedCv} from "@/models/UpdatedCv.type";

interface UnbindCvButtonProps {
  id: UpdatedCv["id"];
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
