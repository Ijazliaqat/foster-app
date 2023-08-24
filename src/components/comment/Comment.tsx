import {
  Box,
  Grid,
  IconButton,
  TextField,
  Divider,
  Theme,
  Button,
  Avatar,
  useTheme,
  Typography,
  Badge,
  ButtonProps,
  Skeleton,
} from "@mui/material";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import React from "react";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import ThumbUpAltRoundedIcon from "@mui/icons-material/ThumbUpAltRounded";
import NoCommits from "@root/assets/svg/NoCommits";
import { Timeline, TimelineItem, TimelineSeparator } from "@mui/lab";
//INTERFACES
interface IcommitProps {
  MainCommit: string;
  userName: string;
  like: boolean;
  showReply: boolean;
  children?: React.ReactNode;
  DeleteButtonprops?: ButtonProps;
  LikeButtonProps?: ButtonProps;
  replyButtonProps?: ButtonProps;
}

//MAIN COMMENTS
const Comments = () => {
  const theme = useTheme();
  console.log(theme);

  return (
    <Grid container>
      <Grid xs={12} item>
        <Divider variant="fullWidth" orientation="horizontal" sx={{ my: 2 }} />
        <ListOfComments />
        {/* <CommentSkeleton />
        <OnError /> */}
        <Box mt={2}>
          <PostCommit />
        </Box>
      </Grid>
    </Grid>
  );
};

//COMMENT
const Comment = ({
  MainCommit,
  userName,
  showReply,
  like,
  children,
  DeleteButtonprops,
  LikeButtonProps,
  replyButtonProps,
}: IcommitProps) => {
  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"start"}
        alignItems={"flex-start"}
        gap={2}
        mt={2}
      >
        <Avatar
          sx={(theme: Theme) => ({ bgcolor: theme.palette.primary.main })}
        >
          <PersonRoundedIcon
            sx={(theme: Theme) => ({ color: theme.palette.background.paper })}
          />
        </Avatar>
        <Box
          display={"flex"}
          justifyContent={"start"}
          alignItems={"start"}
          flexWrap={"wrap"}
          flexDirection={"column"}
          gap={1.5}
          width={"100%"}
        >
          <Box
            display={"flex"}
            justifyContent={"start"}
            alignItems={"center"}
            flexWrap={"wrap"}
            gap={0.5}
          >
            <Typography
              variant="body1"
              sx={(theme: Theme) => ({
                color:
                  theme.palette.mode === "light"
                    ? theme.palette.grey[800]
                    : theme.palette.grey[500],
              })}
            >
              {MainCommit}
            </Typography>
            {/* userName */}
            <Typography
              variant="body1"
              sx={(theme: Theme) => ({ color: theme.palette.primary.main })}
            >
              {userName}
            </Typography>
            {/* userName */}
          </Box>
          {/* actions */}
          <Box
            display={"flex"}
            justifyContent={"start"}
            flexDirection={"column"}
            alignItems={"flex-start"}
            flexWrap={"wrap"}
            gap={0.5}
            width={"100%"}
          >
            <Box
              display={"flex"}
              gap={1.5}
              width={"100%"}
              flexDirection={"column"}
            >
              <Box display={"flex"} gap={0.5} width={"100%"}>
                <Button size="small" variant="outlined" {...replyButtonProps}>
                  Reply
                </Button>
                <Button size="small" variant="outlined" {...DeleteButtonprops}>
                  Delete
                </Button>
                <Badge
                  color="primary"
                  badgeContent={
                    like ? (
                      <Box p={0.5}>
                        <ThumbUpAltRoundedIcon
                          sx={{
                            fontSize: 15,
                          }}
                        />
                      </Box>
                    ) : null
                  }
                >
                  <Button size="small" variant="outlined" {...LikeButtonProps}>
                    Like
                  </Button>
                </Badge>
              </Box>

              {showReply && <ReplyAComment />}
            </Box>

            {children}
          </Box>
          {/* actions */}
        </Box>
      </Box>
    </>
  );
};

// POST A COMMENTS
const PostCommit = () => {
  return (
    <Box display={"flex"}>
      <TextField size="small" fullWidth placeholder="Write A comments..." />
      <IconButton>
        <CancelOutlinedIcon
          sx={(theme: Theme) => ({
            color: theme.palette.error.main,
          })}
        />
      </IconButton>
      <IconButton>
        <SendOutlinedIcon
          sx={(theme: Theme) => ({
            color: theme.palette.primary.main,
          })}
        />
      </IconButton>
    </Box>
  );
};

//REPLY A COMMENT
const ReplyAComment = () => {
  return (
    <Box display={"flex"} width={"100%"}>
      <TextField size="small" fullWidth placeholder="Write A comments..." />
      <IconButton>
        <CancelOutlinedIcon
          sx={(theme: Theme) => ({
            color: theme.palette.error.main,
          })}
        />
      </IconButton>
      <IconButton>
        <SendOutlinedIcon
          sx={(theme: Theme) => ({
            color: theme.palette.primary.main,
          })}
        />
      </IconButton>
    </Box>
  );
};

//LIST OF COMMIT
const ListOfComments = () => {
  return (
    <Box>
      <Box>
        <Typography
          variant="body1"
          sx={(theme: Theme) => ({
            color: theme.palette.grey[600],
            fontWeight: 600,
          })}
        >
          1 Comments
        </Typography>
      </Box>
      <Box
        maxHeight={200}
        sx={(theme) => ({
          overflowY: "auto",
          "&::-webkit-scrollbar": {
            width: 7,
            height: 10,
          },

          "&::-webkit-scrollbar-thumb": {
            backgroundColor: theme.palette.primary.main,
            borderRadius: 2,
          },
        })}
      >
        <Comment
          MainCommit="This child needs attention"
          userName="John Cater"
          like={true}
          showReply={false}
        />
        <Comment
          MainCommit="This child needs attention"
          userName="John Cater"
          like={true}
          showReply={false}
        />
        <Comment
          MainCommit="This child needs attention"
          userName="John Cater"
          like={false}
          showReply={true}
        >
          <Comment
            MainCommit="This child needs attention"
            userName="John Cater"
            like={true}
            showReply={false}
          />
        </Comment>
      </Box>
    </Box>
  );
};

const CommentSkeleton = () => {
  return (
    <Box
      display={"flex"}
      justifyContent={"start"}
      alignItems={"flex-start"}
      gap={2}
      mt={2}
    >
      <Skeleton
        variant={"circular"}
        width={50}
        height={50}
        animation="pulse"
        sx={{ mt: 2 }}
      />
      <Box
        display={"flex"}
        justifyContent={"start"}
        alignItems={"start"}
        flexWrap={"wrap"}
        flexDirection={"column"}
        gap={1.5}
        width={"100%"}
      >
        <Box
          display={"flex"}
          justifyContent={"start"}
          alignItems={"center"}
          flexWrap={"wrap"}
          gap={0}
        >
          <Skeleton variant="text" width={700} height={80} animation="pulse" />
        </Box>
        {/* actions */}
        <Box
          display={"flex"}
          justifyContent={"start"}
          alignItems={"center"}
          flexWrap={"wrap"}
          gap={0.5}
        >
          <Skeleton variant="text" width={60} height={40} animation="pulse" />
          <Skeleton variant="text" width={60} height={40} animation="pulse" />
          <Skeleton variant="text" width={60} height={40} animation="pulse" />
        </Box>
      </Box>
    </Box>
  );
};
const OnError = () => {
  return (
    <Box display={"flex"} justifyContent={"center"}>
      <NoCommits
        sx={(theme: Theme) => ({
          fontSize: 200,
          color: theme.palette.grey[600],
        })}
      />
    </Box>
  );
};

export default Comments;
