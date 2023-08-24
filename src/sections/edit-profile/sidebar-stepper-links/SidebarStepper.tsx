import { FC } from "react";
import classes from "./links.module.css";
export const Stepper: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className={classes.main}>
      <div className={classes.topCircle}></div>
      <div className={classes.BottomCircle}></div>
      <ul className={classes.ul}>{children}</ul>
    </div>
  );
};

export const StepperItem: FC<any> = (props) => {
  const { active, children, status } = props;
  const prop = { ...props };
  delete prop.active;
  delete prop.children;
  delete prop.status;
  return (
    <>
      {active ? (
        <li className={classes.item} {...prop}>
          <div className={classes.contentCon}>
            {children}
            <div className={classes.linCon}>
              <div className={classes.line}></div>
            </div>
            <div style={{ whiteSpace: "nowrap" }}>{status}</div>
          </div>
          <div className={classes.active}></div>
        </li>
      ) : (
        <li className={classes.item} {...prop}>
          <div className={classes.contentCon}>
            {children}
            <div className={classes.linCon}>
              <div className={classes.line}></div>
            </div>
            <div>{status}</div>
          </div>
        </li>
      )}
    </>
  );
};
