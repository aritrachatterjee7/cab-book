import { CarListData } from '@/utils/CarListData';
import React, { useState } from 'react';
import CarListItem from './CarListItem';

const CarListOptions = ({ distance }) => {  
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className='mt-2 p-5 overflow-auto h-[250px]'> 
      <h2 className='text-[22px] font-bold'>Recommended</h2>
      {CarListData.map((item, index) => (
        <div 
          key={item.id} 
          className={`cursor-pointer p-2 rounded-md border-black px-4 ${activeIndex === index ? 'border-[3px]' : ''}`}
          onClick={() => setActiveIndex(index)}
        >
          <CarListItem car={item} distance={distance} />
        </div>
      ))}
    </div>
  );
};

export default CarListOptions;
