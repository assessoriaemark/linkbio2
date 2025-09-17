import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useScrollAnimation } from './hooks/useScrollAnimation';
import { FacebookPixel } from './components/FacebookPixel';

function App() {
  const heroRef = useScrollAnimation();
  const solutionsRef = useScrollAnimation();
  const card1Ref = useScrollAnimation();

  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-pink-900 text-white font-montserrat">
      <FacebookPixel />
      
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="min-h-[55vh] flex flex-col items-center justify-center px-6 py-8 pb-3 space-y-7 scroll-animate fade-up opacity-0"
      >
        
        {/* Profile Photo */}
        <div className="w-24 h-24 rounded-full overflow-hidden border-3 border-pink-500 shadow-xl">
          <img 
            src="/evi-.png" 
            alt="Evi Pontes" 
            className="w-full h-full object-cover scale-110"
          />
        </div>

        {/* Username */}
        <h1 className="text-lg font-bold text-white opacity-0 animate-fadeInUp [animation-delay:0.2s]">@evipontes</h1>

        {/* Inspirational Quote */}
        <blockquote className="text-lg md:text-2xl font-light text-center max-w-xs md:max-w-3xl leading-relaxed text-gray-300 opacity-0 animate-fadeInUp [animation-delay:0.4s]">
          "O sucesso é a soma de pequenos esforços repetidos dia após dia"
        </blockquote>

      </section>

      {/* Animated Arrow */}
      <div className="flex justify-center py-1">
        <div className="relative flex items-center justify-center">
          {/* Horizontal rectangle with glossy border */}
          <div className="w-8 h-12 flex items-center justify-center animate-bounce glossy-border-container rounded-xl">
            <ArrowRight 
              className="w-4 h-4 rotate-90 hover:scale-110 transition-transform duration-300 arrow-icon" 
            />
          </div>
        </div>
      </div>

      {/* Solutions Section */}
      <section 
        ref={solutionsRef}
        className="py-6 px-6 scroll-animate fade-up opacity-0"
      >
        <div className="max-w-5xl mx-auto">
          
          {/* Introduction Text */}
          <div className="text-center mb-8">
            <h2 className="text-xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Conheça as soluções que eu criei para ajudar empresários a venderem mais
            </h2>
          </div>

          {/* Cards Grid */}
          <div className="flex flex-col gap-8 items-center">
            
            {/* Card 1 - Partnership */}
            <a 
              href="https://typebot.co/emarkassessoria" 
              target="_blank" 
              rel="noopener noreferrer"
              ref={card1Ref}
              className="relative bg-gray-900/80 rounded-2xl p-6 border border-gray-700 hover:border-gray-500 hover:shadow-xl transition-all duration-500 group scroll-animate fade-left opacity-0 overflow-hidden w-full md:w-[400px] h-[120px] flex items-center justify-between"
            >
              {/* Background image that appears on hover - covers entire button */}
              <div 
                className="absolute left-0 top-0 right-14 bottom-0 bg-no-repeat opacity-0 group-hover:opacity-60 transition-opacity duration-500 rounded-l-2xl"
                style={{ 
                  backgroundImage: 'url(https://i.imgur.com/6BVs0PX.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              ></div>
              
              {/* Left Content */}
              <div className="flex-1 z-10 relative">
                <div className="text-lg md:text-xl font-bold text-white group-hover:text-pink-400 transition-all duration-500 mb-1 group-hover:text-shine">
                  Seja nosso parceiro<br />de negócios
                </div>
                <div className="text-sm text-gray-300">
                  contrate nossos serviços
                </div>
              </div>
              
              {/* Arrow positioned at the right end */}
              <div className="absolute -right-1 top-0 z-10 w-14 h-full bg-white rounded-r-2xl flex items-center justify-center group-hover:scale-110 group-hover:bg-pink-500 group-hover:-translate-x-1 transition-all duration-300">
                <svg className="w-4 h-4 text-pink-500 group-hover:text-white group-hover:translate-x-0.5 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </div>
            </a>


          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/80 border-t border-gray-800 py-8 px-6 mt-12">
        <div className="max-w-5xl mx-auto">
          {/* Social Media */}
          <div className="mb-6">
            <div className="flex justify-center space-x-6">
              <a 
                href="https://www.instagram.com/evipontes/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-white hover:text-pink-400 transition-colors duration-300 group"
              >
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <span>Conteúdos Gratuitos</span>
              </a>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-500 text-sm">
              © 2025 Evi Pontes - Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;