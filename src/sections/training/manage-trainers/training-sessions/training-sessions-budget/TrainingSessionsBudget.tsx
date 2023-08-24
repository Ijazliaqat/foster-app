import React from "react";
import VerticalSmallTabs from "@root/components/VerticalSmallTabs";
import TotalBudget from "./total-budget/TotalBudget";
import OverBudgetItems from "./over-budget-items/OverBudgetItems";
const TrainingSessionsBudget = () => {
  const tabs = ["Total budget", "Over budget items"];
  return (
    <VerticalSmallTabs tabs={tabs}>
      <TotalBudget />
      <OverBudgetItems />
    </VerticalSmallTabs>
  );
};

export default TrainingSessionsBudget;
