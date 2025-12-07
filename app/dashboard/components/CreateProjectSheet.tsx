import { Dialog, DialogPopup } from "@/components/ui/dialog";
import { Package, X } from "lucide-react";
import React from "react";
import CollpseItems from "./CollapsableRep";
import { ScrollArea } from "@/components/ui/scroll-area";
import { plans } from "@/app/page";
import ConvertMoneyFormat from "@/components/Generics/ConvertMoney";

export default function CreateProjectSheet({
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
        className="sm:max-w-5xl bg-background border-zinc-800 rounded-none!"
      >
        <ScrollArea className="overflow-y-auto">
          <div className="p-10">
            <header className="mb-8 flex items-start justify-between">
              <div>
                {" "}
                <h2 className="text-2xl  text-white">
                  <Package className="inline mb-1 mr-2 h-5 w-5 text-base" />
                  Criar Novo Projeto
                </h2>
                <p className="text-zinc-500 max-w-sm pt-3">
                  Prepare seu ambiente de desenvolvimento criando um novo
                  projeto agora.
                </p>
              </div>
              <div>
                <button onClick={() => setOpen(false)}>
                  <X className="size-5 text-zinc-600  hover:text-white" />
                </button>
              </div>
            </header>
            <div className="border-t pt-6 items-end grid grid-cols-2 gap-x-4 gap-y-6 border-zinc-800">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <label htmlFor="name" className="text-white">
                    Nome do Projeto
                  </label>
                  <span className="text-zinc-500 text-sm">
                    Este será o nome exibido no seu dashboard e utilizado para
                    definir o subdomínio público.
                  </span>
                </div>
                <input
                  type="text"
                  className="w-full py-3 border border-zinc-900 bg-zinc-950 focus:border-base outline-none text-white placeholder:text-zinc-500 text-lg px-5"
                  placeholder="Drenoday"
                  name=""
                  id=""
                />
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <label htmlFor="name" className="text-white">
                    Repositório Git
                  </label>
                  <span className="text-zinc-500 text-sm">
                    Conecte o repositório do seu projeto para implantações
                    automáticas.
                  </span>
                </div>
                <CollpseItems />
              </div>
              <div className="flex col-span-2 flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <label htmlFor="name" className="text-white">
                    Branch Padrão
                  </label>
                  <span className="text-zinc-500 text-sm">
                    Selecione a branch padrão do seu repositório para
                    implantações automáticas.
                  </span>
                </div>
                <CollpseItems />
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <label htmlFor="name" className="text-white">
                    Comando de Build
                  </label>
                  <span className="text-zinc-500 text-sm">
                    Defina o comando necessário para construir seu projeto.
                  </span>
                </div>
                <input
                  type="text"
                  className="w-full py-3 border border-zinc-900 bg-zinc-950 focus:border-base outline-none text-white placeholder:text-zinc-500 text-lg px-5"
                  placeholder="Ex.: pnpm run build"
                  name=""
                  id=""
                />
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <label htmlFor="name" className="text-white">
                    Comando de Start
                  </label>
                  <span className="text-zinc-500 text-sm">
                    Defina o comando necessário para iniciar seu projeto.
                  </span>
                </div>
                <input
                  type="text"
                  className="w-full py-3 border border-zinc-900 bg-zinc-950 focus:border-base outline-none text-white placeholder:text-zinc-500 text-lg px-5"
                  placeholder="Ex.: pnpm run start"
                  name=""
                  id=""
                />
              </div>
              <div className="flex col-span-2 flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <label htmlFor="name" className="text-white">
                    Plano de Hospedagem
                  </label>
                  <span className="text-zinc-500 text-sm">
                    Escolha o plano de hospedagem que melhor se adapta às suas
                    necessidades.
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {plans.map((plan, index) => (
                    <div
                      key={index}
                      className="p-5 bg-zinc-950 border border-zinc-900 cursor-pointer hover:border-base"
                    >
                      <h3 className="text-white text-lg">{plan.title}</h3>
                      <p className="text-zinc-500 text-sm">
                        {plan.description}
                      </p>
                      Sessão
                      <p className="text-base text-2xl pt-1">
                        {ConvertMoneyFormat(plan.price)}
                      </p>
                      <p className="text-zinc-100 text-sm">
                        - Duração de {plan.duration}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-span-2">
                <button className="px-7 py-3 w-full bg-base border border-zinc-900 transition-all hover:bg-base/80 text-black text-lg">
                  Criar Projeto
                </button>
              </div>
              <div className="col-span-2">
                <span className="text-zinc-500 text-sm">
                  Obs: Todas as outras Configurações, como VariSessãoáveis de
                  Ambiente, Domínios Personalizados e Configurações Avançadas
                  podem ser ajustadas após a criação do projeto.
                </span>
              </div>
            </div>
          </div>
        </ScrollArea>
      </DialogPopup>
    </Dialog>
  );
}
