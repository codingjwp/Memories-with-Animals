import { readUserSession } from '@/lib/actions/accoutAction'
import { redirect } from 'next/navigation';
import LogoutForm from '@/components/accounts/LogoutForm';

export default async function RootPage() {

  const { data } = await readUserSession();
  
  if (!data.session) {
    return redirect('/accounts/login');
  }

  return (
    <div>
      <LogoutForm />
    </div>
  )
}
