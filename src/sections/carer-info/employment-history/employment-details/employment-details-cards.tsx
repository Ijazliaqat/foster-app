import {
  Box,
  Card,
  IconButton,
  Typography,
  useTheme,
  darken,
  Skeleton,
} from "@mui/material";
import { BsPlus } from "react-icons/bs";
import React, { useState } from "react";
import AddExperiencesModal from "./add-experience-modal";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { useGetExperienceQuery } from "@root/services/carer-info/employment-history/employnmentDetailsApi";
import Image from "next/image";
import EditExperiencesModal from "./edit-experience-modal";
import { SkeletonEnvironmentHistory } from "@root/components/skeleton";
function EmploymentDetailsCards() {
  const [open, setOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [editData, setEditData] = useState();
  const theme: any = useTheme();
  const { data, isLoading } = useGetExperienceQuery();
  return (
    <Card>
      <Box sx={styles.header}>
        <Typography sx={{ fontWeight: 600, fontSize: "1.3rem" }}>
          Experience
        </Typography>
        {isLoading ? (
          <Skeleton
            variant="circular"
            width={40}
            height={40}
            sx={{
              bgcolor:
                theme.palette.mode === "light" ? theme.palette.grey[300] : "",
            }}
          />
        ) : (
          <Box sx={styles.addBtnStyles(theme)} onClick={() => setOpen(true)}>
            <BsPlus style={styles.addBtnIconStyles(theme)} />
          </Box>
        )}
      </Box>

      {isLoading ? (
        <SkeletonEnvironmentHistory />
      ) : (
        <Box>
          {data?.data?.map((item: any) => {
            return (
              <Box sx={{ px: 2, pt: 1 }} key={item.id}>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Box sx={{ display: "flex", alignItems: "start", gap: 1 }}>
                    <Box sx={{ mt: 0.5 }}>
                      <Image
                        src={`${process.env.NEXT_PUBLIC_IMG_URL}${item?.media}`}
                        alt="logo"
                        width={30}
                        height={30}
                      />
                    </Box>
                    <Box>
                      <Typography variant="h5">{item.companyName}</Typography>
                      <Typography variant="subtitle2">
                        {item.totalYears} Yrs {item.totalMonths} mos
                      </Typography>
                    </Box>
                  </Box>
                  <IconButton
                    onClick={() => {
                      setEditData(item), setEditOpen(true);
                    }}
                    sx={styles.btnStyle(theme)}
                    size="small"
                  >
                    <ModeEditIcon fontSize="small" sx={styles.iconStyles} />
                  </IconButton>
                </Box>

                <Box sx={{ mt: 1 }}>
                  {item?.experiences?.map((data: any, index: number) => {
                    const isLastChild = index === item?.experiences?.length - 1;

                    return (
                      <Box key={data?.id}>
                        <Box
                          sx={{ display: "flex", alignItems: "start", gap: 1 }}
                        >
                          <Box>
                            <FiberManualRecordIcon
                              fontSize="medium"
                              sx={{ color: theme.palette.grey[400] }}
                            />
                          </Box>
                          <Box>
                            <Typography variant="subtitle1">
                              {data?.employmentType}
                            </Typography>
                            <Box
                              sx={{
                                position: "relative",
                                ...(!isLastChild && {
                                  "::before": {
                                    content: '""',
                                    position: "absolute",
                                    top: 0,
                                    left: -23,
                                    width: "1px",
                                    height: "100%",
                                    borderLeft: `2px solid ${theme.palette.grey[400]}`,
                                  },
                                }),
                              }}
                            >
                              <Typography variant="body1" sx={{ pb: 0.5 }}>
                                {data?.timeSpent?.years} Yrs{" "}
                                {data?.timeSpent?.months} mos
                              </Typography>
                              <Typography variant="body1" sx={{ pb: 1 }}>
                                {data?.description}
                              </Typography>
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                    );
                  })}
                </Box>
              </Box>
            );
          })}
        </Box>
      )}
      {open && <AddExperiencesModal open={open} setOpen={setOpen} />}
      {editOpen && (
        <EditExperiencesModal
          open={editOpen}
          setEditOpen={setEditOpen}
          editData={editData}
        />
      )}
    </Card>
  );
}
export default EmploymentDetailsCards;
const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    p: 2,
  },
  addBtnStyles: (theme: any) => ({
    width: "1.8rem",
    height: "1.8rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
    cursor: "pointer",
    backgroundColor: theme.palette.orange.main,
  }),
  addBtnIconStyles: (theme: any) => ({
    color: "#ffff",
    fontSize: "1.5rem",
  }),
  btnStyle: (theme: any) => ({
    backgroundColor: theme.palette.grey[500],
    width: "2rem",
    height: "2rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
    cursor: "pointer",
    ":hover": {
      backgroundColor: darken(theme.palette.grey[500], 0.15),
    },
  }),
  iconStyles: () => ({
    color: "#fff",
  }),
};
