# AniWebs - Anime Streaming Website

A modern anime streaming website built with Next.js, Tailwind CSS, and the Jikan API.

## Features

- 🎬 Watch anime episodes
- 🔍 Search functionality
- 📱 Responsive design
- 🎨 Modern UI with Tailwind CSS
- ⚡ Fast performance with Next.js
- 📊 Anime details and information
- 📺 Video player integration

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/aniwebs.git
cd aniwebs
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## API Integration

This project uses the [Jikan API](https://jikan.moe/) for anime data. The API is free to use but has rate limits.

## Project Structure

```
aniwebs/
├── app/                    # Next.js app directory
│   ├── anime/             # Anime detail pages
│   ├── watch/             # Watch pages
│   ├── search/            # Search functionality
│   └── page.tsx           # Homepage
├── components/            # Reusable components
├── public/               # Static assets
└── styles/              # Global styles
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Jikan API](https://jikan.moe/) for anime data
- [Next.js](https://nextjs.org/) for the framework
- [Tailwind CSS](https://tailwindcss.com/) for styling
