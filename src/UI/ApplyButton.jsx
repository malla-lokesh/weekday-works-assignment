import styled from "@emotion/styled";
import { Button } from "@mui/material";

const ApplyButton = () => {
  const ColouredBtn = styled(Button)(() => ({
    color: "#000",
    backgroundColor: "#54EFC4",
    "&:hover": {
      backgroundColor: "#54EFC4",
    },
  }));

  return (
    <ColouredBtn variant="contained" disableRipple fullWidth>
      ⚡️Easy Apply
    </ColouredBtn>
  );
};

export default ApplyButton;
