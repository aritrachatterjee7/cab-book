import React, { useContext, useState } from 'react'
import InputItem from './InputItem'
import { SourceContext } from '@/context/SourceContext'
import { DestinationContext } from '@/context/DestinationContext'

const SearchSection = () => {
  const { source, setSource } = useContext(SourceContext)
  const { destination, setDestination } = useContext(DestinationContext)
  const [distance, setDistance] = useState()
  const calculateDistance = () => {
    const dist = google.maps.geometry.spherical.computeDistanceBetween(
      new google.maps.LatLng(source.lat, source.lng),
      new google.maps.LatLng(destination.lat, destination.lng)
    )
    setDistance(dist/1000)
  }

  return (
    <div className='p-2 md:p-6 border-[2px] rounded-xl'>
      <p className='text-[20px] font-bold'>Book your Ambulance</p>
      <InputItem type='source' />
      <InputItem type='destination' />
      <button
        className='p-3 bg-black w-full mt-5 text-white rounded-lg'
        onClick={() => calculateDistance()}
      >
        Search
      </button>
    </div>
  )
}

export default SearchSection
