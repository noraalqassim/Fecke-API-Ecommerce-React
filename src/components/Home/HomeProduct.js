import React from 'react'

export default function HomeProduct(prop) {
    const {setHomeProduct} = prop;
  return (
    <div>
        <p>{setHomeProduct.title}</p>
    </div>
  )
}
