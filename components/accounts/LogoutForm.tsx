'use client';

import Button from "@/components/buttons/Button";
import { userLogout } from '@/lib/actions/accoutAction';

export default function LogoutForm() {

  const logoutAction = async () => {
    await userLogout();
  }

  return (
    <form action={logoutAction}>
      <Button btnColor="dark" size="md">
        <span className="text-black dark:text-white">LogOut</span>
      </Button>
    </form>
  )
}