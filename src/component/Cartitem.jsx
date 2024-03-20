import React from 'react'

function Cartitem() {
    
  return (
    // <div class="my-3 grid sm:grid-cols-12 grid-cols-2">
        <div className="my-2 flex items-stretch shadow sm:col-span-3 justify-start">
          <div className="w-[100px] sm:w-auto  rounded-l-lg shadow sm:col-span-3">
            <img className='w-full h-full p-2 ' src="../image1.jpg" alt="cake_photo" />
          </div>
          <div className="flex-grow text-left min-h-[100px] pl-2 text-[14px] sm:text-[16px] rounded-r-lg shadow sm:col-span-9">
            <p className='font-mono '>Our Classic Chocolate Truffle Cake</p>
            <span className='py-4 font-semibold'> ₹ 399</span><br/>
            <div className='py-3'>
              <button className="px-3 py-1 border border-gray-300 rounded-l" >
                -
              </button>
              <span className="px-3 py-1 border-t border-b border-gray-300 inline-block">1</span>
              <button className="px-3 py-1 border border-gray-300 rounded-r">
                +
              </button>
            </div>
          </div>
        </div>
    // </div>
  )
}

export default Cartitem