import {FC} from "react";
import {ModalTemplate} from "@view/ModalTemplate";
import {ModalContextTemplateProvider} from "@view/ModalTemplate/ModalTemplateContext";
import {CreatePositionForm} from "../CreatePositionForm";

export const CreatePositionModal: FC = () => {
  return (
    <ModalContextTemplateProvider>
      <ModalTemplate buttonName="Create Position">
        <CreatePositionForm />
      </ModalTemplate>
    </ModalContextTemplateProvider>
  );
};
