import Layout from "@root/layouts";
import HomeIcon from "@mui/icons-material/Home";
import Image from "next/image";
import userManualImg from "../../assets/img/user-manual/user-manual.png";
import Box from "@mui/material/Box";

// import { NextPage } from 'next'
const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "User Manual",
    href: "",
  },
];
const PAGE_TITLE = "User Manual";
export default function UserManual() {
  return (
    <>
      <Layout
        showTitleWithBreadcrumbs
        breadcrumbs={BREADCRUMBS}
        title={PAGE_TITLE}
      >
        <Box height={{ md: "79vh", xs: "50vh" }}>
          <div
            className=""
            style={{
              backgroundImage: `url(${userManualImg.src})`,
              height: "100%",
              width: "100%",
              backgroundSize: "100% 100%",
            }}
          ></div>
        </Box>
      </Layout>
    </>
  );
}
