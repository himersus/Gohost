"use client";

import Link from "next/link";
import {
  BrickWallShield,
  ChevronsUp,
  CreditCardIcon,
  Cuboid,
  Instagram,
  Linkedin,
  Menu,
  MoveRight,
  ToolCase,
} from "lucide-react";
import React from "react";
import ConvertMoneyFormat from "@/components/Generics/ConvertMoney";
import { motion } from "motion/react";
import scrollToElement from "@/components/Generics/ScrollToElement";
import { useRouter } from "next/navigation";

const navbarLinks = [
  {
    title: "Producto",
    href: "product",
  },
  {
    title: "Recursos",
    href: "resources",
  },
  {
    title: "Planos",
    href: "plans",
  },
  {
    title: "Documentação",
    href: "/documentation",
  },
  {
    title: "Comunidade",
    href: "/community",
  },
];

export const plans = [
  {
    title: "Plano Básico",
    description: "Ideal para projetos pequenos e testes iniciais.",
    price: 2700,
    duration: "14 dias + 1GB",
    features: [
      "1 API com até 1 GB de armazenamento",
      "Suporte básico por e-mail",
      "Monitoramento de desempenho limitado",
      "1 Membro por projecto",
      "2GB de largura de banda mensal",
    ],
  },
  {
    title: "Plano Pro",
    description: "Perfeito para desenvolvedores individuais e startups.",
    price: 7500,
    duration: "1 mês + 5GB",
    features: [
      "4 APIs com até 5 GB de armazenamento cada",
      "Suporte prioritário por e-mail",
      "Monitoramento de desempenho avançado",
      "5 Membros por projecto",
      "10GB de largura de banda mensal",
    ],
  },
  {
    title: "Plano Empresarial",
    description: "Soluções personalizadas para grandes equipes e empresas.",
    price: 30000,
    duration: "1 mês + 20GB",
    features: [
      "10 APIs com até 20 GB de armazenamento cada",
      "Suporte dedicado 24/7",
      "Monitoramento de desempenho completo",
      "Membros ilimitados por projecto",
      "Largura de banda ilimitada",
    ],
  },
  {
    title: "Plano Starter",
    description: "Para quem está começando e quer testar a plataforma.",
    price: 1500,
    duration: "7 dias + 500MB",
    features: [
      "1 API com até 500 MB de armazenamento",
      "Suporte básico por e-mail",
      "Monitoramento de desempenho básico",
      "1 Membro por projecto",
      "1GB de largura de banda mensal",
    ],
  },
];

const ProductCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
}> = ({ icon, title, description }) => {
  return (
    <div className="p-5 gap-6 h-full flex flex-col items-start justify-between">
      <header>
        <div className="size-9 bg-base flex items-center justify-center">
          {icon}
        </div>
      </header>
      <footer>
        <h3 className="text-white text-2xl">{title}</h3>
        <span className="text-white/70 text-lg pt-3 inline-flex">
          {description}
        </span>
      </footer>
    </div>
  );
};

export default function Home() {
  const router = useRouter();

  return (
    <div className="relative">
      <header className="w-full">
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="border-b pot:py-0 py-5 bg-background z-50 flex pot:px-0 px-5 pot:grid fixed top-0 left-0 right-0 pot:grid-cols-[20%_60%_20%] items-center justify-between  border-zinc-900 "
        >
          <div className="pot:px-10">
            <Link
              href={"/"}
              className="flex text-white items-center gap-3 text-2xl "
            >
              <svg
                className="size-7"
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
              Drenoday
            </Link>
          </div>
          <div className="pot:flex hidden items-center justify-center gap-20">
            {navbarLinks.map((link, index) => (
              <button
                onClick={() => {
                  if (link.href.startsWith("/")) {
                    router.push(link.href);
                  } else {
                    scrollToElement(link.href);
                  }
                }}
                className="text-white cursor-pointer transition-all hover:text-white/60"
                key={index}
              >
                {link.title}
              </button>
            ))}
          </div>
          <div className="pot:flex hidden items-center justify-end gap-10">
            <Link
              href={"/auth"}
              className="text-white text-lg transition-all hover:text-white/60"
            >
              Entrar
            </Link>
            <Link
              href={"/register"}
              className="py-7 text-lg  bg-base transition-all hover:bg-base/70 text-white text-center border-base px-7 leading-none border-l"
            >
              Registre-se
            </Link>
          </div>
          <div className="pot:hidden flex items-center justify-center">
            <button>
              <Menu className="size-6 text-white" />
            </button>
          </div>
        </motion.nav>

        <section className="hero mt-36 pot:mt-52 gap-20 grid items-end pot:grid-cols-2 px-8 pot:max-w-[85%] mx-auto">
          <div className="">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: false }}
              className="pb-7"
            >
              <button className="ret:text-lg border text-base hover:bg-base/10 relative border-dashed border-base/30 inline-flex transition-all px-5 py-2 w-auto mx-auto mt-3">
                <span className="flex items-center justify-between gap-10">
                  <p className="flex items-center justify-center">
                    <CreditCardIcon className="inline-block stroke-1 mr-2 size-5" />
                    Experimente com preços incríveis!
                  </p>
                </span>
                <span className="absolute text-base transform scale-x-[-1] -left-0.5 text-[15px] -top-3">
                  ¬
                </span>
                <span className="absolute text-base -right-0.5 text-[15px] -top-3">
                  ¬
                </span>
                <span className="absolute text-base -right-0.5 scale-y-[-1]  text-[15px] -bottom-3">
                  ¬
                </span>
                <span className="absolute text-base rotate-180 -left-0.5 text-[15px] -bottom-3">
                  ¬
                </span>
              </button>
            </motion.div>
            <motion.h1
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
              viewport={{ once: false }}
              className="text-white pot:text-6xl ret:text-5xl text-4xl lal:text-7xl"
            >
              A plataforma que facilita a vida de quem constrói API&apos;s
            </motion.h1>
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: false }}
              className="pt-7"
            >
              <p className="text-white/70 text-xl pot:text-3xl">
                Crie, gerencie e escale suas API&apos;s com facilidade usando
                nossa plataforma intuitiva e poderosa.
              </p>
            </motion.div>
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
              viewport={{ once: false }}
              className="flex mt-10 flex-wrap items-center gap-4"
            >
              <button className="px-7 py-4 ret:py-5 bg-white transition-all hover:bg-white/60 text-black text-xl">
                Faça deploy agora
                <MoveRight className="inline-block ml-4 size-5" />
              </button>
              <button className="px-7 py-4 ret:py-5 bg-transparent border border-zinc-900 transition-all hover:bg-white/10 text-white text-xl">
                Documentação
              </button>
            </motion.div>
          </div>
          <div className="flex ret:flex-nowrap flex-wrap items-end gap-2 justify-center pot:justify-end">
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: false }}
              className="pot:w-64 rounded-2xl h-52 border border-zinc-900/60 flex flex-col justify-between bg-zinc-950/70"
            >
              <header className="flex ps-5 py-5 gap-2 items-center justify-between text-white">
                <span className="text-base">Websocket</span>
                <hr className="w-full border-zinc-900" />
              </header>
              <footer className="p-5">
                <p className="text-white/80 text-lg">
                  Suporte completo a Websockets para suas API&apos;s.
                </p>
              </footer>
            </motion.div>
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
              viewport={{ once: false }}
              className="pot:w-64 rounded-2xl h-72 border border-zinc-900/60 flex flex-col justify-between bg-zinc-950/70"
            >
              <header className="flex ps-5 py-5 gap-2 items-center justify-between text-white">
                <span className="text-base whitespace-nowrap">
                  Sem Hibernação
                </span>
                <hr className="w-full border-zinc-900" />
              </header>
              <footer className="p-5">
                <p className="text-white/80 text-lg">
                  Mantenha suas API&apos;s ativas 24/7 sem hibernação.
                </p>
              </footer>
            </motion.div>
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
              viewport={{ once: false }}
              className="pot:w-72 rounded-2xl h-96 bg-base flex flex-col justify-between"
            >
              <header className="flex ps-5 py-5 gap-2 items-center justify-between text-white">
                <span className="text-black whitespace-nowrap">
                  Conteinerização
                </span>
                <hr className="w-full border-zinc-900" />
              </header>
              <footer className="p-5">
                <p className="text-black text-lg">
                  Construa sua API em qualquer linguagem com conteinerização
                </p>
              </footer>
            </motion.div>
          </div>
        </section>
      </header>

      <main>
        <section id="product" className="max-w-[85%] mt-52  mx-auto">
          {/* PRODUCT */}
          <div className="flex gap-5 pot:text-lg items-center justify-between">
            <motion.span
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: false }}
              className="text-base uppercase "
            >
              Producto
            </motion.span>
            <motion.hr
              initial={{ inlineSize: 0, opacity: 0 }}
              whileInView={{ inlineSize: "100%", opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: false }}
              className="w-full border-zinc-900"
            />
          </div>
          <div className="flex items-start flex-wrap gap-5 pt-14 justify-between">
            <header className="max-w-4xl">
              <motion.h2
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: false }}
                className="text-white pot:text-xl text-4xl lal:text-6xl"
              >
                Entregando <span className="text-base">valor</span> para
                desenvolvedores e <span className="text-base">empresas.</span>
              </motion.h2>
            </header>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: false }}
            >
              <button className="px-7 py-4 ret:py-5 bg-white transition-all hover:bg-white/60 text-black text-xl">
                Experimente Drenoday
                <MoveRight className="inline-block ml-4 size-5" />
              </button>
            </motion.div>
          </div>
          <section className="mt-20 grid grid-cols-1 ">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: false }}
              className="pot:h-80 p-2 grid ret:grid-cols-2 grid-cols-1 pot:grid-cols-4 gap-10  border bg-zinc-950/50  border-zinc-900/60"
            >
              <ProductCard
                icon={<Cuboid className="size-5 text-white" />}
                title="Deploy Instantâneo"
                description="Coloque sua API online em segundos com uma infraestrutura otimizada para velocidade e confiabilidade."
              />
              <ProductCard
                icon={<BrickWallShield className="size-5 text-white" />}
                title="Segurança de Alto Nível"
                description="Autenticação, SSL e isolamento de ambiente para garantir que
                    suas APIs estejam sempre protegidas."
              />
              <ProductCard
                icon={<ChevronsUp className="size-5 text-white" />}
                title="Escalabilidade Automática"
                description="Tráfego alto? Sem problemas. Nossa plataforma escala automaticamente para acompanhar a demanda."
              />{" "}
              <ProductCard
                icon={<ToolCase className="size-5 text-white" />}
                title="Ferramentas Para Devs"
                description="Tráfego alto? Sem problemas. Nossa plataforma escala automaticamente para acompanhar a demanda."
              />
            </motion.div>
          </section>
        </section>

        <section id="resources" className="pot:mt-48 mt-72 ">
          {/* RECURSOS */}
          <div className="w-full h-[50vh] flex items-center justify-center ">
            <div className="grid pot:grid-cols-2 gap-5 max-w-[85%] mx-auto ">
              <div className="max-w-4xl">
                <motion.h4
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  viewport={{ once: false }}
                  className="lal:text-6xl pot:text-5xl text-4xl text-white"
                >
                  Recursos poderosos, interface intuitiva e{" "}
                  <span className="text-[#008fe2]">suporte dedicado!</span>
                </motion.h4>
                <motion.p
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                  viewport={{ once: false }}
                  className="pot:text-2xl text-xl text-white/70 pt-7"
                >
                  Tudo o que você precisa para construir, gerenciar e escalar
                  suas API&apos;s em um só lugar. O Drenoday usa 100% de
                  conteinerização para garantir que sua API rode em qualquer
                  linguagem ou framework, com total isolamento e segurança.
                </motion.p>
                <motion.div
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
                  viewport={{ once: false }}
                >
                  <button className="px-7 mt-10 py-4 ret:py-5 bg-white transition-all hover:bg-white/60 text-black text-xl">
                    Visite a documentação
                  </button>
                </motion.div>
              </div>
              <div className="grid grid-cols-1 gap-3">
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                  viewport={{ once: false }}
                  className="flex items-center justify-center"
                >
                  <span className="relative flex items-center pot:mt-0 mt-10 justify-center">
                    <svg
                      className="z-10 size-60 pot:size-96 bg-none"
                      viewBox="0 0 24 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.9807 7.69028H16.1007C16.1257 7.69028 16.1504 7.68536 16.1734 7.67582C16.1965 7.66627 16.2174 7.65227 16.2351 7.63463C16.2527 7.61699 16.2667 7.59604 16.2763 7.57299C16.2858 7.54994 16.2907 7.52523 16.2907 7.50028V5.62028C16.2907 5.59533 16.2858 5.57062 16.2763 5.54757C16.2667 5.52452 16.2527 5.50357 16.2351 5.48593C16.2174 5.46828 16.1965 5.45429 16.1734 5.44474C16.1504 5.43519 16.1257 5.43028 16.1007 5.43028H13.9807C13.933 5.43028 13.8872 5.44924 13.8534 5.483C13.8197 5.51676 13.8007 5.56254 13.8007 5.61028V7.51028C13.8007 7.61028 13.8807 7.69028 13.9807 7.69028ZM11.0307 2.26028H13.1507C13.1994 2.25771 13.2452 2.23657 13.2787 2.20121C13.3122 2.16585 13.3308 2.11898 13.3307 2.07028V0.180278C13.3283 0.13332 13.3086 0.0889251 13.2753 0.0556772C13.2421 0.0224293 13.1977 0.00269079 13.1507 0.000278018H11.0307C11.0063 -0.00108332 10.9818 0.0025649 10.9588 0.0109992C10.9358 0.0194336 10.9147 0.0324762 10.8969 0.0493283C10.8791 0.0661805 10.865 0.0864873 10.8553 0.109004C10.8457 0.131521 10.8407 0.155774 10.8407 0.180278V2.08028C10.8407 2.18028 10.9307 2.26028 11.0307 2.26028ZM11.0307 4.97028H13.1507C13.1977 4.96787 13.2421 4.94813 13.2753 4.91488C13.3086 4.88163 13.3283 4.83724 13.3307 4.79028V2.90028C13.3283 2.85332 13.3086 2.80893 13.2753 2.77568C13.2421 2.74243 13.1977 2.72269 13.1507 2.72028H11.0307C11.0063 2.71892 10.9818 2.72256 10.9588 2.731C10.9358 2.73943 10.9147 2.75248 10.8969 2.76933C10.8791 2.78618 10.865 2.80649 10.8553 2.829C10.8457 2.85152 10.8407 2.87577 10.8407 2.90028V4.79028C10.8407 4.89028 10.9307 4.97028 11.0307 4.97028ZM8.10073 4.97028H10.2207C10.2677 4.96787 10.3121 4.94813 10.3453 4.91488C10.3786 4.88163 10.3983 4.83724 10.4007 4.79028V2.90028C10.4007 2.85254 10.3818 2.80676 10.348 2.773C10.3142 2.73924 10.2685 2.72028 10.2207 2.72028H8.10073C8.05299 2.72028 8.0072 2.73924 7.97344 2.773C7.93969 2.80676 7.92072 2.85254 7.92072 2.90028V4.79028C7.92072 4.89028 8.00073 4.97028 8.10073 4.97028ZM5.14072 4.97028H7.25072C7.29943 4.97035 7.3463 4.95171 7.38166 4.91821C7.41702 4.88471 7.43816 4.83892 7.44072 4.79028V2.90028C7.44076 2.87577 7.4358 2.85152 7.42613 2.829C7.41647 2.80649 7.40231 2.78618 7.38452 2.76933C7.36673 2.75248 7.34569 2.73943 7.32268 2.731C7.29968 2.72256 7.27519 2.71892 7.25072 2.72028H5.14072C5.09202 2.72021 5.04515 2.73885 5.00979 2.77235C4.97443 2.80584 4.95329 2.85164 4.95072 2.90028V4.79028C4.95072 4.89028 5.03072 4.97028 5.14072 4.97028ZM11.0307 7.69028H13.1507C13.1994 7.68771 13.2452 7.66657 13.2787 7.63121C13.3122 7.59586 13.3308 7.54898 13.3307 7.50028V5.62028C13.3308 5.57157 13.3122 5.5247 13.2787 5.48934C13.2452 5.45399 13.1994 5.43284 13.1507 5.43028H11.0307C11.0063 5.42892 10.9818 5.43256 10.9588 5.441C10.9358 5.44943 10.9147 5.46248 10.8969 5.47933C10.8791 5.49618 10.865 5.51649 10.8553 5.539C10.8457 5.56152 10.8407 5.58577 10.8407 5.61028V7.51028C10.8407 7.61028 10.9307 7.69028 11.0307 7.69028ZM8.10073 7.69028H10.2207C10.2452 7.69032 10.2695 7.68535 10.292 7.67569C10.3145 7.66602 10.3348 7.65186 10.3517 7.63407C10.3685 7.61628 10.3816 7.59524 10.39 7.57224C10.3984 7.54923 10.4021 7.52474 10.4007 7.50028V5.62028C10.4021 5.59581 10.3984 5.57133 10.39 5.54832C10.3816 5.52531 10.3685 5.50427 10.3517 5.48648C10.3348 5.4687 10.3145 5.45454 10.292 5.44487C10.2695 5.43521 10.2452 5.43024 10.2207 5.43028H8.10073C8.05299 5.43028 8.0072 5.44924 7.97344 5.483C7.93969 5.51676 7.92072 5.56254 7.92072 5.61028V7.51028C7.92072 7.61028 8.00073 7.69028 8.10073 7.69028ZM5.14072 7.69028H7.25072C7.27606 7.69173 7.30141 7.68781 7.32512 7.67877C7.34883 7.66974 7.37036 7.65579 7.3883 7.63785C7.40624 7.61991 7.42018 7.59838 7.42922 7.57467C7.43825 7.55096 7.44218 7.52561 7.44072 7.50028V5.62028C7.44209 5.59581 7.43844 5.57133 7.43 5.54832C7.42157 5.52531 7.40853 5.50427 7.39167 5.48648C7.37482 5.4687 7.35451 5.45454 7.332 5.44487C7.30948 5.43521 7.28523 5.43024 7.26072 5.43028H5.14072C5.09033 5.43028 5.04201 5.4503 5.00637 5.48593C4.97074 5.52156 4.95072 5.56989 4.95072 5.62028V7.50028C4.95072 7.60028 5.03072 7.69028 5.14072 7.69028ZM2.22072 7.69028H4.34072C4.36523 7.69032 4.38948 7.68535 4.412 7.67569C4.43451 7.66602 4.45482 7.65186 4.47167 7.63407C4.48853 7.61628 4.50157 7.59524 4.51 7.57224C4.51844 7.54923 4.52209 7.52474 4.52072 7.50028V5.62028C4.52209 5.59581 4.51844 5.57133 4.51 5.54832C4.50157 5.52531 4.48853 5.50427 4.47167 5.48648C4.45482 5.4687 4.43451 5.45454 4.412 5.44487C4.38948 5.43521 4.36523 5.43024 4.34072 5.43028H2.22072C2.19626 5.42892 2.17177 5.43256 2.14877 5.441C2.12576 5.44943 2.10472 5.46248 2.08693 5.47933C2.06914 5.49618 2.05498 5.51649 2.04532 5.539C2.03565 5.56152 2.03069 5.58577 2.03072 5.61028V7.51028C2.03072 7.61028 2.11072 7.69028 2.22072 7.69028ZM23.7607 6.50028C23.7007 6.45028 23.0907 5.99028 21.8107 5.99028C21.4707 5.99028 21.1307 6.02028 20.8007 6.08028C20.712 5.55465 20.5129 5.05381 20.2164 4.6108C19.9199 4.1678 19.5328 3.79271 19.0807 3.51028L18.7407 3.31028L18.5107 3.64028C18.2312 4.07955 18.0284 4.56309 17.9107 5.07028C17.6707 6.04028 17.8107 6.95028 18.3107 7.73028C17.7599 7.9817 17.1657 8.12431 16.5607 8.15028H0.760724C0.661395 8.14895 0.562792 8.16737 0.47064 8.20447C0.378488 8.24157 0.294625 8.2966 0.223918 8.36638C0.153211 8.43616 0.0970709 8.51928 0.0587561 8.61094C0.0204413 8.70259 0.000715608 8.80094 0.000724438 8.90028C-0.0148996 10.2849 0.22232 11.6608 0.700724 12.9603C1.1292 14.2395 1.97424 15.338 3.10072 16.0803C4.28072 16.8103 6.20072 17.2203 8.38072 17.2203C9.36072 17.2203 10.3407 17.1403 11.3107 16.9603C12.6532 16.7098 13.9443 16.2366 15.1307 15.5603C16.1097 14.9954 16.991 14.2761 17.7407 13.4303C18.9907 12.0103 19.7407 10.4303 20.2907 9.03028H20.5207C21.8907 9.03028 22.7307 8.48028 23.2007 8.03028C23.5007 7.73028 23.7507 7.37028 23.9007 6.97028L24.0007 6.69028L23.7607 6.50028Z"
                        fill="#008FE2"
                      />
                    </svg>
                  </span>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="plans"
          className="mt-44 border-t border-zinc-900 pt-20 pb-20 "
        >
          <div className="max-w-[85%] mx-auto">
            <motion.header
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: false }}
              className="max-w-xl"
            >
              <h4 className="lal:text-6xl pot:text-5xl text-4xl text-white">
                <span className="text-base">Suba</span> sua API com <br />
                planos acessíveis
              </h4>
            </motion.header>

            <div className="mt-12 pb-10 pot:gap-0 gap-16 pot:divide-x grid ret:grid-cols-2 grid-cols-1 pot:grid-cols-4">
              {plans.map((plan, index) => (
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                    delay: index * 0.2,
                  }}
                  viewport={{ once: false }}
                  key={index}
                  className="flex flex-col justify-between p-5 lal:p-8 pot:border-y border-zinc-900"
                >
                  <header>
                    <div className="pb-4 border-b border-zinc-900">
                      <span className="text-base uppercase">{plan.title}</span>
                      <p className="text-white/60 pt-2 w-full text-lg max-w-[85%]">
                        {plan.description}
                      </p>
                    </div>
                    <h6 className="text-white font-semibold text-4xl lal:text-5xl pt-6">
                      {ConvertMoneyFormat(plan.price)}
                    </h6>
                    <p className="text-white pt-4 text-lg">
                      - Duração de {plan.duration}
                    </p>
                  </header>
                  <div className="flex mt-10 flex-col gap-5">
                    {plan.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-start gap-3"
                      >
                        <div>
                          <div className="size-2  mt-2 bg-base"></div>
                        </div>
                        <p className="text-white leading-6 ">{feature}</p>
                      </div>
                    ))}

                    <button className="px-7 mt-10 py-5 bg-white transition-all hover:bg-base  text-black text-xl">
                      Efectuar pagamento
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-[85%] mb-10  mx-auto mt-20 rounded-2xl bg-base">
          <div className="w-full relative overflow-hidden grid pot:grid-cols-2 py-12 px-10 pot:px-16 square_back h-full  items-center">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: false }}
            >
              <h6 className="font-semibold text-white text-3xl lal:text-5xl">
                Junte-se a milhares de desenvolvedores que já estão aproveitando
                o poder do Drenoday.
              </h6>
              <button className="px-7 mt-10 py-4 ret:py-5 bg-white transition-all hover:bg-white/60  text-black text-xl">
                Comece agora
              </button>
            </motion.div>
            <motion.span
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: false }}
              className="pot:absolute -bottom-16 pot:-right-10"
            >
              <svg
                className="size-116 pot:inline-flex hidden text-white"
                viewBox="0 0 212 179"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M211.252 97.2708C211.252 105.003 204.984 111.271 197.252 111.271H178.486C170.754 111.271 164.486 117.539 164.486 125.271V132.747C164.486 140.479 158.218 146.747 150.486 146.747H107.531C99.7993 146.747 93.5312 153.015 93.5312 160.747V165C93.5312 172.732 87.2632 179 79.5312 179H14C6.26801 179 0 172.732 0 165V149.459C0 141.727 6.26801 135.459 14 135.459H56.9551C64.6871 135.459 70.9551 129.191 70.9551 121.459V117.207C70.9551 109.475 77.2231 103.207 84.9551 103.207H103.721C111.453 103.207 117.721 96.9393 117.721 89.2073V81.7297C117.721 73.9978 123.989 67.7297 131.721 67.7297H197.252C204.984 67.7297 211.252 73.9978 211.252 81.7297V97.2708Z"
                  fill="currentColor"
                />
                <path
                  d="M0.000244141 29.541C0.000244141 37.273 6.26826 43.541 14.0002 43.541H32.7659C40.4979 43.541 46.7659 49.809 46.7659 57.541V65.0176C46.7659 72.7496 53.0339 79.0176 60.7659 79.0176H103.721C111.453 79.0176 117.721 85.2856 117.721 93.0176V97.2705C117.721 105.002 123.989 111.271 131.721 111.271H197.252C204.984 111.271 211.252 105.002 211.252 97.2705V81.7295C211.252 73.9975 204.984 67.7295 197.252 67.7295H154.297C146.565 67.7295 140.297 61.4615 140.297 53.7295V49.4775C140.297 41.7456 134.029 35.4775 126.297 35.4775H107.531C99.7995 35.4775 93.5315 29.2095 93.5315 21.4775V14C93.5315 6.26801 87.2635 0 79.5315 0H14.0002C6.26826 0 0.000244141 6.26801 0.000244141 14V29.541Z"
                  fill="currentColor"
                />
              </svg>
            </motion.span>
          </div>
        </section>
      </main>

      <footer className="max-w-[85%] grid grid-cols-1 gap-10 ret:grid-cols-[40%_60%] items-start border-t border-zinc-900 py-10 mx-auto t-20">
        <header>
          <div>
            <Link
              href={"/"}
              className="flex text-white items-center gap-3 text-3xl "
            >
              <svg
                className="size-7"
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
              Drenoday
            </Link>
            <div>
              <p className="text-white text-lg pt-3">
                Facilitando a vida de quem constrói API&apos;s
              </p>
              <div className="flex items-center gap-6 mt-6">
                <Link href={"#"} className="text-zinc-400 hover:text-white">
                  <Linkedin className="size-6" />
                </Link>
                <Link href={"#"} className="text-zinc-400 hover:text-white">
                  <Instagram className="size-6" />
                </Link>
              </div>
              <span className="text-zinc-400 pt-5 inline-flex">
                © 2025 Drenoday. Todos os direitos reservados.
              </span>
            </div>
          </div>
        </header>
        <div className="flex flex-wrap pot:mt-0 mt-10 pot:justify-end gap-x-32 gap-y-14 items-center">
          <div>
            <h6 className="text-white text-xl">Features</h6>
            <div className="flex pt-5 flex-col items-start gap-5">
              <button className="text-zinc-400 hover:text-white transition-all ">
                Pagamento
              </button>
              <button className="text-zinc-400 hover:text-white transition-all ">
                Preços
              </button>
              <button className="text-zinc-400 hover:text-white transition-all ">
                Documentação
              </button>
            </div>
          </div>
          <div>
            <h6 className="text-white text-xl">Suporte</h6>
            <div className="flex pt-5 flex-col items-start gap-5">
              <button className="text-zinc-400 hover:text-white transition-all ">
                Ajuda
              </button>
              <button className="text-zinc-400 hover:text-white transition-all ">
                Contacto
              </button>
              <button className="text-zinc-400 hover:text-white transition-all ">
                Team
              </button>
            </div>
          </div>
          <div>
            <h6 className="text-white text-xl">Legal</h6>
            <div className="flex pt-5 flex-col items-start gap-5">
              <button className="text-zinc-400 hover:text-white transition-all ">
                Termos de Serviço
              </button>
              <button className="text-zinc-400 hover:text-white transition-all ">
                Política de Privacidade
              </button>
              <button className="text-zinc-400 hover:text-white transition-all ">
                Política de Cookies
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
