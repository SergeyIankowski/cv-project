import {FC, ReactNode, useContext} from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import {Button} from "@containers/Button";
import {modalStyle} from "./modalStyles";
import {ModalTemplateContext} from "@view/ModalTemplate/ModalTemplateContext";

interface ModalTemplateProps {
  buttonName: string;
  children: ReactNode;
}

export const ModalTemplate: FC<ModalTemplateProps> = ({
  buttonName,
  children,
}) => {
  const {isOpen, openModal, closeModal} = useContext(ModalTemplateContext);

  return (
    <>
      <Button
        variant="contained"
        color="error"
        size="small"
        type="submit"
        onClick={openModal}
      >
        {buttonName}
      </Button>
      <Modal
        open={isOpen}
        onClose={closeModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>{children}</Box>
      </Modal>
    </>
  );
};
