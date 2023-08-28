import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import { Icon } from "@iconify/react";
import Collapse from "@mui/material/Collapse";
import { useState } from "react";
import Link from "next/link";

export default function SuggestionAlert() {
  const [alert, setAlert] = useState<boolean>(true);
  return (
    <Box className="md:w-4/5 w-full">
      <Collapse in={alert}>
        <Alert
          variant="filled"
          severity="info"
          action={
            <div className="flex gap-5">
              <Link
                target="_blank"
                href="https://discord.com/channels/@me/840720819269140480"
              >
                <div
                  color="inherit"
                  className="border-white h-full py-1 px-2 border-dashed border-2 rounded-lg text-sm md:text-base transition-all hover:bg-slate-950/10"
                >
                  Abrir Discord
                </div>
              </Link>
              <IconButton
                color="inherit"
                size="small"
                onClick={() => {
                  setAlert(false);
                }}
              >
                <Icon icon="material-symbols:close" fontSize="inherit" />
              </IconButton>
            </div>
          }
          className="text-sm md:text-base"
        >
          Tem alguma sugestão? Me envie no discord: cencarnacaoq
        </Alert>
      </Collapse>
    </Box>
  );
}
