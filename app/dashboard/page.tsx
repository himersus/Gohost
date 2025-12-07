"use client";

import {
  ChevronsUpDown,
  CircleQuestionMark,
  CircleUser,
  Command,
  Container,
  Copy,
  Database,
  Ellipsis,
  GitGraph,
  Group,
  LayoutDashboard,
  Megaphone,
  MessageSquareText,
  MoveRight,
  Package,
  Plus,
  Search,
  Settings,
  WalletCards,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import CreateProjectSheet from "./components/CreateProjectSheet";

const navbarItems = [
  {
    group: "Workspace",
    items: [
      {
        name: "Projectos",
        icon: Package,
        href: "/projects",
      },
      {
        name: "Variáveis",
        icon: Container,
        href: "/envs",
      },
      {
        name: "Notificações",
        icon: Megaphone,
        href: "/envs",
      },
    ],
  },
  {
    group: "Sistema",
    items: [
      {
        name: "Perfil",
        icon: CircleUser,
        href: "/projects",
      },
      { name: "Métricas", icon: MessageSquareText, href: "/dashboard" },
      {
        name: "Team",
        icon: Group,
        href: "/envs",
      },
      {
        name: "Planos & Pagamentos",
        icon: WalletCards,
        href: "/envs",
      },
    ],
  },
  {
    group: "Conta",
    items: [
      {
        name: "Suporte Técnico",
        icon: CircleQuestionMark,
        href: "/projects",
      },
      { name: "Configurações", icon: Settings, href: "/dashboard" },
    ],
  },
];

export default function DashboardPage() {
  const [openCreateProject, setOpenCreateProject] = React.useState(false);

  return (
    <div className="h-screen w-full grid grid-rows-[8%_92%]">
      <header className="border-b divide-x divide-zinc-900 w-full grid grid-cols-[18%_82%] border-zinc-900">
        <div className="flex items-center ">
          <div className="border-r bg-base/10 px-5 h-full flex items-center justify-center pe-5 border-base/50">
            <Link
              href={"/"}
              className="flex text-white items-center gap-3 text-2xl "
            >
              <svg
                className="size-6"
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
            </Link>
          </div>
          <div className="flex h-full w-full items-center justify-center">
            <span className="text-white flex items-center justify-center text-lg">
              Workspace Beta
              <ChevronsUpDown className="inline-block ms-2 opacity-60 size-4" />
            </span>
          </div>
        </div>
        <div className="w-full px-5 flex items-center justify-between">
          <div>
            <h2 className="text-base text-lg">Dashboard</h2>
          </div>
          <div className="flex items-center gap-3 justify-between">
            <button className="flex transition-all items-center text-zinc-500 hover:text-white gap-3 px-4 py-3 border border-zinc-900 bg-zinc-950">
              <Megaphone className="size-5" />
            </button>
            <button className="flex transition-all items-center text-white gap-3 px-4 py-2.5 border border-zinc-900 bg-zinc-950">
              <Search className="size-5 text-zinc-600 opacity-60" />
              Pesquisar
              <span className="ms-4 text-zinc-600 opacity-60">
                / <Command className="inline-block size-4 " /> K
              </span>
            </button>
            <button
              onClick={() => setOpenCreateProject(true)}
              className="flex transition-all items-center text-white gap-3 px-4 py-2.5 border border-base/60 hover:bg-base/50 bg-base/30 "
            >
              <Package className="size-5 text-base opacity-60" />
              Novo Projeto
            </button>
            <button className="flex transition-all items-center text-zinc-500 hover:text-white gap-3 px-4 py-3 border border-zinc-900 bg-zinc-950">
              <Settings className="size-5" />
            </button>
          </div>
        </div>
      </header>
      <main className="border-b divide-x divide-zinc-900 w-full grid grid-cols-[18%_82%] border-zinc-900">
        <header className="p-8">
          <div className="pt-6">
            {navbarItems.map((group, index) => (
              <div
                style={{
                  marginBottom: index !== navbarItems.length - 1 ? "3.5rem" : 0,
                }}
                key={index}
              >
                <span className="text-base uppercase">{group.group}</span>
                <div className="flex mt-7 flex-col gap-7">
                  {group.items.map((item, idx) => {
                    const Icon = item.icon as React.ComponentType<
                      React.SVGProps<SVGSVGElement>
                    >;
                    return (
                      <button
                        key={idx}
                        className="flex items-center text-white"
                      >
                        {Icon && (
                          <Icon className="size-5 text-zinc-600  me-4" />
                        )}
                        {item.name}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </header>
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
                      https://api.gohost.com/honor
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
        <CreateProjectSheet
          open={openCreateProject}
          setOpen={setOpenCreateProject}
        />
      </main>
    </div>
  );
}
