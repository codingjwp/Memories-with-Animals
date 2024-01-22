'use client';

import { FormEvent, useRef, useState } from 'react';
import AvatarUpload from "@/components/uploads/AvatarUpload"
import SpeciesSelector from '../selector/SpeciesSelector';
import BreedsSelector from '../selector/BreedsSelector';
import Input from "@/components/inputs/Input";
import Button from '../buttons/Button';

const exampleSpecies = [
  {
    species: 'dog',
    krSpecies: '강아지',
  },
  {
    species: 'cat',
    krSpecies: '고양이',
  }
]

const exampleBreeds = [
  {
    id : 1,
    speciesId: 'dog',
    breed: 'maltese',
    krBreed: '말티즈',
  },
  {
    id : 2,
    speciesId: 'dog',
    breed: 'pomeranian',
    krBreed: '포메라니안',
  },
  {
    id : 3,
    speciesId: 'dog',
    breed: 'chihuahua',
    krBreed: '치와와',  
  }
]

export default function ProfileForm() {
  const [imgData, setImgData] = useState<File>();
  const createProfile = async (event: FormEvent) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const nick = formData.get('text');
    const species = formData.get('species');
    const breeds = formData.get('breeds');
    console.log(nick, species, breeds);
  }

  return(
    <form className="flex flex-col justify-center items-center" onSubmit={createProfile}>
      <AvatarUpload name="avatar_upload" setImgData={setImgData} />
      <Input text="Nick Name" type="text" addStyles="m-4" />
      <SpeciesSelector content='반려동물' data={exampleSpecies}/>
      <BreedsSelector content='반려동물 품종' data={exampleBreeds}/>
      <Button type="submit" size='md' btnColor='dark' customStyle='mt-4'>
        <span className='text-black dark:text-white' >Register</span>
      </Button>
    </form>
  )
}