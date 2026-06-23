import React from 'react'
import Card from './card'
function Rightcontent() {
  const cardData = [
  {
    number: "01",
    title: "Unbanked Customers",
    content:
      "Customers who have little or no access to formal banking services and rely on cash transactions.",
    button: "Learn More",
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4",
  },
  {
    number: "02",
    title: "Underbanked Customers",
    content:
      "Customers who have bank accounts but do not fully utilize available banking products and services.",
    button: "Explore",
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a",
  },
  {
    number: "03",
    title: "Digitally Active Customers",
    content:
      "Customers who frequently use digital banking platforms and are open to advanced financial products.",
    button: "View Details",
    image:
      "https://images.unsplash.com/photo-1556742031-c6961e8560b0",
  },
];
  return (
    <div className='flex gap-6'>
        {cardData.map((elem,indx)=>(
          <Card key={indx} number={elem.number} title={elem.title} 
          content={elem.content} btn={elem.button} img={elem.image}/>
        ))}
        
    </div>
  )
}

export default Rightcontent
