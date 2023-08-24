import BackupCarerPlacementTable from "./backup-carer-placement-discharge/BackupCarerPlacementTable";
import PlacementDischargeTable from "./placement-discharge/PlacementDischargeTable";
import PlacementTransferTable from "./placement-transfer/PlacementTransferTable";

export const PlacementAndDischargeHistoryData = (fosterChildId: any) => [
  {
    title: "Placement / Discharge",
    component: <PlacementDischargeTable fosterChildId={fosterChildId} />,
  },
  {
    title: "Placement / Transfer",
    component: <PlacementTransferTable fosterChildId={fosterChildId} />,
  },
  {
    title: "Backup Carer Placement / Discharge",
    component: <BackupCarerPlacementTable fosterChildId={fosterChildId} />,
  },
];
