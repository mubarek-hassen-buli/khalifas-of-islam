
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-islamic-black">
      <div className="text-center p-8">
        <h1 className="text-3xl font-bold text-gold mb-4">Caliph Not Found</h1>
        <p className="text-white/70 mb-6">The biography you're looking for doesn't exist.</p>
        <Link to="/" className="px-5 py-2 rounded-md bg-gold text-islamic-black font-medium">
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
