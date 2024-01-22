'use client';

import cn from 'classnames';
import { useState, MouseEvent } from 'react';

type SpeciesData = {
  species: string;
  krSpecies: string;
}

interface ISpeciesProps {
  content: string;
  data?: SpeciesData[];
}

export default function SpeciesSelector({content, data}: ISpeciesProps) {
  const [open, setOpen] = useState(false);
  const [picks, setPicks] = useState<string[]>([])
  const handleClickOpenToClose = () => setOpen(prev => !prev);
  const handleClickSelectPick = (event: MouseEvent) => {
    const pick = (event.target as HTMLLIElement);
    if (pick) {
      setPicks([String(pick.dataset.value)]);
      setOpen(prev => !prev);
    }
  }

  return (
    <div className="relative w-[270px] font-medium h-auto m-2">
      <input type='hidden' name="species" value={picks.toString()}/>
      <button type="button" className={cn(
        'flex items-center justify-between rounded bg-white w-full p-2 down_arrow',
        { 'after:rotate-180 ': open, 'after:rotate-0': !open }
        )}
        onClick={handleClickOpenToClose}>
        {picks.length === 0 ? content : picks.map((pick) => {
          const found = data?.find(item => item.species === pick);
          return found ? found.krSpecies : ''
        }).toString()}
      </button>
      <ul className={cn(
          'absolute w-full z-20 bg-white mt-2 overflow-y-auto',
          { 
            'max-h-60': open,
            'max-h-0': !open
          }
        )} onClick={handleClickSelectPick}>
        {data?.map((obj) => 
        <li role='option' key={obj.species} data-value={obj.species} className='p-2 text-sm hover:bg-specialLight hover:text-white cursor-pointer'>
          {obj.krSpecies}
        </li>)}
      </ul>
    </div>
  )
}
