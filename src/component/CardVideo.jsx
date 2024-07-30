import React from 'react' 
    import { useNavigate } from 'react-router-dom'
export default function CardVideo({allVedio}) {
   const navigate =useNavigate()
  return (
    <>
    {allVedio.map((e,index)=>(

 
    
    
    
    
    
    
    
    
    
    
<button key={index} onClick={()=>{
e.kind.includes("youtube#search")?
navigate(`/${e.id.videoId}`):
navigate(`/${e.id}`)

// navigate(0)
}}>
<div className='max-h-40 flex mt-4  w-full'>
<img className='h-40 rounded-lg  w-52' src={e.snippet.thumbnails.medium.url} alt="" />

<div className='flex flex-col items-start mx-4'>
<span className='font-bold'>{e.snippet.title}
</span>
<span className='text-base'>{e.snippet.channelTitle}
</span>
<div>
    <span className=' font-sans '>    
<span>{e.statistics.viewCount}  </span>

 
    <span className='font-serif text-base mx-2'>
مشاهدة        </span>
      </span>
      <span className='text-base'>قبل 
    <span className='font-sans mx-2'>
    {e.contentDetails.dimension}
        </span>
      </span>
      
      </div>
</div>




</div></button>
))}</>
  )
}
