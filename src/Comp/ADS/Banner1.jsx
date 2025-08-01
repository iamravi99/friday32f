import React, { useEffect } from 'react';

const Banner1 = () => {
  useEffect(() => {
    const script1 = document.createElement('script');
    script1.src = 'https://a.magsrv.com/ad-provider.js';
    script1.type = 'application/javascript';
    script1.async = true;
    document.body.appendChild(script1);

    const adPushScript = document.createElement('script');
    adPushScript.type = 'application/javascript';
    adPushScript.innerHTML = `(AdProvider = window.AdProvider || []).push({serve: {}});`;
    document.body.appendChild(adPushScript);

    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(adPushScript);
    };
  }, []);

  return (
    <div className="w-full flex justify-center my-4">
      <ins
        className="eas6a97888e2"
        data-zoneid="5691044"
        style={{ display: 'block', width: '900px', height: '250px' }}
      ></ins>
    </div>
  );
};

export default Banner1;
