import { BadgeCheck, CircleAlert, X } from "lucide-react";
import { motion } from "motion/react"; // A correção foi para 'framer-motion' (não 'motion/react')
import { useEffect, useState } from "react";

interface ToastProps {
  message: string;
  type?: "success" | "error" | "info";
  duration?: number; // tempo em ms para o toast desaparecer
}

const Toast: React.FC<ToastProps> = ({ message, duration = 2000, type }) => {
  const [visible, setVisible] = useState(true);

  // Timer para esconder o toast após o tempo especificado
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  return (
    <>
      {/* Camada de fundo com o blur */}
      {visible && (
        <div
          onClick={() => setVisible(false)}
          className="fixed inset-0 bg-black/20 bg-opacity-50 backdrop-blur-sm z-40"
        />
      )}
      {/* O toast propriamente dito */}
      <motion.div
        className={`fixed top-7 left-1/2 transform ring-4 ring-white/40 -translate-x-1/2 w-96 p-4  text-black shadow-lg bg-white z-50`}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 50 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            {type === "success" && (
              <BadgeCheck className="size-5 text-green-600" />
            )}
            {type === "error" && (
              <CircleAlert className="size-5 text-red-700" />
            )}
            <div className="grow">{message}</div>
          </div>
          {/* Ícone de fechar */}
          <button
            onClick={() => setVisible(false)}
            className="ml-4 text-black hover:text-zinc-700"
          >
            <X className="size-5" />
          </button>
        </div>
      </motion.div>
    </>
  );
};

export default Toast;
