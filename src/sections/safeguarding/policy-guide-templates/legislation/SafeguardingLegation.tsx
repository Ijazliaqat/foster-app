import React, { Fragment } from "react";
import Link from "next/link";
import { Box, List, ListItem, ListItemAvatar, Typography } from "@mui/material";
// components 
import VericalTabs from "@root/components/VericalTabs";
// sections 
import { LEGISLATIONTABSDATA } from ".";  
import { useSafeguardingLegation } from "./useSafeguardingLegation";


const SafeguardingLegislation = ({setPageTitle}:any) => {
 const { theme } = useSafeguardingLegation();
  return (
    <VericalTabs tabsDataArray={LEGISLATIONTABSDATA} setActiveTab={setPageTitle}>
      {LEGISLATIONTABSDATA?.map((item:any) => (
        <Fragment key={item?.index}> 
           {item.title==='Gov Reference Link' ? 
            <Box sx={styles?.container}>
              <List sx={styles?.listContainer}>
                <Link href='https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/192705/NMS_Fostering_Services.pdf'
                 style={styles?.nextLinkContainer}>
                  <ListItem
                    sx={styles?.listItemContainer(theme)} 
                  >
                    <ListItemAvatar sx={styles?.listItemAvatar(item?.background)} />
                    <Typography variant="subtitle1" component="p" sx={{textDecoration:'underline'}} color={theme.palette.grey[600]}>
                      Reference Link
                    </Typography>
                  </ListItem>
                </Link>
              </List>
            </Box>
          :item?.innerData}
        </Fragment>
      ))}
    </VericalTabs>
  );
};

export default SafeguardingLegislation;

// ----------------------------------------------------------------------
const styles = {
  container: { display: "flex", justifyContent: "space-between" },
  listContainer: { width: "100%" },
  nextLinkContainer: { textDecoration: "none", display: "block" },
  listItemContainer: (theme: any) => ({
    ":hover": {
      background: theme.palette.mode === "light" ? theme.palette.grey[300] : theme.palette.grey[900],
      borderRadius: 1,
    },
  }),
  listIconButton: (theme: any) => ({
    "&:hover": { background: "transparent !important" },
    color: theme.palette.grey[600],
    fontWeight: 500,
    fontSize: "14px",
  }),
  listItemAvatar: (background: any) => ({
    background: `${background}`,
    width: "12px",
    height: "12px",
    borderRadius: 1,
  }),
};
