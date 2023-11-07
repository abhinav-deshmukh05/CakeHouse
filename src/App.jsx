import { useId, useState } from 'react'
import './App.css'
import Layout from './Layout'
import Carousal from './component/Carousal'
import Card from './component/Card'

const data = [
  {
    title:"Chocolate Cake",
    price:"200",
    imageUrl:"image1.png",
    rating:"4.3"
  },
  {
    title:"StrowBerry Cake",
    price:"250",
    imageUrl:"image2.png",
    rating:"4.3"
  },
  {
    title:"Fruit Cake",
    price:"300",
    imageUrl:"/image3.png",
    rating:"4.6"
  },
  {
    title:"Vanella Cake",
    price:"200",
    imageUrl:"image4.png",
    rating:"4.5"
  }
]
function App() {

  return (
    <>
      <Carousal/>
      {data.map((item)=>(
        <Card 
        key={useId}
        title={item.title}
        price={item.price}
        imageUrl={item.imageUrl}
        rating={item.rating}
        />
      ))}
    </>
  )
}

export default App
