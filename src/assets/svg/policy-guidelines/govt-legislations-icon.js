// @mui
import { useTheme } from "@mui/material/styles";

// ----------------------------------------------------------------------

export default function GovtLegislationsIcon() {
  const theme = useTheme();

  return (
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_i_55_34352)">
        <circle cx="26" cy="26" r="26" fill="white" />
      </g>
      <path
        d="M23.2009 30.375C23.2009 29.4902 23.2586 29.8976 19.4789 20.4487C18.7067 18.5188 16.4954 18.5149 15.7219 20.4487C11.9102 29.9785 12.0012 29.518 12.0012 30.375C12.0012 32.7911 14.5077 34.75 17.6006 34.75C20.6934 34.75 23.2009 32.7911 23.2009 30.375ZM17.6006 21.625L20.7508 29.5H14.4504L17.6006 21.625ZM40.0009 30.375C40.0009 29.4902 40.0596 29.8976 36.2798 20.4487C35.5076 18.5188 33.2963 18.5149 32.5228 20.4487C28.7111 29.9785 28.8021 29.518 28.8021 30.375C28.8021 32.7911 31.3086 34.75 34.4015 34.75C37.4944 34.75 40.0009 32.7911 40.0009 30.375ZM31.2513 29.5L34.4015 21.625L37.5517 29.5H31.2513ZM35.1015 36.5H27.4011V20.3809C28.4297 19.8181 29.202 18.6593 29.4308 17.25H35.1015C35.4883 17.25 35.8016 16.8584 35.8016 16.375V14.625C35.8016 14.1416 35.4883 13.75 35.1015 13.75H28.7854C28.1467 12.6934 27.1425 12 26.001 12C24.8595 12 23.8554 12.6934 23.2166 13.75H16.9006C16.5138 13.75 16.2005 14.1416 16.2005 14.625V16.375C16.2005 16.8584 16.5138 17.25 16.9006 17.25H22.5713C22.8001 18.6588 23.5719 19.8181 24.601 20.3809V36.5H16.9006C16.5138 36.5 16.2005 36.8916 16.2005 37.375V39.125C16.2005 39.6084 16.5138 40 16.9006 40H35.1015C35.4883 40 35.8016 39.6084 35.8016 39.125V37.375C35.8016 36.8916 35.4883 36.5 35.1015 36.5Z"
        fill={theme.palette.primary.main}
      />
      <defs>
        <filter
          id="filter0_i_55_34352"
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
            result="effect1_innerShadow_55_34352"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_55_34352" />
        </filter>
      </defs>
    </svg>
  );
}
