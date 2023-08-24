import { Grid } from "@mui/material";
import React from "react";
import { useTheme } from "@emotion/react";
import Sidebar from "../sidebar/Sidebar";
import { useLayoutInfo } from "./use-layout-info";
import { Card } from "@mui/material";
import RenderForm from "../render-form/RenderForm";
import EditProfileHeader from "../edit-profile-header/EditProfileHeader";

const EditProfileLayout = () => {
  const {
    tabs,
    expanded,
    setExpanded,
    itemClickHand,
    tabsItems,
    diffInfoHandler,
    activateNextForm,
    MoveTo,
  } = useLayoutInfo();
  const theme: any = useTheme();

  return (
    <Grid container>
      <Grid item md={4} sx={{ padding: "10px" }}>
        <Sidebar
          tabs={tabs}
          expanded={expanded}
          setExpanded={setExpanded}
          itemClickHand={itemClickHand}
          tabsItems={tabsItems}
          diffInfoHandler={diffInfoHandler}
        />
      </Grid>
      <Grid item md={8} sx={{ padding: "10px" }}>
        <Card
          sx={{
            boxShadow: theme.shadows[10],
            p: 1,
          }}
        >
          <EditProfileHeader />
          <RenderForm
            name={diffInfoHandler.activeFormName}
            activateNextForm={activateNextForm}
            MoveTo={MoveTo}
          />
        </Card>
      </Grid>
    </Grid>
  );
};

export default EditProfileLayout;
