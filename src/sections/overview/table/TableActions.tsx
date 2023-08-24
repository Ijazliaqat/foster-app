// components
import TableAction from "@root/components/TableAction";

// mui
import { Stack, Typography } from "@mui/material";

// ----------------------------------------------------------------------

export default function TableActions() {
  return (
    <>
      <Typography variant="h4">Table Actions</Typography>
      <Typography variant="h5">Small</Typography>
      <Stack sx={styles.stack}>
        <TableAction size="small" type="edit" onClicked={() => alert("Edit")} />
        <TableAction
          size="small"
          type="delete"
          onClicked={() => alert("Delete")}
        />
        <TableAction size="small" type="view" onClicked={() => alert("View")} />
        <TableAction
          size="small"
          type="download"
          onClicked={() => alert("Download")}
        />
      </Stack>
      <Typography variant="h5">Medium</Typography>
      <Stack sx={styles.stack}>
        <TableAction type="edit" onClicked={() => alert("Edit")} />
        <TableAction type="delete" onClicked={() => alert("Delete")} />
        <TableAction type="view" onClicked={() => alert("View")} />
        <TableAction type="download" onClicked={() => alert("Download")} />
      </Stack>
      <Typography variant="h5">Large</Typography>
      <Stack sx={styles.stack}>
        <TableAction size="large" type="edit" onClicked={() => alert("Edit")} />
        <TableAction
          size="large"
          type="delete"
          onClicked={() => alert("Delete")}
        />
        <TableAction size="large" type="view" onClicked={() => alert("View")} />
        <TableAction
          size="large"
          type="download"
          onClicked={() => alert("Download")}
        />
      </Stack>
    </>
  );
}

// Stack
const styles = {
  stack: (theme: any) => ({
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    gap: theme.spacing(2),
  }),
};
