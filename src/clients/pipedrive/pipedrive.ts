import pipedrive from "pipedrive";

const API_KEY = process.env.PIPEDRIVE_API_KEY as string;

const defaultClient = new pipedrive.ApiClient();
defaultClient.authentications.api_key.apiKey = API_KEY;

const getDeals = async () => {
  const api = new pipedrive.DealsApi(defaultClient);
  const deals = await api.getDeals();

  return deals;
};

export { getDeals };
