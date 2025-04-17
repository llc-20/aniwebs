import Image from 'next/image';
import Link from 'next/link';
import { FiPlay } from 'react-icons/fi';

const getTrendingAnime = async () => {
  const res = await fetch('https://api.jikan.moe/v4/top/anime');
  const data = await res.json();
  return data.data;
};

export default async function Home() {
  const trendingAnime = await getTrendingAnime();

  return (
    <div className="container py-8">
      {/* Hero Section */}
      <section className="relative h-[60vh] rounded-xl overflow-hidden mb-12">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary to-transparent z-10" />
        <Image
          src={trendingAnime[0].images.jpg.large_image_url}
          alt={trendingAnime[0].title}
          fill
          className="object-cover"
        />
        <div className="absolute bottom-0 left-0 p-8 z-20">
          <h1 className="text-4xl font-bold mb-4">{trendingAnime[0].title}</h1>
          <p className="text-gray-300 mb-6 line-clamp-2">{trendingAnime[0].synopsis}</p>
          <Link
            href={`/anime/${trendingAnime[0].mal_id}`}
            className="btn-primary inline-flex items-center gap-2"
          >
            <FiPlay />
            Watch Now
          </Link>
        </div>
      </section>

      {/* Trending Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Trending Now</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {trendingAnime.slice(1, 13).map((anime: any) => (
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
      </section>

      {/* Popular Genres */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Popular Genres</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Action', 'Adventure', 'Comedy', 'Drama', 'Fantasy', 'Horror', 'Mystery', 'Romance'].map((genre) => (
            <Link
              key={genre}
              href={`/genres/${genre.toLowerCase()}`}
              className="bg-gray-800 p-4 rounded-lg hover:bg-primary transition-colors text-center"
            >
              {genre}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
} 