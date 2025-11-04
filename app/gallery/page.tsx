import Gallery from "@/components/Gallery";

export const metadata = {
  title: "Our Charcoal Gallery | HAMMOUDA",
  description: "Explore HAMMOUDA’s finest natural charcoal products.",
};

export default function GalleryPage() {
  return (
    <main>
      {/* HERO — add top padding so fixed navbar doesn't overlap */}
      <section
        id="hero"
        className="
          relative isolate 
          px-4 sm:px-6 lg:px-8
          pt-28 sm:pt-32 lg:pt-36   /* <-- pushes below navbar */
          pb-12
          scroll-mt-32
          bg-gradient-to-r
          from-white via-gray-50 to-white
          dark:from-black dark:via-neutral-950 dark:to-black
        "
      >
        {/* Subtle glows that work in both themes */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-40 w-40 -translate-x-1/2 rounded-full bg-orange-400/10 blur-3xl dark:bg-orange-500/20" />
          <div className="absolute right-10 top-20 h-44 w-44 rounded-full bg-sky-400/10 blur-3xl dark:bg-sky-500/20" />
        </div>

        <div className="mx-auto max-w-3xl text-center">
          <h1 className="bg-gradient-to-r from-orange-500 via-amber-400 to-sky-400 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl">
            Our Charcoal Gallery
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-neutral-700 sm:text-base dark:text-neutral-300">
            Explore our finest natural charcoal products.
          </p>
        </div>
      </section>

      {/* GALLERY */}
      <section
        id="gallery"
        className="
          px-4 sm:px-6 lg:px-8 pb-24
          bg-gradient-to-b
          from-white via-white to-gray-50
          dark:from-black dark:via-neutral-950 dark:to-black
          text-neutral-900 dark:text-neutral-100
        "
      >
        <div className="mx-auto max-w-7xl">
          <Gallery />
        </div>
      </section>
    </main>
  );
}
