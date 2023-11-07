import React from 'react';

function Card({ title, price, rating, imageUrl }) {
  return (
    <div className="mt-5 mb-5 flex flex-wrap text-center max-w-sm rounded-lg overflow-hidden shadow-lg">
      <img className="w-full" src={imageUrl} alt={title} />

      <div className="flex flex-col items-start px-3 py-2">
        <div className="font-bold text-xl mb-2">{title}</div>
        <span className="text-gray-700 text-base">Price: &#8377;{price}</span>
        <span className="text-gray-700 text-base">Rating: {rating} &#9733;</span>
      </div>

      <div className="px-3 py-2">
      </div>

      <div className="px-3 py-2">
      </div>
    </div>
  );
}

export default Card;
