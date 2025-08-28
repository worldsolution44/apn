import React, { useState } from 'react';
import { 
  Menu, 
  X,
  CheckCircle,
  Shield,
  Globe,
  Users,
  Award,
  Heart
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [donationType, setDonationType] = useState<'once' | 'monthly' | 'annually'>('monthly');
  const [selectedAmount, setSelectedAmount] = useState(15);
  const [customAmount, setCustomAmount] = useState('');

  const donationAmounts = {
    once: [25, 50, 100, 250, 500],
    monthly: [5, 15, 25, 50, 100],
    annually: [60, 180, 300, 600, 1200]
  };

  const currentAmounts = donationAmounts[donationType];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="bg-black border-b border-gray-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex items-center">
                <img 
                  src="https://assets.apnews.com/19/66/bc546486408c8595f01753a9fbeb/ap-logo-176-by-208.svg" 
                  alt="AP" 
                  className="h-8 w-auto"
                />
              </div>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-300 hover:text-white font-medium transition-colors">Home</a>
              <a href="#" className="text-gray-300 hover:text-white font-medium transition-colors">Politics</a>
              <a href="#" className="text-gray-300 hover:text-white font-medium transition-colors">World</a>
              <a href="#" className="text-gray-300 hover:text-white font-medium transition-colors">Sports</a>
              <a href="#" className="text-red-500 font-semibold">Support AP</a>
            </nav>

            <button 
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black border-t border-gray-800">
            <div className="px-4 py-2 space-y-1">
              <a href="#" className="block px-3 py-2 text-gray-300 hover:text-white">Home</a>
              <a href="#" className="block px-3 py-2 text-gray-300 hover:text-white">Politics</a>
              <a href="#" className="block px-3 py-2 text-gray-300 hover:text-white">World</a>
              <a href="#" className="block px-3 py-2 text-gray-300 hover:text-white">Sports</a>
              <a href="#" className="block px-3 py-2 text-red-500 font-semibold">Support AP</a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-900 to-black py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <Heart className="h-16 w-16 text-red-500 mx-auto mb-6" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Support independent journalism
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
            For more than 175 years, AP has delivered fast, unbiased news from every corner of the globe. 
            Your support helps us continue this vital mission in an era when factual journalism matters more than ever.
          </p>
          <div className="flex justify-center items-center space-x-8 text-sm text-gray-400">
            <div className="flex items-center">
              <Shield className="h-5 w-5 mr-2 text-red-500" />
              <span>Nonprofit</span>
            </div>
            <div className="flex items-center">
              <Globe className="h-5 w-5 mr-2 text-red-500" />
              <span>Global reach</span>
            </div>
            <div className="flex items-center">
              <Award className="h-5 w-5 mr-2 text-red-500" />
              <span>175+ years</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            
            {/* Left Content */}
            <div className="lg:col-span-3 space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">
                  Why your support matters
                </h2>
                <div className="prose prose-lg text-gray-300">
                  <p className="mb-6">
                    The Associated Press is a not-for-profit news cooperative, owned by its American newspaper 
                    and broadcast members. AP operates as a not-for-profit organization to ensure that news 
                    remains a public service.
                  </p>
                  <p className="mb-6">
                    Your contribution helps AP maintain its independence and continue delivering unbiased, 
                    factual reporting to billions of people worldwide. Every donation directly supports 
                    our mission to inform the world.
                  </p>
                </div>
              </div>

              {/* Impact Stats */}
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Our global impact</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-500 mb-2">1B+</div>
                    <div className="text-gray-400">People reached daily</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-500 mb-2">100+</div>
                    <div className="text-gray-400">Countries covered</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-500 mb-2">4,000+</div>
                    <div className="text-gray-400">Staff worldwide</div>
                  </div>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white">What makes AP different</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Independent, not-for-profit news organization</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Rigorous fact-checking and editorial standards</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">No political agenda or corporate influence</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Transparent operations and funding</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Donation Form */}
            <div className="lg:col-span-2">
              <div className="bg-gray-900 border-2 border-red-500/20 rounded-lg p-6 shadow-2xl">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Make a donation</h3>
                  <p className="text-gray-400">Support independent journalism</p>
                </div>

                {/* Donation Type Toggle - Three Options */}
                <div className="flex bg-gray-800 rounded-lg p-1 mb-6">
                  <button
                    onClick={() => setDonationType('once')}
                    className={`flex-1 py-2 px-3 rounded-md text-xs font-semibold transition-all ${
                      donationType === 'once'
                        ? 'bg-red-600 text-white shadow-sm'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    One-time
                  </button>
                  <button
                    onClick={() => setDonationType('monthly')}
                    className={`flex-1 py-2 px-3 rounded-md text-xs font-semibold transition-all ${
                      donationType === 'monthly'
                        ? 'bg-red-600 text-white shadow-sm'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    Monthly
                  </button>
                  <button
                    onClick={() => setDonationType('annually')}
                    className={`flex-1 py-2 px-3 rounded-md text-xs font-semibold transition-all ${
                      donationType === 'annually'
                        ? 'bg-red-600 text-white shadow-sm'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    Annually
                  </button>
                </div>

                {/* Amount Selection */}
                <div className="space-y-4 mb-6">
                  <label className="block text-sm font-semibold text-white">
                    Select amount:
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {currentAmounts.map((amount) => (
                      <button
                        key={amount}
                        onClick={() => {
                          setSelectedAmount(amount);
                          setCustomAmount('');
                        }}
                        className={`p-3 rounded-lg border-2 text-center font-semibold transition-all hover:shadow-sm ${
                          selectedAmount === amount && !customAmount
                            ? 'border-red-500 bg-red-500/10 text-red-400'
                            : 'border-gray-700 hover:border-red-500/50 text-gray-300 hover:text-white bg-gray-800'
                        }`}
                      >
                        ${amount}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Custom Amount */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-white mb-2">
                    Or enter custom amount:
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">$</span>
                    <input
                      type="number"
                      value={customAmount}
                      onChange={(e) => {
                        setCustomAmount(e.target.value);
                        setSelectedAmount(0);
                      }}
                      placeholder="0"
                      className="w-full pl-8 pr-4 py-3 border-2 border-gray-700 rounded-lg focus:border-red-500 focus:outline-none bg-gray-800 text-white placeholder-gray-500"
                    />
                  </div>
                </div>

                {/* Donate Button */}
                <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-6 rounded-lg transition-all duration-200 hover:shadow-lg mb-4">
                  Donate {donationType === 'once' ? 'Now' : donationType === 'monthly' ? 'Monthly' : 'Annually'}
                </button>

                {/* Security & Info */}
                <div className="text-center space-y-2">
                  <p className="text-xs text-gray-500">
                    🔒 Secure donation powered by industry-standard encryption
                  </p>
                  <p className="text-xs text-gray-500">
                    Tax-deductible in the United States
                  </p>
                  {donationType !== 'once' && (
                    <p className="text-xs text-gray-500">
                      Cancel anytime
                    </p>
                  )}
                </div>
              </div>

              {/* Additional Support Options */}
              <div className="mt-6 bg-gray-900 border border-gray-800 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-3">Other ways to support</h4>
                <div className="space-y-2 text-sm">
                  <a href="#" className="block text-red-400 hover:text-red-300 transition-colors">Corporate partnerships</a>
                  <a href="#" className="block text-red-400 hover:text-red-300 transition-colors">Legacy giving</a>
                  <a href="#" className="block text-red-400 hover:text-red-300 transition-colors">Foundation grants</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-900 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            What our supporters say
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-black border border-gray-800 p-6 rounded-lg">
              <p className="text-gray-300 mb-4">
                "AP's commitment to factual, unbiased reporting is more important than ever. 
                I'm proud to support journalism that serves the public interest."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-700 rounded-full mr-3"></div>
                <div>
                  <div className="font-semibold text-white">Sarah M.</div>
                  <div className="text-sm text-gray-500">Monthly supporter</div>
                </div>
              </div>
            </div>
            <div className="bg-black border border-gray-800 p-6 rounded-lg">
              <p className="text-gray-300 mb-4">
                "In a world of misinformation, AP stands as a beacon of truth. 
                Their global coverage helps me stay informed about what really matters."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-700 rounded-full mr-3"></div>
                <div>
                  <div className="font-semibold text-white">Michael R.</div>
                  <div className="text-sm text-gray-500">Annual supporter</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <img 
                  src="https://assets.apnews.com/19/66/bc546486408c8595f01753a9fbeb/ap-logo-176-by-208.svg" 
                  alt="AP" 
                  className="h-8 w-auto"
                />
              </div>
              <p className="text-gray-400 text-sm">
                The definitive source for global and local news
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">About</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Our mission</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Leadership</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Donate</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Corporate partnerships</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Foundation support</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Legacy giving</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Use</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Accessibility</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>© 2025 The Associated Press. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;