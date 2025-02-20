import LazyImage from "./LazyImage";
import { motion } from "framer-motion";

const images = [
  {
    src: "slideshow/office.jpeg",
    alt: "Full Remote Office",
    classes: "rotate-2",
  },
  {
    src: "slideshow/yoox-01.jpeg",
    alt: "Frontend Developers",
    classes: "-rotate-2",
  },
  {
    src: "slideshow/trekking.jpg",
    alt: "Appennino Trekking",
    classes: "rotate-2",
  },
  {
    src: "slideshow/yoox-02.jpeg",
    alt: "Frontend Developers",
    classes: "rotate-2",
  },
  {
    src: "slideshow/trekking-02.jpeg",
    alt: "Appennino Trekking",
    classes: "-rotate-2",
  },
  { src: "slideshow/yoox-03.jpeg", alt: "New Image 1", classes: "-rotate-2" },
  //   { src: "slideshow/new-image-02.jpeg", alt: "New Image 2", classes: 'rotate-2' },
];

export default function ImageSlider() {
  return (
    <div className="relative w-full overflow-hidden py-4">
      <motion.div
        className="flex gap-5"
        initial={{ x: "0%" }}
        animate={{ x: "-100%" }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 50, // Tempo di scorrimento
        }}
      >
        {[...images, ...images].map(
          (
            img,
            index // Raddoppia le immagini per creare il loop
          ) => (
            <div
              key={index}
              className={`relative aspect-9/10 w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800 ${img.classes}`}
            >
              <LazyImage
                fileName={img.src}
                width={400}
                srcSet={[
                  "w=400&dpr=1 1x,",
                  "w=800&dpr=2 2x,",
                  "w=1200&dpr=3 3x",
                ]}
                sizes="(max-width: 600px) 364px, 300px"
                alt={img.alt}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          )
        )}
      </motion.div>
    </div>
  );
}
