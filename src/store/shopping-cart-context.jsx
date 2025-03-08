import { createContext } from "react";

// this is using an object format to contain more properties
export const CartContext = createContext({
  items: [],
});
