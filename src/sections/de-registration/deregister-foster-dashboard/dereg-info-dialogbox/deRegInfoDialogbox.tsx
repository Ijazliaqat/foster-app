import React from "react";
import {
  Dialog,
  DialogContent,
  DialogContentText,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";

export const DeRegInfoDialogbox = (props: any) => {
  const { open, handleClose, informationIconData, informationText } = props;

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <Grid
          container
          justifyContent={"center"}
          alignItems={"center"}
          p={1}
          sx={{
            background: "linear-gradient(106.35deg, #0A6460 0%, #23E0D9 100%)",
            color: "white",
            fontSize: 20,
            textAlign: "center",
            fontWeight: "700"
          }}
        >
          {informationText}
        </Grid>
        <DialogContent>
          <DialogContentText>
            {informationIconData?.map((ele: any, index: any) => (
              <React.Fragment key={index}>
                {ele?.heading && <Typography component={'h2'} sx={{ color: "#2E2D2D", fontSize: "16px", fontWeight: "600", py: "5px" }}>{ele?.heading}</Typography>}
                {ele?.content && <li>{ele?.content}</li>}
                {ele?.answerOne && <span>{ele?.answerOne}</span>}
                {ele?.subContentTwo &&
                  ele?.subContentTwo.map((line: any, indexx: any) => (
                    <React.Fragment key={indexx}>
                      {line?.content && (
                        <>
                          <li style={{ listStyle: "none" }}>
                            - &nbsp;&nbsp; {line.content}
                          </li>
                          <h5>{line.heading}</h5>
                          <span>{line.answer && line.answer}</span>
                          {line.subContentThree &&
                            line.subContentThree.map(
                              (subLines: any, subIndex: any) => (
                                <React.Fragment key={subIndex}>
                                  <li style={{ listStyle: "none" }}>
                                    . &nbsp;&nbsp;&nbsp;{subLines.content}
                                  </li>
                                </React.Fragment>
                              )
                            )}
                        </>
                      )}
                    </React.Fragment>
                  ))}
              </React.Fragment>
            ))}
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  );
};
