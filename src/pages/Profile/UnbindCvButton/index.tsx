import {FC} from "react";
import {useTranslation} from "react-i18next";
import {Button} from "@/components/containers/Button";
import {useUnbindCvMutation} from "@/graphql/hooks/useUnbindCvMutation";
import {Cv} from "@/graphql/interfaces/Cv.interface";

interface UnbindCvButtonProps {
  id: Cv["id"];
}

export const UnbindCvButton: FC<UnbindCvButtonProps> = ({id}) => {
  const {unbindCv} = useUnbindCvMutation();
  const {t} = useTranslation();

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
      {t("unbindCv")}
    </Button>
  );
};
