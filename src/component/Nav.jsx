import React from 'react'
import ItemInIcone from './ItemInIcone'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
export default function Nav() {
  
  return (
  

    <div className=' max-md:px-1 max-md:border-0 max-md:mt-4 max-md:h-max

     border-2 h-screen max-md:w-max max-md:absolute w-[15vw]'>
<div className='max-md:hidden border-0 max-sm:border-0 max-sm:h-max  h-screen'>


    
<ul className='flex flex-col items-center justify-between'>
<div className=' flex max-md:flex-col flex-row-reverse items-center'>
  <img className='w-40 max-md:w-96' src={logo} alt="" />



  
  </div>
<div className=' '>
    <Link to={'/'}>
    <ItemInIcone name='الصفحة الرئيسية ' path='M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z'/>

    </Link>
 <ItemInIcone name='Shorts '/> 
 <ItemInIcone name='الاشتراكات ' path='M5.024 3.783A1 1 0 0 1 6 3h12a1 1 0 0 1 .976.783L20.802 12h-4.244a1.99 1.99 0 0 0-1.824 1.205 2.978 2.978 0 0 1-5.468 0A1.991 1.991 0 0 0 7.442 12H3.198l1.826-8.217ZM3 14v5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5h-4.43a4.978 4.978 0 0 1-9.14 0H3Z'/>
</div>
<hr className='border-stone-300 text-black h-2 w-full '/>
{localStorage.getItem('id')==undefined?
<div  className=' my-5  '>
<p className='text-base text-stone-600 my-3 w-40'>يمكنك تسجيل الدخول لإبداء إعجابك بالفيديوهات والتعليق عليها والاشتراك في القنوات.</p>
<button className='text-blue-600 flex items-center h-12 gap-2   hover:bg-blue-100 rounded-3xl border-2 px-4  '>
<ion-icon name="person-outline"></ion-icon>
    <span>تسجيل الدخول</span>

</button>
<br />
<hr className='border-stone-300 text-black h-2 w-full '/>
</div>
:
<div  className=' my-5  '>
<Link to={'/faivorte'} className='  hover:bg-stone-200 rounded-lg flex items-center h-12 gap-2 text-base      px-4  '>
<svg class="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 11c.889-.086 1.416-.543 2.156-1.057a22.323 22.323 0 0 0 3.958-5.084 1.6 1.6 0 0 1 .582-.628 1.549 1.549 0 0 1 1.466-.087c.205.095.388.233.537.406a1.64 1.64 0 0 1 .384 1.279l-1.388 4.114M7 11H4v6.5A1.5 1.5 0 0 0 5.5 19v0A1.5 1.5 0 0 0 7 17.5V11Zm6.5-1h4.915c.286 0 .372.014.626.15.254.135.472.332.637.572a1.874 1.874 0 0 1 .215 1.673l-2.098 6.4C17.538 19.52 17.368 20 16.12 20c-2.303 0-4.79-.943-6.67-1.475"/>
</svg>
    <span>الفيديوهات التي أعجبتني  </span>

</Link>
<br />
<hr className='border-stone-300 text-black h-2 w-full '/>
</div>}
 {/* <ItemInIcone name='الصفحة الرئيسية '/>
 <ItemInIcone name='الصفحة الرئيسية '/>
 <ItemInIcone name='الصفحة الرئيسية '/>
 <ItemInIcone name='الصفحة الرئيسية '/> */}


</ul>


    </div>




<div className="drawer max-md:block hidden  drawer-start">
  
  <input id="my-drawer-4" type="checkbox" className="drawer-toggle " />
  <div className="drawer-content">
    {/* Page content here */}
    <label htmlFor="my-drawer-4"
     className="drawer-button text-3xl">     <ion-icon name="menu-outline"></ion-icon>
 </label>
  </div>
  <div className="drawer-side w-max z-10 ">
    <label htmlFor="my-drawer-4" aria-label="close sidebar" 
    className="drawer-overlay"></label>
    <div className="menu bg-base-200  min-h-full  p-4">
   


      <div className=' flex flex-col items-center justify-between'>

<div className='text-lg '>
    <Link to={'/'}>
    <ItemInIcone name='الصفحة الرئيسية ' />

    </Link>
 <ItemInIcone name='Shorts '/> 
 <ItemInIcone name='الاشتراكات ' path='M5.024 3.783A1 1 0 0 1 6 3h12a1 1 0 0 1 .976.783L20.802 12h-4.244a1.99 1.99 0 0 0-1.824 1.205 2.978 2.978 0 0 1-5.468 0A1.991 1.991 0 0 0 7.442 12H3.198l1.826-8.217ZM3 14v5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5h-4.43a4.978 4.978 0 0 1-9.14 0H3Z'/>
</div>
<hr className='border-stone-300 text-black h-2 w-full '/>
{localStorage.getItem('id')==undefined?
<div  className=' my-5  '>
<p className='text-base text-stone-600 my-3 w-40'>يمكنك تسجيل الدخول لإبداء إعجابك بالفيديوهات والتعليق عليها والاشتراك في القنوات.</p>
<button className='text-blue-600 flex items-center h-12 gap-2   hover:bg-blue-100 rounded-3xl border-2 px-4  '>
<ion-icon name="person-outline"></ion-icon>
    <span>تسجيل الدخول</span>

</button>
<br />
<hr className='border-stone-300 text-black h-2 w-full '/>
</div>
:
<div  className=' my-5  '>
<Link to={'/faivorte'} className='  hover:bg-stone-200 rounded-lg flex items-center h-12 gap-2 text-base      px-4  '>
<svg class="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 11c.889-.086 1.416-.543 2.156-1.057a22.323 22.323 0 0 0 3.958-5.084 1.6 1.6 0 0 1 .582-.628 1.549 1.549 0 0 1 1.466-.087c.205.095.388.233.537.406a1.64 1.64 0 0 1 .384 1.279l-1.388 4.114M7 11H4v6.5A1.5 1.5 0 0 0 5.5 19v0A1.5 1.5 0 0 0 7 17.5V11Zm6.5-1h4.915c.286 0 .372.014.626.15.254.135.472.332.637.572a1.874 1.874 0 0 1 .215 1.673l-2.098 6.4C17.538 19.52 17.368 20 16.12 20c-2.303 0-4.79-.943-6.67-1.475"/>
</svg>
    <span>الفيديوهات التي أعجبتني  </span>

</Link>
{/* <Link to={'/faivorte'} className='  hover:bg-stone-200 rounded-lg flex items-center h-12 gap-2 text-base      px-4  '>
<ion-icon name="person"></ion-icon>
    <span> حسابي   </span>

</Link> */}
<br />
<hr className='border-stone-300 text-black h-2 w-full '/>
</div>}



</div>



    </div>
  </div>
</div>


    
    
        </div>
  )
}
 