import React, { FC, useRef, useState } from "react";
import { useTheme } from "@emotion/react";
import { Grid, IconButton, Typography } from "@mui/material";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import SingleFileInfoHolder from "./SingleFileInfoHolder";
import AddMoreBtn from "./AddMoreBtn";

const MultipleFileUploader: FC<any> = ({
  setDocuments,
  availableFiles,
  setAvailableFiles,
  deleteDocument,
}) => {
  const theme: any = useTheme();
  const fileRef = useRef<HTMLInputElement>(null);
  const [files, setFiles] = useState<any>(null);
  const selectFile = () => {
    if (fileRef.current) {
      fileRef.current.click();
    }
  };

  const onFileChange = (event: any) => {
    if (event.target.files && event.target.files) {
      files === null
        ? setFiles([...event.target.files].reverse())
        : setFiles((prev: any) => [...event.target.files, ...prev].reverse());
      files === null
        ? setDocuments([...event.target.files])
        : setDocuments((prev: any) => [...event.target.files, ...prev]);
    }
  };

  const removeFile = (fileIndex: number) => {
    const fileArray = [...files];
    console.log({ fileIndex, fileArray });

    fileArray.splice(fileIndex, 1);
    fileArray.length === 0 ? setFiles(null) : setFiles(fileArray.reverse());
    fileArray.length === 0
      ? setDocuments([])
      : setDocuments(fileArray.reverse());
  };

  // deleting file from server
  const deleteFile = async (id: string) => {
    const isFileDeleted = await deleteDocument(id);
    if (!isFileDeleted) return;
    const updatedFiles = availableFiles.filter(
      (item: any, index: number) => item.id !== id
    );
    updatedFiles.length === 0
      ? setAvailableFiles(null)
      : setAvailableFiles(updatedFiles);
  };

  return (
    <Grid container>
      {!(files?.length > 0) && !(availableFiles?.length > 0) && (
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
            {/* <input
              onChange={onFileChange}
              type="file"
              style={{ display: "none" }}
              ref={fileRef}
              accept="image/*"
              multiple
            /> */}
          </Grid>
        </Grid>
      )}
      {(files?.length > 0 || availableFiles?.length > 0) && (
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
            container
            justifyContent="center"
            alignItems="center"
            item
            sm={12}
          >
            <Grid
              item
              container
              sm={8}
              sx={{
                flexWrap: "nowrap",
                overflowX: "scroll",
                width: "100px",
              }}
              // justifyContent="center"
            >
              {/* Already availavle files  */}
              {availableFiles &&
                availableFiles?.map(
                  ({
                    name,
                    url,
                    id,
                  }: {
                    name: string;
                    url: string;
                    id: string;
                  }) => {
                    return (
                      <SingleFileInfoHolder
                        key={id}
                        name={name ? name : "filename"}
                        removeFile={() => {
                          deleteFile(id);
                        }}
                      />
                    );
                  }
                )}
              {/* new files uploaded by the user  */}
              {files &&
                files?.map((file: any, index: number) => (
                  <SingleFileInfoHolder
                    key={file.lastModified}
                    name={file.name}
                    removeFile={() => removeFile(index)}
                  />
                ))}

              <AddMoreBtn onClick={selectFile} />
            </Grid>
          </Grid>
        </Grid>
      )}
      <input
        onChange={onFileChange}
        type="file"
        style={{ display: "none" }}
        ref={fileRef}
        accept="image/*"
        multiple
      />
    </Grid>
  );
};

export default MultipleFileUploader;
