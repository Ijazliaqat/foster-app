import classes from "./links.module.css";
const AboutCandidateLinks = () => {
  return (
    <div className={classes.main}>
      <div className={classes.topCircle}></div>
      <div className={classes.BottomCircle}></div>
      <ul className={classes.ul}>
        <li className={classes.item}>
          <p>Personal Info</p>
        </li>
        <li className={classes.item}>
          <p>Personal Info</p>
          <div className={classes.active}></div>
        </li>
        <li className={classes.item}>
          <p>Personal Info</p>
        </li>
        <li className={classes.item}>
          <p>Personal Info</p>
        </li>
        <li className={classes.item}>
          <p>Personal Info</p>
        </li>
      </ul>
    </div>
  );
};

export default AboutCandidateLinks;
