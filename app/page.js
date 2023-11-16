"use client"
import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'
import useMeasure from 'react-use-measure'
import { MotionConfig, motion } from 'framer-motion'

export default function Home() {

  const [menuNav, setMenuNav] = useState(false);
  const [ref, { height }] = useMeasure()

  return (
    <MotionConfig transition={{duration: 0.5}}>
      <main className=" flex justify-between sm:items-center bg-yellow-200 text-black flex-col items-start sm:flex-row w-full">
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
        >
          <ul ref={ref} className={`${menuNav ? 'flex' : 'hidden'} m-0 p-0 sm:flex flex-col sm:flex-row w-full fixed top-0 right-0 h-screen bg-green-200 justify-center items-center overflow-hidden`}>
            <li className='list-none hover:bg-yellow-100 text-center'><Link className='no-underline text-black p-4 block' href={'/'}>Fruits</Link></li>
            <li className='list-none hover:bg-yellow-100 text-center'><Link className='no-underline text-black p-4 block' href={'/'}>Vagetable</Link></li>
            <li className='list-none hover:bg-yellow-100 text-center'><Link className='no-underline text-black p-4 block' href={'/'}>Nuddles</Link></li>
            <li className='list-none hover:bg-yellow-100 text-center'><Link className='no-underline text-black p-4 block' href={'/'}>Bugger</Link></li>
            <li className='list-none hover:bg-yellow-100 text-center'><Link className='no-underline text-black p-4 block' href={'/'}>Beef</Link></li>
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
