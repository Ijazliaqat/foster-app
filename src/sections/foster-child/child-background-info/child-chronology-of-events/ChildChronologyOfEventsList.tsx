import CustomAccordian from "@root/components/CustomAccordian";
import { childChronologyListData } from "./ChildChronologyOfEventsData";
import { Box, Button } from "@mui/material";
import ImportExportIcon from "@mui/icons-material/ImportExport";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const ChildChronologyOfEventsList = (props: any) => {
  const { fosterChildId } = props;
  const childChronologyListDataArray = childChronologyListData(fosterChildId);
  return (
    <>
      <Box sx={{ display: "flex", gap: "12px", justifyContent: "end" }}>
        <Button variant="contained">
          <ImportExportIcon /> Sort By <ArrowDropDownIcon />
        </Button>
      </Box>
      <CustomAccordian data={childChronologyListDataArray} />
    </>
  );
};

export default ChildChronologyOfEventsList;
