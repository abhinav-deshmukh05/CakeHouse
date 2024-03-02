import { useId, useState } from 'react'
import './App.css'
import Layout from './Layout'
import Carousal from './component/Carousal'
import Card from './component/Card'
import CatagoryMenu from './component/CatagoryMenu'
// import Cart from './component/Cart'

const data = [
  {
    title:"Chocolate Cake",
    price:"200",
    imageUrl:"/image1.jpg",
    rating:"4.3"
  },
  {
    title:"StrowBerry Cake",
    price:"250",
    imageUrl:"/image2.jpg",
    rating:"4.3"
  },
  {
    title:"Fruit Cake",
    price:"300",
    imageUrl:"/image3.jpg",
    rating:"4.6"
  },
  {
    title:"Vanella Cake",
    price:"200",
    imageUrl:"/image4.jpg",
    rating:"4.5"
  }
]
function App() {
  // const id = useId();
  return (
    <>
      <Carousal/>
      <CatagoryMenu/>
        <div className='flex flex-wrap justify-center lg:justify-start '>
          {data.map((item)=>(
            <Card 
            key={useId()}
            title={item.title}
            price={item.price}
            imageUrl={item.imageUrl}
            rating={item.rating}
            />
          ))}
        </div>
      {/* <Cart/> */}
    </>
  )
}

export default App
