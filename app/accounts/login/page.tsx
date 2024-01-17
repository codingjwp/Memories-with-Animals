import LoginForm from "@/components/accounts/LoginForm"
import { readUserSession } from '@/lib/actions/accoutAction'
import { redirect } from 'next/navigation';

export default async function LoginPage() {
  const { data } = await readUserSession();
  
  if (data.session) {
    return redirect('/');
  }

  return (<LoginForm />)
}