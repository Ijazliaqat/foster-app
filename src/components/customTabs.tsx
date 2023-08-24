import { Children } from "react";
import { Tabs, Tab, Typography, useTheme, Box, Card } from "@mui/material";

const CustomHorizaontalTab = (props: any) => {
  const { tabsArray = [], currentTab = 0, setCurrentTab = () => { }, isDisabled, children } = props;
  const arrayChildren = Children.toArray(children);
  const theme: any = useTheme();

  return (
    <Card sx={{ px: 2 }}>
      <Tabs
        selectionFollowsFocus
        orientation="horizontal"
        variant="scrollable"
        sx={styles.tabRoot(theme)}
        TabIndicatorProps={styles.tabIndicator(theme)}
        value={currentTab}
        onChange={(event: any, index: number) => setCurrentTab(index)}
      >
        {tabsArray?.map((title: string) => (
          <Tab
            wrapped
            disabled={isDisabled}
            key={title}
            label={
              <Typography
                variant="subtitle2"
                component="span"
                color={theme.palette.grey[600]}
              >
                {title}
              </Typography>
            }
          />
        ))}
      </Tabs>
      <Box sx={{ py: 2 }}>
        {arrayChildren?.map((child, index) => (
          <Box key={index}>{currentTab === index && child}</Box>
        ))}
      </Box>
    </Card>
  );
};

export default CustomHorizaontalTab;

const styles = {
  tabRoot: (theme: any) => ({
    borderBottom: 1,
    borderColor: theme.palette.primary.lighter,
  }),

  tabIndicator: (theme: any) => ({
    sx: { background: theme.palette.primary.main },
  }),
};
