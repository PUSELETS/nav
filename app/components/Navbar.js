"use client"
import React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import useMeasure from 'react-use-measure'
import { MotionConfig, motion } from 'framer-motion'

export default function Navbar() {

const [menuNav, setMenuNav] = useState(false);
const [ref, { height }] = useMeasure()

  return (
    <MotionConfig transition={{duration: 0.3}}>
      <main className=" flex justify-between sm:items-center bg-green-200 text-black flex-col items-start sm:flex-row w-full ">
        <h3 className='text-2xl m-2'>Food</h3>
        <section
          onClick={() => {
            setMenuNav(!menuNav)
          }}
          className='absolute top-3 right-4 flex flex-col justify-between w-7 h-5 sm:hidden' >
          <span className='h-1 w-full bg-black rounded-lg'></span>
          <span className='h-1 w-full bg-black rounded-lg'></span>
          <span className='h-1 w-full bg-black rounded-lg'></span>
        </section>
        <motion.div
          animate={{ height }}
          className='overflow-hidden w-full p-1 py-1'
        >
          <ul ref={ref} className={`${menuNav ? 'flex' : 'hidden'} m-0 p-0 sm:flex flex-col sm:flex-row w-full bg-green-200 justify-center items-center overflow-hidden`}>
            <li className='list-none hover:bg-green-100 text-center w-full rounded-lg '><Link className='no-underline text-black p-4 block' href={'/'}>FRUITS</Link></li>
            <li className='list-none hover:bg-green-100 text-center w-full rounded-lg'><Link className='no-underline text-black p-4 block' href={'/'}>VAGETABLES</Link></li>
            <li className='list-none hover:bg-green-100 text-center w-full rounded-lg'><Link className='no-underline text-black p-4 block' href={'/'}>NUDDLES</Link></li>
            <li className='list-none hover:bg-green-100 text-center w-full rounded-lg'><Link className='no-underline text-black p-4 block' href={'/'}>BURGAR</Link></li>
            <li className='list-none hover:bg-green-100 text-center w-full rounded-lg'><Link className='no-underline text-black p-4 block' href={'/'}>BEEF</Link></li>
            <div
              onClick={() => {
                setMenuNav(!menuNav)
              }}
              className='absolute top-3 right-4 flex flex-col justify-between w-7 h-5 sm:hidden'>
              <span className='h-1 w-full bg-black rounded-lg'></span>
              <span className='h-1 w-full bg-black rounded-lg'></span>
              <span className='h-1 w-full bg-black rounded-lg'></span>
            </div>
          </ul>
        </motion.div>
      </main>
    </MotionConfig>
  )
}
