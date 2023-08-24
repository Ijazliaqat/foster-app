import { useState, useEffect, useCallback, ChangeEvent, Fragment } from "react";
import Card from "@mui/material/Card";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Checkbox from "@mui/material/Checkbox";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import IsFetching from "@root/components/loaders/IsFetching";
import {
  useGetRolePermissionsQuery,
  usePostAssignPermissionsMutation,
  usePostRemovePermissionsMutation,
} from "@root/services/system-admin/systemAdminApi";
import {
  data,
  permissionsArr,
} from "../../../sections/system-admin/permissions";
import useAuth from "@root/hooks/useAuth";

type Permission = {
  id: string;
  permissionId: string;
  depth: number;
  name: string;
  children?: Permission[];
  childrenIds?: string[];
  permission: {
    add: boolean;
    view: boolean;
    edit: boolean;
    edit_own: boolean;
    delete: boolean;
    delete_own: boolean;
  };
};

function Row(props: {
  row: Permission;
  permissionIDs?: string[];
  handleChange: any;
}) {
  const { row, permissionIDs, handleChange } = props;
  const [open, setOpen] = useState(false);
  const checkPermission = (
    permissionId: string,
    status: boolean,
    childrenIds?: string[]
  ) => {
    let action = permissionId.split(".").at(-1)!;
    let state = childrenIds?.length
      ? childrenIds
          .filter((_) => _.endsWith(action))
          .every((cId) => permissionIDs?.includes(cId))
      : permissionIDs?.includes(permissionId) || status;
    return state;
  };

  return (
    <Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        {row?.children?.length ? (
          <TableCell
            sx={{
              "&": {
                width: "5%",
                paddingLeft: {
                  md: `${row.depth * 15}px !important`,
                },
              },
            }}
          >
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
        ) : (
          <TableCell style={{ width: "5%" }} />
        )}
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="center" style={{ width: "10%" }}>
          <Checkbox
            id={`${row.permissionId}.add`}
            onChange={(e) => handleChange(e, row.childrenIds)}
            checked={checkPermission(
              `${row.permissionId}.add`,
              row.permission.add,
              row.childrenIds
            )}
          />
        </TableCell>
        <TableCell align="center" style={{ width: "10%" }}>
          <Checkbox
            id={`${row.permissionId}.view`}
            onChange={(e) => handleChange(e, row.childrenIds)}
            checked={checkPermission(
              `${row.permissionId}.view`,
              row.permission.view,
              row.childrenIds
            )}
          />
        </TableCell>
        <TableCell align="center" style={{ width: "10%" }}>
          <Checkbox
            id={`${row.permissionId}.edit`}
            onChange={(e) => handleChange(e, row.childrenIds)}
            checked={checkPermission(
              `${row.permissionId}.edit`,
              row.permission.edit,
              row.childrenIds
            )}
          />
        </TableCell>
        <TableCell align="center" style={{ width: "10%" }}>
          <Checkbox
            id={`${row.permissionId}.edit_own`}
            onChange={(e) => handleChange(e, row.childrenIds)}
            checked={checkPermission(
              `${row.permissionId}.edit_own`,
              row.permission.edit_own,
              row.childrenIds
            )}
          />
        </TableCell>
        <TableCell align="center" style={{ width: "10%" }}>
          <Checkbox
            id={`${row.permissionId}.delete`}
            onChange={(e) => handleChange(e, row.childrenIds)}
            checked={checkPermission(
              `${row.permissionId}.delete`,
              row.permission.delete,
              row.childrenIds
            )}
          />
        </TableCell>
        <TableCell align="center" style={{ width: "10%" }}>
          <Checkbox
            id={`${row.permissionId}.delete_own`}
            onChange={(e) => handleChange(e, row.childrenIds)}
            checked={checkPermission(
              `${row.permissionId}.delete_own`,
              row.permission.delete_own,
              row.childrenIds
            )}
          />
        </TableCell>
      </TableRow>
      {row?.children?.length && (
        <TableRow>
          <TableCell style={{ padding: 0, borderBottom: 0 }} colSpan={8}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Table aria-label="collapsible table">
                <TableBody>
                  {row?.children?.map((permission, i) => (
                    <Row
                      key={permission.id}
                      row={permission}
                      permissionIDs={permissionIDs}
                      handleChange={handleChange}
                    />
                  ))}
                </TableBody>
              </Table>
            </Collapse>
          </TableCell>
        </TableRow>
      )}
    </Fragment>
  );
}

function RolesAndPermissions() {
  const authData: any = useAuth();
  const { data, isLoading, isError } = useGetRolePermissionsQuery({
    roleId: authData?.user?.defaultRole,
  });
  const [postAssignPermissions, { isLoading: assignLoading }] =
    usePostAssignPermissionsMutation();
  const [postRemovePermissions, { isLoading: removeLoading }] =
    usePostRemovePermissionsMutation();
  const [permissions, setPermissions] = useState<Permission[]>(permissionsArr);
  const [permissionIDs, setPermissionIDs] = useState<string[]>([]);

  useEffect(() => {
    if (data?.data?.length) {
      setPermissionIDs(data?.data);
    }
  }, [data]);

  useEffect(() => {
    console.log(permissionIDs);
  }, [permissionIDs]);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>, childrenIds?: string[]) => {
      let action = e.target.id.split(".").at(-1)!;
      let affectedPermissions = childrenIds?.length
        ? [...childrenIds?.filter((_) => _.endsWith(action))]
        : [e.target.id];
      if (e.target.checked) {
        // console.log(permissionIDs)
        // setPermissionIDs([
        //   ...permissionIDs,
        //   ...affectedPermissions
        // ])
        postAssignPermissions({
          roleId: "5ea7a98e-1b2f-11ee-9cf8-02752d2cfcf8",
          dto: { permissionIds: affectedPermissions },
        });
      } else {
        // setPermissionIDs(permissionIDs.filter((pID) => !affectedPermissions.includes(pID)))
        postRemovePermissions({
          roleId: "5ea7a98e-1b2f-11ee-9cf8-02752d2cfcf8",
          dto: { permissionIds: affectedPermissions },
        });
      }
    },
    [postAssignPermissions, postRemovePermissions]
  );

  return (
    <Card sx={{ p: 1 }}>
      <TableContainer
        sx={{ position: "relative", maxHeight: "75vh", minHeight: "75vh" }}
        component={Paper}
      >
        <IsFetching isFetching={isLoading || assignLoading || removeLoading} />
        <Table stickyHeader aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell style={{ width: "5%" }} />
              <TableCell>Name</TableCell>
              <TableCell align="center" style={{ width: "10%" }}>
                Add
              </TableCell>
              <TableCell align="center" style={{ width: "10%" }}>
                View
              </TableCell>
              <TableCell align="center" style={{ width: "10%" }}>
                Edit
              </TableCell>
              <TableCell align="center" style={{ width: "10%" }}>
                Edit Own
              </TableCell>
              <TableCell align="center" style={{ width: "10%" }}>
                Delete
              </TableCell>
              <TableCell align="center" style={{ width: "10%" }}>
                Delete Own
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {permissions.map((permission) => (
              <Row
                key={permission.id}
                row={permission}
                permissionIDs={permissionIDs}
                handleChange={handleChange}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
}

export default RolesAndPermissions;
