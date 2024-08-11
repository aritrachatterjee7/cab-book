import { CarListData } from '@/utils/CarListData';
import React from 'react';
import CarListItem from './CarListItem';

const CarListOptions = ({ distance }) => {  // Destructure distance from props
  return (
    <div className='mt-2 p-5 overflow-auto h-[250px]'> 
      <h2 className='text-[22px] font-bold'>Recommended</h2>
      {CarListData.map((item) => (
        <div key={item.id} className='cursor-pointer'>
          <CarListItem car={item} distance={distance} />
        </div>
      ))}
    </div>
  );
};

export default CarListOptions;
