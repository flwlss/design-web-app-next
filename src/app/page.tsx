import { fetchAllData } from "@/common/scripts";
import Home from "@/views/Home";

export default async function Page() {
  const results = await fetchAllData();

  return <Home {...results} />;
}
