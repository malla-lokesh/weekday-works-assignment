import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
} from "@mui/material";

const DialogComponent = ({ open, onClose, content }) => {
  return (
    <Dialog open={open} onClose={onClose} content={content}>
      <DialogTitle>Job Description</DialogTitle>
      <DialogContent>
        <DialogContentText>{content}</DialogContentText>
      </DialogContent>
    </Dialog>
  );
};

export default DialogComponent;
