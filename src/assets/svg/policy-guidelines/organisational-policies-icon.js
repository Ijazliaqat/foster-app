// @mui
import { useTheme } from "@mui/material/styles";

// ----------------------------------------------------------------------

export default function OrganisationalPoliciesIcon() {
  const theme = useTheme();

  return (
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_i_55_34822)">
        <circle cx="26" cy="26" r="26" fill="white" />
      </g>
      <path
        d="M36.5 15.5H30.6667C30.6667 13.5695 28.574 12 26 12C23.426 12 21.3333 13.5695 21.3333 15.5H15.5C13.5677 15.5 12 16.6758 12 18.125V37.375C12 38.8242 13.5677 40 15.5 40H36.5C38.4323 40 40 38.8242 40 37.375V18.125C40 16.6758 38.4323 15.5 36.5 15.5ZM19 35.1875C18.0302 35.1875 17.25 34.6023 17.25 33.875C17.25 33.1477 18.0302 32.5625 19 32.5625C19.9698 32.5625 20.75 33.1477 20.75 33.875C20.75 34.6023 19.9698 35.1875 19 35.1875ZM19 29.9375C18.0302 29.9375 17.25 29.3523 17.25 28.625C17.25 27.8977 18.0302 27.3125 19 27.3125C19.9698 27.3125 20.75 27.8977 20.75 28.625C20.75 29.3523 19.9698 29.9375 19 29.9375ZM19 24.6875C18.0302 24.6875 17.25 24.1023 17.25 23.375C17.25 22.6477 18.0302 22.0625 19 22.0625C19.9698 22.0625 20.75 22.6477 20.75 23.375C20.75 24.1023 19.9698 24.6875 19 24.6875ZM26 14.1875C26.9698 14.1875 27.75 14.7727 27.75 15.5C27.75 16.2273 26.9698 16.8125 26 16.8125C25.0302 16.8125 24.25 16.2273 24.25 15.5C24.25 14.7727 25.0302 14.1875 26 14.1875ZM35.3333 34.3125C35.3333 34.5531 35.0708 34.75 34.75 34.75H24.25C23.9292 34.75 23.6667 34.5531 23.6667 34.3125V33.4375C23.6667 33.1969 23.9292 33 24.25 33H34.75C35.0708 33 35.3333 33.1969 35.3333 33.4375V34.3125ZM35.3333 29.0625C35.3333 29.3031 35.0708 29.5 34.75 29.5H24.25C23.9292 29.5 23.6667 29.3031 23.6667 29.0625V28.1875C23.6667 27.9469 23.9292 27.75 24.25 27.75H34.75C35.0708 27.75 35.3333 27.9469 35.3333 28.1875V29.0625ZM35.3333 23.8125C35.3333 24.0531 35.0708 24.25 34.75 24.25H24.25C23.9292 24.25 23.6667 24.0531 23.6667 23.8125V22.9375C23.6667 22.6969 23.9292 22.5 24.25 22.5H34.75C35.0708 22.5 35.3333 22.6969 35.3333 22.9375V23.8125Z"
        fill={theme.palette.primary.main}
      />
      <defs>
        <filter
          id="filter0_i_55_34822"
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
            result="effect1_innerShadow_55_34822"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_55_34822" />
        </filter>
      </defs>
    </svg>
  );
}
