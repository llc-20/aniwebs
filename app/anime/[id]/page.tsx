import Image from 'next/image';
import Link from 'next/link';
import { FiPlay, FiStar, FiCalendar, FiClock } from 'react-icons/fi';

const getAnimeDetails = async (id: string) => {
  const res = await fetch(`https://api.jikan.moe/v4/anime/${id}/full`);
  const data = await res.json();
  return data.data;
};

export default async function AnimePage({ params }: { params: { id: string } }) {
  const anime = await getAnimeDetails(params.id);

  return (
    <div className="container py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Anime Poster */}
        <div className="lg:col-span-1">
          <div className="card">
            <div className="relative aspect-[2/3]">
              <Image
                src={anime.images.jpg.large_image_url}
                alt={anime.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
                <span className="flex items-center gap-1">
                  <FiStar className="text-yellow-400" />
                  {anime.score}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <FiCalendar />
                  {anime.year || 'N/A'}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <FiClock />
                  {anime.duration}
                </span>
              </div>
              <Link
                href={`/watch/${params.id}/1`}
                className="btn-primary w-full flex items-center justify-center gap-2"
              >
                <FiPlay />
                Watch Now
              </Link>
            </div>
          </div>
        </div>

        {/* Right Column - Anime Details */}
        <div className="lg:col-span-2">
          <h1 className="text-3xl font-bold mb-4">{anime.title}</h1>
          <div className="flex flex-wrap gap-2 mb-6">
            {anime.genres.map((genre: any) => (
              <span
                key={genre.mal_id}
                className="bg-gray-800 px-3 py-1 rounded-full text-sm"
              >
                {genre.name}
              </span>
            ))}
          </div>
          <div className="prose prose-invert max-w-none">
            <h2 className="text-xl font-semibold mb-2">Synopsis</h2>
            <p className="text-gray-300">{anime.synopsis}</p>
          </div>

          {/* Episodes */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Episodes</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {Array.from({ length: anime.episodes || 12 }, (_, i) => i + 1).map(
                (episode) => (
                  <Link
                    key={episode}
                    href={`/watch/${params.id}/${episode}`}
                    className="bg-gray-800 p-4 rounded-lg hover:bg-primary transition-colors text-center"
                  >
                    Episode {episode}
                  </Link>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 