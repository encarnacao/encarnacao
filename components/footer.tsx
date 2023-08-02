import Link from "next/link";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin-ext'],
  display: 'swap',
})

export default function Footer() {
  return (
    <footer className="w-full h-6 absolute flex bottom-0 justify-center items-center text-slate-700 bg-amarelinho">
      <p className={`font-medium ${roboto.className}`}>
        Projeto de fã criado e mantido por{" "}
        <Link
          href="https://github.com/encarnacao"
          className="text-roxinho font-semibold"
        >
          Caio Encarnação
        </Link>
        . Logo é propriedade do{" "}
        <Link
          href="https://jogabilida.de"
          className="text-roxinho font-semibold"
        >
          Jogabilidade
        </Link>
      </p>
    </footer>
  );
}
