import { useContext } from "react";
import AppStateContext from "../contexts/AppStateContext";

export default function usePrototypes() {
  const { orders } = useContext(AppStateContext);

  return orders;
}