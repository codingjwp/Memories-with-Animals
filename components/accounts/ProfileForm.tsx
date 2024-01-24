'use client';

import { FormEvent, useState } from 'react';
import AvatarUpload from "@/components/uploads/AvatarUpload"
import Input from "@/components/inputs/Input";
import Button from '../buttons/Button';
import { Speciestype } from '@/app/accounts/profile/profile.type';
import SelectorGroup from '@/components/selector/SelectorGroup';

type ProgileFormProps = {
  data: Speciestype[]
}

export default function ProfileForm({data}: ProgileFormProps) {
  const [imgData, setImgData] = useState<File>();

  const createProfile = async (event: FormEvent) => {
    event.preventDefault();
    if (!imgData) return;
    const formData = new FormData(event.target as HTMLFormElement);
    formData.append('avatar', imgData);
    const nick = formData.get('text');
    const species = formData.get('species');
    const breeds = formData.get('breeds');
    console.log(nick, species, breeds);
  }

  return(
    <form className="flex flex-col justify-center items-center" onSubmit={createProfile}>
      <AvatarUpload name="avatar_upload" setImgData={setImgData} />
      <Input text="Nick Name" type="text" addStyles="m-4" />
      <SelectorGroup data={data} />
      <Button type="submit" size='md' btnColor='dark' customStyle='mt-4'>
        <span className='text-black dark:text-white' >Register</span>
      </Button>
    </form>
  )
}