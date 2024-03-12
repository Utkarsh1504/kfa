import { createContext, Context } from "react";

type SearchContextType = string;

export const SearchContext: Context<SearchContextType> =
  createContext<SearchContextType>("");
