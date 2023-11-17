'use client'
import React, { useState, useRef } from 'react'
import { useGesture } from '@use-gesture/react'

export default function Gesture() {
  return (
    <>
    <p className='mt-2 text-center'>Image Cropper</p>
    <div className='p-8'>
        <ImageCropper src='https://firebasestorage.googleapis.com/v0/b/e-commerse-adminview.appspot.com/o/ecommerce%2Fearphones_a_1.webp-1699436981888-rd6vqlmkk0?alt=media&token=afbd3a65-030b-46f9-86ff-b00ee4c3d722' />
    </div>
    </>
  )
}

function ImageCropper ({src}) {

    const [crop, setCrop] = useState({x: 0, y: 0, scale: 2})
    const imageRef = useRef()

    useGesture({
        onDrag: ({offset: [dx, dy]})=> {
            setCrop((crop)=>({...crop, x: dx, y: dy}));
        }, 
        onPinch: ({offset: [d]})=> {
            setCrop((crop)=>({...crop, scale:1 + d / 50}));
        },
    },{
        target : imageRef,
        eventOptions: {passive: false}, 
    });

    return (
        <>
        <div className='overflow-hidden ring-4 ring-blue-500 aspect-w-3 aspect-h-4'>
            <div>
                <img
                src={src}
                ref={imageRef}
                style={{
                    left: crop.x,
                    top: crop.y,
                    transform: `scale(${crop.scale})`,
                    touchAction: "none",
                }}
                className='relative object-contain w-auto h-full max-w-none max-h-none'
                />
            </div>
        </div>
        <div>
            <p>Crop x: {crop.x}</p>
            <p>Crop y: {crop.y}</p>
        </div>
        </>
    )
}
