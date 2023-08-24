// @mui
import { useTheme } from "@mui/material/styles";

// ----------------------------------------------------------------------

export default function TemplatesIcon() {
  const theme = useTheme();

  return (
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_i_55_34357)">
        <circle cx="26" cy="26" r="26" fill="white" />
      </g>
      <path
        d="M14.3333 22.5H23.0833C23.4042 22.5 23.6667 22.6969 23.6667 22.9375V23.8125C23.6667 24.0531 23.4042 24.25 23.0833 24.25H14.3333V27.75H23.0833C23.4042 27.75 23.6667 27.9469 23.6667 28.1875V29.0625C23.6667 29.3031 23.4042 29.5 23.0833 29.5H14.3333V33H23.0833C23.4042 33 23.6667 33.1969 23.6667 33.4375V34.3125C23.6667 34.5531 23.4042 34.75 23.0833 34.75H14.3333V38.25C14.3333 39.2125 15.3833 40 16.6667 40H35.3333C36.6167 40 37.6667 39.2125 37.6667 38.25V19H14.3333V22.5ZM38.25 12H13.75C12.7875 12 12 12.5906 12 13.3125V15.9375C12 16.6594 12.7875 17.25 13.75 17.25H38.25C39.2125 17.25 40 16.6594 40 15.9375V13.3125C40 12.5906 39.2125 12 38.25 12Z"
        fill={theme.palette.primary.main}
      />
      <defs>
        <filter
          id="filter0_i_55_34357"
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
            result="effect1_innerShadow_55_34357"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_55_34357" />
        </filter>
      </defs>
    </svg>
  );
}
