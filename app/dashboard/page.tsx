"use client";

import {
  CircleQuestionMark,
  CircleUser,
  Group,
  Megaphone,
  Package,
  Settings,
  WalletCards,
} from "lucide-react";
import React from "react";
import CreateProjectSheet from "./components/CreateProjectSheet";
import Header from "./Partials/Header";
import ProfileSettingsSlice from "./slices/Profile";

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
      <Header setOpenCreateProject={setOpenCreateProject} />
      <main className="border-b h-full  divide-x divide-zinc-900 w-full grid grid-cols-[18%_82%] border-zinc-900">
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
        {/* <ProjectsSlice setOpenCreateProject={setOpenCreateProject} /> */}
        {/* <ProjectSettings /> */}
        <ProfileSettingsSlice />
        <CreateProjectSheet
          open={openCreateProject}
          setOpen={setOpenCreateProject}
        />
      </main>
    </div>
  );
}
