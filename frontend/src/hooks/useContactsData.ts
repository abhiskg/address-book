import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { ContactDataType, ContactInputType } from "../types/ContactType";

import { request } from "../utils/axios.utils";

const fetchContactData: (
  page: number,
  limit: number
) => Promise<ContactDataType> = (page: number, limit: number) => {
  return request({ url: `/api/v1/contacts?page=${page}&limit=${limit}` });
};

const createNewContact = (data: ContactInputType) => {
  return request({ url: `/api/v1/contact/new`, method: "post", data });
};

export const useContactsData = (page: number, limit: number) => {
  return useQuery(["contacts", page], () => fetchContactData(page, limit), {
    keepPreviousData: true,
  });
};

export const useCreateContact = () => {
  const queryClient = useQueryClient();
  return useMutation(createNewContact, {
    onSuccess: () => {
      queryClient.invalidateQueries(["contacts"]);
    },
  });
};
