'use client';

import cn from 'classnames';
import { useState, MouseEvent, ChangeEvent, SetStateAction, Dispatch } from 'react';

type SpeciesData = {
  species: string;
  krSpecies: string;
}

interface ISpeciesProps {
  content: string;
  speciesPick: string;
  setSpeciesPick : Dispatch<SetStateAction<string>>;
  data?: SpeciesData[];
  onChange?: (event: ChangeEvent<HTMLInputElement>) => Promise<void>
}

export default function SpeciesSelector({content, speciesPick, setSpeciesPick, data, onChange}: ISpeciesProps) {
  const [open, setOpen] = useState(false);
  const handleClickOpenToClose = () => setOpen(prev => !prev);
  const handleClickSelectPick = (event: MouseEvent) => {
    const pick = (event.target as HTMLLIElement);
    if (pick) {
      setSpeciesPick(String(pick.dataset.value));
      setOpen(prev => !prev);
    }
  }

  return (
    <div className="relative w-[270px] font-medium h-auto m-2">
      <input type='hidden' name="species" value={speciesPick.toString()} onChange={onChange}/>
      <button type="button" className={cn(
        'flex items-center justify-between rounded bg-white w-full p-2 down_arrow',
        { 'after:rotate-180 ': open, 'after:rotate-0': !open }
        )}
        onClick={handleClickOpenToClose}>
        {speciesPick === '' ? content : data?.find(item => item.species === speciesPick)?.krSpecies}
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
