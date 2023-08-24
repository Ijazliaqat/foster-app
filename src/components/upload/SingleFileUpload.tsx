import React, { FC, useState, useRef, Dispatch, SetStateAction } from "react";
import { Grid, TextField } from "@mui/material";

import InputAdornment from "@mui/material/InputAdornment";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";

const SingleFileUpload: FC<{
  accept: string;
  availableFile?: string;
  label: string;
  setFileHolder: Dispatch<SetStateAction<File | undefined>>;
  readOnly?: boolean;
}> = ({ accept, label, availableFile, setFileHolder, readOnly = false }) => {
  const [file, setFile] = useState<File>();
  const fileRef = useRef<HTMLInputElement>(null);
  const onFileChange = (event: any) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
      setFileHolder(event.target.files[0]);
    }
  };

  const selectFile = () => {
    if (fileRef.current) {
      fileRef.current.click();
    }
  };

  return (
    <Grid onClick={() => !readOnly && selectFile()} container>
      <input
        onChange={onFileChange}
        type="file"
        style={{ display: "none" }}
        ref={fileRef}
        accept={accept}
      />
      <Grid
        item
        xs={12}
        sx={{
          border: "1px solid #00000021",
          padding: 1,
          borderRadius: "5px",
          cursor: "pointer",
        }}
        container
      >
        <Grid item>
          <InsertDriveFileIcon sx={{ opacity: "0.5" }} />
        </Grid>
        <Grid item>
          {`${file ? file.name : availableFile ? availableFile : ""} `}
        </Grid>
      </Grid>
      {/* <TextField
        id={label}
        label={label}
        fullWidth
        variant="outlined"
        disabled
        // value={`${availableFile ? availableFile : file ? file.name : ""} `}
        value={`${file ? file.name : availableFile ? availableFile : ""} `}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <InsertDriveFileIcon />
            </InputAdornment>
          ),
        }}
      /> */}
    </Grid>
  );
};

export default SingleFileUpload;
