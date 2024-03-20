import React from 'react';
import { useNavigate } from 'react-router-dom';

function Card({ id,title, price, rating, imageUrl }) {
  const navigate = useNavigate();
  return (
    <div className="mx-4 my-3 px-3 py-2 flex flex-wrap text-center w-[250px] rounded-lg overflow-hidden shadow-lg sm:w-250px sm:h-250px">
      <img className="w-full" src={imageUrl} alt={title} />

      <div className="flex flex-col items-start px-3 py-2">
        <div className="font-bold text-xl mb-2">{title}</div>
        
        <div className='flex justify-between'>
          <div className='flex flex-col mr-9 justify-center'>
            <span className="text-gray-700 text-base">Price: &#8377;{price}</span>
            <span className="text-gray-700 text-base inline">{rating}<p className='text-yellow-400 inline'> &#9733;</p> </span>
          </div>
          <button onClick={()=>navigate(`/product/${id}`)} className='px-3 py-2 items-end bg-gray-200 font-bold rounded-lg hover:bg-orange-500 hover:text-white h-10 w-20'>
            Buy
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
