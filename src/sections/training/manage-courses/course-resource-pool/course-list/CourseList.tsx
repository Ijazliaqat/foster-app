import {
  Avatar,
  Box,
  Button,
  Card,
  Grid,
  InputAdornment,
  LinearProgress,
  Rating,
  Select,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import React, { Fragment } from "react";
import { archiveCourseData } from ".";
import CustomAccordian from "@root/components/CustomAccordian";
import VideoPreviewIcon from "../../../../../assets/svg/training/videoPreviewIcon.svg";
import PdfIcon from "../../../../../assets/svg/training/pdfIcon.svg";
import FeaturedReviewIcon from "../../../../../assets/svg/training/featuredReview.svg";
import UserAvatar from "../../../../../assets/svg/training/userAvatar.svg";
import RatingStars from "../../../../../assets/svg/training/ratingStars.svg";
import Reviews from "../../../../../assets/svg/training/reviews.svg";
import Users from "../../../../../assets/svg/training/users.svg";
import PlayIcon from "../../../../../assets/svg/training/playIcon.svg";
import SearchIcon from "../../../../../assets/svg/training/searchIcon.svg";
import UpdateIcon from "../../../../../assets/svg/training/lastUpdate.svg";
import Image from "next/image";
import { useCourseArchive } from "./useCourseArchive";
import ArchiveModal from "./ArchiveModal";
import CourseListCard from "../course-list-card/CourseListCard";
import { useRouter } from "next/router";
import RejectModal from "./RejectModal";

const CourseArchive = ({ name }: any) => {
  const { learn, requirements, description, courses, archivedCourse, author } =
    archiveCourseData;
  const {
    archiveModal,
    DurationToHourMin,
    handleCloseArchiveModal,
    handleOpenArchiveModal,
    handleIsArchive,
    isArchive,
    hanldeApprove,
    handleRejectModal,
    rejectModal,
    handleReasonChange,
    handleReasonSubmit,
  } = useCourseArchive();
  const router = useRouter();
  const { mandatory } = router.query;
  const theme = useTheme();

  const renderCourses = () => {
    return courses.map((course, i) => ({
      title: `Section ${i + 1} : ${course.title}`,
      lectures: course.component.length,
      minutes: DurationToHourMin(i),
      component: (
        <Grid container spacing={3} sx={{ p: "10px 20px" }}>
          {course.component.map(({ title, type, duration, pages }: any, i) => (
            <Fragment key={i}>
              <Grid item md={9.8} xs={12}>
                <Box display={"flex"} alignItems={"center"} gap={"15px"}>
                  <Image
                    src={type === "video" ? VideoPreviewIcon : PdfIcon}
                    alt="icon"
                  />
                  <Typography
                    sx={{ ...styles.title, textTransform: "capitalize" }}
                  >
                    {title}
                  </Typography>
                </Box>
              </Grid>
              <Grid item md={2.2} xs={12}>
                <Box display={"flex"} alignItems={"center"} gap={"15px"}>
                  <Typography
                    sx={{ ...styles.title, fontWeight: 600, cursor: "pointer" }}
                  >
                    Preview
                  </Typography>
                  <Typography sx={{ ...styles.title }}>
                    {duration ? duration : `${pages} Pages`}
                  </Typography>
                </Box>
              </Grid>
            </Fragment>
          ))}
        </Grid>
      ),
    }));
  };

  return (
    <> 
      <Card sx={{ borderRadius: "5px", p: "18px" }}>
        <Grid container>
          <Grid item lg={4} xs={12} sx={{ mb: "20px" }}>
            <Grid container>
              <Grid item lg={12} md={6} sm={6} xs={12}>
                <CourseListCard
                  handleClick={() => {}}
                  desc={"this is description"}
                  // coverImage={""}
                  // isStatus={false}
                  // isMandatory={false}
                  maxWidth={"90%"}
                />
              </Grid>
              <Grid item lg={12} md={6} sm={6} xs={12} sx={{ mb: "20px" }}>
                {author.map(({ author, label }) => (
                  <Box
                    display={"flex"}
                    alignItems={"center"}
                    key={label}
                    sx={{ my: "14px" }}
                  >
                    <Typography
                      flexBasis={"20%"}
                      sx={{ fontWeight: 600, fontSize: "16px", mr: "10px" }}
                    >
                      {label}
                    </Typography>
                    <Typography
                      sx={{
                        fontWeight: 600,
                        fontSize: "14px",
                        color: "#898989",
                        textTransform: "capitalize",
                      }}
                    >
                      {author}
                    </Typography>
                  </Box>
                ))}
                <Box display={"flex"} alignItems={"center"} gap={"10px"}>
                  <Image src={UpdateIcon} alt="icon" />
                  <Typography
                    sx={{ color: "#0E918C", fontWeight: 600, fontSize: "14px" }}
                  >
                    Last Updated 2/2023
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={8} xs={12}>
            {isArchive && <ArchiveCourseMessage data={archivedCourse} />}
            <Box sx={styles.topSection}>
              <Typography sx={{ ...styles.head, my: "0px" }}>
                What you&apos;ll learn
              </Typography>
              <Box>
                {!name && (
                  <Button
                    variant="contained"
                    onClick={handleOpenArchiveModal}
                    disabled={isArchive}
                  >
                    Archive Course
                  </Button>
                )}
                {name && (
                  <>
                    <Button
                      variant="contained"
                      onClick={hanldeApprove}
                      sx={{
                        mr: 2,
                        background: theme.palette.grey[600],
                        "&:hover": { background: theme.palette.grey[600] },
                      }}
                    >
                      Approve
                    </Button>
                    <Button
                      variant="contained"
                      onClick={handleRejectModal}
                      sx={{
                        mr: 2,
                        background: "#C82333",
                        "&:hover": { background: "#C82333" },
                      }}
                    >
                      Reject
                    </Button>
                  </>
                )}
              </Box>
            </Box>
            <Grid container spacing={2}>
              {learn.map((data, i) => (
                <Grid item key={i} md={6} xs={12}>
                  <TitleWithBadge title={data.title} />
                </Grid>
              ))}
              <Grid item xs={12}>
                <Typography sx={{ ...styles.head }}>Requirements</Typography>
              </Grid>
              {requirements.map((data, i) => (
                <Grid item key={i} xs={12}>
                  <TitleWithBadge title={data.title} />
                </Grid>
              ))}

              <Grid item xs={12}>
                <Typography sx={{ ...styles.head }}>Description</Typography>
              </Grid>
              {description.map((data, i) => (
                <Grid item key={i} xs={12}>
                  <TitleWithBadge title={data.title} hideCircle />
                </Grid>
              ))}

              <Grid item xs={12}>
                <Typography sx={{ ...styles.head, mb: "0px" }}>
                  Course Content
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <CustomAccordian subTitle data={renderCourses()} />
              </Grid>
              <Grid item xs={12}>
                <Typography sx={{ ...styles.head }}>Featured Review</Typography>
              </Grid>
              <Grid
                item
                xs={12}
                display={"flex"}
                alignItems={"center"}
                gap={"20px"}
                flexWrap={"wrap"}
              >
                <Image src={FeaturedReviewIcon} alt="icon" />
                <Box>
                  <Typography sx={styles.userName}>johny bairstow</Typography>
                  <Typography sx={styles.title}>13 courses</Typography>
                  <Typography sx={styles.title}>9 reviews</Typography>
                </Box>
                <Box
                  width={"100%"}
                  display={"flex"}
                  alignItems={"center"}
                  gap={"20px"}
                >
                  <Typography>5.0</Typography>
                  <Rating value={5} readOnly />
                </Box>
                <Typography sx={styles.title}>
                  {` Excellent course for beginners.
                  Helped me to learn and understand AWS solutions architect - associate contents very well.
                  Some parts from dev and sysops course made this couse unique. I found the course metrial very useful.
                  Andalso stephane's English is very much understandable to me. If someone gonna take this course practice after every video end.`}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography sx={{ ...styles.head }}>Instructor</Typography>
              </Grid>
              <Grid
                item
                xs={12}
                display={"flex"}
                gap={"20px"}
                flexWrap={"wrap"}
              >
                <Image src={UserAvatar} alt="icon" />
                <Box>
                  <Typography sx={styles.userName}>
                    de. neil thompson
                  </Typography>
                  <TitleWithIcon
                    title={"4.5 instructor rating"}
                    icon={RatingStars}
                  />
                  <TitleWithIcon title={"648 reviews"} icon={Reviews} />
                  <TitleWithIcon title={"1756+ students"} icon={Users} />
                  <TitleWithIcon title={"18 courses"} icon={PlayIcon} />
                </Box>
                <Typography sx={styles.title}>
                  Dr Neil Thompson is a highly experienced tutor and trainer. He
                  is highly respected for his ability to explain complex ideas
                  clearly and effectively. His gentle voice and unhurried
                  approach are widely appreciated by online learners as will as
                  attendees at his conferences and workshops. <br />
                  <br />
                  He is an independent writer, educator and adviser based in
                  Wales. He is also a visiting professor at the Open University
                  in the UK.. He is a well-published author with over 200
                  publications to his name, including over 40 books, several of
                  which are bestsellers. He has been a speaker at conferences in
                  the UK, Ireland, Italy, Spain, Norway, the Netherlands,
                  Greece, the Czech Republic, Turkey, Hong Kong, India, the
                  United States, Canada and Australia.
                  <br />
                  <br />
                  He is a Fellow of the Chartered Institute of Personnel and
                  Development, the Higher Education Academy and the Royal
                  Society of Arts, and a member of the International Work Group
                  on Death, Dying and Bereavement. He was formerly the editor of
                  the US-based international journal, Illness, Crisis & Loss and
                  now edits the free e-zine, THE humansolutions BULLETIN. His
                  main interests are in the field of well-being: equality and
                  diversity; conflict management; stress; loss, grief and trauma
                  and reflective practice. He is a sought-after conference
                  speaker, consultant and facilitator.
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Grid container spacing={3} sx={{ my: "20px" }}>
                  <Grid item lg={4} md={6} xs={12}>
                    <Typography sx={{ ...styles.head, my: "0px" }}>
                      Feedback & Rating
                    </Typography>
                    <Typography sx={{ ...styles.rating }}>4.9</Typography>
                    <Rating value={4.9} readOnly />
                    <Typography
                      sx={{ ...styles.courseRating, ...styles.title }}
                    >
                      Course Rating{" "}
                      <span className="reviews">(20 Reviews)</span>
                    </Typography>
                  </Grid>
                  <Grid item lg={6} md={6} xs={12}>
                    <RatingWithProgressBar percentage={50} rating={5} />
                    <RatingWithProgressBar percentage={30} rating={4} />
                    <RatingWithProgressBar percentage={20} rating={3} />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Typography sx={{ ...styles.head }}>Reviews</Typography>
              </Grid>
              <Grid item xs={12}>
                <Grid container spacing={3}>
                  <Grid item lg={7} md={6} xs={12}>
                    <Typography sx={{ fontWeight: 600, fontSize: "16px" }}>
                      Search Review
                    </Typography>
                    <TextField
                      size="small"
                      fullWidth
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <Image src={SearchIcon} alt="icon" />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item lg={5} md={6} xs={12}>
                    <Typography sx={{ fontWeight: 600, fontSize: "16px" }}>
                      Label
                    </Typography>
                    <Select fullWidth size="small">
                      <option>option</option>
                    </Select>
                  </Grid>
                </Grid>
              </Grid>
              {[1, 2, 3].map((num) => (
                <Grid item xs={12} key={num}>
                  <Comments />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Card>
      {archiveModal && (
        <ArchiveModal
          open={archiveModal}
          onClose={handleCloseArchiveModal}
          handleArchive={handleIsArchive}
        />
      )}
      {rejectModal && (
        <RejectModal
          open={rejectModal}
          onClose={handleRejectModal}
          handleChange={handleReasonChange}
          handleSubmit={handleReasonSubmit}
        />
      )}
    </>
  );
};

export default CourseArchive;

const TitleWithBadge = ({ title, hideCircle }: any) => {
  return (
    <Box display="flex">
      {!hideCircle && <Typography sx={styles.circle}></Typography>}
      <Typography sx={styles.title}>{title}</Typography>
    </Box>
  );
};
const TitleWithIcon = ({ title, icon }: any) => {
  return (
    <Typography
      sx={{
        ...styles.title,
        display: "flex",
        alignItems: "center",
        gap: "5px",
        my: "3px",
      }}
    >
      <Image src={icon} alt="icon" />
      {title}
    </Typography>
  );
};

const RatingWithProgressBar = ({ percentage, rating }: any) => {
  return (
    <Box display={"flex"} alignItems={"center"} gap={"20px"} flexWrap={"wrap"}>
      <LinearProgress
        variant="determinate"
        value={percentage}
        sx={{ my: "10px", height: "12px", flex: 1, borderRadius: "10px" }}
      />
      <Rating value={rating} readOnly />
      <Typography>{percentage}%</Typography>
    </Box>
  );
};

const Comments = ({
  userProfile,
  userName,
  comment,
  rating,
  dayPosted,
}: any) => {
  comment =
    "Excellent course material and materials are shared in depth for each topic. Highly recommended if you are a beginner!!!";
  dayPosted = "4 weeks ago";
  rating = 5;
  userName = "darshan c.";
  const [firstName, lastName] = userName?.split(" ");
  return (
    <Box sx={{ my: "20px" }}>
      <Box
        display={"flex"}
        alignItems={"center"}
        gap={"20px"}
        flexWrap={"wrap"}
      >
        <Avatar
          src={userProfile}
          sx={{
            height: "60px",
            width: "60px",
            background: "#1A202E",
            color: "white",
          }}
        >
          {firstName.charAt(0).toUpperCase()} {lastName.charAt(0).toUpperCase()}
        </Avatar>
        <Typography>
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: "16px",
              color: "#1A202E",
              textTransform: "capitalize",
            }}
          >
            {userName}
          </Typography>
          <Typography
            sx={{
              ...styles.title,
              color: "#898989",
              display: "flex",
              alignItems: "center",
              gap: "15px",
              flexWrap: "wrap",
            }}
          >
            <Rating value={rating} readOnly />
            <span>{dayPosted}</span>
          </Typography>
        </Typography>
      </Box>
      <Typography
        sx={{
          ...styles.title,
          color: "#343A40",
          mt: "24px",
          maxWidth: "500px",
        }}
      >
        {comment}
      </Typography>
    </Box>
  );
};

const ArchiveCourseMessage = ({ data }: any) => {
  return (
    <Box sx={styles.archiveCourseBox}>
      <Typography sx={{ mb: "5px" }}>
        This is an archived course and can not be edited.
      </Typography>
      <Grid container>
        {data.map(({ value, label }: any, i: number) => (
          <Grid
            item
            md={label === "Note:" ? 12 : 6}
            xs={12}
            key={i}
            display={"flex"}
            alignItems={"center"}
            gap={"1rem"}
            sx={{ my: "5px" }}
            justifyContent={label === "Note:" ? "center" : ""}
          >
            <Typography
              sx={{ color: "#81222C", fontWeight: 700, fontSize: "14px" }}
            >
              {label}
            </Typography>
            <Typography
              sx={{
                textTransform: label === "User Name:" ? "capitalize" : "",
                color: "#81222C",
                fontWeight: 400,
                fontSize: "14px",
              }}
            >
              {value}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

const styles = {
  topSection: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "space-between",
    gap: 2,
    mb: 4,
    flexWrap: "wrap",
  },
  head: { fontSize: "18px", fontWeight: 600, my: "20px" },
  title: { fontWeight: 500, fontSize: "14px" },
  circle: {
    height: 15,
    width: 15,
    borderRadius: 20,
    backgroundColor: "red",
    mr: "20px",
    mt: 0.5,
    flexShrink: 0,
    background: "linear-gradient(106.35deg, #0E918C 0%, #23E0D9 100%)",
  },
  userName: { fontWeight: 700, fontSize: "16px", textTransform: "capitalize" },
  rating: { color: "#F6830F", fontWeight: 600, fontSize: "48px" },
  courseRating: { color: "#343A40", "& .reviews": { color: "#898989" } },
  archiveCourseBox: {
    background: "#F7D5D8",
    borderRadius: "4px",
    mb: "30px",
    p: "11px 20px",
    maxWidth: 600,
  },
};
