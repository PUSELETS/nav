
import Image from 'next/image'
import Carosal from './components/Carosal'
import Navbar from './components/Navbar'
import Gesture from './components/Gesture'


export default function Home() {

  return (
    <>
    <Navbar />
    <Carosal />
    <Gesture />
    </>
  )
}
