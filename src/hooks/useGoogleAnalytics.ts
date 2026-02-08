import { useEffect } from 'react';

export const useGoogleAnalytics = () => {
  useEffect(() => {
    const gaId = import.meta.env.VITE_GOOGLE_ANALYTICS_ID;
    
    // Ne charger GA que si une clé est configurée
    if (!gaId) {
      console.warn('Google Analytics ID not configured. Set VITE_GOOGLE_ANALYTICS_ID environment variable.');
      return;
    }

    // Charger le script Google Analytics
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
    document.head.appendChild(script);

    // Initialiser gtag
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      (window as any).dataLayer.push(arguments);
    }
    (window as any).gtag = gtag;
    gtag('js', new Date());
    gtag('config', gaId);
  }, []);
};
