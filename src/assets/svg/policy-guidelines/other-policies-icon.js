// @mui
import { useTheme } from "@mui/material/styles";

// ----------------------------------------------------------------------

export default function OtherPoliciesIcon() {
  const theme = useTheme();

  return (
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_i_55_34354)">
        <circle cx="26" cy="26" r="26" fill="white" />
      </g>
      <path
        d="M32 37.5V39.6875C32 40.4124 31.3284 41 30.5 41H13.5C12.6716 41 12 40.4124 12 39.6875V19.5625C12 18.8376 12.6716 18.25 13.5 18.25H18V34.4375C18 36.1262 19.5701 37.5 21.5 37.5H32ZM32 18.6875V13H21.5C20.6716 13 20 13.5876 20 14.3125V34.4375C20 35.1624 20.6716 35.75 21.5 35.75H38.5C39.3284 35.75 40 35.1624 40 34.4375V20H33.5C32.675 20 32 19.4094 32 18.6875ZM39.5607 16.9906L35.4393 13.3844C35.158 13.1383 34.7765 13 34.3787 13H34V18.25H40V17.9186C40 17.5706 39.842 17.2367 39.5607 16.9906Z"
        fill={theme.palette.primary.main}
      />
      <defs>
        <filter
          id="filter0_i_55_34354"
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
            result="effect1_innerShadow_55_34354"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_55_34354" />
        </filter>
      </defs>
    </svg>
  );
}
