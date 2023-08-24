// @mui
import { Stack, Skeleton } from "@mui/material";

// ----------------------------------------------------------------------

export default function SkeletonSocialLinks({ spacing, sx }: any) {
  return (
    <Stack mt={5} ml={5} direction="row" spacing={3}>
      {[...Array(5)].map((_, index) => (
        <Skeleton
          key={index}
          variant="circular"
          sx={{ backgroundColor: "rgb(33 43 54 / 6%)" }}
          width={130}
          height={130}
        />
      ))}
    </Stack>
  );
}
