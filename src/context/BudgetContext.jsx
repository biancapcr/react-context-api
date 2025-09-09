import { createContext, useContext, useState } from "react";

const BudgetContext = createContext({ budgetMode: false, setBudgetMode: () => {} });

export function BudgetProvider({ children }) {
  const [budgetMode, setBudgetMode] = useState(false);
  return (
    <BudgetContext.Provider value={{ budgetMode, setBudgetMode }}>
      {children}
    </BudgetContext.Provider>
  );
}

export function useBudget() {
  return useContext(BudgetContext);
}