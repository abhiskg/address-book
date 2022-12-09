import { useQuery } from "@tanstack/react-query";

import { request } from "../utils/axios.utils";

const fetchContactData = (page: number, limit: number) => {
  return request({ url: `/api/v1/contacts?page=${page}&limit=${limit}` });
};

export const useContactsData = (page: number, limit: number) => {
  return useQuery(["contacts", page], () => fetchContactData(page, limit), {
    keepPreviousData: true,
  });
};
