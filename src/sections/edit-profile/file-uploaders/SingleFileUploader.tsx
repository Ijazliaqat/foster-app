import React, { FC, useRef } from "react";
import { useTheme } from "@emotion/react";
import { Grid, IconButton, Typography } from "@mui/material";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import { nameShortnerWithExtension } from "../util/Util";
import { SINGLEFILEINTERFACE } from "./SINGLEFILEINTERFACE";

const SingleFileUploader: FC<SINGLEFILEINTERFACE> = ({
  file,
  setFileHandler,
  avialableFile,
}) => {
  const theme: any = useTheme();
  const fileRef = useRef<HTMLInputElement>(null);
  const selectFile = () => {
    if (fileRef.current) {
      fileRef.current.click();
    }
  };

  const onFileChange = (event: any) => {
    if (event.target.files && event.target.files[0]) {
      setFileHandler(event.target.files[0]);
    }
  };

  return (
    <Grid container>
      {!file && !avialableFile && (
        <Grid
          item
          sm={12}
          container
          sx={{
            height: "150px",
            border: "3px dotted",
            borderColor: theme.palette.primary.main,
          }}
          justifyContent="center"
        >
          <Grid
            item
            sm={12}
            container
            alignItems="center"
            justifyContent="center"
            direction="column"
            sx={{ cursor: "pointer" }}
            onClick={selectFile}
          >
            <Grid item>
              <IconButton aria-label="delete">
                <FileUploadIcon sx={{ color: theme.palette.primary.main }} />
              </IconButton>
            </Grid>
            <Grid item>
              <Typography variant="h5">
                Drag and drop, or{" "}
                <span style={{ color: theme.palette.primary.main }}>
                  Browse
                </span>{" "}
                your file
              </Typography>
            </Grid>
            <input
              onChange={onFileChange}
              type="file"
              style={{ display: "none" }}
              ref={fileRef}
              accept="image/*"
            />
          </Grid>
        </Grid>
      )}
      {(file || avialableFile) && (
        <Grid
          item
          sm={12}
          container
          sx={{
            height: "150px",
            border: "3px dotted",
            borderColor: theme.palette.primary.main,
          }}
          justifyContent="center"
        >
          <Grid
            item
            sm={12}
            container
            alignItems="center"
            justifyContent="center"
            direction="column"
            sx={{ cursor: "pointer" }}
            onClick={selectFile}
          >
            <Grid item>
              <IconButton aria-label="delete">
                <FileUploadIcon sx={{ color: theme.palette.primary.main }} />
              </IconButton>
            </Grid>
            <Grid item>
              <Typography variant="h5">
                {nameShortnerWithExtension(
                  file?.name ? file?.name : "availableFilename.pdf"
                )}
              </Typography>
            </Grid>
            <input
              onChange={onFileChange}
              type="file"
              style={{ display: "none" }}
              ref={fileRef}
              accept="image/*"
            />
          </Grid>
        </Grid>
      )}
    </Grid>
  );
};

export default SingleFileUploader;
