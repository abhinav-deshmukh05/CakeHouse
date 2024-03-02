import React from 'react'

function Cart() {
  return (
    <>
        <div className='cotainer mx-auto text-center'>
          <h1 className='text-3xl font-bold mb-2'>Cart Empty 🙂</h1>
          <p>You probably haven't ordered a cake yet.
            To order a cake, go to the main page.
          </p>
          <img className='py-10 sm:min-h-[468px] min-h-[280px] ' src="./empty_cart.avif" alt="" />
        </div>
    </>
  )
}

export default Cart