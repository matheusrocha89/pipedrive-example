import { getDeals } from "@/clients/pipedrive/pipedrive";

const loadDeals = async () => {
  const deals = await getDeals();

  return deals;
};

export default async function Home() {
  const deals = await loadDeals();
  console.log(deals);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
  );
}
