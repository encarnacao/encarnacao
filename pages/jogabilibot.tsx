import { getDescriptions } from "@/api";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { DescriptionResponse } from "@/interfaces";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Jogabilibot({
  descriptions,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  if (!descriptions) {
    return (
      <main
        className={`flex min-h-screen items-center justify-center p-24 ${inter.className}`}
      >
        <p>Carregando...</p>
      </main>
    );
  }
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
          className="bg-slate-900"
        />
      </div>
    </main>
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
