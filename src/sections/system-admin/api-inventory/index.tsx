import ApliInventoryDisableTable from "./api-inventory-disable-table/ApliInventoryDisableTable";
import ApiInventoryTable from "./api-inventory-table/ApiInventoryTable";

export const accordianData = [
  {
    title: "API Inventory",
    component: <ApiInventoryTable/>,
  },
  {
    title: "API Inventory ( disable )",
    component: <ApliInventoryDisableTable/>,
  },
]