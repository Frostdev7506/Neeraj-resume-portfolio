import React from "react";
import Image from "next/image";

const TechStackCards = ({ imageUrl, title, description }) => {
  return (
    <div className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl dark:shadow-gray-900/50 h-72 w-full flex flex-col justify-between transition-all duration-300 hover:scale-[1.02] border border-gray-200/50 dark:border-gray-700/50 overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-gray-50/30 dark:to-gray-900/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>

      {/* Subtle glow effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-teal-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>

      <div className="relative z-10 flex flex-col items-center flex-grow">
        {/* Icon container with enhanced styling */}
        <div className="relative h-20 w-20 mb-5 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 rounded-xl shadow-inner group-hover:shadow-lg transition-all duration-300 group-hover:scale-110">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-teal-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <Image
            src={imageUrl}
            alt={title}
            className="max-h-12 max-w-12 object-contain relative z-10 transition-transform duration-300 group-hover:scale-110"
            width={48}
            height={48}
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQ4IiBoZWlnaHQ9IjQ4IiBmaWxsPSIjRjNGNEY2Ii8+Cjwvc3ZnPgo="
          />
        </div>

        {/* Title with enhanced typography */}
        <h3 className="text-xl font-bold mb-3 dark:text-white text-center text-gray-800 line-clamp-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:via-purple-600 group-hover:to-teal-600 group-hover:bg-clip-text transition-all duration-300">
          {title}
        </h3>
      </div>

      {/* Description with better styling */}
      <div className="relative z-10 mt-auto">
        <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent mb-4 opacity-30"></div>
        <p className="text-sm text-gray-600 dark:text-gray-400 text-center leading-relaxed line-clamp-3 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
          {description}
        </p>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl"></div>
    </div>
  );
};

export default TechStackCards;
