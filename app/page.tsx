import Link from "next/link";
import { MoveRight } from "lucide-react";

const navbarLinks = [
  "Producto",
  "Preços",
  "Recursos",
  "Documentação",
  "Comunidade",
];

export default function Home() {
  return (
    <div>
      <header className="w-full">
        <nav className="border-b grid sticky top-0 left-0 right-0 grid-cols-[20%_60%_20%] items-center justify-between  border-zinc-900 ">
          <div className="px-7">
            <Link
              href={"/"}
              className="flex text-white items-center gap-3 text-3xl "
            >
              <svg
                className="size-7"
                viewBox="0 0 212 179"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M211.252 97.2708C211.252 105.003 204.984 111.271 197.252 111.271H178.486C170.754 111.271 164.486 117.539 164.486 125.271V132.747C164.486 140.479 158.218 146.747 150.486 146.747H107.531C99.7993 146.747 93.5312 153.015 93.5312 160.747V165C93.5312 172.732 87.2632 179 79.5312 179H14C6.26801 179 0 172.732 0 165V149.459C0 141.727 6.26801 135.459 14 135.459H56.9551C64.6871 135.459 70.9551 129.191 70.9551 121.459V117.207C70.9551 109.475 77.2231 103.207 84.9551 103.207H103.721C111.453 103.207 117.721 96.9393 117.721 89.2073V81.7297C117.721 73.9978 123.989 67.7297 131.721 67.7297H197.252C204.984 67.7297 211.252 73.9978 211.252 81.7297V97.2708Z"
                  fill="#DE6220"
                />
                <path
                  d="M0.000244141 29.541C0.000244141 37.273 6.26826 43.541 14.0002 43.541H32.7659C40.4979 43.541 46.7659 49.809 46.7659 57.541V65.0176C46.7659 72.7496 53.0339 79.0176 60.7659 79.0176H103.721C111.453 79.0176 117.721 85.2856 117.721 93.0176V97.2705C117.721 105.002 123.989 111.271 131.721 111.271H197.252C204.984 111.271 211.252 105.002 211.252 97.2705V81.7295C211.252 73.9975 204.984 67.7295 197.252 67.7295H154.297C146.565 67.7295 140.297 61.4615 140.297 53.7295V49.4775C140.297 41.7456 134.029 35.4775 126.297 35.4775H107.531C99.7995 35.4775 93.5315 29.2095 93.5315 21.4775V14C93.5315 6.26801 87.2635 0 79.5315 0H14.0002C6.26826 0 0.000244141 6.26801 0.000244141 14V29.541Z"
                  fill="#DE6220"
                />
              </svg>
              Gohost
            </Link>
          </div>
          <div className="flex items-center justify-center gap-20">
            {navbarLinks.map((link, index) => (
              <button
                className="text-white transition-all hover:text-white/60"
                key={index}
              >
                {link}
              </button>
            ))}
          </div>
          <div className="flex items-center justify-end gap-10">
            <button className="text-white text-lg transition-all hover:text-white/60">
              Entrar
            </button>
            <button className="py-7 text-lg  bg-base transition-all hover:bg-base/70 text-white text-center border-base px-7 leading-none border-l">
              Registre-se
            </button>
          </div>
        </nav>

        <section className="hero  mt-42 gap-20 grid items-end grid-cols-2 max-w-[85%] mx-auto">
          <div className="">
            <h1 className="text-white text-7xl">
              A plataforma que facilita a vida de quem constrói API&apos;s
            </h1>
            <div className="pt-7">
              <p className="text-white/70 text-3xl">
                Crie, gerencie e escale suas API&apos;s com facilidade usando
                nossa plataforma intuitiva e poderosa.
              </p>
            </div>
            <div className="flex mt-10 items-center gap-4">
              <button className="px-7 py-5 bg-white transition-all hover:bg-white/60 text-black text-xl">
                Faça deploy agora
                <MoveRight className="inline-block ml-4 size-5" />
              </button>
              <button className="px-7 py-5 bg-transparent border border-zinc-900 transition-all hover:bg-white/10 text-white text-xl">
                Documentação
              </button>
            </div>
          </div>
          <div className="flex items-end gap-2 justify-end">
            <div className="w-64 rounded-2xl h-52 border border-zinc-900/60 flex flex-col justify-between bg-zinc-950/70">
              <header className="flex ps-5 py-5 gap-2 items-center justify-between text-white">
                <span className="text-base">Websocket</span>
                <hr className="w-full border-zinc-900" />
              </header>
              <footer className="p-5">
                <p className="text-white/80 text-lg">
                  Suporte completo a Websockets para suas API&apos;s.
                </p>
              </footer>
            </div>
            <div className="w-64 rounded-2xl h-72 border border-zinc-900/60 flex flex-col justify-between bg-zinc-950/70">
              <header className="flex ps-5 py-5 gap-2 items-center justify-between text-white">
                <span className="text-base whitespace-nowrap">
                  Sem Hibernação
                </span>
                <hr className="w-full border-zinc-900" />
              </header>
              <footer className="p-5">
                <p className="text-white/80 text-lg">
                  Mantenha suas API&apos;s ativas 24/7 sem hibernação.
                </p>
              </footer>
            </div>
            <div className="w-72 rounded-2xl h-96 bg-base flex flex-col justify-between">
              <header className="flex ps-5 py-5 gap-2 items-center justify-between text-white">
                <span className="text-black whitespace-nowrap">
                  Conteinerização
                </span>
                <hr className="w-full border-zinc-900" />
              </header>
              <footer className="p-5">
                <p className="text-black text-lg">
                  Construa sua API em qualquer linguagem com conteinerização
                </p>
              </footer>
            </div>
          </div>
        </section>
      </header>
    </div>
  );
}
