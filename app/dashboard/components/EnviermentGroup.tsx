import { Minus } from "lucide-react";
import React from "react";

interface EnviermentGroupProps {
  removeEnviromentGroup: () => void;
}

const EnviermentGroup: React.FC<EnviermentGroupProps> = ({
  removeEnviromentGroup,
}) => {
  return (
    <div className="grid grid-cols-2 gap-3">
      <div>
        <input
          type="text"
          className="w-full py-3 border border-zinc-900 bg-zinc-950 focus:border-base outline-none text-white placeholder:text-zinc-500 text-lg px-5"
          placeholder="VALOR"
          name=""
          id=""
        />
      </div>
      <div className="flex items-center justify-between gap-4">
        <input
          type="text"
          className="w-full py-3 border border-zinc-900 bg-zinc-950 focus:border-base outline-none text-white placeholder:text-zinc-500 text-lg px-5"
          placeholder="xxxxxxxxxxxxxxxxxxxxxx"
          name=""
          id=""
        />
        <div>
          <button
            onClick={() => removeEnviromentGroup()}
            className="flex transition-all items-center text-white gap-3 px-4 py-4 border hover:bg-red-400/70 border-red-400 bg-red-400/50"
          >
            <Minus className="size-4  opacity-60" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default EnviermentGroup;
