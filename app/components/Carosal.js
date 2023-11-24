"use client"
import React, { useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import useMeasure from 'react-use-measure';
import { useGesture } from '@use-gesture/react';

const color = [
    "bg-red-500",
    "bg-yellow-500",
    "bg-blue-500",
    "bg-green-500",
    "bg-pink-500"
]

export default function Carosal() {

    const [slide, setSlide] = useState({x: 10})
    const [count, setCount] = useState(1);
    const [ref, {width}] = useMeasure();
    const [tuple, setTuple] = useState([null, count]);

    if (tuple[1] !== count) {
        setTuple([tuple[1], count])
    }

    const prev = tuple[0];

    const direction = count > prev ? 1 : -1;

    const carosal = useRef()
    useGesture({
        onDrag: ({offset: [dx]})=>{
            setSlide({x: dx})
        },
    }, {
        target: carosal
    })

    return (
        <div className='text-white'>
            <div className='flex justify-between text-white'>
                <button onClick={() => setCount(count - 1)}>Prev</button>
                <button onClick={() => setCount(count + 1)}>Next</button>
            </div>
            <div className='mt-8 flex justify-center'>
                <div ref={ref} className='relative flex h-44 w-44 items-center justify-center bg-gray-700 overflow-hidden'>
                    <AnimatePresence custom={{direction, width}}>
                        <motion.div
                            key={count}
                            variants={variants}
                            initial='enter'
                            animate='center'
                            exit='exit'
                            custom={{direction, width}}
                            style={{left: slide.x}}
                            ref={carosal}
                            className={`absolute h-40 w-40 flex justify-center items-center ${color[Math.abs(count) % 4]}`}>{count}</motion.div>
                    </AnimatePresence>
                </div>
            </div>
            <div>
                <p>slide x: {slide.x}</p>
            </div>
        </div>
    )
}

const variants = {
    enter: ({direction, width}) =>({x: direction *100 }),
    center: { x: 0 },
    exit: ({direction, width}) =>({x: direction *-100 }),
}
