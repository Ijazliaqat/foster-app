import * as React from "react";
import Box, { BoxProps } from "@mui/material/Box";
import Popper, { PopperProps } from "@mui/material/Popper";
interface IchildPoper {
  children?: React.ReactNode;
  BoxProps?: BoxProps;
  PopperProps: PopperProps;
}

const ChildPoper: React.FunctionComponent<IchildPoper> = (props) => {
  const { children, BoxProps, PopperProps } = props;
  return (
    <div>
      <Popper {...PopperProps}>
        <Box {...BoxProps}>{children}</Box>
      </Popper>
    </div>
  );
};

export default ChildPoper;
