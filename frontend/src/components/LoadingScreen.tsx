import React, { useState, useEffect } from 'react';
import '../css/loadingScreen.css'; // Import your custom CSS for styling

const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Set an appropriate duration for your loading screen

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`loading-screen ${loading ? 'show' : 'hide'}`}>
      <div className="loading-icon"></div>
      <img src="loading.gif" alt="loading" />
    </div>
  );
};

export default LoadingScreen;
