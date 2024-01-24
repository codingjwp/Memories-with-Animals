import ProfileForm from "@/components/accounts/ProfileForm";
import { GetFetchType, Speciestype } from "@/app/accounts/profile/profile.type";

export default async function ProfilePage() {
  const res = await fetch('/api/db/species', {
    next: { revalidate: 86400}
  });
  const { data, error }: GetFetchType = await res.json();
  if (error) {
    console.error(error);
  }

  return (<ProfileForm data={data as Speciestype[]} />) 
}