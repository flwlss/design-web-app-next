import { fetchAllData } from "@/common/scripts";
import HomePage from "@/views/HomePage";

export default async function Home() {
  const results = await fetchAllData();

  return <HomePage {...results} />;
}
