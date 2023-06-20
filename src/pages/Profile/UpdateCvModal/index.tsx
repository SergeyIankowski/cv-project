import {FC} from "react";
import {ModalTemplate} from "@view/ModalTemplate";
import {UpdateCvForm} from "@/pages/Profile/UpdateCvForm";
import {UpdatedCv} from "@/models/UpdatedCv.type";

interface UpdateCvModalProps {
  cvData: UpdatedCv;
}

export const UpdateCvModal: FC<UpdateCvModalProps> = ({cvData}) => {
  return (
    <ModalTemplate buttonName="UpdateCv">
      <UpdateCvForm data={cvData} />
    </ModalTemplate>
  );
};
