import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  getTaskDetailsInfoBarData,
  getTaskDetailsNavbarData,
} from "../../taskDetailsServices";

export const taskDetailsPageApi = createApi({
  reducerPath: "taskDetailsPageApi",
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    getTaskDetailsNavbarData: builder.query({
      queryFn: getTaskDetailsNavbarData,
    }),
    getTaskDetailsInfoBarData: builder.query({
      queryFn: getTaskDetailsInfoBarData,
    }),
  }),
});

export const {
  useGetTaskDetailsNavbarDataQuery,
  useGetTaskDetailsInfoBarDataQuery,
} = taskDetailsPageApi;
