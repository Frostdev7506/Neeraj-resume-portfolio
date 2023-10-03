import React from 'react';
import Image from 'next/image';


const TechStackCards = ({ imageUrl, title, description })=>{

    return (
        <div className="bg-white rounded-lg p-6 shadow-md dark:bg-gray-700">
          <Image src={imageUrl} alt={title} className="h-20 mx-auto mb-4" />
          <h3 className="text-xl text-gray-500 font-semibold mb-2 dark:text-white">
            {title}
          </h3>
          <p className="text--100">{description}</p>
        </div>
      );

}




export default TechStackCards