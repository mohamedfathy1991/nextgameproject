


import React from 'react'
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "ac57dbe144msh1b7cf41ae3ff422p17282djsna199af6985d3",
    "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",

  },
}






async function getgame(id){
      let data= await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id} `,{
        // cache:'no-cache'
        next:{
          //every time in second make fetch
          revalidate:1
        },
  
        ...options})
      return await data.json()
  
   }



   export async function generateMetadata({ params}) {
    // read route params
    const id = params.productid

      let game= await getgame(id)
   
    return {
      title: game.title,
      
    }
  }

export default async function product({params}) {
      let id =params.productid
      let data= await getgame(id)
      
     
      
      
  return (
    <>
    
    {data.id? 
    
    <div className='container mt-3'>
    <div class="d-flex justify-content-between ">
      <h2>more details</h2>
     
    </div>
    <div class="row ">
     
        <div class="col-md-6">
          <div >
            <img id="img-details" src={data.thumbnail} />
          </div>
        </div>
        <div class="col-md-6  ">
          <div class="px-5">
            <h3 id="item-title">title: {data.title}</h3>
            <h4 id="item-title">category: {data.genreqqqqq}</h4>
            <h4 id="item-title">platform: {data.platform}</h4>
            <h4 >status: ${data.status}</h4>
            <p id="item-description"><span class=" fs-4">description: </span>{data?.description?.slice(
              0,
              150
            )}</p>
          </div>
        
      </div>
    </div>
  </div>
    
  
      :
    
    
    <h1 className='bg-danger mt-5 text-center'>no data found</h1>
    }
    </>
      
  )
}
