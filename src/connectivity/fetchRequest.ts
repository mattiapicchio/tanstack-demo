import { getBaseRequestConfig } from "@/connectivity/getBaseRequestConfig";
import { ErrorResponse } from "./api.types";

const apiUrl = import.meta.env.VITE_API_URL;

/*
  BASIC FACADE PATTERN SETUP FOR API FETCH STRATEGY
  it can be expanded with project specific error handling, errors parser, cutom typed errors, project specific request config headers, etc...
*/

export async function fetchRequest<TResponse>(
  path: string,
  config?: RequestInit,
): Promise<TResponse> {
  const url = `${apiUrl + path}`;

  const baseRequestConfig = getBaseRequestConfig();
  const requestConfig = Object.assign({}, baseRequestConfig, config);

  const response = await fetch(url, requestConfig);
  const parsedResponse = await response.json();

  if (!response.ok) {
    // When using TanStack Query, we need to throw the error in our fetch function so that the error property in the query hook gets populated correctly.
    throw parsedResponse as ErrorResponse;
  }

  return parsedResponse as TResponse;
}
