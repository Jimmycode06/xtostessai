import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import Image from "next/image";

// Les avis des utilisateurs
const reviews = [
  {
    name: "Alice",
    username: "@alice",
    body: "Xtos m&apos;Aide à comprendre des vidéos complexes en un instant. C&apos;est révolutionnaire !",
    img: "https://avatar.vercel.sh/alice",
  },
  {
    name: "Bob",
    username: "@bob",
    body: "Enfin un outil qui simplifie vraiment ma vie. Merci Xtos !",
    img: "https://avatar.vercel.sh/bob",
  },
  {
    name: "Charlie",
    username: "@charlie",
    body: "Avec Xtos, je gagne un temps fou en regardant des résumés précis de vidéos longues.",
    img: "https://avatar.vercel.sh/charlie",
  },
  {
    name: "Diane",
    username: "@diane",
    body: "Une innovation impressionnante. Les résumés sont toujours pertinents !",
    img: "https://avatar.vercel.sh/diane",
  },
  {
    name: "Eve",
    username: "@eve",
    body: "Je ne sais pas comment je faisais avant Xtos. C&apos;est incroyable !",
    img: "https://avatar.vercel.sh/eve",
  },
  {
    name: "Frank",
    username: "@frank",
    body: "Les résumés de vidéos me permettent d&apos;apprendre plus vite que jamais.",
    img: "https://avatar.vercel.sh/frank",
  },
];

// Diviser les avis en 2 lignes
const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

// Composant ReviewCard pour chaque avis utilisateur
const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-48 cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <Image
          className="rounded-full"
          width={32}
          height={32}
          alt=""
          src={img}
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

// Composant MarqueeDemo pour le défilement horizontal
const MarqueeDemo = () => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full max-w-4xl mx-auto overflow-hidden rounded-lg border bg-background md:shadow-xl">
      {/* Première ligne de défilement */}
      <div className="w-full mb-4">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
      </div>

      {/* Deuxième ligne de défilement (inverse) */}
      <div className="w-full">
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
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
        {/* Titre du site */}
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
          Xtos
        </h1>
        <p className="text-center text-lg text-gray-600 mb-8">
          Le SaaS qui transforme les vidéos YouTube en résumés clairs et
          rapides.
        </p>

        {/* Explication des fonctionnalités */}
        <div className="flex gap-8 justify-center flex-wrap">
          {/* Bloc Fonctionnalité 1 */}
          <div className="bg-white shadow-lg rounded-lg p-6 w-full sm:w-[300px] border border-gray-300">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              Résumé instantané
            </h2>
            <p className="text-gray-600 mb-4">
              Obtenez un résumé détaillé de n&apos;importe quelle vidéo en
              quelques secondes.
            </p>
          </div>

          {/* Bloc Fonctionnalité 2 */}
          <div className="bg-white shadow-lg rounded-lg p-6 w-full sm:w-[300px] border border-gray-300">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              Gain de temps
            </h2>
            <p className="text-gray-600 mb-4">
              Ne perdez plus de temps à regarder des vidéos longues. Xtos
              extrait l&apos;essentiel.
            </p>
          </div>

          {/* Bloc Fonctionnalité 3 */}
          <div className="bg-white shadow-lg rounded-lg p-6 w-full sm:w-[300px] border border-gray-300">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              Simple d&apos;utilisation
            </h2>
            <p className="text-gray-600 mb-4">
              Collez simplement un lien YouTube et laissez Xtos faire le reste.
            </p>
          </div>
        </div>

        {/* Marquee des avis */}
        <div className="mt-16 w-full">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Ce que disent nos utilisateurs
          </h2>
          <MarqueeDemo />
        </div>
      </main>

      {/* Ajout du texte "Xtos - All rights reserved" */}
      <div className="mt-auto text-center text-sm text-black">
        <p>© 2024 Xtos - Tous droits réservés</p>
      </div>
    </div>
  );
}
