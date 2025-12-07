"use client";

import {
  Combobox,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxPopup,
} from "@/components/ui/combobox";
import { ScrollArea } from "@/components/ui/scroll-area";
import { GitBranch } from "lucide-react";

const items = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Orange", value: "orange" },
  { label: "Grape", value: "grape" },
  { label: "Strawberry", value: "strawberry" },
  { label: "Mango", value: "mango" },
  { label: "Pineapple", value: "pineapple" },
  { label: "Kiwi", value: "kiwi" },
  { label: "Peach", value: "peach" },
  { label: "Pear", value: "pear" },
];

export default function CollpseItems() {
  return (
    <Combobox items={items}>
      <ComboboxInput
        className={
          "w-full py-2.5 border text-[16px]! rounded-none! ring-none! px-2! border-zinc-900 bg-zinc-950 focus-within:border-base! outline-none text-white! placeholder:text-zinc-500! text-lg "
        }
        aria-label="Selecione um repositório"
        placeholder="Selecione um repositório"
      />
      <ComboboxPopup
        className={
          "bg-background!  border-zinc-800! rounded-none!"
        }
      >
        <ScrollArea className="w-full h-full overflow-y-auto!">
          <ComboboxEmpty>Repositório não encontrado</ComboboxEmpty>
          <ComboboxList className={""}>
            {(item) => (
              <ComboboxItem
                className={
                  "text-white! py-3! hover:bg-zinc-950! cursor-pointer! text-[16px]!"
                }
                key={item.value}
                value={item}
              >
                <GitBranch className="inline mb-1 mr-2 h-4 w-4 text-zinc-500" />
                {item.label}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ScrollArea>
      </ComboboxPopup>
    </Combobox>
  );
}
