import Button from "@/components/buttons/Button"

export default async function Index() {
  return (
    <div>
      <Button type="button" size='sm' btnColor="baseDark" textColor="black" textPos='vertical'>
        <span>Sign in</span>
      </Button>
    </div>
  )
}
