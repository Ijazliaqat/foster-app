// form
import { useFormContext, Controller } from "react-hook-form";
// @mui
import {
  Box,
  Button,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  useTheme,
} from "@mui/material";
import SignatureCanvas from "react-signature-canvas";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
// ----------------------------------------------------------------------

export default function SignaturePad({ name, getSign, ...other }: any) {
  const { control } = useFormContext();
  let [showSignCanvas, setShowSignCnvas] = useState(null);
  useEffect(() => {
    setShowSignCnvas(control._defaultValues[`${name}`]);
  }, [control, name]);
  let theme: any = useTheme();
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
        <Box {...other}>
          <FormLabel>{other.label}</FormLabel>
          <Box
            sx={{
              width: "100%",
              border: `1.5px solid ${theme.palette.grey[500_32]}`,
              borderRadius: "4px",
              padding: "10px",
              "&:hover": {
                border: other?.disabled
                  ? `1.5px solid ${theme.palette.grey[500_32]}`
                  : `1.8px solid ${theme.palette.primary.main}`,
              },
            }}
          >
            {other?.disabled || showSignCanvas ? (
              <Image
                alt="sign"
                width={1000}
                height={200}
                // style={{ width: "100%", height: "100%" }}
                src={`${process.env.NEXT_PUBLIC_IMG_URL}${showSignCanvas}`}
              />
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
          <Box
            sx={{
              display: "flex",
              justifyContent: "right",
              marginTop: "10px",
            }}
          >
            <Button
              disabled={other.disabled}
              sx={{ justifyContent: "end" }}
              onClick={() => {
                if (showSignCanvas) {
                  setShowSignCnvas(null);
                } else {
                  sigCanvas.current.clear();
                }
                field.onChange(formatIntoPng(true));
              }}
              variant="contained"
              size="medium"
            >
              Clear
            </Button>
          </Box>
          {!!error && (
            <FormHelperText error sx={{ px: 2 }}>
              {error.message}
            </FormHelperText>
          )}
        </Box>
      )}
    />
  );
}
