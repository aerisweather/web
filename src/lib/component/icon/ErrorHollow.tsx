import React from "/vendor/react";
import { SvgIcon } from "/vendor/@material-ui/core";

const Icon = React.memo((props) => {
  return (
    <SvgIcon {...props}>
      <g fillRule="evenodd">
        <path d="M13 13h-2V7h2v6zm0 4h-2v-2h2v2z" />
        <path d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20zm0 1.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17z" />
      </g>
    </SvgIcon>
  );
});
Icon.displayName = "ErrorHollowIcon";

export default Icon;
