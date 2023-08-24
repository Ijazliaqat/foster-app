import CustomAccordian from "@root/components/CustomAccordian";
import { PlacementAndDischargeHistoryData } from "./PlacementAndDischargeHistoryData";
import { Box, Button } from "@mui/material";
import ImportExportIcon from "@mui/icons-material/ImportExport";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const PlacementAndDischargeHistoryList = (props: any) => {
  const { fosterChildId } = props;
  const placementAndDischargeHistoryDataArray =
    PlacementAndDischargeHistoryData(fosterChildId);
  return (
    <>
      <Box sx={{ display: "flex", gap: "12px", justifyContent: "end" }}>
        <Button variant="contained">
          <ImportExportIcon /> Placement Type <ArrowDropDownIcon />
        </Button>
      </Box>
      <CustomAccordian data={placementAndDischargeHistoryDataArray} />
    </>
  );
};

export default PlacementAndDischargeHistoryList;
