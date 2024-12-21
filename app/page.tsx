import Image from "next/image";
import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";

// Les avis des utilisateurs
const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/james",
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
        "relative w-48 cursor-pointer overflow-hidden rounded-xl border p-4", // Réduit la largeur de la carte
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
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
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-white">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full">
        {/* Titre du site */}
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
          airdrop.xyz
        </h1>
        <p className="text-center text-lg text-gray-600 mb-8">
          Découvrez les dernières opportunités d&apos;airdrop disponibles pour
          vous.
        </p>

        {/* Conteneur pour les blocs */}
        <div className="flex gap-8 justify-center flex-wrap">
          {/* Bloc Airdrop 1 */}
          <div className="bg-white shadow-lg rounded-lg p-6 w-full sm:w-[300px] border border-gray-300">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              Airdrop #1
            </h2>
            <p className="text-gray-600 mb-4">
              Un airdrop excitant pour la première communauté décentralisée.
              Participez dès maintenant !
            </p>
            <a href="#" className="text-blue-500 hover:underline">
              En savoir plus
            </a>
          </div>

          {/* Bloc Airdrop 2 */}
          <div className="bg-white shadow-lg rounded-lg p-6 w-full sm:w-[300px] border border-gray-300">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              Airdrop #2
            </h2>
            <p className="text-gray-600 mb-4">
              Découvrez le deuxième airdrop de notre série. Profitez
              d&apos;offres exclusives !
            </p>
            <a href="#" className="text-blue-500 hover:underline">
              En savoir plus
            </a>
          </div>

          {/* Bloc Airdrop 3 */}
          <div className="bg-white shadow-lg rounded-lg p-6 w-full sm:w-[300px] border border-gray-300">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              Airdrop #3
            </h2>
            <p className="text-gray-600 mb-4">
              Rejoignez cet airdrop pour gagner des récompenses exceptionnelles.
              Ne manquez pas l&apos;opportunité !
            </p>
            <a href="#" className="text-blue-500 hover:underline">
              En savoir plus
            </a>
          </div>
        </div>

        {/* Marquee des avis */}
        <div className="mt-16 w-full">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Ce que disent les utilisateurs
          </h2>
          <MarqueeDemo />
        </div>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
