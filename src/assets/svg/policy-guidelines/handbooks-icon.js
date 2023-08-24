// @mui
import { useTheme } from "@mui/material/styles";

// ----------------------------------------------------------------------

export default function HandbooksIcon() {
  const theme = useTheme();

  return (
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_i_55_34353)">
        <circle cx="26" cy="26" r="26" fill="white" />
      </g>
      <path
        d="M38.3584 11.0034C35.6944 11.1978 30.3996 11.9053 27.131 14.4778C26.9054 14.6553 26.7775 14.9709 26.7775 15.3009V38.0426C26.7775 38.7645 27.3915 39.2208 27.9092 38.8858C31.2722 36.7095 36.1358 36.1158 38.5407 35.9533C39.3617 35.8976 40 35.0514 40 34.037V12.9221C40.0005 11.8153 39.2538 10.9384 38.3584 11.0034ZM24.869 14.4778C21.6009 11.9053 16.306 11.1984 13.6421 11.0034C12.7467 10.9384 12 11.8153 12 12.9221V34.0377C12 35.0527 12.6383 35.8989 13.4593 35.9539C15.8651 36.1164 20.7312 36.7108 24.0942 38.8883C24.6104 39.2226 25.2225 38.767 25.2225 38.047V15.2896C25.2225 14.959 25.0951 14.6559 24.869 14.4778Z"
        fill={theme.palette.primary.main}
      />
      <defs>
        <filter
          id="filter0_i_55_34353"
          x="0"
          y="0"
          width="52"
          height="52"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="1"
            operator="erode"
            in="SourceAlpha"
            result="effect1_innerShadow_55_34353"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_55_34353" />
        </filter>
      </defs>
    </svg>
  );
}
