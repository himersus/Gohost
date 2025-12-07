import ConvertMoneyFormat from "@/components/Generics/ConvertMoney";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import {
  BadgeCheck,
  Ban,
  CircleDashed,
  Globe,
  Layers2,
  Plus,
  Search,
} from "lucide-react";

const LogsSlice = () => {
  return (
    <ScrollArea className="h-full flex overflow-y-auto flex-col items-start">
      <section className="p-12 w-full flex items-center justify-between border-b border-zinc-900">
        <div>
          <h4 className="text-white text-5xl">Logs</h4>
        </div>
        <div className="flex items-center gap-3">
          <div>
            <div className="w-full flex items-center  border border-zinc-900 bg-zinc-950 focus-within:border-base outline-none text-white placeholder:text-zinc-500 text-lg px-4">
              <Search className="size-5 text-zinc-600 opacity-60 inline-block me-3" />
              <input
                type="text"
                className="w-full py-2.5  bg-zinc-950 focus:border-base outline-none text-white placeholder:text-zinc-500 text-lg "
                placeholder="Busque por uma correspondência"
                name=""
                id=""
              />
            </div>
          </div>
        </div>
      </section>
      <div className="grid grid-cols-1 pt-12 w-full px-12 gap-8">
        <div className="h-[65vh] border border-zinc-900 bg-zinc-950">
          <header className="flex items-center justify-between px-6 border-b border-zinc-900 py-5">
            <div className="flex items-center gap-3">
              <div className="size-2.5  bg-red-600 "></div>
              <div className="size-2.5  bg-yellow-500 "></div>
              <div className="size-2.5  bg-green-500 "></div>
            </div>
            <div>
              <p className="text-white/60 flex items-center">
                <Globe className="inline-block size-4 me-2" />
                https://api.drenoday.com/honor
              </p>
            </div>
          </header>
        </div>
      </div>
    </ScrollArea>
  );
};

export default LogsSlice;
