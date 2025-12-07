import { Dialog, DialogPopup } from "@/components/ui/dialog";
import { Megaphone, Search, X } from "lucide-react";
import React from "react";
export default function SearchComponent({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogPopup
        showCloseButton={false}
        className="sm:max-w-2xl flex flex-col justify-between h-[70vh]  bg-background p-0! border-zinc-800! rounded-none!"
      >
        <header className="py-6 px-5 ">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-white text-2xl">
              <Megaphone className="inline mb-1 mr-2 h-5 w-5 text-base" />
              Notificações
            </h3>
            <div>
              <button onClick={() => setOpen(false)}>
                <X className="size-5 text-zinc-600  hover:text-white" />
              </button>
            </div>
          </div>
          <div>
            <div className="w-full flex items-center  border border-zinc-900 bg-zinc-950 focus-within:border-base outline-none text-white placeholder:text-zinc-500 text-lg px-4">
              <Search className="size-5 text-zinc-600 opacity-60 inline-block me-3" />
              <input
                type="text"
                className="w-full py-2.5  bg-zinc-950 focus:border-base outline-none text-white placeholder:text-zinc-500 text-lg "
                placeholder="Pesquisar"
                name=""
                id=""
              />
            </div>
          </div>
        </header>
        <div className="h-full overflow-y-auto border-t border-zinc-800">
          <header className="flex p-6 flex-col items-start gap-4">
            <div className="text-white flex items-center gap-10">
              <div className="flex items-center gap-2">
                <div className="size-3 bg-zinc-700"></div>
                <span>Mensagens lidas</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="size-3 bg-base"></div>
                <span>Mensagens não lidas</span>
              </div>
            </div>
            <span className="text-zinc-500 uppercase pt-6">Recentes</span>
          </header>
          <div className="flex flex-col  gap-10 px-6 pb-6">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
              <div key={index} className="border-b pb-4 border-zinc-800">
                <div>
                  <div className="flex items-center gap-3">
                    <div className="size-2 bg-base"></div>
                    <h6 className="text-white text-lg ">Falha no deploy</h6>
                  </div>
                  <div className="max-w-md">
                    <p className="text-zinc-500 pt-2">
                      Olá Mário, houve uma falha no deploy do seu projeto
                      <strong> unitel-api</strong>. Por favor, verifique os logs
                      para mais detalhes.
                    </p>
                  </div>
                </div>
                <div className="flex w-dull items-center justify-between">
                  <button className="text-zinc-600  pt-3  transition-all hover:text-white">
                    Ler mais
                  </button>
                  <p className="text-zinc-600 pt-2 text-sm">há 2 horas</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </DialogPopup>
    </Dialog>
  );
}
