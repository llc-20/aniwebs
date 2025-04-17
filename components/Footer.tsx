import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-gray-700">
      <div className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">AniWebs</h3>
            <p className="text-gray-400">
              Watch your favorite anime online in HD quality. Free streaming, no ads.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/popular" className="text-gray-400 hover:text-primary transition-colors">
                  Popular
                </Link>
              </li>
              <li>
                <Link href="/genres" className="text-gray-400 hover:text-primary transition-colors">
                  Genres
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/dmca" className="text-gray-400 hover:text-primary transition-colors">
                  DMCA
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a href="mailto:support@aniwebs.com" className="text-gray-400 hover:text-primary transition-colors">
                  support@aniwebs.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} AniWebs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 