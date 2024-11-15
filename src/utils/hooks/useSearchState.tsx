import { useContext } from "react";
import { StateContext } from "../../context/SearcherStateContext";

export const useSearchState = () => {
  const context = useContext(StateContext);
  return context;
};
