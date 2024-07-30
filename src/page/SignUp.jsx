import React, { useState } from 'react'
import google from '../assets/google.png'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
export default function SignUp() {
 const navigate= useNavigate()
 const  [singUpData, setsetsingUpData] = React.useState({})
 const  [data, setdata] = React.useState({})

 const [spanError, setValid] = useState([])


 React.useEffect(() => {
    get()
   
   
       }, [])
   const get=()=>{
       axios.get('https://66a83f1c53c13f22a3d22674.mockapi.io/log/login').then(res=>{
           let array=[]
           array=res.data.find(e=>e.email==singUpData.email)
          
           console.log(array);
            setdata(array)
        })
    
    
    
   }
   const AddAccount =()=>{
   get()
   
       if(singUpData.name==''||singUpData.email==''
        ||singUpData.password=='')
      
      {
    //    document.getElementById('my_modal_3').showModal()
       setValid('يجب ادخال جميع الحقول');
   
      }
      else if(data!=undefined)
        {if(data.email==singUpData.email)
       {
         setValid('الايميل موجود مسبقاّ');
   
       }}
      else{  axios.post('https://66a83f1c53c13f22a3d22674.mockapi.io/log/login',{
           'name':singUpData.name,
           'email':singUpData.email,
           'password':singUpData.password,
           'user':singUpData.user
       }).then(res=>{
     localStorage.setItem('id',res.data.id)


           navigate('/')
   
       })}
         
       // if()
   }




  return (
    <div  className='bg-zinc-200 h-screen w-screen flex items-center justify-center'>
<section className='bg-white w-[60vw] max-md:flex-col   justify-evenly items-center  max-md:mx-9 max-md:w-full rounded-lg p-4 flex    '>
<div  >
    <img className='w-20' src={google} alt="" />
    <h1 className='text-3xl my-4 font-bold'>تسجيل  </h1>
<small className='text-lg'> إلى YouTube</small>
</div>
<div className='flex flex-col gap-7'>



<div className=' py-5  w-[50%] gap-6 max-sm:w-full max-sm:items-center flex flex-col'>
    

  <input className='input outline-none focus:outline-none border-2 border-zinc-400 text-zinc-700 placeholder:text-zinc-600 max-md:w-full text-lg w-96 '
    onChange={(e)=>{
    setsetsingUpData({...singUpData,'name':e.target.value})
  }} type="text" placeholder="الاسم الاول" />
  <input className='input outline-none focus:outline-none border-2 border-zinc-400 text-zinc-700 placeholder:text-zinc-600 max-md:w-full text-lg w-96 '
    placeholder='  اسم المستخدم' onChange={(e)=>{
    setsetsingUpData({...singUpData,'user':e.target.value})
  }} type="text" />
  <input onChange={(e)=>{
    setsetsingUpData({...singUpData,'email':e.target.value})
  }}type="text" className='input outline-none focus:outline-none border-2 border-zinc-400 text-zinc-700 placeholder:text-zinc-600 max-md:w-full text-lg w-96 '
  placeholder="  البريد الإلكتروني
" />
 
  <input placeholder=' كلمة السر' onChange={(e)=>{
    setsetsingUpData({...singUpData,'password':e.target.value})
  }} type="password" className='input outline-none focus:outline-none border-2 border-zinc-400 text-zinc-700 placeholder:text-zinc-600 max-md:w-full text-lg w-96 '
  />
 

<button onClick={()=>{
    AddAccount()
}} className='btn bg-[#0d63d5] hover:bg-[#0d69d5] text-white w-max'>تسجيل </button>
<span className='text-red-700'>{spanError}</span>

<p className=" ">  
       لدي حساب ؟

      <button onClick={()=>{
navigate('/login')
      }} className=' text-[#0d63d5] px-2'>رجوع</button>
    </p>
    </div>






















</div>

</section>



    </div>
  )
}
