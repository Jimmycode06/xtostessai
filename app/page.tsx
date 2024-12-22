import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";

// Les vidéos à afficher avec leurs résumés
const videos = [
  {
    title: "Introduction à la blockchain",
    description:
      "Découvrez les bases de la blockchain, comment elle fonctionne et pourquoi elle est si importante.",
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Remplacer par l'URL de ta vidéo YouTube
  },
  {
    title: "Les contrats intelligents expliqués",
    description:
      "Comprenez ce que sont les contrats intelligents et comment ils révolutionnent l'industrie.",
    url: "https://www.youtube.com/embed/MiXnzyjwqO8", // Remplacer par l'URL de ta vidéo YouTube
  },
  {
    title: "La finance décentralisée (DeFi)",
    description:
      "Plongez dans l'univers de la DeFi et découvrez comment elle transforme la finance traditionnelle.",
    url: "https://www.youtube.com/embed/9bZkp7q19f0", // Remplacer par l'URL de ta vidéo YouTube
  },
];

// Diviser les vidéos en 2 lignes pour un effet de défilement
const firstRow = videos.slice(0, videos.length / 2);
const secondRow = videos.slice(videos.length / 2);

// Composant VideoCard pour chaque vidéo
const VideoCard = ({
  title,
  description,
  url,
}: {
  title: string;
  description: string;
  url: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-48 cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-col gap-2">
        {/* Utilisation de l'iframe pour intégrer la vidéo YouTube */}
        <iframe
          className="w-full h-32 rounded-lg"
          src={url}
          title={title}
          frameBorder="0"
          allowFullScreen
        ></iframe>
        <figcaption className="text-sm font-medium dark:text-white">
          {title}
        </figcaption>
        <p className="text-xs font-medium dark:text-white/40">{description}</p>
      </div>
    </figure>
  );
};

// Composant MarqueeDemo pour le défilement horizontal des vidéos
const MarqueeDemo = () => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full max-w-4xl mx-auto overflow-hidden rounded-lg border bg-background md:shadow-xl">
      {/* Première ligne de défilement */}
      <div className="w-full mb-4">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((video) => (
            <VideoCard key={video.title} {...video} />
          ))}
        </Marquee>
      </div>

      {/* Deuxième ligne de défilement (inverse) */}
      <div className="w-full">
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((video) => (
            <VideoCard key={video.title} {...video} />
          ))}
        </Marquee>
      </div>

      {/* Masque les bords pour un effet de dégradé */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
};

// Page principale Home
export default function Home() {
  return (
    <div className="grid grid-rows-[1fr_1fr] items-center justify-items-center min-h-screen p-8 pb-8 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-white">
      <main className="flex flex-col gap-8 row-start-1 items-center sm:items-start w-full">
        {/* Titre du site xtos */}
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
          xtos.xyz
        </h1>
        <p className="text-center text-lg text-gray-600 mb-8">
          Découvrez les dernières vidéos sur la blockchain, DeFi et plus encore,
          résumées pour vous.
        </p>

        {/* Conteneur pour les blocs d'information */}
        <div className="flex gap-8 justify-center flex-wrap">
          {/* Bloc Vidéo 1 */}
          <div className="bg-white shadow-lg rounded-lg p-6 w-full sm:w-[300px] border border-gray-300">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              Blockchain Basics
            </h2>
            <p className="text-gray-600 mb-4">
              Une introduction complète à la blockchain et à ses concepts
              fondamentaux.
            </p>
            <a
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              className="text-blue-500 hover:underline"
            >
              Voir la vidéo
            </a>
          </div>

          {/* Bloc Vidéo 2 */}
          <div className="bg-white shadow-lg rounded-lg p-6 w-full sm:w-[300px] border border-gray-300">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              Smart Contracts Explained
            </h2>
            <p className="text-gray-600 mb-4">
              Apprenez ce que sont les contrats intelligents et comment ils
              fonctionnent.
            </p>
            <a
              href="https://www.youtube.com/watch?v=MiXnzyjwqO8"
              className="text-blue-500 hover:underline"
            >
              Voir la vidéo
            </a>
          </div>

          {/* Bloc Vidéo 3 */}
          <div className="bg-white shadow-lg rounded-lg p-6 w-full sm:w-[300px] border border-gray-300">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              Introduction to DeFi
            </h2>
            <p className="text-gray-600 mb-4">
              Une plongée dans la finance décentralisée et ses applications dans
              la crypto.
            </p>
            <a
              href="https://www.youtube.com/watch?v=9bZkp7q19f0"
              className="text-blue-500 hover:underline"
            >
              Voir la vidéo
            </a>
          </div>
        </div>

        {/* Marquee des vidéos */}
        <div className="mt-16 w-full">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Nos vidéos à découvrir
          </h2>
          <MarqueeDemo />
        </div>
      </main>

      {/* Ajout du texte "xtos - All rights reserved" */}
      <div className="mt-auto text-center text-sm text-black">
        <p>© 2024 xtos.xyz - All Rights Reserved</p>
      </div>
    </div>
  );
}
