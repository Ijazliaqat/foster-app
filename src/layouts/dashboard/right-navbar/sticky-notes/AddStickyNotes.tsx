import { Box, IconButton, TextField, Typography } from "@mui/material";
import { useStickyNotesMutation } from "@root/services/stickyNotes";
import CircularProgress from "@mui/material/CircularProgress";
import { BsCheck2, BsX } from "react-icons/bs";
import { enqueueSnackbar } from "notistack";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import dayjs from "dayjs";

export const FormSchema = Yup.object().shape({
  content: Yup.string(),
});

function AddStickyNotes({ setAddNotes, date, setEdit }: any) {
  const [addNotes, { isLoading }] = useStickyNotesMutation();

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
      const res: any = await addNotes(data).unwrap();
      if (res) {
        setAddNotes(false);
        setEdit(false);
      }
    } catch (error: any) {
      const errMsg = error?.data?.message;
      enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box>
        <Box sx={style.flexsbox}>
          <Box sx={style.redIcon}>
            <BsX
              color="#ffff"
              fontSize="1.3rem"
              onClick={() => setAddNotes(false)}
            />
          </Box>
          <Box sx={style.greenIcon}>
            <IconButton type="submit">
              <BsCheck2 color="#ffff" fontSize="1.3rem" />
            </IconButton>
          </Box>
        </Box>
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
          <>
            <TextField
              sx={style.textbox}
              id="standard-multiline-static"
              multiline
              {...register("content")}
              rows={4}
              variant="standard"
            />
          </>
        )}

        <Box sx={style.flexsbox}>
          <Typography sx={style.datecolor}>
            {dayjs(date).format("MMMM DD, YYYY")}
          </Typography>
        </Box>
      </Box>
    </form>
  );
}

export default AddStickyNotes;

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
  loder: {
    backgroundColor: "#ffff",
    p: 1,
    mt: 2,
    borderRadius: "8px",
    height: "5rem",
    with: 30,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
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
