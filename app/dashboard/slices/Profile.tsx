import { ScrollArea } from "@radix-ui/react-scroll-area";
import { LockOpen, Trash2 } from "lucide-react";

const ProfileSettingsSlice = () => {
  return (
    <ScrollArea className="h-full flex overflow-y-auto flex-col items-start">
      <section className="p-16 w-full flex items-center justify-between border-b border-zinc-900">
        <div>
          <h4 className="text-white text-5xl">
            Perfil <span className="text-lg text-zinc-600"> / @msalembe</span>
          </h4>
          <span className="text-zinc-200 text-lg mt-2 block">
            linomario199010@gmail.com
          </span>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex transition-all items-center text-white gap-3 px-4 py-2.5 border border-zinc-900 bg-zinc-950">
            <LockOpen className="size-4 text-zinc-600 opacity-60" />
            Criar/Alterar Password
          </button>
        </div>
      </section>
      <div className="p-12">
        <span className="text-zinc-500 uppercase">Perfil</span>
      </div>
      <div className="grid grid-cols-2 w-full px-12 gap-8">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="text-white">
              Nome Completo
            </label>
          </div>
          <input
            type="text"
            className="w-full py-3 border border-zinc-900 bg-zinc-950 focus:border-base outline-none text-white placeholder:text-zinc-500 text-lg px-5"
            placeholder="Drenoday Company"
            name=""
            id=""
          />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="text-white">
              E-mail
            </label>
          </div>
          <input
            type="text"
            className="w-full py-3 border border-zinc-900 bg-zinc-950 focus:border-base outline-none text-white placeholder:text-zinc-500 text-lg px-5"
            placeholder="Drenoday@gmail.com"
            name=""
            id=""
          />
        </div>
        <div className="flex col-span-2 pt-8 flex-col gap-4">
          <h5 className="text-white">Formas de Autenticação</h5>
          <span className="text-zinc-500 max-w-lg">
            Sua conta está atualmente configurada para autenticação por e-mail e
            senha. Você também pode optar por fazer login usando provedores de
            terceiros para maior conveniência.
          </span>
          <div className="flex items-center gap-4  pt-6 ">
            <p className="px-5 border rounded-full py-3 flex items-center justify-center gap-3 bg-transparent  border-zinc-900 transition-all  text-white text-lg">
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
               Google
            </p>
            <p className="px-3 rounded-full border py-3 flex items-center justify-center gap-3 bg-transparent  border-zinc-900 transition-all  text-white text-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                className="size-7 fill-white"
                viewBox="0 0 64 64"
              >
                <path d="M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.56 19.955 25.286-.592-.141-1.179-.299-1.755-.479V50.85c0 0-.975.325-2.275.325-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792C19.333 23.641 19 22.494 19 20.625c0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.6 29.124 47.6 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32 58 17.641 46.359 6 32 6zM33.813 57.93C33.214 57.972 32.61 58 32 58 32.61 58 33.213 57.971 33.813 57.93zM37.786 57.346c-1.164.265-2.357.451-3.575.554C35.429 57.797 36.622 57.61 37.786 57.346zM32 58c-.61 0-1.214-.028-1.813-.07C30.787 57.971 31.39 58 32 58zM29.788 57.9c-1.217-.103-2.411-.289-3.574-.554C27.378 57.61 28.571 57.797 29.788 57.9z"></path>
              </svg>
              Github
            </p>
          </div>
        </div>
      </div>
      <div className="p-12 border-t mt-10 w-full border-zinc-900">
        <span className="text-zinc-500 max-w-2xl pb-7 inline-flex">
          Ao eliminar sua conta, todos os seus dados serão permanentemente
          removidos. Esta ação é irreversível e você perderá acesso a todos os
          seus projetos e configurações.
        </span>
        <button className="flex transition-all items-center text-black gap-3 px-4 py-2.5 border border-zinc-900 bg-white">
          <Trash2 className="size-4 text-zinc-600 opacity-60" />
          Eliminar Conta
        </button>
      </div>
    </ScrollArea>
  );
};

export default ProfileSettingsSlice;
