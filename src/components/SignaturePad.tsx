// form
import { useFormContext, Controller } from "react-hook-form";
// @mui
import {
  Box,
  Button,
  FormHelperText,
  FormLabel,
  useTheme,
} from "@mui/material";
import SignatureCanvas from "react-signature-canvas";
import { useRef } from "react";
import download from "@root/assets/img/download.png";
import Image from "next/image";
// ----------------------------------------------------------------------

export default function SignaturePad({ name, ...other }: any) {
  const { control } = useFormContext();
  let theme: any = useTheme();
  console.log(theme)
  const sigCanvas: any = useRef();

  const urlToFile = (url: any) => {
    let arr = url.split(",");
    // console.log(arr)
    let mime = arr[0].match(/:(.*?);/)[1];
    let data = arr[1];
    let dataStr = atob(data);
    let n = dataStr.length;
    let dataArr = new Uint8Array(n);
    while (n--) {
      dataArr[n] = dataStr.charCodeAt(n);
    }
    let file = new File(
      [dataArr],
      `File(${new Date().toLocaleDateString("en-US")}).png`,
      {
        type: mime,
      }
    );
    return file;
  };
  const formatIntoPng = (isClear: boolean) => {
    if (isClear) {
      return null;
    } else {
      if (sigCanvas.current) {
        const dataURL = sigCanvas.current.toDataURL();
        let file = urlToFile(dataURL);
        return file;
      }
    }
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Box sx={{ marginTop: "-4px" }}>
          <FormLabel>{other.label}</FormLabel>
          <Box
            sx={{
              width: "100%",
              height:"130px",
              border: `1.5px solid ${theme.palette.grey[500_32]}`,
              borderRadius: "4px",
              // padding: "10px",
              "&:hover": {
                border: other.disabled
                  ? `1.5px solid ${theme.palette.grey[500_32]}`
                  : `1.5px solid ${theme.palette.text.primary}`,
              },
            }}
          >
            {other.disabled ? (
              <Image alt="sign" src={download} />
            ) : (
              <SignatureCanvas
                penColor="black"
                onEnd={() => field.onChange(formatIntoPng(false))}
                canvasProps={{
                  style: { width: "100%", height: "100%" },
                }}
                ref={sigCanvas}
              />
            )}
          </Box>
          {!!error && (
            <FormHelperText error sx={{ px: 2 }}>
              {error.message}
            </FormHelperText>
          )}
          <Box
            sx={{
              display: "flex",
              justifyContent: "right",
              marginTop: "10px",
            }}
          >
            {!other.disabled && <Button
              disabled={other.disabled}
              sx={{ justifyContent: "end" }}
              onClick={() => {
                sigCanvas.current.clear();
                field.onChange(formatIntoPng(true));
              }}
              variant="contained"
              size="medium"
            >
              Clear
            </Button>}
          </Box>
        
        </Box>
      )}
    />
  );
}
