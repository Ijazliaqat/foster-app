import React from "react";
import {
  Dialog,
  DialogContent,
  DialogContentText,
  Grid,
} from "@mui/material";

export const InformationDialogbox = (props: any) => {
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
            bgcolor: "#23183D",
            color: "white",
            fontSize: 20,
            textAlign: "center",
          }}
        >
          {informationText}
        </Grid>
        <DialogContent>
          <DialogContentText>
            {informationIconData?.map((ele: any, index: any) => (
              <React.Fragment key={index}>
                {ele?.content && <li>{ele?.content}</li>}
                {ele?.answerOne && <span>{ele?.answerOne}</span>}
                {ele?.subContentTwo &&
                  ele?.subContentTwo?.map((line: any, indexx: any) => (
                    <React.Fragment key={indexx}>
                      {line?.content && (
                        <>
                          <li style={{ listStyle: "none" }}>
                            - &nbsp;&nbsp; {line?.content}
                          </li>
                          <h5>{line?.heading}</h5>
                          <span>{line?.answer && line?.answer}</span>
                          {line?.subContentThree &&
                            line?.subContentThree?.map(
                              (subLines: any, subIndex: any) => (
                                <React.Fragment key={subIndex}>
                                  <li style={{ listStyle: "none" }}>
                                    . &nbsp;&nbsp;&nbsp;{subLines?.content}
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
