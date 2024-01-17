import RegisterForm from "@/components/accounts/RegisterForm";
import { readUserSession } from '@/lib/actions/accoutAction'
import { redirect } from 'next/navigation';

export default async function RegisterPage() {
  const { data } = await readUserSession();
  
  if (data.session) {
    return redirect('/');
  }

  return (
    <RegisterForm />
  )
}