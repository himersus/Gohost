import { Dialog, DialogPopup } from "@/components/ui/dialog";
import { UserCircle, X } from "lucide-react";
import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function ConfirmAccount({
  open,
  setOpen,
  email,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  email: string;
}) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogPopup
        showCloseButton={false}
        className="sm:max-w-xl bg-background border-zinc-800 rounded-none!"
      >
        <ScrollArea className="overflow-y-auto">
          <div className="p-10">
            <header className="mb-6 flex items-start justify-between">
              <div>
                {" "}
                <h2 className="text-2xl  text-white">
                  <UserCircle className="inline mb-1 mr-2 h-5 w-5 text-base" />
                  Confirme sua Conta
                </h2>
                <p className="text-zinc-500 max-w-sm pt-3">
                  Por favor, verifique seu e-mail, enviamos um código de
                  confirmação para ativar sua conta.
                </p>
                <p className="text-white mt-4 text-lg">
                  {email || "linomario199010@gmail.com"}
                </p>
              </div>
              <div>
                <button onClick={() => setOpen(false)}>
                  <X className="size-5 text-zinc-600  hover:text-white" />
                </button>
              </div>
            </header>
            <div className="border-t pt-6 items-end grid grid-cols-1 gap-x-4 gap-y-6 border-zinc-800">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <label htmlFor="name" className="text-white">
                    Código de Confirmação
                  </label>
                </div>
                <input
                  type="text"
                  className="w-full py-3 border border-zinc-900 bg-zinc-950 focus:border-base outline-none text-white placeholder:text-zinc-500 text-lg px-5"
                  placeholder="000000"
                  name=""
                  id=""
                />
              </div>

              <div className="col-span-2">
                <button className="px-7 py-3 w-full bg-base border border-zinc-900 transition-all hover:bg-base/80 text-black text-lg">
                  Confirmar Conta
                </button>

                <button className="text-white text-center w-full transition-all hover:text-white/60 mt-5">
                  Reenviar Código
                </button>
              </div>
            </div>
          </div>
        </ScrollArea>
      </DialogPopup>
    </Dialog>
  );
}
