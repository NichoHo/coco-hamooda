"use client";

import Image from "next/image";
import * as React from "react";

export type GalleryItem = {
  id: number;
  src: string;
  alt: string;
  title?: string;       // optional; used for modal caption only
  description?: string; // optional; used for modal caption only
  caption?: string;
};

type GalleryProps = {
  items?: GalleryItem[];
};

// NOTE: use your actual paths. If your files live under /public/gallery,
// change src to "/gallery/charcoal.jpg", etc.
const DEFAULT_ITEMS: GalleryItem[] = [
  { id: 1,  src: "/GalleryPics/Charcoal_pic_1.jpg",  alt: "HAMMOUDA charcoal product photo 1" },
  { id: 2,  src: "/GalleryPics/Charcoal_pic_2.jpg",  alt: "HAMMOUDA charcoal product photo 2" },
  { id: 3,  src: "/GalleryPics/Charcoal_pic_3.jpg",  alt: "HAMMOUDA charcoal product photo 3" },
  { id: 4,  src: "/GalleryPics/Charcoal_pic_4.jpg",  alt: "HAMMOUDA charcoal product photo 4" },
  { id: 5,  src: "/GalleryPics/Charcoal_pic_5.jpg",  alt: "HAMMOUDA charcoal product photo 5" },
  { id: 6,  src: "/GalleryPics/Charcoal_pic_6.jpg",  alt: "HAMMOUDA charcoal product photo 6" },
  { id: 7,  src: "/GalleryPics/Charcoal_pic_7.jpg",  alt: "HAMMOUDA charcoal product photo 7" },
  { id: 8,  src: "/GalleryPics/Charcoal_pic_8.jpg",  alt: "HAMMOUDA charcoal product photo 8" },
  { id: 9,  src: "/GalleryPics/Charcoal_pic_9.jpg",  alt: "HAMMOUDA charcoal product photo 9" },
  { id: 10, src: "/GalleryPics/Charcoal_pic_10.jpg", alt: "HAMMOUDA charcoal product photo 10" },
  { id: 11, src: "/GalleryPics/Charcoal_pic_11.jpg", alt: "HAMMOUDA charcoal product photo 11" },
  { id: 12, src: "/GalleryPics/Charcoal_pic_12.jpg", alt: "HAMMOUDA charcoal product photo 12" },
  { id: 13, src: "/GalleryPics/Charcoal_pic_13.jpg", alt: "HAMMOUDA charcoal product photo 13" },
  { id: 14, src: "/GalleryPics/Charcoal_pic_14.jpg", alt: "HAMMOUDA charcoal product photo 14" },
  { id: 15, src: "/GalleryPics/Charcoal_pic_15.jpg", alt: "HAMMOUDA charcoal product photo 15" },
  { id: 16, src: "/GalleryPics/Charcoal_pic_16.jpg", alt: "HAMMOUDA charcoal product photo 16" },
  { id: 17, src: "/GalleryPics/Charcoal_pic_17.jpg", alt: "HAMMOUDA charcoal product photo 17" },
  { id: 18, src: "/GalleryPics/Charcoal_pic_18.jpg", alt: "HAMMOUDA charcoal product photo 18" },
  { id: 19, src: "/GalleryPics/Charcoal_pic_19.jpg", alt: "HAMMOUDA charcoal product photo 19" },
  { id: 20, src: "/GalleryPics/Charcoal_pic_20.jpg", alt: "HAMMOUDA charcoal product photo 20" },
];


export default function Gallery({ items = DEFAULT_ITEMS }: GalleryProps) {
  const [open, setOpen] = React.useState(false);
  const [active, setActive] = React.useState<GalleryItem | null>(null);
  const closeBtnRef = React.useRef<HTMLButtonElement | null>(null);
  const lastFocusRef = React.useRef<HTMLElement | null>(null);

  const openModal = (item: GalleryItem) => {
    lastFocusRef.current = document.activeElement as HTMLElement;
    setActive(item);
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
    requestAnimationFrame(() => lastFocusRef.current?.focus?.());
  };

  // Esc to close + lock body scroll
  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && closeModal();
    if (open) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  React.useEffect(() => {
    if (open && closeBtnRef.current) closeBtnRef.current.focus();
  }, [open]);

  return (
    <>
      {/* GRID — pictures only */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4">
        {items.map((p) => (
          <button
            key={p.id}
            type="button"
            onClick={() => openModal(p)}
            aria-label={`Open preview${p.title ? ` for ${p.title}` : ""}`}
            className="group relative block w-full overflow-hidden rounded-xl ring-1 ring-neutral-200/70 transition shadow-sm hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-primary dark:ring-neutral-800/80"
          >
            <div className="relative aspect-[4/3]">
              <Image
                src={p.src}
                alt={p.alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width:1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              />
            </div>
          </button>
        ))}
      </div>

      {/* LIGHTBOX / MODAL */}
      {open && active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="gallery-modal-title"
          aria-describedby="gallery-modal-desc"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-4xl overflow-hidden rounded-2xl bg-white ring-1 ring-neutral-200 dark:bg-neutral-950 dark:ring-neutral-800"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <div className="relative mx-auto aspect-[16/10] w-full">
                <Image
                  src={active.src}
                  alt={active.alt}
                  fill
                  sizes="100vw"
                  className="object-contain"
                  priority
                />
              </div>

              <button
                ref={closeBtnRef}
                type="button"
                onClick={closeModal}
                className="absolute right-3 top-3 rounded-full bg-white/80 px-3 py-1.5 text-sm font-medium text-neutral-900 ring-1 ring-neutral-300 hover:bg-white dark:bg-neutral-900/80 dark:text-neutral-100 dark:ring-neutral-700 dark:hover:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
              >
                Close
              </button>
            </div>

            {/* Optional caption (no overlay on thumbnails) */}
            {(active.title || active.caption || active.description) && (
              <div className="border-t border-neutral-200 p-4 text-neutral-700 dark:border-neutral-800 dark:text-neutral-300">
                {active.title && (
                  <h2 id="gallery-modal-title" className="text-lg font-semibold">
                    {active.title}
                  </h2>
                )}
                {(active.caption || active.description) && (
                  <p id="gallery-modal-desc" className="mt-1 text-sm">
                    {active.caption || active.description}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

