import axios from "axios";
import { getQueriedUrl } from "../../queryStringHelper";

export async function getUsersListRequest({ query }) {
  return axios.get(
    getQueriedUrl({
      url: "/api/users",
      query: {
        ...query,
      },
    })
  );
}

export async function getUsersDetailRequest({ id, query }) {
  return axios.get(
    getQueriedUrl({
      url: `/api/users/${id}`,
      query: {
        ...query,
      },
    })
  );
}
