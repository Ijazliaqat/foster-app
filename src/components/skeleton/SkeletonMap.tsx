// @mui
import { Stack, Skeleton } from "@mui/material";

// ----------------------------------------------------------------------

export default function SkeletonMap({ spacing, sx }: any) {
  return (
    <Stack spacing={spacing}>
      {[...Array(5)].map((_, index) => (
        <Skeleton key={index} variant="rectangular" sx={sx} />
      ))}
    </Stack>
  );
}
