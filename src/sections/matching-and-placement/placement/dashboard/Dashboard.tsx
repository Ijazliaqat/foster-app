import { Box, Card, Grid, Typography, styled } from "@mui/material";

import Link from "next/link";
import Image from "next/image";

import { data, placementCardsData, remaindersAndNotificationsData } from ".";
import TableHeader from "@root/components/TableHeader";
import CustomTable from "@root/components/Table/CustomTable";
import { usePlacementDashboard } from "./useDashboard";
import Chart from "./Chart";
import AddTaskModal from "./tasks-modal/TasksModal";

const Dashboard = () => {
  const { tableHeaderRefThree, columns, isTaskModalOpen, setIsTaskModalOpen, handleClose } = usePlacementDashboard();
  return (
    <>
      <Grid container spacing="20px">
        {placementCardsData.map((card, index) => (
          <Grid item xl={4} lg={4} md={6} xs={12} key={index}>
            <Link href={card.link} style={{ all: "unset" }}>
              <Box sx={styles.policyCardsWrapper(card.bgColor)}>
                <Box sx={{ flexBasis: "75%" }}>
                  <Typography sx={styles.cardsText}>{card.title}</Typography>
                </Box>
                <Box sx={{ flexBasis: "content" }}>
                  <Image src={card.icon} alt={card.title} />
                </Box>
              </Box>
            </Link>
          </Grid>
        ))}
      </Grid>
      <Grid container pt="24px" columnSpacing="24px">
        <Grid item xl={5} lg={12} md={12} xs={12}>
          <Card sx={{ marginBottom: "24px", ...styles.tableWrapper }}>
            <TableHeader
              ref={tableHeaderRefThree}
              hideSearch
              title="Tasks"
              showAddBtn
              onAdd={() => setIsTaskModalOpen(true)}
              onChanged={(data: any) => {
                console.log("Updated params: ", data);
              }}
            />
            <CustomTable
              data={data}
              columns={columns}
              isLoading={false}
              isFetching={false}
              isError={false}
              isSuccess={true}
              isPagination={false}
              onSortByChange={(data: any) => {
                console.log("Sort by: ", data);
              }}
            />
          </Card>
          <Card sx={{ padding: "13px" }}>
            <Typography variant="h5" sx={{ fontSize: "16px", mb: 0 }}>
              Reminders & Notifications
            </Typography>
            <Grid container spacing={2} pt="10px">
              {remaindersAndNotificationsData.map((item: any, i: any) => (
                <Grid item xs={12} md={12} lg={6} xl={6} key={i}>
                  <StyledCard
                    background={item?.background}
                    border={item?.border}
                  >
                    <Box sx={{ mr: "8px", flexShrink: 0 }}>
                      <Image src={item?.img} alt={""} />
                    </Box>
                    <Box>
                      <Typography fontSize="14px">{item?.text}</Typography>
                      <Link href={""} style={{ color: `${item?.linkColor}` }}>
                        {item?.link}
                      </Link>
                    </Box>
                  </StyledCard>
                </Grid>
              ))}
            </Grid>
          </Card>
        </Grid>
        <Grid item xl={7} lg={12} md={12} xs={12}>
          <Card sx={{ padding: "18px", mt: { xl: 0, md: 2, sm: 2, xs: 2 } }}>
            <Typography
              fontSize={20}
              color="#DC3545"
              mt={"1rem"}
              textAlign={"center"}
              fontWeight={600}
              mb={3}
            >
              Local Authority Statistics
            </Typography>
            <Chart />
          </Card>
        </Grid>
      </Grid>
      {isTaskModalOpen && <AddTaskModal isTaskModalOpen={isTaskModalOpen} handleClose={handleClose} />}
    </>
  );
};
export default Dashboard;

const styles = {
  tableWrapper: { ".MuiTableHead-root": { display: "none !important" } },
  policyCardsWrapper: (color: string) => ({
    background: color,
    borderRadius: "10px",
    boxShadow: "0px 0px 7px 3px rgba(14, 145, 140, 0.2)",
    display: "flex",
    justifyContent: "space-between",
    padding: "20px",
    minHeight: "120px",
    height: "100%",
    cursor: "pointer",
  }),
  cardsText: {
    color: "white",
    fontSize: "23px",
    fontWeight: "600",
    paddingTop: "50px",
  },
};
const StyledCard = styled(Card)(
  ({ background, border }: { background: string; border: string }) => ({
    background: background,
    border: border,
    padding: "10px",
    // minWidth: "233px",
    display: "flex",
    alignItems: "center",
    borderRadius: "11px",
    color: "white",
    fontSize:"23px"
  })
);
