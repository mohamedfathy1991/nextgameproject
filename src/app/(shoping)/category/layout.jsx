 
 import Link from 'next/link'
import React from 'react'
 
 export default function layout({children}) {
   return (
     <div className="row m-0 vh-50">
      <div className="col-3  bg-secondary">

           <Link href='/category/labs'><h1>labs</h1></Link>
           <Link href='/category/mobile'><h1>mob</h1></Link>
      </div>
      <div className="col-7 bg-success">
            {children}


      </div>
     </div>
   )
 }
 
