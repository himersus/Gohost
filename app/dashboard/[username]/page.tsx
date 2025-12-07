"use client";

import {
  CircleQuestionMark,
  CircleUser,
  CreditCard,
  Group,
  LibraryBig,
  Megaphone,
  Package,
  Settings,
  WalletCards,
} from "lucide-react";
import React from "react";
import CreateProjectSheet from "../components/CreateProjectSheet";
import Header from "../Partials/Header";
import PlansSlice from "../slices/Plans";
import TeamSheet from "../components/TeamSheet";
import SearchComponent from "../components/SearchComponent";
import ProjectsSlice from "../slices/Projects";
import ProjectSettings from "../slices/ProjectSetting";
import ProfileSettingsSlice from "../slices/Profile";

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
        href: "#notifications",
      },
      {
        name: "Team",
        icon: Group,
        href: "#team",
      },
    ],
  },
  {
    group: "Sistema",
    items: [
      {
        name: "Planos & Pagamentos",
        icon: WalletCards,
        href: "/envs",
      },
      {
        name: "Minha Conta",
        icon: CircleUser,
        href: "/projects",
      },
      {
        name: "Documentação",
        icon: LibraryBig,
        href: "#team",
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
      { name: "Guia de Pagamento", icon: CreditCard, href: "/dashboard" },
    ],
  },
];

type Tabs = "projects" | "settings" | "profile" | "plans" | "payguide";

export default function DashboardPage() {
  const [openCreateProject, setOpenCreateProject] = React.useState(false);
  const [openTeamSheet, setOpenTeamSheet] = React.useState(false);
  const [openNotifications, setOpenNotifications] = React.useState(false);
  const [tabs, setTabs] = React.useState<Tabs>("projects");
  const [Projecttab, setProjectTab] = React.useState<
    "logs" | "settings" | "project"
  >("project");

  const slices = [
    {
      name: "projects",
      component: (
        <ProjectsSlice
          setOpenCreateProject={setOpenCreateProject}
          setOpenTeamSheet={setOpenTeamSheet}
          setProjectTab={setProjectTab}
          projectTab={Projecttab}
        />
      ),
    },
    {
      name: "settings",
      component: <ProjectSettings />,
    },
    {
      name: "profile",
      component: <ProfileSettingsSlice />,
    },
    {
      name: "plans",
      component: <PlansSlice />,
    },
  ];

  return (
    <div className="h-screen w-full grid grid-rows-[8%_92%]">
      <Header
        setOpenCreateProject={setOpenCreateProject}
        setOpenTeamSheet={setOpenTeamSheet}
      />
      {/* <div className="error-overlay">
      </div> */}
      <main className="border-b h-full  divide-x divide-zinc-900 w-full grid grid-cols-[18%_82%] border-zinc-900">
        <header className="p-8">
          <div className="pt-6">
            {navbarItems.map((group, index) => (
              <div
                style={{
                  marginBlockEnd:
                    index !== navbarItems.length - 1 ? "3.5rem" : 0,
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
                        onClick={() => {
                          if (item.href === "#team") {
                            setOpenTeamSheet(true);
                          } else if (item.href === "#notifications") {
                            setOpenNotifications(true);
                          } else if (item.name === "Configurações") {
                            setTabs("settings");
                          } else if (item.name === "Planos & Pagamentos") {
                            setTabs("plans");
                          } else if (item.name === "Guia de Pagamento") {
                            setTabs("payguide");
                          } else if (item.name === "Minha Conta") {
                            setTabs("profile");
                          } else if (item.name === "Projectos") {
                            setTabs("projects");
                            setProjectTab("project");
                          }
                        }}
                        className="flex items-center transition-all hover:text-white/60 group text-white"
                      >
                        {Icon && (
                          <Icon className="size-5 transition-all group-hover:text-base text-zinc-600  me-4" />
                        )}
                        {item.name}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
            <button className="px-7 flex items-center justify-center gap-3 mt-10 py-2.5 w-full bg-base border border-zinc-900 transition-all hover:bg-base/80 text-black text-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="bi bi-discord size-5 "
                viewBox="0 0 16 16"
              >
                <path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612" />
              </svg>
              Comunidade
            </button>
          </div>
        </header>
        {slices.find((slice) => slice.name === tabs)?.component}
        <CreateProjectSheet
          open={openCreateProject}
          setOpen={setOpenCreateProject}
        />
        <TeamSheet open={openTeamSheet} setOpen={setOpenTeamSheet} />
        <SearchComponent
          open={openNotifications}
          setOpen={setOpenNotifications}
        />
      </main>
    </div>
  );
}
