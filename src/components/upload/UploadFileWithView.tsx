// @mui
import { FormHelperText, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
//
import Image from "../Image";

// @mui
import UploadFileIcon from "@mui/icons-material/UploadFile";
import { useRef } from "react";
import { useFormContext, useWatch } from "react-hook-form";

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }: any) => ({
  width: 144,
  height: 144,
  margin: "auto",
  borderRadius: "50%",
  padding: theme.spacing(1),
  border: `1px dashed ${theme.palette.grey[500_32]}`,
}));

const DropZoneStyle = styled("div")({
  zIndex: 0,
  width: "100%",
  height: "100%",
  outline: "none",
  display: "flex",
  overflow: "hidden",
  borderRadius: "50%",
  position: "relative",
  alignItems: "center",
  justifyContent: "center",
  "& > *": { width: "100%", height: "100%" },
  "&:hover": {
    cursor: "pointer",
    "& .placeholder": {
      zIndex: 9,
    },
  },
});

const PlaceholderStyle = styled("div")(({ theme }: any) => ({
  display: "flex",
  position: "absolute",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  color: theme.palette.text.secondary,
  backgroundColor: theme.palette.background.neutral,
  transition: theme.transitions.create("opacity", {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter,
  }),
  "&:hover": { opacity: 0.72 },
}));

// ----------------------------------------------------------------------

export default function UploadFileWithView({ name, helperText }: any) {
  const fileInputRef: any = useRef(null);
  const methods = useFormContext();
  const {
    control,
    register,
    setValue,
    trigger,
    formState: { errors },
  } = methods;

  // Watch for changes
  const file = useWatch({ control, name });

  // If file is url, then store it as a string. Otherwise create an Object URL
  const imgSrc =
    typeof file !== "object"
      ? `${process.env.NEXT_PUBLIC_IMG_URL}${file}`
      : URL.createObjectURL(file);

  // Check errors
  const checkError = errors && errors.image;
  const errorMsg = checkError && errors?.image?.message;

  const handleClickAttachPhoto = () => {
    fileInputRef.current?.click();
  };

  return (
    <>
      <RootStyle onClick={handleClickAttachPhoto}>
        <DropZoneStyle>
          <input
            {...register(name)}
            ref={fileInputRef}
            type="file"
            onChange={(event) => {
              const file: any = event.target.files?.[0];
              setValue(name, file);
              trigger(name);
            }}
            style={{ display: "none" }}
          />

          {file && !checkError && (
            <Image
              alt="avatar"
              src={imgSrc}
              sx={{
                zIndex: 8,
                "&>img": {
                  objectFit: "cover",
                },
              }}
              width={130}
              height={130}
            />
          )}

          <PlaceholderStyle
            className="placeholder"
            sx={{
              ...(file &&
                !checkError && {
                  opacity: 0,
                  color: "common.white",
                  bgcolor: "grey.900",
                  "&:hover": { opacity: 0.72 },
                }),
            }}
          >
            <UploadFileIcon sx={{ mb: 0.5 }} />
            <Typography variant="caption">
              {file ? "Update photo" : "Upload photo"}
            </Typography>
          </PlaceholderStyle>
        </DropZoneStyle>
      </RootStyle>

      {checkError && (
        <FormHelperText error sx={{ px: 2, textAlign: "center" }}>
          {String(errorMsg)}
        </FormHelperText>
      )}
    </>
  );
}
