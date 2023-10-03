// components/PdfShare.js
import React from 'react';

const PdfShare = ({ pdfUrl }) => {
  const handleShareClick = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: 'PDF Viewer',
          text: 'Check out this PDF',
          url: pdfUrl,
        });
      } else {
        // Fallback for browsers that do not support Web Share API
        alert('Web Share API is not supported in this browser.');
      }
    } catch (error) {
      console.error('Error sharing PDF:', error);
    }
  };

  return (
    <button
    onClick={handleShareClick}
    className="rounded-lg px-5 py-2 shadow-md bg-gray-700"
  >
    Share PDF
  </button>
  
  );
};

export default PdfShare;
