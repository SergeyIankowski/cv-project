import {FC, ReactNode} from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import {Button} from "@containers/Button";
import {useBooleanState} from "@/hooks/useBooleanState";
import {modalStyle} from "./modalStyles";

interface ModalTemplateProps {
  buttonName: string;
  children: ReactNode;
}

export const ModalTemplate: FC<ModalTemplateProps> = ({
  buttonName,
  children,
}) => {
  const [open, setTrue, setFalse] = useBooleanState(false);
  const handleOpen = () => setTrue();
  const handleClose = () => setFalse();

  return (
    <>
      <Button
        variant="contained"
        color="error"
        size="small"
        type="submit"
        onClick={handleOpen}
      >
        {buttonName}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>{children}</Box>
      </Modal>
    </>
  );
};
