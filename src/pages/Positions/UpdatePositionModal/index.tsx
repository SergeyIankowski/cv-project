import {FC, ReactNode} from "react";
import {ModalTemplate} from "@view/ModalTemplate";
import {ModalContextTemplateProvider} from "@view/ModalTemplate/ModalTemplateContext";
import {Position} from "@/graphql/interfaces/Position.interface";
import {UpdatePositionForm} from "../UpdatePositionForm";

interface UpdatePositionModalProps {
  id: Position["id"];
  name: Position["name"];
  children: ReactNode;
}

export const UpdatePositionModal: FC<UpdatePositionModalProps> = ({
  id,
  name,
  children,
}) => {
  return (
    <ModalContextTemplateProvider>
      {children}
      <ModalTemplate>
        <UpdatePositionForm id={id} name={name} />
      </ModalTemplate>
    </ModalContextTemplateProvider>
  );
};
