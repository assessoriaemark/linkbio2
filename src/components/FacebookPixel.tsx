import { useEffect } from 'react';

declare global {
  interface Window {
    fbq: any;
  }
}

export const FacebookPixel = () => {
  useEffect(() => {
    // Configurar eventos personalizados do Facebook Pixel
    if (typeof window !== 'undefined' && window.fbq) {
      // Rastrear cliques nos botões/links importantes
      const trackClick = (eventName: string) => {
        window.fbq('track', eventName);
      };

      // Adicionar listeners para os links importantes
      const typeformLinks = document.querySelectorAll('a[href*="typebot.co"]');


      typeformLinks.forEach(link => {
        link.addEventListener('click', () => trackClick('Contact'));
      });

      // Cleanup
      return () => {
        typeformLinks.forEach(link => {
          link.removeEventListener('click', () => trackClick('Contact'));
        });
      };
    }
  }, []);

  return null;
};