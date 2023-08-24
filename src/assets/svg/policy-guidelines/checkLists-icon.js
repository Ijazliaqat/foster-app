// @mui
import { useTheme } from "@mui/material/styles";

// ----------------------------------------------------------------------

export default function ChecklistsIcon() {
  const theme = useTheme();

  return (
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_i_55_34356)">
        <circle cx="26" cy="26" r="26" fill="white" />
      </g>
      <path
        d="M39.6192 21.5593L37.4537 19.394C36.9396 18.88 36.1084 18.88 35.5998 19.394L22.5025 32.4898L16.4104 26.393C15.8964 25.879 15.0652 25.879 14.5566 26.393L12.3855 28.5638C11.8715 29.0778 11.8715 29.9089 12.3855 30.4229L21.5728 39.6145C22.0869 40.1285 22.9181 40.1285 23.4267 39.6145L39.6138 23.4184C40.1278 22.899 40.1278 22.0679 39.6192 21.5593ZM21.8845 27.3554C22.2236 27.6998 22.7814 27.6998 23.1204 27.3554L34.4952 15.9711C34.8342 15.6266 34.8342 15.0744 34.4952 14.7353L32.0233 12.2584C31.6843 11.9139 31.1265 11.9139 30.7874 12.2584L22.5025 20.5423L19.4729 17.5076C19.1338 17.1631 18.576 17.1631 18.237 17.5076L15.7597 19.9846C15.4206 20.3291 15.4206 20.8813 15.7597 21.2203L21.8845 27.3554Z"
        fill={theme.palette.primary.main}
      />
      <defs>
        <filter
          id="filter0_i_55_34356"
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
            result="effect1_innerShadow_55_34356"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_55_34356" />
        </filter>
      </defs>
    </svg>
  );
}
