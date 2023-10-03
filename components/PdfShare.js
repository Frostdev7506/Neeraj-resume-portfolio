import React from 'react';

const PdfShare = ({ pdfUrl }) => {
  const handleShareClick = async () => {
    try {
      if (navigator.share) {
        // Share the PDF URL directly using the Web Share API
        await navigator.share({
          title: 'PDF Viewer',
          text: 'Hi, kindly check this resume ',
          url: pdfUrl, // Share the PDF URL
        });
      } else {
        alert('Web Share API is not supported in this browser.');
      }
    } catch (error) {
      console.error('Error sharing PDF:', error);
    }
  };

  return (
    <div className="mt-5">
      <button
        onClick={handleShareClick}
        className="rounded-lg px-5 py-3 shadow-md bg-gray-700 text-white mr-3"
      >
        Share PDF
      </button>
    </div>
  );
};

export default PdfShare;
