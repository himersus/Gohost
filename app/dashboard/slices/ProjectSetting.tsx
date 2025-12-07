import { Copy, GitGraph, Pause, Paperclip, Plus } from "lucide-react";
import { ScrollArea } from "../../../components/ui/scroll-area";
import CollpseItems from "../components/CollapsableRep";
import EnviermentGroup from "../components/EnviermentGroup";
import React from "react";

const ProjectSettings = () => {
  const [enviromentGroups, setEnviromentGroups] = React.useState<
    {
      key: string;
      value: string;
    }[]
  >([{ key: "", value: "" }]);

  const removeEnviromentGroup = (index: number) => {
    const newGroups = [...enviromentGroups];
    newGroups.splice(index, 1);
    setEnviromentGroups(newGroups);
  };

  return (
    <ScrollArea className="h-full flex overflow-y-auto flex-col items-start">
      <section className=" border-b border-zinc-900 p-12 w-full">
        <header className="w-full flex items-start justify-between">
          <div className="w-full">
            {" "}
            <span className="uppercase text-zinc-600">Hospedagem</span>
            <h3 className="text-white text-4xl pt-4">unitel-api</h3>
            <div className="bg-zinc-950 max-w-md mt-4 flex items-center justify-between px-4 py-2 border border-zinc-900/60">
              <span className="text-white/60">
                https://api.gohost.com/honor
              </span>
              <button>
                <Copy className="size-4 text-zinc-600 hover:text-white transition-all" />
              </button>
            </div>
            <p className="flex mt-5 items-center gap-2 text-white">
              <GitGraph className="inline-block size-4 me-1 text-base " />
              mariosalembe / unitel-api
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex transition-all items-center text-white gap-3 px-4 py-2.5 border border-zinc-900 bg-zinc-950">
              <Pause className="size-4 text-zinc-600 opacity-60" />
              Suspender
            </button>
          </div>
        </header>
      </section>
      <div className="p-12">
        <span className="text-zinc-500 uppercase">Configurações</span>
        <div className="grid grid-cols-2 w-full mt-10 gap-8">
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
              placeholder="gohost"
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
                Selecione a branch padrão do seu repositório para implantações
                automáticas.
              </span>
            </div>
            <CollpseItems />
          </div>
        </div>
      </div>
      <div className="mt-10 border-t border-zinc-900 pt-12 px-12 w-full">
        <span className="text-zinc-500 uppercase">
          Conteinerização & Deploys
        </span>
      </div>
      <div className="grid grid-cols-2 w-full p-12 gap-8">
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
              Auto Deploy
            </label>
            <span className="text-zinc-500 text-sm">
              Por padrão, o GoHost implanta automaticamente seu projeto sempre
              que uma nova alteração é enviada para a branch.
            </span>
          </div>
          <CollpseItems />
        </div>
      </div>
      <div className="mt-10 border-t border-zinc-900 pt-12 px-12 w-full">
        <div className="flex items-start justify-between">
          <div className="flex flex-col gap-3">
            <span className="text-zinc-500 uppercase">
              Variáveis de Ambiente
            </span>
            {enviromentGroups.length == 0 && (
              <span className="text-zinc-200">
                Nenhuma variável de ambiente adicionada
              </span>
            )}
          </div>
          <div className="flex items-center gap-4">
            <button className="flex transition-all items-center text-white gap-3 px-4 py-2.5 border border-zinc-900 bg-zinc-950">
              <Paperclip className="size-4 text-zinc-600 opacity-60" />
              Importar arquivo .env
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 w-full px-12 py-8 gap-4">
        {enviromentGroups.map((env, index) => (
          <EnviermentGroup
            removeEnviromentGroup={() => removeEnviromentGroup(index)}
            key={index}
          />
        ))}
      </div>
      <footer className="px-12 pb-10">
        <button
          onClick={() =>
            setEnviromentGroups([...enviromentGroups, { key: "", value: "" }])
          }
          className="flex transition-all items-center text-black gap-3 px-4 py-2.5 border border-zinc-900 bg-white"
        >
          <Plus className="size-4 text-zinc-600 opacity-60" />
          Adicionar Variável
        </button>
      </footer>
    </ScrollArea>
  );
};

export default ProjectSettings;