import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Debug = () => {
  const [apiUrl, setApiUrl] = useState('');
  const [testResult, setTestResult] = useState('');

  useEffect(() => {
    const url = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
    setApiUrl(url);
    
    // Test API call
    axios.get(`${url}/webseries`)
      .then(res => {
        setTestResult(`Success: ${res.data.length} items found`);
      })
      .catch(err => {
        setTestResult(`Error: ${err.message}`);
      });
  }, []);

  return (
    <div className="p-8 bg-black text-white min-h-screen">
      <h1 className="text-2xl mb-4">Frontend Debug</h1>
      <p><strong>API URL:</strong> {apiUrl}</p>
      <p><strong>Test Result:</strong> {testResult}</p>
      <p><strong>Environment:</strong> {import.meta.env.MODE}</p>
    </div>
  );
};

export default Debug;