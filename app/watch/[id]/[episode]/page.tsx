import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Link from 'next/link';

const getAnimeDetails = async (id: string) => {
  const res = await fetch(`https://api.jikan.moe/v4/anime/${id}/full`);
  const data = await res.json();
  return data.data;
};

export default async function WatchPage({
  params,
}: {
  params: { id: string; episode: string };
}) {
  const anime = await getAnimeDetails(params.id);
  const currentEpisode = parseInt(params.episode);
  const totalEpisodes = anime.episodes || 12;

  return (
    <div className="container py-8">
      <div className="mb-4">
        <Link
          href={`/anime/${params.id}`}
          className="text-primary hover:underline inline-flex items-center gap-2"
        >
          <FiChevronLeft />
          Back to Anime Details
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Video Player */}
        <div className="lg:col-span-3">
          <div className="aspect-video bg-black rounded-lg overflow-hidden">
            {/* Replace with actual video player component */}
            <div className="w-full h-full flex items-center justify-center">
              <p className="text-gray-400">Video Player Placeholder</p>
            </div>
          </div>

          {/* Episode Navigation */}
          <div className="flex items-center justify-between mt-4">
            <Link
              href={`/watch/${params.id}/${currentEpisode - 1}`}
              className={`btn-primary ${
                currentEpisode <= 1 ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              onClick={(e) => currentEpisode <= 1 && e.preventDefault()}
            >
              <FiChevronLeft />
              Previous Episode
            </Link>
            <span className="text-gray-300">
              Episode {currentEpisode} of {totalEpisodes}
            </span>
            <Link
              href={`/watch/${params.id}/${currentEpisode + 1}`}
              className={`btn-primary ${
                currentEpisode >= totalEpisodes ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              onClick={(e) => currentEpisode >= totalEpisodes && e.preventDefault()}
            >
              Next Episode
              <FiChevronRight />
            </Link>
          </div>
        </div>

        {/* Episode List */}
        <div className="lg:col-span-1">
          <h2 className="text-xl font-semibold mb-4">Episodes</h2>
          <div className="grid grid-cols-2 gap-2">
            {Array.from({ length: totalEpisodes }, (_, i) => i + 1).map(
              (episode) => (
                <Link
                  key={episode}
                  href={`/watch/${params.id}/${episode}`}
                  className={`p-3 rounded-lg text-center ${
                    episode === currentEpisode
                      ? 'bg-primary'
                      : 'bg-gray-800 hover:bg-gray-700'
                  }`}
                >
                  {episode}
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 