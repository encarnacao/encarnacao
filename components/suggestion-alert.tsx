import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import Link from "next/link";

export default function SuggestionAlert() {
  const [alert, setAlert] = useState<boolean>(true);
  return (
    <Box sx={{ width: "80%" }}>
      <Collapse in={alert}>
        <Alert
          variant="filled"
          severity="info"
          action={
            <div className="flex gap-5">
              <Link target="_blank" href="https://discord.com/channels/@me/840720819269140480">
                <IconButton
                  aria-label="open discord"
                  color="inherit"
                  size="small"
                  className="border-white border-dashed border-2 rounded-lg text-base"
                >
                  Abrir Discord
                </IconButton>
              </Link>
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setAlert(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            </div>
          }
          sx={{ mb: 2 }}
        >
          Tem alguma sugestão? Me envie no discord: cencarnacaoq
        </Alert>
      </Collapse>
    </Box>
  );
}
