import { useTheme } from "@mui/material";
import EditProfileLayout from "./layout/EditProfileLayout";

const EditProfile = () => {
  const theme = useTheme();
  // console.log({ theme });
  return <EditProfileLayout />;
};

export default EditProfile;
