import { Box, List, ListItem, Typography } from "@mui/material";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { HiOutlinePlusSm } from "react-icons/hi";
import {
  useDeleteStickyNotesMutation,
  useGetStickyNotesByDateQuery,
} from "@root/services/stickyNotes";
import { useEffect, useState } from "react";
import { enqueueSnackbar } from "notistack";
import { RxCross2 } from "react-icons/rx";
import * as Yup from "yup";
import dayjs from "dayjs";
import SkeletonStickyNotes from "@root/components/skeleton/SkeletonStickyNotes";
import DeleteModel from "@root/components/modal/DeleteModel";

export const FormSchema = Yup.object().shape({
  content: Yup.string(),
});

function StickyNotesList({ date, setAddNotes, setEdit, setItem }: any) {
  const [showlist, setShowlist] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [deleteItemId, setDeleteItemId] = useState("");

  const dateString = dayjs(date).format("YYYY-MM-DD");
  const { data, isFetching } = useGetStickyNotesByDateQuery({
    date: dateString,
  });

  const [deleteNotes, { isLoading: deleteIsloading }] =
    useDeleteStickyNotesMutation();

  const deleteNoteListItem = async () => {
    try {
      const res: any = await deleteNotes(deleteItemId).unwrap();

      setOpenDelete(false);
      enqueueSnackbar("Notes Deleted Successfully", {
        variant: "success",
      });
      setDeleteItemId("");
    } catch (error: any) {
      setOpenDelete(false);
      const errMsg = error?.data?.message;
      enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
    }
  };

  return (
    <Box>
      <Box sx={style.flexsbox}>
        <Box sx={style.iconStyle}>
          <AiOutlineUnorderedList
            color="#ffff"
            fontSize="1.1rem"
            onClick={() => setShowlist(!showlist)}
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
      <Box sx={{ height: 150, overflow: "auto" }}>
        {deleteIsloading ? (
          <SkeletonStickyNotes />
        ) : !isFetching ? (
          data && data?.length > 0 ? (
            data.map((item: any) => (
              <List key={item?.id}>
                <ListItem sx={style.listStyle}>
                  <Typography
                    sx={style.listContent}
                    onClick={() => {
                      setItem(item);
                      setEdit(true);
                    }}
                  >{`"${item?.content}"`}</Typography>
                  <RxCross2
                    onClick={() => {
                      setDeleteItemId(item?.id);
                      setOpenDelete(true);
                    }}
                  />
                </ListItem>
              </List>
            ))
          ) : (
            <Box sx={style.msgStyle}>No Notes on this date!</Box>
          )
        ) : (
          <SkeletonStickyNotes />
        )}
      </Box>
      {openDelete && (
        <DeleteModel
          open={openDelete}
          handleClose={() => setOpenDelete(false)}
          onDeleteClick={deleteNoteListItem}
        />
      )}
    </Box>
  );
}

export default StickyNotesList;

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
    color: theme.palette.grey[600],
    cursor: "pointer",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  }),
  listContent: {
    whiteSpace: "nowrap",
    overflow: "hidden",
    maxWidth: "200px",
    textOverflow: "ellipsis",
  },
  msgStyle: (theme: any) => ({
    mt: 1,
    color: theme.palette.grey[800],
  }),
};
