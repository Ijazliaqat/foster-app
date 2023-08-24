// @mui
import { useTheme } from "@mui/material/styles";

// ----------------------------------------------------------------------

export default function AgencyGuidelinesIcon() {
  const theme = useTheme();

  return (
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_i_55_34351)">
        <circle cx="26" cy="26" r="26" fill="white" />
      </g>
      <path
        d="M40 32.6875V14.3125C40 13.5852 39.3313 13 38.5 13H18C14.6875 13 12 15.3516 12 18.25V35.75C12 38.6484 14.6875 41 18 41H38.5C39.3313 41 40 40.4148 40 39.6875V38.8125C40 38.4023 39.7813 38.0305 39.4438 37.7898C39.1813 36.9477 39.1813 34.5469 39.4438 33.7047C39.7813 33.4695 40 33.0977 40 32.6875ZM20 20.3281C20 20.1477 20.1688 20 20.375 20H33.625C33.8312 20 34 20.1477 34 20.3281V21.4219C34 21.6023 33.8312 21.75 33.625 21.75H20.375C20.1688 21.75 20 21.6023 20 21.4219V20.3281ZM20 23.8281C20 23.6477 20.1688 23.5 20.375 23.5H33.625C33.8312 23.5 34 23.6477 34 23.8281V24.9219C34 25.1023 33.8312 25.25 33.625 25.25H20.375C20.1688 25.25 20 25.1023 20 24.9219V23.8281ZM35.8375 37.5H18C16.8937 37.5 16 36.718 16 35.75C16 34.7875 16.9 34 18 34H35.8375C35.7187 34.9352 35.7187 36.5648 35.8375 37.5Z"
        fill={theme.palette.primary.main}
      />
      <defs>
        <filter
          id="filter0_i_55_34351"
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
            result="effect1_innerShadow_55_34351"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_55_34351" />
        </filter>
      </defs>
    </svg>
  );
}
