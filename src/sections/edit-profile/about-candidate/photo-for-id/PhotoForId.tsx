import { FC, useEffect, useRef, useState } from "react";
import { useTheme } from "@emotion/react";
import { Button, Grid, Typography } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import PersonIcon from "@mui/icons-material/Person";
import {
  useDeletePhotoForIdBadgeMutation,
  useGetPhotoForIdBadgeQuery,
  useUpdatePhotoForIdBadgeMutation,
} from "@root/services/update-profile/about-the-candidate/aboutTheCandidateApi";
import FormSkeleton from "../../render-form/FormSkeleton";
import { enqueueSnackbar } from "notistack";
import IsFetching from "@root/components/loaders/IsFetching";
import { displayErrorMessage, displaySuccessMessage } from "../../util/Util";
const PhotoForId: FC<any> = ({ activateNextForm }) => {
  const theme: any = useTheme();
  const fileRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<string | null>(null);
  const [fileForForm, setFileForForm] = useState<string | File>("");
  const [updating, setUpdating] = useState(false);

  const { data, isSuccess, isLoading } = useGetPhotoForIdBadgeQuery({});
  const [updatePhotoForIdBadge] = useUpdatePhotoForIdBadgeMutation();
  const [deletePhotoForIdBadge] = useDeletePhotoForIdBadgeMutation();
  // try to find best alternative
  useEffect(() => {
    if (isSuccess) {
      const imgUrl = data?.data;
      // console.log({ imgUrl });
      imgUrl && setFile(`${process.env.NEXT_PUBLIC_IMG_URL}${imgUrl}`);
    }
  }, [isSuccess, data?.data]);
  const selectFile = () => {
    if (fileRef.current) {
      fileRef.current.click();
    }
  };

  const onFileChange = (event: any) => {
    if (event.target.files && event.target.files[0]) {
      setFileForForm(event.target.files[0]);
      const imageUrl = URL.createObjectURL(event.target.files[0]);
      setFile(imageUrl);
    }
  };

  const fileEditHandler = () => {
    selectFile();
  };

  const delFileHand = async () => {
    try {
      setUpdating(true);
      const data = await deletePhotoForIdBadge({});
      displaySuccessMessage(data, enqueueSnackbar);
      setFile(null);
      setUpdating(false);
      return true;
    } catch (error) {
      displayErrorMessage(error, enqueueSnackbar);
      return false;
    }
  };

  const updatePhoto = async () => {
    const formData = new FormData();
    formData.append("profileImage", fileForForm);

    try {
      setUpdating(true);
      const data: any = await updatePhotoForIdBadge(formData);
      displaySuccessMessage(data, enqueueSnackbar);
      setUpdating(false);
      activateNextForm();
    } catch (error: any) {
      setUpdating(false);
      displayErrorMessage(error, enqueueSnackbar);
    }
  };
  if (isLoading) return <FormSkeleton />;

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
          {/* for displaying image  */}
          {file && true && (
            <Grid
              item
              container
              sx={{
                width: "250px",
                height: "250px",
                border: `2px dashed ${theme.palette.primary.main}`,
                borderRadius: "50%",
                overflow: "hidden",
                position: "relative",
                background: `url(${file}) no-repeat`,
                backgroundSize: "cover",
              }}
            >
              <Grid
                item
                sx={{
                  position: "absolute",
                  top: "86%",
                  left: "50%",
                  transform: "translate(-50%,-50%)",
                }}
              >
                <Grid container>
                  <Grid item>
                    <IconButton
                      color="primary"
                      aria-label="upload picture"
                      component="label"
                      onClick={delFileHand}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Grid>
                  <Grid item>
                    <IconButton
                      color="primary"
                      aria-label="upload picture"
                      component="label"
                      onClick={fileEditHandler}
                    >
                      <EditIcon />
                    </IconButton>
                  </Grid>
                </Grid>
              </Grid>
              <input
                onChange={onFileChange}
                type="file"
                style={{ display: "none" }}
                ref={fileRef}
                accept="image/*"
              />
            </Grid>
          )}

          {/* image uploading area  */}
          {(!file || !true) && (
            <Grid
              item
              container
              sx={{
                width: "250px",
                height: "250px",
                border: `2px dashed ${theme.palette.primary.main}`,
                borderRadius: "50%",
                overflow: "hidden",
                position: "relative",
                cursor: "pointer",
              }}
              onClick={selectFile}
            >
              <Grid
                item
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%,-50%)",
                }}
              >
                <Grid container direction="column">
                  <Grid item container justifyContent="center">
                    <Grid item>
                      <IconButton
                        color="primary"
                        aria-label="upload picture"
                        component="label"
                      >
                        <PersonIcon />
                      </IconButton>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Typography
                      sx={{ whiteSpace: "nowrap", textAlign: "center" }}
                    >
                      Upload your profile photo
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <input
                onChange={onFileChange}
                type="file"
                style={{ display: "none" }}
                ref={fileRef}
                accept="image/*"
              />
            </Grid>
          )}
        </Grid>
        <Grid item sx={{ mt: 2 }}>
          <Button variant="contained" onClick={updatePhoto}>
            continue
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default PhotoForId;
