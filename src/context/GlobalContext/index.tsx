
import { useContext } from "react";
import { GlobalContext, GlobalContextProps } from "./provider";

export const useGlobalContext = (): GlobalContextProps => {
    const context = useContext(GlobalContext);
    if (!context) {
      throw new Error("useGlobalContext debe ser usado dentro de un GlobalProvider");
    }
    return context;
  };

  