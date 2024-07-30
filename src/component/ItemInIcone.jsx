import React from 'react'

export default function ItemInIcone(props) {
  return (
    <li className='flex items-center h-12 gap-2   hover:bg-stone-200 rounded-lg '>
    <svg class="w-[30px] h-[30px] text-black " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d={props.path} clip-rule="evenodd"/>
</svg>
{props.name}
    </li>
  )
}
