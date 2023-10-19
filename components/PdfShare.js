import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PdfShare = ({ pdfUrl }) => {
  const handleShareClick = async () => {
    try {
      if (navigator.share) {
        // Share the PDF URL directly using the Web Share API
        await navigator.share({
          title: "PDF Viewer",
          text: "Hi, kindly check this resume ",
          url: pdfUrl, // Share the PDF URL
        });
      } else {
        toast(
          "Web Share API is not supported in this browser. But you can download the PDF"
        );
      }
    } catch (error) {
      console.error("Error sharing PDF:", error);
    }
  };

  return (
    <div className="mt-5">
      <button
        onClick={handleShareClick}
        className="rounded-lg px-5 py-3 shadow-md bg-gray-700 text-white mr-1"
      >
        <a href="https://github.com/Frostdev7506/Auto-resume/raw/build/cv.pdf">
          Share
        </a>
      </button>
    </div>
  );
};

export default PdfShare;
