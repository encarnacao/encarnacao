import { Icon } from "@iconify/react";
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
    <IconButton color="inherit" onClick={closeSnack}>
      <Icon icon="material-symbols:close" />
    </IconButton>
  );

  return (
    <>
      <Snackbar
        open={snackOpen}
        autoHideDuration={10 * 1000}
        onClose={closeSnack}
        sx={{ zIndex: 9999 }}
        action={action}
        message="Clique em uma descrição para ver a resposta!"
      />
    </>
  );
}
