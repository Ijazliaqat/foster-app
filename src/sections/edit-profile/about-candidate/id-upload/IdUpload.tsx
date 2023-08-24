import { FC, useEffect, useState } from "react";
import { useTheme } from "@emotion/react";
import { Button, Grid, Typography } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import {
  useGetPhotoForIdUploadQuery,
  useUpdatePhotoForIdUploadMutation,
} from "@root/services/update-profile/about-the-candidate/aboutTheCandidateApi";
import SingleFileUploader from "../../file-uploaders/SingleFileUploader";
import { displayErrorMessage, displaySuccessMessage } from "../../util/Util";
import { enqueueSnackbar } from "notistack";
import IsFetching from "@root/components/loaders/IsFetching";
import FormSkeleton from "../../render-form/FormSkeleton";
const IdUpload: FC<any> = ({ activateNextForm }) => {
  const [file, setFile] = useState<File | any>(null);
  const [avialableFile, setAvialableFile] = useState(null);
  const [updating, setUpdating] = useState(false);
  const theme: any = useTheme();
  const { data, isSuccess, isError, error, isLoading } =
    useGetPhotoForIdUploadQuery({});
  const [updatePhotoForIdUpload] = useUpdatePhotoForIdUploadMutation();

  useEffect(() => {
    if (isSuccess) {
      data?.data?.name && setFile({ name: data?.data?.name || "filename" });
    }
  }, [isSuccess, data?.data]);

  const setFileHandler = (file: File | null) => {
    setFile(file);
  };

  const updateIdDoc = async () => {
    const formData: any = new FormData();
    formData.append("profileImage", file);

    try {
      setUpdating(true);
      const data: any = await updatePhotoForIdUpload(formData);
      displaySuccessMessage(data, enqueueSnackbar);
      setUpdating(false);
      activateNextForm();
    } catch (error: any) {
      setUpdating(false);
      displayErrorMessage(error, enqueueSnackbar);
    }
  };
  if (isLoading) return <FormSkeleton />;
  if (isError) {
    displaySuccessMessage(error, enqueueSnackbar);
  }
  return (
    <>
      {updating && <IsFetching isFetching />}
      <Grid container direction="column">
        <Grid item container>
          <Grid item>
            <Typography
              sx={{ fontWeight: 600, color: theme.palette.primary.main }}
            >
              Photo for ID badge
            </Typography>
          </Grid>
          <Grid item>
            <InfoIcon sx={{ color: theme.palette.primary.main }} />
          </Grid>
        </Grid>
        <Grid item container>
          <SingleFileUploader
            file={file}
            setFileHandler={setFileHandler}
            avialableFile={avialableFile}
          />
        </Grid>
        <Grid item sx={{ mt: 2 }}>
          <Button variant="contained" onClick={updateIdDoc}>
            continue
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default IdUpload;
