import { useState } from 'react';

// Types
type SearchType = 'site' | 'file' | 'intitle' | 'inurl' | 'blog' | 'forum' | 'login' | 'music' | 'video' | 'sitemap';
type FileType = 'pdf' | 'doc' | 'xls' | 'ppt' | 'txt';

interface FAQItem {
  question: string;
  answer: string;
}

// FAQ Data
const faqData: FAQItem[] = [
  {
    question: "What is a Google Dork?",
    answer: "Google Dorks are advanced search queries that use special operators to find specific information on the web. They help you narrow down search results using commands like site:, filetype:, intitle:, and more."
  },
  {
    question: "Is this legal?",
    answer: "Yes! Using Google Dorks is completely legal. You're simply using Google's advanced search features to find publicly available information. However, always use this knowledge responsibly and ethically."
  },
  {
    question: "Can I find videos/music?",
    answer: "Absolutely! Using the 'music' or 'video' search types, you can find specific media files indexed by Google. Try combining with filetype: operators for even better results."
  },
  {
    question: "What is a sitemap?",
    answer: "A sitemap is a file that lists all the pages on a website. Finding sitemaps can help you discover all indexed pages of a site, which is useful for security auditing and research."
  }
];

// Social Icons as components
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

// FAQ Item Component
function FAQItemComponent({ item, isOpen, onToggle }: { item: FAQItem; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border border-green-500/30 rounded-lg overflow-hidden bg-black/40 backdrop-blur-sm">
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-green-500/10 transition-colors duration-300"
      >
        <span className="text-green-400 font-medium text-lg">{item.question}</span>
        <svg
          className={`w-6 h-6 text-green-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="px-6 pb-4 text-gray-300 leading-relaxed">{item.answer}</p>
      </div>
    </div>
  );
}

// Main App Component
export function App() {
  const [searchType, setSearchType] = useState<SearchType>('site');
  const [keyword, setKeyword] = useState('');
  const [fileType, setFileType] = useState<FileType>('pdf');
  const [generatedQuery, setGeneratedQuery] = useState('');
  const [copied, setCopied] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);
  const [isHovering, setIsHovering] = useState(false);

  const searchTypes: SearchType[] = ['site', 'file', 'intitle', 'inurl', 'blog', 'forum', 'login', 'music', 'video', 'sitemap'];
  const fileTypes: FileType[] = ['pdf', 'doc', 'xls', 'ppt', 'txt'];

  const generateDork = () => {
    if (!keyword.trim()) return;

    let query = '';
    const k = keyword.trim();

    switch (searchType) {
      case 'site':
        query = `site:${k}`;
        break;
      case 'file':
        query = `filetype:${fileType} "${k}"`;
        break;
      case 'intitle':
        query = `intitle:"${k}"`;
        break;
      case 'inurl':
        query = `inurl:${k}`;
        break;
      case 'blog':
        query = `inurl:blog "${k}"`;
        break;
      case 'forum':
        query = `inurl:forum | inurl:threads "${k}"`;
        break;
      case 'login':
        query = `inurl:login | inurl:signin "${k}"`;
        break;
      case 'music':
        // Professional music dork for open directories
        query = `intitle:"index of" (mp3|wav|m4a) "${k}"`;
        break;
      case 'video':
        // Professional video dork for open directories
        query = `intitle:"index of" (mp4|mkv|avi) "${k}"`;
        break;
      case 'sitemap':
        query = `filetype:xml inurl:sitemap "${k}"`;
        break;
      default:
        query = k;
    }

    setGeneratedQuery(query);
    setCopied(false);
  };

  const copyToClipboard = async () => {
    if (generatedQuery) {
      await navigator.clipboard.writeText(generatedQuery);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const searchOnGoogle = () => {
    if (generatedQuery) {
      const encodedQuery = encodeURIComponent(generatedQuery);
      window.open(`https://www.google.com/search?q=${encodedQuery}`, '_blank');
    }
  };

  const searchEngines = [
    { name: 'AndiSearch', url: 'https://andisearch.com' },
    { name: 'HackerSearch', url: 'https://www.hackersearch.io' },
    { name: 'TradeKey', url: 'https://www.tradekey.com' },
    { name: 'GrayHatWarfare', url: 'https://grayhatwarfare.com' },
    { name: 'CriminalIP', url: 'https://www.criminalip.io' },
    { name: 'Netlas', url: 'https://netlas.io' }
  ];

  return (
    <div className="min-h-screen bg-[#111] relative overflow-hidden">
      {/* CSS-based 3D-like Background with orbiting hat */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Stars background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900 via-black to-black">
          {[...Array(100)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                opacity: Math.random() * 0.7 + 0.3
              }}
            />
          ))}
        </div>
        
        {/* Central glowing orb */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className={`w-32 h-32 rounded-full bg-blue-500 blur-2xl opacity-40 animate-pulse transition-all duration-500 ${isHovering ? 'scale-110' : 'scale-100'}`} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 shadow-[0_0_60px_rgba(66,133,244,0.8)]" />
        </div>
        
        {/* Orbiting hat container - speed increases on hover */}
        <div className={`absolute top-1/2 left-1/2 w-64 h-64 transform -translate-x-1/2 -translate-y-1/2 ${isHovering ? 'animate-spin-fast' : 'animate-spin-slow'}`}>
          {/* Hat on orbit */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            {/* Hat brim */}
            <div className="w-12 h-3 bg-gradient-to-b from-gray-900 to-black rounded-full shadow-lg border border-gray-700" />
            {/* Hat top */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4 w-8 h-6 bg-gradient-to-b from-gray-800 to-black rounded-t-lg border border-gray-700" />
            {/* Hat band */}
            <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-10 h-1 bg-gray-600 rounded" />
          </div>
        </div>
        
        {/* Nebula effect */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-green-500/5 via-transparent to-blue-500/5" />
      </div>

      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-0" />

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <header className="p-6 flex items-center justify-center">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center shadow-lg shadow-green-500/30">
              <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
                <path d="M11 8v6" />
                <path d="M8 11h6" />
              </svg>
            </div>
            <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
              DorkGen Pro
            </span>
          </div>
        </header>

        {/* Glowing Headline */}
        <div className="text-center py-8 px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
            <span className="text-green-400 drop-shadow-[0_0_20px_rgba(57,255,20,0.6)]">Everyday</span>{' '}
            <span className="text-blue-400 drop-shadow-[0_0_20px_rgba(66,133,244,0.6)]">Something</span>{' '}
            <span className="text-purple-400 drop-shadow-[0_0_20px_rgba(168,85,247,0.6)]">News</span>
          </h1>
          <p className="text-gray-400 text-lg mt-2">Advanced Google Dork Generator</p>
        </div>

        {/* Main Generator Card */}
        <main 
          className="flex-1 flex items-center justify-center px-4 py-8"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div className="w-full max-w-2xl bg-black/40 backdrop-blur-md rounded-2xl border border-green-500/30 shadow-2xl shadow-green-500/20 p-8 transition-all duration-300 hover:shadow-green-500/30">
            <h2 className="text-2xl font-bold text-green-400 mb-6 text-center drop-shadow-[0_0_10px_rgba(57,255,20,0.5)]">
              Generate Google Dork
            </h2>

            {/* Search Type Dropdown */}
            <div className="mb-4">
              <label className="block text-gray-300 mb-2 font-medium">Search Type</label>
              <select
                value={searchType}
                onChange={(e) => setSearchType(e.target.value as SearchType)}
                className="w-full px-4 py-3 bg-black/60 border border-green-500/30 rounded-lg text-white focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-500/20 transition-all duration-300"
              >
                {searchTypes.map((type) => (
                  <option key={type} value={type} className="bg-black">
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            {/* File Type Dropdown (conditional) */}
            {searchType === 'file' && (
              <div className="mb-4 animate-fadeIn">
                <label className="block text-gray-300 mb-2 font-medium">File Type</label>
                <select
                  value={fileType}
                  onChange={(e) => setFileType(e.target.value as FileType)}
                  className="w-full px-4 py-3 bg-black/60 border border-green-500/30 rounded-lg text-white focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-500/20 transition-all duration-300"
                >
                  {fileTypes.map((type) => (
                    <option key={type} value={type} className="bg-black">
                      {type.toUpperCase()}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Keyword Input */}
            <div className="mb-6">
              <label className="block text-gray-300 mb-2 font-medium">Keyword</label>
              <input
                type="text"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="Enter your search keyword..."
                className="w-full px-4 py-3 bg-black/60 border border-green-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-500/20 transition-all duration-300"
                onKeyDown={(e) => e.key === 'Enter' && generateDork()}
              />
            </div>

            {/* Generate Button */}
            <button
              onClick={generateDork}
              className="w-full py-4 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-400 hover:to-blue-400 text-white font-bold rounded-lg shadow-lg shadow-green-500/30 hover:shadow-green-500/50 transition-all duration-300 transform hover:scale-[1.02] mb-6"
            >
              Generate Dork
            </button>

            {/* Result Area */}
            {generatedQuery && (
              <div className="bg-black/60 border border-green-500/30 rounded-lg p-4 animate-fadeIn">
                <label className="block text-gray-400 text-sm mb-2">Generated Query:</label>
                <div className="flex items-center gap-2 mb-4">
                  <code className="flex-1 px-4 py-3 bg-black/80 border border-green-500/20 rounded-lg text-green-400 font-mono text-sm break-all">
                    {generatedQuery}
                  </code>
                  <button
                    onClick={copyToClipboard}
                    className={`px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                      copied
                        ? 'bg-green-500 text-white'
                        : 'bg-green-500/20 text-green-400 hover:bg-green-500/30'
                    }`}
                  >
                    {copied ? (
                      <span className="flex items-center gap-1">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Copied!
                      </span>
                    ) : (
                      <span className="flex items-center gap-1">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                        Copy
                      </span>
                    )}
                  </button>
                </div>
                <button
                  onClick={searchOnGoogle}
                  className="w-full py-3 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/50 text-blue-400 font-medium rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"/>
                  </svg>
                  Search on Google
                </button>
              </div>
            )}
          </div>
        </main>

        {/* Alternative Search Engines */}
        <section className="px-4 py-6">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-center text-gray-400 mb-4 text-sm uppercase tracking-wider">Alternative Search Engines</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {searchEngines.map((engine) => (
                <a
                  key={engine.name}
                  href={engine.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-black/40 backdrop-blur-sm border border-green-500/20 rounded-lg text-gray-300 hover:text-green-400 hover:border-green-500/50 hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300 text-sm"
                >
                  {engine.name}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="px-4 py-12">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-center text-green-400 mb-8 drop-shadow-[0_0_10px_rgba(57,255,20,0.5)]">
              Frequently Asked Questions
            </h2>
            <div className="space-y-3">
              {faqData.map((item, index) => (
                <FAQItemComponent
                  key={index}
                  item={item}
                  isOpen={openFAQ === index}
                  onToggle={() => setOpenFAQ(openFAQ === index ? null : index)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Social Share Buttons */}
        <footer className="px-4 py-8 border-t border-green-500/20">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-center text-gray-400 mb-4 text-sm uppercase tracking-wider">Share This Tool</h3>
            <div className="flex justify-center gap-4">
              <a
                href="https://www.facebook.com/sharer/sharer.php?u=https://dorkgen.pro"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-black/40 backdrop-blur-sm border border-blue-500/30 text-blue-400 hover:bg-blue-500 hover:text-white hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
                aria-label="Share on Facebook"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://twitter.com/intent/tweet?text=Check%20out%20this%20Google%20Dork%20Generator!&url=https://dorkgen.pro"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-black/40 backdrop-blur-sm border border-gray-500/30 text-gray-400 hover:bg-black hover:text-white hover:shadow-lg hover:shadow-gray-500/30 transition-all duration-300"
                aria-label="Share on Twitter"
              >
                <TwitterIcon />
              </a>
              <a
                href="https://wa.me/?text=Check%20out%20this%20Google%20Dork%20Generator!%20https://dorkgen.pro"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-black/40 backdrop-blur-sm border border-green-500/30 text-green-400 hover:bg-green-500 hover:text-white hover:shadow-lg hover:shadow-green-500/30 transition-all duration-300"
                aria-label="Share on WhatsApp"
              >
                <WhatsAppIcon />
              </a>
              <a
                href="https://www.linkedin.com/shareArticle?mini=true&url=https://dorkgen.pro&title=Google%20Dork%20Generator"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-black/40 backdrop-blur-sm border border-blue-600/30 text-blue-600 hover:bg-blue-600 hover:text-white hover:shadow-lg hover:shadow-blue-600/30 transition-all duration-300"
                aria-label="Share on LinkedIn"
              >
                <LinkedInIcon />
              </a>
            </div>
          </div>
        </footer>

        {/* Copyright */}
        <div className="text-center py-4 text-gray-500 text-sm">
          <p>© 2024 DorkGen Pro. Use responsibly and ethically.</p>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
        @keyframes spin-slow {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }
        @keyframes spin-fast {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-spin-fast {
          animation: spin-fast 8s linear infinite;
        }
      `}</style>
    </div>
  );
}
