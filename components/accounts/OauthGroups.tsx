import SvgCollection from "@/components/svgs/SvgCollection";
import { MouseEvent } from "react";
import Button from "../buttons/Button";
// import createSupabaseClient from "@/lib/supabase/oauthClient";
// import { Provider } from "@supabase/supabase-js";

export default function OauthGroups() {
  const handleClickConnectOauth = async (event: MouseEvent<HTMLButtonElement>) => {
    const types = event.currentTarget.value;
    // const supabase = createSupabaseClient();
    // const { error } = await supabase.auth.signInWithOAuth({
    //   provider: `${types}` as Provider,
    //   options: {
    //     redirectTo: `${location.origin}/api/auth/callback`
    //   }
    // })
    // if (error?.message) {
    //   console.error(error.message);
    // }
  }

  return (
    <>
      <Button id="github" type="button" name="action" value="github" size="lr" btnColor="sp-dark" customStyle="mb-4"
        onClick={handleClickConnectOauth}>
        <SvgCollection svgShapes="github-white" size={32}/>
          <span className="text-black dark:text-white">Github와 연결하기</span>
      </Button>
      <Button id="google" type="button" name="action" value="google" size="lr" btnColor="sp-dark" customStyle="mb-4"
        onClick={handleClickConnectOauth}>
        <span className="text-black dark:text-white">Google과 연결하기</span>
      </Button>
    </>
  )
}