import { Button, IconButton } from "@mui/material";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import { useTheme } from "@emotion/react";
const ButtonWithIcon = (props: any) => {
  const theme: any = useTheme();
  const { text } = props;
  const prop = { ...props };
  delete prop.text;
  return (
    <Button variant="outlined" sx={{ color: "black", padding: 1 }} {...prop}>
      {text}
      <AddCircleOutlineRoundedIcon
        sx={{ color: theme.palette.primary.main, marginLeft: 1 }}
      />
    </Button>
  );
};

export default ButtonWithIcon;
