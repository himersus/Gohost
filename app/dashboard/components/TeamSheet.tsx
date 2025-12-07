import { Dialog, DialogPopup } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChevronDown, Megaphone, X } from "lucide-react";
import React from "react";
export default function TeamSheet({
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
              Team
            </h3>
            <div>
              <button onClick={() => setOpen(false)}>
                <X className="size-5 text-zinc-600  hover:text-white" />
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="name" className="text-white">
                E-mail
              </label>
              <span className="text-zinc-500 text-sm">
                Insira o e-mail do membro que deseja adicionar ao time.
              </span>
            </div>
            <input
              type="text"
              className="w-full py-3 border border-zinc-900 bg-zinc-950 focus:border-base outline-none text-white placeholder:text-zinc-500 text-lg px-5"
              placeholder="member@gmail.com"
              name=""
              id=""
            />
          </div>
        </header>
        <ScrollArea className="h-full overflow-y-auto border-t border-zinc-800">
          <header className="flex p-6 flex-col items-start gap-4">
            <div className="text-white flex items-center gap-10">
              <div className="flex items-center gap-2">
                <div className="size-3 bg-zinc-700"></div>
                <span>Pedidos pendentes</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="size-3 bg-base"></div>
                <span>Membros ativos</span>
              </div>
            </div>
            <span className="text-zinc-500 uppercase pt-4">Membros</span>
          </header>
          <div className="flex flex-col  gap-3 px-6 pb-6">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
              <div key={index} className="py-2.5 px-3 border-zinc-900 border">
                <div className="flex items-center justify-between">
                  <div className="flex items-center ps-3 gap-3">
                    <h6 className="text-white text-lg ">msalembe@gmail.com</h6>
                    <span className="size-2 inline-flex rounded-full bg-base"></span>
                  </div>
                  <div className="flex items-center gap-3">
                    <button className="flex items-center text-white px-4 py-2 border border-zinc-900 bg-zinc-950">
                      Admin
                      <ChevronDown className="inline-block ms-2 size-4 text-zinc-600 hover:text-white transition-all" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </DialogPopup>
    </Dialog>
  );
}
