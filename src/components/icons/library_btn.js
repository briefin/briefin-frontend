import * as React from "react";
const SvgLibrary = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="#000" d="M8.25 6.25h7.5v1.5h-7.5zM15.75 10.25h-7.5v1.5h7.5z" />
    <path
      fill="#000"
      fillRule="evenodd"
      d="M19.75 2.25H4.25v19.5h15.5zm-1.5 14V3.75H5.75v12.5zm-12.5 1.5v2.5h12.5v-2.5z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgLibrary_btn;