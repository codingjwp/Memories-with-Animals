'use client';

import Button from "@/components/buttons/Button";


type LogOutFormProps = {
  serverAction: (formData: FormData) => Promise<void>;
}
export default function LogoutForm({serverAction}: LogOutFormProps) {

  return (
    <form action={serverAction}>
      <Button btnColor="dark" size="md">
        <span className="text-black dark:text-white">LogOut</span>
      </Button>
    </form>
  )
}