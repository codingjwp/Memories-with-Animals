import Button from "@/components/buttons/Button";
import SvgCollection from "@/components/svgs/SvgCollection";

export default async function LoginPage() {
  return (
    <form className="flex flex-col justify-center items-center rounded-full w-72 h-72 bg-baseDark">
      <section>
        <label htmlFor="email">Email</label>
        <input 
          className="w-[210px] h-10 rounded-2xl px-2"
          id="email" name="email" type="email" autoComplete="username" autoFocus />
      </section>
      <section>
        <label htmlFor="password" >Password</label>
        <button type="button">
            <SvgCollection svgShapes="visibility" size={24} svgFill="white" />
            <span className="sr-only">비밀번호 보이기</span>
        </button>
        <input 
          className="w-[210px] h-10 rounded-2xl px-2"
          id="password" name="password" type="password" autoComplete="current-password" />
      </section>
      <Button size="sm" btnColor="baseLight" textColor="black">
        <span>Sign in</span>
      </Button>
    </form>
  )
}