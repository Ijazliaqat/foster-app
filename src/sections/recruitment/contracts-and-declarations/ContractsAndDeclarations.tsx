import { Button, Grid } from "@mui/material";
import React from "react";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

import { CONTRACTSANDDECLARATIONDATA } from "./index";
import Image from "@root/components/Image";
import ArrowLeftSharpIcon from "@mui/icons-material/ArrowLeftSharp";

import { InformationDialogbox } from "../information-dialogbox/InformationDialogbox";
import { AssignedFormDialogbox } from "../assigned-form-dialogbox/AssignedFormDialogbox";

import signedIcon from "../../../assets/img/recruitment/signed.png";
import unSignedIcon from "../../../assets/img/recruitment/unsigned.png";
import { SignedDialogBox } from "../signed-or-unsigned-dialogbox/SignedDialogBox";
import { UnsignedDialogbox } from "../signed-or-unsigned-dialogbox/UnsignedDialogbox";
import { useContractsAndDeclarations } from "./useContractsAndDeclarations";
import Link from "next/link";

export default function ContractsAndDeclarations() {
  const {
    theme,
    openIdForInfo,
    contractsAndDeclarationData,
    setOpenIdForInfo,
    formDialogId,
    setFormDialogId,
    signedFormId,
    setsignedFormId,
    unSignedFormId,
    setUnSignedFormId,
  } = useContractsAndDeclarations();

  return (
    <>
      <div>
        <Grid
          container
          px={2}
          sx={{
            bgcolor:
              theme.palette.mode === "light"
                ? "white"
                : theme.palette.grey[800],
          }}
        >
          {contractsAndDeclarationData?.map((ele: any) => (
            <Grid
              key={ele?.id}
              container
              p={1}
              sx={{
                borderBottom: "1px solid",
                bgcolor:
                  theme.palette.mode === "light"
                    ? "white"
                    : theme.palette.grey[800],
              }}
            >
              <Grid
                item
                container
                mt={1}
                direction={"column"}
                alignItems={"center"}
                lg={2.3}
                xs={12}
                pt={1}
                sx={{ position: "relative" }}
              >
                <Image src={ele?.imgIcon} alt={ele?.text} />
                <InfoOutlinedIcon
                  onClick={() => setOpenIdForInfo(ele?.id)}
                  sx={{
                    position: "absolute",
                    right: "22px",
                    fontSize: 18,
                    cursor: "pointer",
                  }}
                />
                <InformationDialogbox
                  handleClose={() => {
                    setOpenIdForInfo("");
                  }}
                  open={openIdForInfo === ele?.id}
                  informationText={ele?.informationText}
                  informationIconData={ele?.informationIcon}
                />

                <span
                  style={{
                    fontSize: 14,
                    fontWeight: 600,
                    paddingTop: 7,
                    textAlign: "center",
                  }}
                >
                  {ele?.text}
                </span>
              </Grid>
              <Grid
                container
                alignItems={"center"}
                justifyContent={"center"}
                item
                lg={1.5}
                xs={12}
              >
                <ArrowLeftSharpIcon sx={{ fontSize: 35 }} />
              </Grid>
              <Grid
                container
                alignItems={"center"}
                justifyContent={"center"}
                item
                lg={2.3}
                xs={12}
              >
                <Link
                  href={ele?.href}
                  style={{
                    color: theme.palette.primary.main,
                    fontWeight: 600,
                    fontSize: 14,
                    textDecoration: "none",
                  }}
                >
                  {ele?.viewForms}
                </Link>
              </Grid>
              <Grid
                my={1}
                container
                alignItems={"center"}
                justifyContent={"center"}
                item
                sx={{ fontSize: 14 }}
                lg={3.6}
                md={6}
                xs={12}
              >
                <div
                  className=""
                  style={{
                    cursor: "pointer",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  {ele?.isSigned ? (
                    <>
                      <Image
                        onClick={() => setsignedFormId(ele?.id)}
                        src={signedIcon}
                        alt=""
                      />
                      <span style={{ paddingTop: 10 }}>Signed</span>
                    </>
                  ) : (
                    <>
                      {" "}
                      <Image
                        onClick={() => setUnSignedFormId(ele?.id)}
                        src={unSignedIcon}
                        alt=""
                      />
                      <span style={{ paddingTop: 10 }}>Un Signed</span>
                    </>
                  )}
                </div>
                <UnsignedDialogbox
                  handleClose={() => {
                    setUnSignedFormId("");
                  }}
                  component={ele?.text}
                  open={unSignedFormId === ele?.id}
                />
                <SignedDialogBox
                  handleCloseForm={() => {
                    setsignedFormId("");
                  }}
                  component={"Contracts and Declaration"}
                  openFormDialog={signedFormId === ele?.id}
                />
              </Grid>
              <Grid
                container
                alignItems={"center"}
                justifyContent={"center"}
                item
                lg={2.3}
                md={6}
                xs={12}
              >
                <Button
                  onClick={() => setFormDialogId(ele?.id)}
                  variant="contained"
                >
                  Assigned To
                </Button>
                <AssignedFormDialogbox
                  handleCloseForm={() => {
                    setFormDialogId("");
                  }}
                  component={"Enquiry Stage"}
                  openFormDialog={formDialogId === ele?.id}
                />
              </Grid>
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
}
