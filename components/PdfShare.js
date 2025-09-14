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
        className="rounded-lg px-5 py-3 shadow-md bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 border-y-cyan-500 text-white mr-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:focus:ring-cyan-400 focus:ring-offset-2 dark:focus:ring-offset-gray-800 hover:shadow-lg hover:shadow-cyan-500/25"
      >
        <a href="https://raw.githubusercontent.com/Frostdev7506/Auto-resume/build/Neeraj_Butola_Resume.pdf">
          Share
        </a>
      </button>
    </div>
  );
};

export default PdfShare;
