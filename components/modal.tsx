import { useEffect, useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { CircularProgress } from "@mui/material";
import { getAnswer } from "@/api";
import { AnswerResponse } from "@/interfaces";

export default function AnswerModal({
  descriptionId,
  modalStatus,
  setModalStatus,
}: {
  descriptionId: number;
  modalStatus: boolean;
  setModalStatus: () => void;
}) {
  const [loading, setLoading] = useState<boolean>(true);
  const [answer, setAnswer] = useState<AnswerResponse>();
  useEffect(() => {
    getAnswer(descriptionId).then((res) => {
      setAnswer(res);
      setLoading(false);
    });
  }, []);
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    border: "2px solid #C4A12E",
    boxShadow: 24,
    color: "white",
    p: 4,
  };
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={modalStatus}
      onClose={setModalStatus}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={modalStatus}>
        <Box sx={style} className="bg-roxinho flex justify-center items-center">
          {loading ? (
            <CircularProgress />
          ) : (
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              {answer?.id === -1
                ? `Não há uma respota para essa descrição. 
                Você pode me enviar no discord cencarnacaoq ou mandar um sussurro na twitch`
                : answer?.answer}
            </Typography>
          )}
        </Box>
      </Fade>
    </Modal>
  );
}
