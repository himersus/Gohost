"use client";

import { ChevronLeft, X } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();

  return (
    <div className="w-full pot:h-screen grid pot:grid-cols-2 grid-cols-1 lal:grid-cols-[50%_50%]">
      <main className="h-full  pot:order-1 order-2 w-full flex items-center justify-center">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: false }}
          className="pot:max-w-[60%] pot:px-0 px-7 pot:pt- pt-16 w-full mx-auto"
        >
          <header>
            <div className="flex items-center justify-between">
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
                Drenoday
              </Link>
              <button
                onClick={() => router.back()}
                className="size-10 rounded-full flex items-center justify-center text-white/40 hover:text-white transition-all"
              >
                <X className="size-5 " />
              </button>
            </div>
            <p className="text-white/70 text-lg pt-2">
              Inicie sessão na sua conta para continuar
            </p>
            <div className="grid mt-5 border-t pt-6 border-zinc-900 grid-cols-1 gap-2">
              <button className="px-7 py-3 flex items-center justify-center gap-3 bg-transparent border border-zinc-900 transition-all hover:bg-white/10 text-white text-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  className="size-7"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#fbc02d"
                    d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                  ></path>
                  <path
                    fill="#e53935"
                    d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                  ></path>
                  <path
                    fill="#4caf50"
                    d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                  ></path>
                  <path
                    fill="#1565c0"
                    d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                  ></path>
                </svg>
                Continuar com Google
              </button>
              {/* <button className="px-7 py-3 flex items-center justify-center gap-3 bg-transparent border border-zinc-900 transition-all hover:bg-white/10 text-white text-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  className="size-7 fill-white"
                  viewBox="0 0 64 64"
                >
                  <path d="M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.56 19.955 25.286-.592-.141-1.179-.299-1.755-.479V50.85c0 0-.975.325-2.275.325-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792C19.333 23.641 19 22.494 19 20.625c0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.6 29.124 47.6 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32 58 17.641 46.359 6 32 6zM33.813 57.93C33.214 57.972 32.61 58 32 58 32.61 58 33.213 57.971 33.813 57.93zM37.786 57.346c-1.164.265-2.357.451-3.575.554C35.429 57.797 36.622 57.61 37.786 57.346zM32 58c-.61 0-1.214-.028-1.813-.07C30.787 57.971 31.39 58 32 58zM29.788 57.9c-1.217-.103-2.411-.289-3.574-.554C27.378 57.61 28.571 57.797 29.788 57.9z"></path>
                </svg>
                Continuar com Github
              </button> */}
            </div>
          </header>
          <div className="mt-6  grid grid-cols-1 ret:grid-cols-2 gap-3">
            <div className="flex pot:col-span-2 my-5 items-center justify-center">
              <hr className="w-full border-zinc-900" />
              <span className="px-3 bg-background text-white absolute">Ou</span>
            </div>
            <div>
              <input
                type="text"
                className="w-full py-3 border border-zinc-900 bg-zinc-950 focus:border-base outline-none text-white placeholder:text-zinc-500 text-lg px-5"
                placeholder="Nome Completo"
                name=""
                id=""
              />
            </div>
            <div>
              <input
                type="password"
                className="w-full py-3 border focus:border-base border-zinc-900 bg-zinc-950 outline-none text-white placeholder:text-zinc-500 text-lg px-5"
                placeholder="E-mail"
                name=""
                id=""
              />
            </div>
            <div>
              <input
                type="password"
                className="w-full py-3 border focus:border-base border-zinc-900 bg-zinc-950 outline-none text-white placeholder:text-zinc-500 text-lg px-5"
                placeholder="Nova Password"
                name=""
                id=""
              />
            </div>
            <div>
              <input
                type="password"
                className="w-full py-3 border focus:border-base border-zinc-900 bg-zinc-950 outline-none text-white placeholder:text-zinc-500 text-lg px-5"
                placeholder="Confirmar Password"
                name=""
                id=""
              />
            </div>
            <div>
              <button className="px-7 py-3 w-full bg-white border border-zinc-900 transition-all hover:bg-white/80 text-black text-lg">
                Criar Conta
              </button>
            </div>
            <div>
              <Link
                href={"/auth"}
                className="px-7 inline-flex justify-center py-3 w-full bg-base border border-zinc-900 transition-all hover:bg-base/80 text-black text-lg"
              >
                Já tenho uma conta
              </Link>
            </div>
            <div className="mt-4">
              <Link
                href={"/"}
                className="text-white items-center flex text-lg transition-all hover:text-white/60"
              >
                <ChevronLeft className="inline mr-2" />
                Página Inicial
              </Link>
            </div>
          </div>
        </motion.div>
      </main>
      <div
        style={{
          backgroundImage: "url('/images/walp_login.jpg')",
        }}
        className="pot:h-full h-32 pot:order-2 odrer-1 bg-cover bg-center"
      ></div>
    </div>
  );
}
