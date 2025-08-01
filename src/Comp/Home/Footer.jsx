import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-white py-8  border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
        
        {/* Column 1 */}
        <div>
          <h3 className="text-xl font-semibold text-pink-500 mb-3">🔥 LustVerse</h3>
          <p className="text-zinc-400">
            Desi bold stories, web content, and fantasies served fresh every night. 100% adult entertainment zone.
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h4 className="text-lg font-semibold text-pink-400 mb-2">Quick Links</h4>
          <ul className="space-y-1">
            <li><Link to="/" className="hover:text-pink-500 transition">Home</Link></li>
            <li><Link to="/newweb" className="hover:text-pink-500 transition">Web Series</Link></li>
            <li><Link to="/stories" className="hover:text-pink-500 transition">Stories</Link></li>
            {/* <li><a href="#" className="hover:text-pink-500 transition">Contact</a></li> */}
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h4 className="text-lg font-semibold text-pink-400 mb-2">Follow Us</h4>
          {/* <div className="flex space-x-4">
            <a href="#" className="hover:text-pink-500 transition">Instagram</a>
            <a href="#" className="hover:text-pink-500 transition">Twitter (X)</a>
            <a href="#" className="hover:text-pink-500 transition">Telegram</a>
          </div> */}
          <p className="text-xs text-zinc-500 mt-4">© {new Date().getFullYear()} LustVerse. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
