"use client"
import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import useMeasure from 'react-use-measure';

const color = [
    "bg-red-500",
    "bg-yellow-500",
    "bg-blue-500",
    "bg-green-500",
    "bg-pink-500"
]

export default function Carosal() {

    const [count, setCount] = useState(1);
    const [ref, {width}] = useMeasure();
    const [tuple, setTuple] = useState([null, count]);

    if (tuple[1] !== count) {
        setTuple([tuple[1], count])
    }

    const prev = tuple[0];

    const direction = count > prev ? 1 : -1;

    return (
        <div className='text-white'>
            <div className='flex justify-between text-white'>
                <button onClick={() => setCount(count - 1)}>Prev</button>
                <button onClick={() => setCount(count + 1)}>Next</button>
            </div>
            <div className='mt-8 flex justify-center'>
                <div ref={ref} className='relative flex h-24 w-24 items-center justify-center bg-gray-700 overflow-hidden'>
                    <AnimatePresence custom={{direction, width}}>
                        <motion.div
                            key={count}
                            variants={variants}
                            initial='enter'
                            animate='center'
                            exit='exit'
                            custom={{direction, width}}
                            className={`absolute h-20 w-20 flex justify-center items-center ${color[Math.abs(count) % 4]}`}>{count}</motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    )
}

const variants = {
    enter: ({direction, width}) =>({x: direction *100 }),
    center: { x: 0 },
    exit: ({direction, width}) =>({x: direction *-100 }),
}
