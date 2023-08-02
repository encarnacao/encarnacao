import { getDescriptions } from "@/api";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { DataGrid, GridColDef, GridEventListener } from "@mui/x-data-grid";
import { DescriptionResponse } from "@/interfaces";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import AnswerModal from "@/components/modal";
import Head from "next/head";

export default function Jogabilibot({
  descriptions,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [id, setId] = useState<number>(-1);
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = (id: number) => {
    setId(id);
    setOpen(true);
  };

  const handleClose = () => {
    setId(-1);
    setOpen(false);
  };

  const handleEvent: GridEventListener<"rowClick"> = (
    params // GridRowParams
  ) => {
    handleOpen(params.id as number);
  };

  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "#",
      flex: 0.1,
    },
    {
      field: "description",
      headerName: "Descrição",
      flex: 0.7,
    },
    {
      field: "createdAt",
      headerName: "Data de criação",
      flex: 0.2,
    },
  ];
  return (
    <>
      <Head>
        <link rel="icon" href="https://jogabilida.de/wp-content/uploads/2023/04/cropped-bilid-fav-32x32.png" />
        <title>Jogabilibot - Descrições</title>
      </Head>
      <main className="min-h-screen flex flex-col justify-start gap-5 items-center bg-roxinho py-10">
        <div className="flex w-full justify-around">
          <Link href="https://jogabilida.de">
            <Image
              src="https://jogabilida.de/wp-content/uploads/2017/09/logo_2017-1.png"
              width={240}
              height={80}
              alt="Logo do Jogabilidade"
            />
          </Link>
          <Link href="https://twitch.tv/jogabilidade">
            <Image
              src="https://www.freepnglogos.com/uploads/purple-twitch-logo-png-18.png"
              width={80}
              height={80}
              alt="Canal da Twitch"
            />
          </Link>
        </div>
        {open && (
          <AnswerModal
            descriptionId={id}
            modalStatus={open}
            setModalStatus={handleClose}
          />
        )}
        <div className="md:w-4/5 transition-all w-full">
          <DataGrid
            rows={descriptions}
            columns={columns}
            sx={{
              color: "white",
              borderColor: "#1e2735",
              "& .MuiDataGrid-cell": {
                borderBottomColor: "#1e2735",
              },
            }}
            onRowClick={handleEvent}
            className="bg-slate-900"
          />
        </div>
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<{
  descriptions: DescriptionResponse[];
}> = async () => {
  const descriptions = await getDescriptions();
  return {
    props: {
      descriptions,
    },
  };
};
