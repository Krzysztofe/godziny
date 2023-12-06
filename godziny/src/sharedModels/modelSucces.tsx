import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";
import { SerializedError } from "@reduxjs/toolkit";

export interface ModelSuccess {
  isLoading: boolean;
  isError: boolean;
  error?: FetchBaseQueryError | SerializedError;
}
