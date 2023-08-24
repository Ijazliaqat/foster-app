import { Box } from "@mui/material";
import * as Yup from "yup";
import { useState } from "react";
import StickyNotesList from "./StickyNotesList";
import AddStickyNotes from "./AddStickyNotes";
import EditStickyNotes from "./EditStickyNotes";
export const FormSchema = Yup.object().shape({
  content: Yup.string(),
});
function StickyNotes({ date }: any) {
  const [addNotes, setAddNotes] = useState(false);
  const [edit, setEdit] = useState(false);
  const [item, setItem] = useState("");
  return (
    <>
      {addNotes ? (
        <Box sx={addNotes ? style.editContainer : style.mainContainer}>
          <AddStickyNotes
            setAddNotes={setAddNotes}
            date={date}
            setEdit={setEdit}
          />
        </Box>
      ) : (
        <>
          {!edit && (
            <Box sx={addNotes ? style.editContainer : style.mainContainer}>
              <StickyNotesList
                setAddNotes={setAddNotes}
                setEdit={setEdit}
                date={date}
                setItem={setItem}
              />
            </Box>
          )}
          {edit && (
            <EditStickyNotes
              setAddNotes={setAddNotes}
              setEdit={setEdit}
              date={date}
              item={item}
            />
          )}
        </>
      )}
    </>
  );
}

export default StickyNotes;

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
