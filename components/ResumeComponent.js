import React, { useEffect, useState } from "react";
import { FileText, Download, Loader } from "lucide-react";
import Iframe from "react-iframe";
import { motion } from "framer-motion";

function ResumeComponent() {
  const [loading, setLoading] = useState(true);
  const [iframeError, setIframeError] = useState(false);

  const handleIframeLoad = () => {
    setLoading(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const pdfUrl = "https://raw.githubusercontent.com/Frostdev7506/Auto-resume/build/Neeraj_Butola_Resume.pdf";
  const googleViewerUrl = `https://drive.google.com/viewerng/viewer?embedded=true&url=${encodeURIComponent(pdfUrl)}#toolbar=0&scrollbar=0`;

  return (
    <div className="min-h-screen bg-gray-900 dark:bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
       <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16 relative z-10"
            >
              <h2 className="text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-teal-500 via-blue-500 to-purple-500 text-transparent bg-clip-text">
                 Resume
                </span>
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-teal-500 via-blue-500 to-purple-500 mx-auto rounded-full"></div>
            </motion.div>
      <div className="max-w-7xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
          {/* Header */}
          <div className="border-b border-gray-200 dark:border-gray-700">
            <div className="px-6 py-4 flex flex-col sm:flex-row justify-between items-center">
              <div className="flex items-center gap-3 mb-4 sm:mb-0">
                <FileText className="w-8 h-8 text-gray-500 dark:text-gray-400" />
                <h2 className="text-3xl font-semibold text-gray-700 dark:text-gray-300">
                  Resume
                </h2>
              </div>
              
              {/* Download Button */}
              <a
                href={pdfUrl}
                download
                className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 
                          text-white rounded-lg transition-colors duration-200 gap-2 
                          shadow-sm hover:shadow-md"
              >
                <Download className="w-4 h-4" />
                <span>Download PDF</span>
              </a>
            </div>
          </div>

          {/* Content */}
          <div className="relative w-full h-[calc(100vh-12rem)]">
            {loading && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900">
                <Loader className="w-12 h-12 text-blue-600 animate-spin mb-4" />
                <p className="text-gray-600 dark:text-gray-400">Loading resume...</p>
              </div>
            )}

            <div className={`w-full h-full transition-opacity duration-300 ${loading ? 'opacity-0' : 'opacity-100'}`}>
              <Iframe
                url={googleViewerUrl}
                className="w-full h-full bg-gray-50 dark:bg-gray-900"
                frameBorder="0"
                scrolling="auto"
                onLoad={handleIframeLoad}
                loading="lazy"
                styles={{
                  height: '100%',
                  width: '100%',
                  border: 'none',
                }}
              />
            </div>

            {iframeError && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900">
                <p className="text-red-600 dark:text-red-400 mb-4">
                  Failed to load the resume
                </p>
                <a
                  href={pdfUrl}
                  download
                  className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 
                            text-white rounded-lg transition-colors duration-200 gap-2"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Instead</span>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResumeComponent;