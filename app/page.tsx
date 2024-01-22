// import LogoutForm from '@/components/accounts/LogoutForm';
// import { signOutAction } from '@/lib/actions/singOutAction';
import { redirect } from "next/navigation";

export default async function RootPage() {
  redirect('/accounts/profile');
  // async function serverSignOut() {
  //   'use server'
  //   const res = await signOutAction();
  //   const data = JSON.parse(res);
  //   if (data.status === 400 || data.status === 500) { 
  //     console.error("로그아웃 실패:", data.message);
  //   }else if (data.status === 301) {
  //     console.log("로그아웃 성공:", data.message);
  //     redirect('/accounts/login');
  //   }
  // }

  return (
    <div>main</div>
      // <LogoutForm serverAction={serverSignOut} />
  )
}
