import { Close } from "@mui/icons-material";
import { IconButton, Snackbar } from "@mui/material";
import { useState } from "react";

export default function SnackBar() {
  const [snackOpen, setSnackOpen] = useState<boolean>(true);

  const closeSnack = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackOpen(false);
  };

  const action = (
    <>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={closeSnack}
      >
        <Close fontSize="small" />
      </IconButton>
    </>
  );


  return (
    <>
      <Snackbar
        open={snackOpen}
        autoHideDuration={10*1000}
        onClose={closeSnack}
        sx={{ zIndex: 9999 }}
        action={action}
        message="Clique em uma descrição para ver a resposta!"
      />
    </>
  );
}
