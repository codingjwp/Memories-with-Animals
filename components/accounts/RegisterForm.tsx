'use client';

import Input from "@/components/inputs/Input";
import Button from "@/components/buttons/Button";

export default function RegisterForm() {
  return (
    <form>
      <Input text="Email" type="email" required={true} addStyles="mb-4" />
      <Input  text="Password" type="password" hidePassword={true} required={true} addStyles="mb-5" />
      <Input  text="Confirm Password" type="confirm" hidePassword={false} required={true} addStyles="mb-5" />
      <Button id="register" type="submit" btnColor="dark" size="lr">
        <span className="text-black dark:text-white">Sign Up</span>
      </Button>
    </form>
  )
}