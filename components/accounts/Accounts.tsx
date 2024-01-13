import Button from "@/components/buttons/Button";
import Input from "@/components/inputs/Input";

type AccountProps = {
  pageType: 'login' | 'register',
  action?: (formData: FormData) => void
}

export default function Accounts({pageType, action}: AccountProps) {

  return (
    <form action={action} className="flex flex-col justify-center items-center rounded-full w-72 h-72 bg-baseDark gap-[2px]">
      <Input label="Email" page={pageType} inputType="email" />
      <Input label="Password" page={pageType} inputType="password" />
      <Button type="submit" size="sm" textColor="black" btnColor="baseLight">
        <span>{pageType === 'login' ? 'Sign in' : 'Sign up'}</span>
      </Button>
    </form>
  )
}