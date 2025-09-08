import { motion, AnimatePresence } from "framer-motion";

export default function CenteredToast({ toast }) {
  // toast: { type: 'success'|'error', text: string, sub?: string } | null
  return (
    <AnimatePresence>
      {toast && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.22 }}
          className="pointer-events-none fixed inset-0 z-[999] flex items-center justify-center"
          role="status"
          aria-live="polite"
        >
          <div
            className={`pointer-events-auto rounded-2xl px-5 py-4 shadow-2xl text-center backdrop-blur-md
            ${toast.type === "success"
              ? "bg-green-900/90 text-green-50 border border-green-500/60"
              : "bg-red-900/90 text-red-50 border border-red-500/60"}`}
          >
            <div className="text-3xl mb-1">
              {toast.type === "success" ? "✅" : "⚠️"}
            </div>
            <p className="text-base font-semibold">{toast.text}</p>
            {toast.sub && (
              <p className="text-sm opacity-90 mt-1">{toast.sub}</p>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
