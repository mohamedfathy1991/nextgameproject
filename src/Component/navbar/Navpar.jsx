"use client"
import React, { useEffect } from 'react'
import Link from "next/link";
import { usePathname } from 'next/navigation';


export default function Navpar() {
      let path=usePathname()

      const navelement=[
            {path:'/',name:"home"},
            {path:'/product',name:"games"},
            // {path:'/brand',name:"brabd"},
            // {path:'/category',name:"category"},

]
      
     
      
  return (
      <nav class="navbar navbar-expand-lg navbar bg-info">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            
            {
                  navelement.map((items,i)=>{
                        return(
                              <li key={i} class="nav-item">
                              <Link className={path==items.path?"nav-link active  ":"nav-link   "} aria-current="page" href={items.path}>{items.name}</Link>
                            </li>
                        )
                  })
            }
           
            
          
            
             
          </ul>
          
        </div>
      </div>
    </nav> 
  )
}
