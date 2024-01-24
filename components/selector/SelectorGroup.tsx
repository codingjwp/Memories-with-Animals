import SpeciesSelector from '@/components/selector/SpeciesSelector'; 
import BreedsSelector from '@/components/selector/BreedsSelector';
import { Speciestype } from '@/app/accounts/profile/profile.type';
import { useState } from 'react';

type SelectorGroupProps = {
  data: Speciestype[]
}

export default function SelectorGroup({data}: SelectorGroupProps) {
  const [speciesPick, setSpeciesPick] = useState<string>('');

  return (
    <>
      <SpeciesSelector content='반려동물' speciesPick={speciesPick} setSpeciesPick={setSpeciesPick} />
      <BreedsSelector content='반려동물 품종' />
    </>
  )
}