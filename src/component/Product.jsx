import React, { useState, useEffect } from 'react'
const images = [
  '/image1.jpg',
  '/image4.jpg',
  '/image1.jpg',
  '/image4.jpg',
];

function Product() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide - 1 < 0 ? images.length - 1 : prevSlide - 1
    );
  };

  // Auto-slide every 5 seconds
  useEffect(() => {
    const autoSlideTimer = setInterval(nextSlide, 2000);

    return () => {
      clearInterval(autoSlideTimer);
    };
  }, [currentSlide]);
  return (
    <div>
      {/* <img className='py-10 sm:min-h-[468px] min-h-[280px] ' src="./empty_cart.avif" alt="" />
      <button className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4
       focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 
       focus:outline-none">Shop</button> */}

      <div className="mt-5 relative w-full h-96">
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute w-full h-full transition-opacity duration-1000 ease-in-out ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={image}
                  alt={`Image ${index + 1}`}
                  className="rounded-lg w-full h-full object-cover"
                />
              </div>
            ))}
              <button onClick={prevSlide}
                  type="button"
                  className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                  data-carousel-prev
              >
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                  <svg
                      className="w-4 h-4 text-white dark:text-gray-800"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
                  >
                      <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 1 1 5l4 4"
                      />
                  </svg>
                  <span className="sr-only">Previous</span>
                  </span>
              </button>
              <button
                  onClick={nextSlide}
                  type="button"
                  className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                  data-carousel-next
              >
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                  <svg
                      className="w-4 h-4 text-white dark:text-gray-800"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
                  >
                      <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 9 4-4-4-4"
                      />
                  </svg>
                  <span className="sr-only">Next</span>
                  </span>
              </button>
      </div>

      {/* product detail */}
      <div>
          <p className='text-bold'>Our Classic Chocolate Truffle Cake</p>
      </div>
    </div>
  )
}

export default Product