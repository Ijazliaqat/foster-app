import { Skeleton } from "@mui/material";
export default function FormSkeleton() {
  return (
    <Skeleton
      width="100%"
      height={560}
      variant="rectangular"
      sx={{ borderRadius: 2 }}
    />
  );
}
