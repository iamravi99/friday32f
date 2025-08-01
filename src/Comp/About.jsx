import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-zinc-950 text-white px-6 py-12">
      <div className="max-w-4xl mx-auto bg-zinc-900 p-8 rounded-xl shadow-lg">
        <h1 className="text-4xl font-extrabold text-rose-500 mb-6 border-b-2 border-rose-700 pb-2">
          📜 About & Disclaimer
        </h1>

        <p className="text-zinc-300 mb-4 text-lg leading-relaxed">
          इस वेबसाइट पर जो भी कंटेंट प्रस्तुत किया गया है, वह केवल **एंटरटेनमेंट और एजुकेशनल पर्पस** के लिए है। हमारा उद्देश्य किसी की भावना को ठेस पहुंचाना नहीं है।
        </p>

        <p className="text-zinc-300 mb-4 text-lg leading-relaxed">
          इस साइट पर दिखाए गए कुछ वीडियो, इमेज या टेक्स्ट कंटेंट सार्वजनिक रूप से उपलब्ध स्रोतों से लिए गए हैं (जैसे यूट्यूब, सोशल मीडिया आदि)। ये सभी मटेरियल्स **Fair Use** के अंतर्गत आते हैं।
        </p>

        <h2 className="text-2xl font-bold text-rose-400 mt-6 mb-2">⚖️ Fair Use Notice:</h2>
        <p className="text-zinc-300 mb-4 text-base leading-relaxed">
          यह साइट United States Copyright Act, Section 107 के अनुसार "Fair Use" का पालन करती है। Fair Use के अंतर्गत कमर्शियल उद्देश्य के बिना उपयोग की गई सामग्री को educational, review, criticism या commentary के लिए इस्तेमाल किया जा सकता है।
        </p>

        <h2 className="text-2xl font-bold text-rose-400 mt-6 mb-2">🔞 Age Restriction:</h2>
        <p className="text-zinc-300 mb-4 text-base leading-relaxed">
          इस वेबसाइट पर कुछ कंटेंट वयस्कों के लिए है (18+)। कृपया केवल वही विज़िटर इस साइट को एक्सेस करें जो 18 वर्ष या उससे अधिक आयु के हैं।
        </p>

        <h2 className="text-2xl font-bold text-rose-400 mt-6 mb-2">📢 Copyright Issues:</h2>
        <p className="text-zinc-300 mb-4 text-base leading-relaxed">
          अगर आपको लगता है कि हमारी वेबसाइट पर आपके कॉपीराइट का उल्लंघन हुआ है, तो कृपया हमसे संपर्क करें। हम तुरंत आवश्यक कार्रवाई करेंगे।
        </p>

        <p className="text-zinc-400 text-sm mt-10 italic text-center">
          धन्यवाद! आपने इस पेज को पढ़ा — कृपया समझदारी से और जिम्मेदारी से इस साइट का उपयोग करें।
        </p>
      </div>
    </div>
  );
};

export default About;
