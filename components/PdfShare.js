import React from 'react';

const PdfShare = ({ pdfUrl }) => {
  const handleShareClick = async () => {
    try {
      // Fetch the PDF file and convert it to a data URL (base64-encoded)
      const response = await fetch(pdfUrl);
      const blob = await response.blob();
      const dataUrl = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.readAsDataURL(blob);
      });

      // Share the PDF data URL using the Web Share API
      if (navigator.share) {
        await navigator.share({
          title: 'PDF Viewer',
          text: 'Hi, kindly check my resume ',
          url: dataUrl,
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
