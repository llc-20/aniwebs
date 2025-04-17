import { FiSearch, FiFilter } from 'react-icons/fi';
import Image from 'next/image';
import Link from 'next/link';

const searchAnime = async (query: string) => {
  const res = await fetch(`https://api.jikan.moe/v4/anime?q=${query}&sfw`);
  const data = await res.json();
  return data.data;
};

export default async function SearchPage({
  searchParams,
}: {
  searchParams: { q: string };
}) {
  const results = searchParams.q ? await searchAnime(searchParams.q) : [];

  return (
    <div className="container py-8">
      <div className="max-w-2xl mx-auto mb-8">
        <form className="relative">
          <input
            type="text"
            name="q"
            placeholder="Search anime..."
            defaultValue={searchParams.q}
            className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg pl-12 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <button
            type="submit"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-primary"
          >
            <FiFilter />
          </button>
        </form>
      </div>

      {searchParams.q ? (
        <div>
          <h2 className="text-2xl font-bold mb-6">
            Search Results for "{searchParams.q}"
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {results.map((anime: any) => (
              <Link
                key={anime.mal_id}
                href={`/anime/${anime.mal_id}`}
                className="card group"
              >
                <div className="relative aspect-[2/3]">
                  <Image
                    src={anime.images.jpg.large_image_url}
                    alt={anime.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="p-3">
                  <h3 className="font-semibold line-clamp-2">{anime.title}</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-400 mt-1">
                    <span>{anime.score} ⭐</span>
                    <span>•</span>
                    <span>{anime.type}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <div className="text-center text-gray-400">
          <p>Enter a search term to find anime</p>
        </div>
      )}
    </div>
  );
} 