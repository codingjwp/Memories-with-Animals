'use client';

import cn from 'classnames';
import { useState, MouseEvent } from 'react';

type BreedsData = {
  id : number;
  speciesId: string;
  breed: string;
  krBreed: string; 
}

interface IBreedProps {
  content: string;
  data?: BreedsData[];
}

export default function BreedsSelector({content, data}: IBreedProps) {
  const [open, setOpen] = useState(false);
  const [picks, setPicks] = useState<string[]>([])
  const handleClickOpenToClose = (event: MouseEvent<HTMLButtonElement>) => {
    setOpen(prev => !prev)
  };
  const handleClickSelectPick = (event: MouseEvent) => {
    const pick = (event.target as HTMLLIElement);
    if (pick) {
      setPicks((prev) => [...prev, String(pick.dataset.value)])
    }
  }
  const handleClickDeletePick = (event: MouseEvent, id : number) => {
    event.stopPropagation();
    const newPicks = picks.filter((item) => Number(item) !== id);
    setPicks(newPicks);
  }

  return (
    <div className="relative w-[270px] font-medium h-auto m-2">
      <input type='hidden' name="breeds" value={picks.toString()} />
      <button type='button' disabled={data?.length === 0 ? true : false} 
        className={cn(
          'flex items-center justify-between rounded bg-white w-full p-2 down_arrow',
          {'after:rotate-180 ': open, 'after:rotate-0': !open, 'bg-gray-400 ': data?.length === 0}
        )}
        onClick={handleClickOpenToClose}>
          <div className='flex justify-start space-x-1 whitespace-nowrap overflow-hidden mr-1'>
            {picks.length == 0 ? content : picks.map((pick) => {
              const found = data?.find(item => item.id === Number(pick));
              return found ? <PickButton key={found.id} content={found.krBreed} onClick={(event) => handleClickDeletePick(event, found.id)}/> : ''
            })}
          </div>
      </button>
      <ul className={cn(
          'absolute w-full z-10 bg-white mt-2 overflow-y-auto',
          { 'max-h-60': open, 'max-h-0': !open }
        )} onClick={handleClickSelectPick}>
        {data?.map((obj) => 
          <li role='option' key={obj.id} data-value={obj.id}
            className='p-2 text-sm hover:bg-specialLight hover:text-white cursor-pointer'>
           {obj.krBreed}
          </li>)}
      </ul>
    </div>
  )
}

type PickButtonProps = {
  content: string;
  onClick: (event: MouseEvent) => void;
}

function PickButton({content, onClick}: PickButtonProps) {
  return (
    <div className='flex items-center bg-specialDark rounded-md py-[2px] px-2' onClick={onClick}>
      <span className='text-sm text-white mr-[5px]'>{content}</span>
      <div role='button' className={cn(
        'before:content-[""] before:translate-y-[1px] before:block before:w-3 before:h-[2px] before:bg-white before:rotate-45',
        'after:content-[""] after:-translate-y-[1px] after:block after:w-3 after:h-[2px] after:bg-white after:-rotate-45'
      )}>
        <span className='sr-only'>{content} 닫기</span>
      </div>    
    </div>
  )  
}
