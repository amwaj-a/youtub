import React, { useState } from 'react'
import google from '../assets/google.png'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
export default function Login() {
    const [loginData, setloginDatan] = useState([])
 const navigate= useNavigate()
 
 const [spanError, setspan] = useState([])
 const Checklogin =()=>{
    let array=[]
  
     axios.get('https://66a83f1c53c13f22a3d22674.mockapi.io/log/login').then(res=>{
  
  
  
   res.data.find(e=>{
    if(e.user==loginData.user){
     array.push(e)}
    })
  
  
  
     if(loginData.user==undefined||loginData.password==undefined){
      setspan('يجب تعبئة جميع الحقول')
  }else
     if(array.length==0){
         setspan('اسم المستخدم غير مسجل')
     }
     else if(array[0].password!=loginData.password)
  {        setspan('كلمة المرور غير صحيحة')
  } else{
     localStorage.setItem('id',array[0].id)
  
     navigate('/')
  
  }
  
  
  
  
  })
     // if()
  }






  return (
    <div  className='bg-zinc-200 h-screen w-screen flex items-center justify-center'>
<section className='bg-white max-md:w-[90%] w-[60vw] max-md:flex-col rounded-lg p-4 flex  justify-evenly items-center h-[70vh]   '>
<div  >
    <img className='w-20' src={google} alt="" />
    <h1 className='text-3xl my-4 font-bold'>تسجيل الدخول </h1>
<small className='text-lg'>المتابعة إلى YouTube</small>
</div>
<div className='flex flex-col max-md:w-full gap-7'>
    <input onChange={(e)=>{
        setloginDatan({...loginData,'user':e.target.value})
    }} type="text" className='input outline-none focus:outline-none border-2 border-zinc-400 text-zinc-700 placeholder:text-zinc-600 max-md:w-full text-lg w-96 '
    placeholder=' اسم المستخدم  ' name="" id="" />

<input onChange={(e)=>{
        setloginDatan({... loginData,'password':e.target.value})
    }} type="password" className='input outline-none focus:outline-none border-2 border-zinc-400 text-zinc-700 placeholder:text-zinc-600 text-lg max-md:w-full w-96 'placeholder=' الرمز السري ' name="" id="" />

<button onClick={()=>{
    Checklogin()
}} className='btn bg-[#0d63d5] self-center hover:bg-[#0d69d5] text-white w-max'>تسجيل الدخول</button>
<span className='text-red-700'>{spanError}</span>

<p className=" ">  
      ليس لديك حساب ؟

      <button onClick={()=>{
navigate('/signup')
      }} className=' text-[#0d63d5] px-2'>تسجيل</button>
    </p>

</div>

</section>



    </div>
  )
}
