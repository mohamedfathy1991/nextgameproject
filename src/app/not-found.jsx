import React from 'react'
import img from '../../public/404-error.jpg'
import Image from 'next/image'

export default function Nptfound() {
  return (
    <div>
      <h1> no page foundd</h1>
      <Image  src={img} width={200} height={200}/>
    </div>
  )
}
