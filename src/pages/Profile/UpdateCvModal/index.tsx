import {FC} from "react";
import {ModalTemplate} from "@view/ModalTemplate";
import {UpdateCvForm} from "@/pages/Profile/UpdateCvForm";
import {Cv} from "@/models/Cv.type";

interface UpdateCvModalProps {
  cvData: Cv;
}

export const UpdateCvModal: FC<UpdateCvModalProps> = ({cvData}) => {
  return (
    <ModalTemplate buttonName="UpdateCv">
      <UpdateCvForm data={cvData} />
    </ModalTemplate>
  );
};
