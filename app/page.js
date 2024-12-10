"use client"
import React from 'react';
import Link from "next/link";
import { useEffect, useRef, useState } from 'react';

function useScrollAnimation() {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return [ref, isVisible];
}

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="container mx-auto pt-20 pb-32 text-center relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 text-4xl font-mono text-white">.css {}</div>
          <div className="absolute top-40 right-20 text-4xl font-mono text-white">#style {}</div>
          <div className="absolute bottom-20 left-1/4 text-4xl font-mono text-white">.transform {}</div>
        </div>
        
        {/* Main content */}
        <div className="relative z-10">
          <div className="flex items-center justify-center mb-6">
            <h1 className="text-7xl font-bold relative">
              <span className="text-white">AI CSS Generator</span>
              <div className="absolute -top-6 -right-6 text-4xl animate-bounce"></div>
            </h1>
          </div>
          
          <p className="text-2xl text-gray-400 mb-12 max-w-2xl mx-auto font-light">
            Transform your plain HTML into beautifully styled masterpieces with our
            AI-powered CSS generator.
          </p>
          
          <div className="flex justify-center gap-6">
            <Link href="/css-generator">
              <button className="group relative px-8 py-4 rounded-full text-xl font-bold bg-gradient-to-r from-gray-600 to-gray-600 text-white hover:opacity-90 transition-all duration-200 shadow-lg hover:shadow-xl">
                Start Styling
                <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-200"></div>
              </button>
            </Link>
          </div>
          
          {/* Website Preview mockups */}
          <div className="mt-16 mx-auto max-w-6xl px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Before Website */}
              <div className="relative group bg-gray-900 rounded-xl shadow-lg overflow-hidden animate-fade-in border border-gray-800">
                <div className="absolute top-0 right-0 bg-gray-800 text-gray-400 text-xs px-3 py-1 rounded-bl-lg">
                  Before
                </div>
                <div className="bg-gray-800 px-4 py-2 border-b border-gray-700 flex items-center">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-gray-600 animate-pulse"></div>
                    <div className="w-3 h-3 rounded-full bg-gray-600 animate-pulse delay-100"></div>
                    <div className="w-3 h-3 rounded-full bg-gray-600 animate-pulse delay-200"></div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="space-y-4 text-left">
                    <div className="h-8 bg-gray-800 w-1/2 flex items-center px-3 animate-slide-in-left">
                      <span className="text-gray-400">Travel Blog</span>
                    </div>
                    <div className="h-4 bg-gray-800 w-full flex items-center px-3 animate-slide-in-left delay-100">
                      <span className="text-gray-400 text-sm">Discover amazing destinations and adventures</span>
                    </div>
                    <div className="h-4 bg-gray-800 w-3/4 flex items-center px-3 animate-slide-in-left delay-200">
                      <span className="text-gray-400 text-sm">Join our community of travelers</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-6">
                      <div className="h-20 bg-gray-800 p-2 animate-fade-in delay-300 hover:bg-gray-700 transition-colors">
                        <span className="text-gray-400 text-sm">Japan Guide</span>
                      </div>
                      <div className="h-20 bg-gray-800 p-2 animate-fade-in delay-400 hover:bg-gray-700 transition-colors">
                        <span className="text-gray-400 text-sm">Paris Guide</span>
                      </div>
                    </div>
                    <div className="h-12 bg-gray-800 w-1/4 flex items-center justify-center animate-bounce-in delay-500">
                      <span className="text-gray-400">Read More</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* After Website */}
              <div className="relative group bg-gray-900 rounded-xl shadow-xl overflow-hidden animate-fade-in transform hover:scale-[1.02] transition-all duration-300 border border-gray-800">
                <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs px-3 py-1 rounded-bl-lg">
                  After
                </div>
                <div className="bg-gray-800 px-4 py-3 border-b border-gray-700 flex items-center justify-between">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400 animate-glow"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400 animate-glow delay-100"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400 animate-glow delay-200"></div>
                  </div>
                </div>
                <div className="p-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
                  <div className="space-y-6 text-left">
                    <div className="group animate-slide-up">
                      <div className="h-10 bg-gradient-to-r from-purple-600 to-blue-600 w-1/2 rounded-xl shadow-lg flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <span className="text-white font-bold relative z-10">Travel Blog</span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="h-auto bg-gray-800 bg-opacity-90 backdrop-blur-sm w-full rounded-xl flex items-center p-4 shadow-lg animate-slide-in-right border border-gray-700">
                        <div className="flex items-center">
                          <span className="text-2xl mr-3 animate-bounce">✈️</span>
                          <div>
                            <span className="text-white font-medium">Embark on extraordinary journeys</span>
                            <p className="text-gray-400 text-sm mt-1">Discover hidden gems and iconic landmarks worldwide</p>
                          </div>
                        </div>
                      </div>

                      <div className="h-auto bg-gray-800 bg-opacity-90 backdrop-blur-sm w-3/4 rounded-xl flex items-center p-4 shadow-lg animate-slide-in-right delay-100 border border-gray-700">
                        <div className="flex items-center">
                          <span className="text-2xl mr-3 animate-pulse">🌟</span>
                          <div>
                            <span className="text-white font-medium">Join our explorer community</span>
                            <p className="text-gray-400 text-sm mt-1">Connect with 10,000+ passionate travelers</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mt-8">
                      <div className="group h-auto bg-gray-800 rounded-xl shadow-lg p-4 animate-slide-up delay-200 transform hover:-translate-y-1 hover:shadow-xl transition-all duration-300 border border-gray-700">
                        <div className="flex items-center mb-2">
                          <span className="text-lg mr-2 animate-wave">🗾</span>
                          <span className="text-white font-semibold">Japan Guide</span>
                        </div>
                        <p className="text-gray-400 text-sm">Explore ancient temples & modern cities</p>
                        <div className="mt-2 w-1/2 h-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full group-hover:w-full transition-all duration-300"></div>
                      </div>

                      <div className="group h-auto bg-gray-800 rounded-xl shadow-lg p-4 animate-slide-up delay-300 transform hover:-translate-y-1 hover:shadow-xl transition-all duration-300 border border-gray-700">
                        <div className="flex items-center mb-2">
                          <span className="text-lg mr-2 animate-wave delay-100">🗼</span>
                          <span className="text-white font-semibold">Paris Guide</span>
                        </div>
                        <p className="text-gray-400 text-sm">Experience the city of lights</p>
                        <div className="mt-2 w-1/2 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full group-hover:w-full transition-all duration-300"></div>
                      </div>
                    </div>

                    <button className="group h-12 bg-gradient-to-r from-purple-600 to-blue-600 w-1/3 rounded-full shadow-lg flex items-center justify-center animate-bounce-in delay-500 transform hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                      <span className="text-white font-semibold mr-2">Read More</span>
                      <span className="text-white opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">→</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Replace the Features Section with this enhanced version */}

<section id="features" className="py-20 bg-gray-900">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-16 text-white">
      Three Steps to Beautiful Code
    </h2>
    
    <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-2">
      {/* Step 1 */}
      <div className="group w-full md:w-1/3 p-8 rounded-2xl bg-gray-800 border border-gray-700 hover:shadow-xl transition-all duration-300 animate-fade-in">
        <div className="mb-6 text-4xl font-mono text-white">
          {'</>'}
        </div>
        <h3 className="text-2xl font-bold mb-4 text-white">
          1. Paste Your Code
        </h3>
        <p className="text-gray-400 leading-relaxed">
          Share your HTML code with our AI stylist. No matter how plain
          it looks, we'll transform it into something extraordinary.
        </p>
      </div>

      {/* Arrow 1 */}
      <div className="hidden md:flex w-12 items-center justify-center animate-fade-in delay-200">
        <div className="w-12 h-12 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-black-600 rounded-full animate-pulse"></div>
          <div className="absolute inset-0 flex items-center justify-center text-white text-2xl transform group-hover:translate-x-1 transition-transform">
            →
          </div>
        </div>
      </div>

      {/* Step 2 */}
      <div className="group w-full md:w-1/3 p-8 rounded-2xl bg-gray-800 border border-gray-700 hover:shadow-xl transition-all duration-300 animate-fade-in delay-300">
        <div className="mb-6 text-4xl text-white">
          ⌨️
        </div>
        <h3 className="text-2xl font-bold mb-4 text-white">
          2. Describe Your Vision
        </h3>
        <p className="text-gray-400 leading-relaxed">
          Tell us your design preferences in plain English. Our AI understands
          and translates your vision into beautiful CSS.
        </p>
      </div>

      {/* Arrow 2 */}
      <div className="hidden md:flex w-12 items-center justify-center animate-fade-in delay-500">
        <div className="w-12 h-12 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-black-600 rounded-full animate-pulse delay-200"></div>
          <div className="absolute inset-0 flex items-center justify-center text-white text-2xl transform group-hover:translate-x-1 transition-transform">
            →
          </div>
        </div>
      </div>

      {/* Step 3 */}
      <div className="group w-full md:w-1/3 p-8 rounded-2xl bg-gray-800 border border-gray-700 hover:shadow-xl transition-all duration-300 animate-fade-in delay-600">
        <div className="mb-6 text-4xl text-white">
          ✓
        </div>
        <h3 className="text-2xl font-bold mb-4 text-white">
          3. Get Styled Code
        </h3>
        <p className="text-gray-400 leading-relaxed">
          Review your transformed design with professional CSS styles.
          Keep refining until it's pixel-perfect.
        </p>
      </div>
    </div>

    {/* Mobile arrows for responsive design */}
    <div className="flex md:hidden justify-center my-4">
      <div className="w-8 h-8 flex items-center justify-center">
        <div className="transform rotate-90 text-white text-2xl">→</div>
      </div>
    </div>
  </div>
</section>

      {/* Transform Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-white animate-fade-in">
            Transform Any Design
          </h2>
          <p className="text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto animate-fade-in delay-100">
            From simple components to complex layouts, watch your HTML transform into modern, beautiful designs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card Component Example */}
            <div className="rounded-xl overflow-hidden shadow-lg group animate-fade-in delay-100 border border-gray-800">
              <div className="bg-gray-900 px-4 py-2 text-gray-400 text-sm font-mono flex justify-between items-center border-b border-gray-800">
                <span>Card Component</span>
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
              </div>
              <div className="grid grid-rows-2 h-64">
                {/* Before */}
                <div className="bg-gray-900 p-6 flex items-center justify-center border-b border-gray-800">
                  <div className="w-full h-full bg-gray-800 p-4 rounded-lg">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gray-700 rounded-lg flex-shrink-0"></div>
                      <div className="flex-1">
                        <div className="h-4 bg-gray-700 w-3/4 mb-2 rounded"></div>
                        <div className="h-3 bg-gray-700 w-full mb-2 rounded"></div>
                        <div className="h-3 bg-gray-700 w-2/3 rounded"></div>
                      </div>
                    </div>
                    <div className="mt-4 flex justify-between items-center">
                      <div className="h-6 bg-gray-700 w-20 rounded"></div>
                      <div className="h-6 bg-gray-700 w-6 rounded"></div>
                    </div>
                  </div>
                </div>

                {/* After */}
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 flex items-center justify-center">
                  <div className="w-full h-full bg-gray-800 rounded-xl shadow-lg p-4 hover:shadow-xl transition-all duration-300 group/card border border-gray-700">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-lg flex-shrink-0 overflow-hidden relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-600 animate-pulse"></div>
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/50 to-transparent animate-pulse delay-100"></div>
                      </div>
                      <div className="flex-1 space-y-2">
                        <div className="h-4 bg-gradient-to-r from-purple-600 to-blue-600 w-3/4 rounded-full transform group-hover/card:scale-95 transition-transform duration-300"></div>
                        <div className="space-y-1">
                          <div className="h-3 bg-gradient-to-r from-blue-600/60 to-purple-600/60 w-full rounded-full transform group-hover/card:translate-x-1 transition-transform duration-300"></div>
                          <div className="h-3 bg-gradient-to-r from-purple-600/40 to-blue-600/40 w-2/3 rounded-full transform group-hover/card:translate-x-2 transition-transform duration-300"></div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 flex justify-between items-center">
                      <div className="relative overflow-hidden h-8">
                        <div className="h-full px-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center">
                      
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-0 group-hover/card:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center group-hover/card:rotate-45 transition-transform duration-300">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Button Component Example */}
            <div className="rounded-xl overflow-hidden shadow-lg group animate-fade-in border border-gray-800">
              <div className="bg-gray-900 px-4 py-2 text-gray-400 text-sm font-mono flex justify-between items-center border-b border-gray-800">
                <span>Button Component</span>
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
              </div>
              <div className="grid grid-rows-2 h-64">
                {/* Before */}
                <div className="bg-gray-900 p-6 flex items-center justify-center border-b border-gray-800">
                  <button className="px-4 py-2 bg-gray-800 text-gray-400 border border-gray-700">
                    Click me
                  </button>
                </div>
                {/* After */}
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 flex items-center justify-center">
                  <button className="group px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2">
                    Click me
                    <span className="transform group-hover:translate-x-1 transition-transform duration-200">→</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Form Input Example */}
            <div className="rounded-xl overflow-hidden shadow-lg group animate-fade-in delay-200 border border-gray-800">
              <div className="bg-gray-900 px-4 py-2 text-gray-400 text-sm font-mono flex justify-between items-center border-b border-gray-800">
                <span>Form Input</span>
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
              </div>
              <div className="grid grid-rows-2 h-64">
                {/* Before */}
                <div className="bg-gray-900 p-6 flex items-center justify-center border-b border-gray-800">
                  <div className="w-full">
                    <label className="block text-gray-400 mb-1">Email</label>
                    <input 
                      type="email" 
                      className="w-full bg-gray-800 border border-gray-700 px-3 py-2 text-gray-300"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                {/* After */}
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 flex items-center justify-center">
                  <div className="w-full group">
                    <label className="block text-gray-300 font-medium mb-2 transition-colors duration-200">Email</label>
                    <div className="relative">
                      <input 
                        type="email" 
                        className="w-full px-4 py-3 rounded-lg bg-gray-800 border-2 border-transparent text-white focus:border-purple-600 focus:outline-none transition-all duration-200"
                        placeholder="Enter your email"
                      />
                      <div className="absolute inset-0 border border-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 rounded-lg pointer-events-none transition-opacity duration-200"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info */}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative bg-black text-white">
  <div className="absolute inset-0" style={{
    backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
    backgroundSize: '40px 40px',
    opacity: 0.1
  }} />
  <div className="container mx-auto px-4 relative max-w-3xl text-center">
    <h2 className="text-5xl font-bold mb-6">
      Transform Your HTML to Stunning CSS
    </h2>
    <p className="text-xl text-white/80 mb-12">
      Seamlessly convert raw HTML into beautifully styled CSS. Let AI bring your web designs to life effortlessly.
    </p>
    <div className="inline-flex gap-8">
      <Link 
        href="/css-generator"
        className="bg-white text-black px-8 py-4 rounded-xl
          font-semibold hover:bg-gray-100 transition-all duration-300
          transform hover:-translate-y-1 shadow-lg hover:shadow-xl
          text-lg"
      >
        Start Generating CSS
      </Link>
    </div>
  </div>
</section>


      <style jsx global>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slide-in-left {
          from { transform: translateX(-100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }

        @keyframes slide-in-right {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }

        @keyframes slide-up {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        @keyframes bounce-in {
          0% { transform: scale(0); opacity: 0; }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); opacity: 1; }
        }

        @keyframes glow {
          0% { opacity: 0.4; }
          50% { opacity: 1; }
          100% { opacity: 0.4; }
        }

        @keyframes wave {
          0% { transform: rotate(0deg); }
          20% { transform: rotate(-10deg); }
          40% { transform: rotate(10deg); }
          60% { transform: rotate(-10deg); }
          80% { transform: rotate(10deg); }
          100% { transform: rotate(0deg); }
        }

        .animate-fade-in { animation: fade-in 0.5s ease-out; }
        .animate-slide-in-left { animation: slide-in-left 0.5s ease-out; }
        .animate-slide-in-right { animation: slide-in-right 0.5s ease-out; }
        .animate-slide-up { animation: slide-up 0.5s ease-out; }
        .animate-bounce-in { animation: bounce-in 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55); }
        .animate-glow { animation: glow 2s ease-in-out infinite; }
        .animate-wave { animation: wave 2s ease-in-out infinite; }

        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
        .delay-400 { animation-delay: 400ms; }
        .delay-500 { animation-delay: 500ms; }
      `}</style>
    </main>
  );
}