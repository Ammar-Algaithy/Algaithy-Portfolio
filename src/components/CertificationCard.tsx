import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Cert = {
  id: number;
  title: string;
  issuer: string;
  issueDate: string;
  thumbUrl?: string; // small preview on the card
  fileUrl?: string;  // image or pdf to open in modal
  skills?: string[];
};

export default function CertificationCard({ cert }: { cert: Cert }) {
  const [open, setOpen] = useState(false);
  const triedZoomFallback = useRef(false);

  const toOpen = (cert.fileUrl || cert.thumbUrl || "").trim();
  const isPdf = toOpen.toLowerCase().endsWith(".pdf");

  // Prefer “fit width” and horizontal fit; many viewers respect one or both.
  const baseHash = "view=FitH&zoom=page-width";
  const pdfSrc = isPdf
    ? toOpen + (toOpen.includes("#") ? "" : `#${baseHash}`)
    : toOpen;

  // Close on ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.02 }}
        onClick={() => toOpen && setOpen(true)}
        className="relative flex flex-col md:flex-row items-center bg-gray-800 rounded-xl shadow-lg
                   border border-gray-700 transition-transform hover:shadow-2xl hover:border-cyan-400
                   overflow-hidden max-w-4xl mx-auto p-6 gap-6 cursor-pointer"
      >
        {/* Thumbnail */}
        <div className="w-full md:w-1/3 h-44 md:h-56 rounded-lg overflow-hidden shadow-md bg-gray-900/40 flex items-center justify-center">
          {cert.thumbUrl ? (
            <img src={cert.thumbUrl} alt={cert.title} className="w-full h-full object-contain p-4" />
          ) : (
            <div className="text-gray-500 text-sm">No image</div>
          )}
        </div>

        {/* Details */}
        <div className="flex flex-col w-full md:w-2/3 text-white">
          <h3 className="text-2xl font-bold mb-1">{cert.title}</h3>
          <p className="text-sm text-gray-300 mb-3">
            {cert.issuer} · {cert.issueDate}
          </p>

          {cert.skills?.length ? (
            <div className="mb-1 flex flex-wrap gap-2">
              {cert.skills.map((s, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 rounded-full border border-gray-700 text-xs text-gray-300"
                >
                  {s}
                </span>
              ))}
            </div>
          ) : null}
        </div>
      </motion.div>

      {/* Fullscreen modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-3 md:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.25 }}
              // large, centered viewport
              className="relative bg-gray-900 rounded-xl shadow-2xl w-[min(96vw,1200px)] h-[min(92vh,900px)] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {isPdf ? (
                <iframe
                  key={pdfSrc} // force reload when src changes
                  src={pdfSrc}
                  title={cert.title}
                  className="w-full h-full"
                  // If the viewer ignored our hints, fall back to a bigger zoom.
                  onLoad={(e) => {
                    if (triedZoomFallback.current) return;
                    const el = e.currentTarget as HTMLIFrameElement;
                    // If the content area is obviously tiny (heuristic), retry with zoom=150
                    // We can't read inside the iframe, so we just re-navigate once.
                    if (!pdfSrc.includes("zoom=")) return;
                    // Give the viewer a moment; if still showing tiny page, nudge zoom.
                    setTimeout(() => {
                      if (!triedZoomFallback.current) {
                        triedZoomFallback.current = true;
                        el.src = toOpen + (toOpen.includes("#") ? "" : "#zoom=150");
                      }
                    }, 300);
                  }}
                />
              ) : (
                <img src={toOpen} alt={cert.title} className="w-full h-full object-contain" />
              )}

              {/* Close */}
              <button
                onClick={() => setOpen(false)}
                className="absolute top-3 right-3 bg-gray-700/80 hover:bg-gray-600 text-white rounded-full px-3 py-1 text-sm"
                aria-label="Close"
              >
                ✕
              </button>
              {/* Open in new tab (fallback) */}
              {isPdf && (
                <a
                  href={toOpen}
                  target="_blank"
                  rel="noreferrer"
                  className="absolute bottom-3 right-3 text-xs text-gray-300 underline decoration-gray-500 hover:text-white"
                  onClick={(e) => e.stopPropagation()}
                >
                  Open in new tab
                </a>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
