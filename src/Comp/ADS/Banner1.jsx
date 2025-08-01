import React, { useEffect } from 'react';

const Banner1 = () => {
  useEffect(() => {
    // Inject ad-provider.js script
    const script1 = document.createElement('script');
    script1.src = 'https://a.magsrv.com/ad-provider.js';
    script1.async = true;
    script1.type = 'application/javascript';
    document.body.appendChild(script1);

    // Push the ad once the script is loaded
    const loadAd = () => {
      if (window.AdProvider) {
        window.AdProvider.push({ serve: {} });
      }
    };

    script1.onload = loadAd;

    return () => {
      // Clean up
      document.body.removeChild(script1);
    };
  }, []);

  return (
    <div className="w-full flex justify-center my-6">
      <ins
        className="eas6a97888e2"
        data-zoneid="5691044"
        style={{ display: 'block', width: '900px', height: '250px' }}
      ></ins>
    </div>
  );
};

export default Banner1;
