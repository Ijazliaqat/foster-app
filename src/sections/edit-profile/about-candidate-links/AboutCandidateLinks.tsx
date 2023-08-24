import classes from "./links.module.css";
const AboutCandidateLinks = () => {
  return (
    <div className={classes.main}>
      <div className={classes.topCircle}></div>
      <div className={classes.BottomCircle}></div>
      <ul className={classes.ul}>
        <li className={classes.item}>
          <div className={classes.contentCon}>
            <p>Personal Info</p>
            <div className={classes.linCon}>
              <div className={classes.line}></div>
            </div>
            <div>Done</div>
          </div>
        </li>
        <li className={classes.item}>
          <div className={classes.contentCon}>
            <p>Personal Info</p>
            <div className={classes.linCon}>
              <div className={classes.line}></div>
            </div>
            <div>In Progress</div>
          </div>
          <div className={classes.active}></div>
        </li>
        <li className={classes.item}>
          <div className={classes.contentCon}>
            <p>Personal Info</p>
            <div className={classes.linCon}>
              <div className={classes.line}></div>
            </div>
            <div>Pending</div>
          </div>
        </li>
        <li className={classes.item}>
          <div className={classes.contentCon}>
            <p>Personal Info</p>
            <div className={classes.linCon}>
              <div className={classes.line}></div>
            </div>
            <div>Completed</div>
          </div>
        </li>
        <li className={classes.item}>
          <div className={classes.contentCon}>
            <p>Personal Info</p>
            <div className={classes.linCon}>
              <div className={classes.line}></div>
            </div>
            <div>Completed</div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default AboutCandidateLinks;
