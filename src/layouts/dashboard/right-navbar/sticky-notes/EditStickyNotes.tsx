import { Box, IconButton, TextField, Typography } from "@mui/material";
import { useEditStickyNotesMutation } from "@root/services/stickyNotes";
import CircularProgress from "@mui/material/CircularProgress";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { HiOutlinePlusSm } from "react-icons/hi";
import { BsCheck2, BsX } from "react-icons/bs";
import { RiPencilFill } from "react-icons/ri";
import { enqueueSnackbar } from "notistack";
import { useForm } from "react-hook-form";
import { useState } from "react";
import dayjs from "dayjs";
import * as Yup from "yup";

export const FormSchema = Yup.object().shape({
  content: Yup.string(),
});

function EditStickyNotes({
  date,
  setAddNotes,
  setEdit,
  setId,
  edit,
  item,
}: any) {
  console.log(item);
  const [update, setUpdate] = useState(false);
  const id = item?.id;
  const [editData, { isLoading }] = useEditStickyNotesMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (content: any) => {
    const data = {
      ...content,
      date: dayjs(date).format("YYYY-MM-DDTHH:mm:ss.SSS[Z]").toString(),
    };
    try {
      const res: any = await editData({ payload: { ...data }, id }).unwrap();
      if (res) {
        setEdit(false);
      }
    } catch (error: any) {
      const errMsg = error?.data?.message;
      enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box sx={update ? style.editContainer : style.mainContainer}>
        {update ? (
          <Box sx={style.flexsbox}>
            <Box sx={style.redIcon}>
              <BsX
                color="#ffff"
                fontSize="1.3rem"
                onClick={() => setEdit(false)}
              />
            </Box>
            <Box sx={style.greenIcon}>
              <IconButton type="submit">
                <BsCheck2 color="#ffff" fontSize="1.3rem" />
              </IconButton>
            </Box>
          </Box>
        ) : (
          <Box sx={style.flexsbox}>
            <Box sx={style.iconStyle}>
              <AiOutlineUnorderedList
                color="#ffff"
                fontSize="1.1rem"
                onClick={() => setEdit(false)}
              />
            </Box>
            <Box sx={style.iconStyle}>
              <HiOutlinePlusSm
                color="#ffff"
                fontSize="1.5rem"
                onClick={() => setAddNotes(true)}
              />
            </Box>
          </Box>
        )}
        <>
          {isLoading ? (
            <Box
              sx={{
                width: "100%",
                height: 110,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CircularProgress color="inherit" />
            </Box>
          ) : (
            <TextField
              sx={style.textbox}
              id="standard-multiline-static"
              multiline
              {...register("content")}
              rows={4}
              disabled={!update}
              defaultValue={item?.content}
              variant="standard"
            />
          )}

          <Box sx={style.flexsbox}>
            <Typography sx={style.datecolor}>
              {" "}
              {dayjs(item?.createdAt).format("MMMM DD, YYYY")}
            </Typography>
            {!edit && (
              <Box sx={style.iconStyle}>
                <RiPencilFill
                  color="#ffff"
                  fontSize="1.1rem"
                  onClick={() => setUpdate(true)}
                />
              </Box>
            )}
          </Box>
        </>
      </Box>
    </form>
  );
}

export default EditStickyNotes;

const commonClass = {
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 25,
  height: 25,
  cursor: "pointer",
};

const style = {
  mainContainer: {
    backgroundColor: "#FFEFB7",
    p: 1,
    mt: 2,
    borderRadius: "8px",
  },
  editContainer: {
    backgroundColor: "#ffff",
    p: 1,
    mt: 2,
    borderRadius: "8px",
  },

  flexsbox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  iconStyle: (theme: any) => ({
    backgroundColor: theme.palette.primary.main,
    ...commonClass,
  }),
  redIcon: {
    backgroundColor: "#F24822",
    ...commonClass,
  },
  greenIcon: {
    backgroundColor: "#14AE5C",
    ...commonClass,
  },
  textbox: (theme: any) => ({
    mt: 0.5,
    "& .MuiInputBase-root": {
      color: theme.palette.grey[900],
      borderBottom: "0px solid",
      "&:before": {
        borderBottom: "0px solid !important",
      },
      "&:after": {
        borderBottom: "0px solid",
      },
      "&.Mui-focused": {
        borderBottom: "0px solid",
      },
      "&:hover": {
        borderBottom: "0px solid !important",
      },
      "&.Mui-disabled": { // Add this block to style the disabled state
        color: theme.palette.grey[900], // Set the desired color for the disabled state
      },
    },
  }),
  datecolor: (theme: any) => ({
    color: theme.palette.grey[900],
  }),
  listStyle: (theme: any) => ({
    p: 0,
    color: theme.palette.grey[900],
    cursor: "pointer",
  }),
};
