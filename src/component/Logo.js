import { Box } from "@material-ui/core";
import React from "react";
import {Typography} from "@material-ui/core";

const Logo = (props) => {

  return (
    <Box style={{ padding: " 0px 10px", borderRadius: "4px",display:"flex",alignItems:"center" }}>
      <Typography variant="h3" style={{whiteSpace:"nowrap"}}>Andor Fi</Typography>
    </Box>
  );
};

export default Logo;
