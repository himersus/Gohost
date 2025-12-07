import {
  Copy,
  Ellipsis,
  GitGraph,
  MoveRight,
  Package,
  Plus,
  Search,
} from "lucide-react";
import { React } from "next/dist/server/route-modules/app-page/vendored/rsc/entrypoints";

interface ProjectsSliceProps {
  setOpenCreateProject: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProjectsSlice: React.FC<ProjectsSliceProps> = ({
  setOpenCreateProject,
}) => {
  return (
    <section>
      <section className="p-20">
        <header className="flex items-center justify-between">
          <div>
            <h1 className="text-white font-semibold text-5xl">
              Projectos - API&apos;s
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex transition-all items-center text-white  hover:text-white gap-2 px-4 py-2.5 border border-zinc-900 bg-zinc-950">
              <Plus className="size-4" />
              Convidar Membros
            </button>
            <button
              onClick={() => setOpenCreateProject(true)}
              className="flex transition-all items-center text-white gap-2 px-4 py-2.5 border border-base/60 bg-base/30"
            >
              <Package className="size-4 text-base" />
              Fazer Deploy
            </button>
          </div>
        </header>

        <div className="mt-20 flex items-center justify-between">
          <div className="flex w-full transition-all items-center text-white gap-3 px-4  border border-zinc-900 bg-zinc-950">
            <Search className="size-5 text-zinc-600 opacity-60" />
            <input
              type="text"
              className="w-full placeholder:text-white/70 py-2.5 outline-none"
              placeholder="Pesquisar "
              name=""
              id=""
            />
          </div>
        </div>

        <div className="flex mt-8 items-center">
          <button className="flex relative justify-between transition-all items-center text-lg text-white gap-2 px-6 py-2 border border-zinc-950 bg-zinc-950">
            Activas
            <span className="absolute -top-2 z-20 -right-2 bg-green-600 text-white text-xs size-5 rounded-full flex items-center justify-center ">
              3
            </span>
          </button>
          <button className="flex relative justify-between transition-all items-center text-lg text-white gap-2 px-6 py-2 border border-zinc-950 bg-background">
            Suspensas
            <span className="absolute -top-2  z-20 -right-2 bg-red-600 text-white text-xs size-5 flex rounded-full items-center justify-center ">
              5
            </span>
          </button>
          <button className="flex relative justify-between transition-all items-center text-lg text-white gap-2 px-6 py-2 border border-zinc-950 bg-background">
            Todas
            <span className="absolute -top-2 -right-2 bg-base text-white text-xs size-5 flex items-center rounded-full justify-center ">
              5
            </span>
          </button>
        </div>
        <div className="mt-10 grid grid-cols-4 divide-x divide-zinc-900">
          <div className="h-80 flex flex-col justify-between border-y border-zinc-900/50 p-7">
            <header className="flex items-start justify-between">
              <div>
                <h3 className="text-white text-xl">Honor API</h3>
                <span className="text-zinc-600">Deploy há 2h</span>
              </div>
              <div>
                <button className="text-zinc-500 hover:text-white transition-all">
                  <Ellipsis className="size-5 " />
                </button>
              </div>
            </header>
            <footer>
              <p className="uppercase text-[12px] bg-green-40 border border-green-700 bg-green-600/50 inline-flex px-2 py-1 text-green-300">
                Serviço Ativo
              </p>
              <div className="bg-zinc-950 flex items-center justify-between px-4 py-2 mt-2 border border-zinc-900/60">
                <span className="text-white/60">
                  https://api.Drenoday.com/honor
                </span>
                <button>
                  <Copy className="size-4 text-zinc-600 hover:text-white transition-all" />
                </button>
              </div>
              <div className="w-full mt-2">
                <button className="flex w-full justify-between transition-all items-center text-lg text-black hover:bg-white/80 gap-2 px-4 py-2.5 border border-white bg-white">
                  Gerenciar
                  <MoveRight className="size-4 " />
                </button>
              </div>
              <p className="mt-4 text-zinc-300 flex items-center">
                <GitGraph className="inline-block size-5 me-2 text-base " />
                Add novas funcionalidades
              </p>
            </footer>
          </div>
          <div className="h-80 border-y border-zinc-900/50 p-6"></div>
        </div>
      </section>
    </section>
  );
};

export default ProjectsSlice;
