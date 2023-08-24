import { Box } from "@mui/material";
import IsFetching from "./IsFetching";

const FormLoader = ({ children }: any) => {
  return (
    <Box sx={{ position: "relative" }}>
      <IsFetching isFetching />
      {children}
    </Box>
  );
};

export default FormLoader;
