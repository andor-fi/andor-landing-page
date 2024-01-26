import { Box } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
import {Typography} from "@material-ui/core";

const Logo = (props) => {
  const history = useHistory();

  return (
    <Box style={{ padding: " 0px 10px", borderRadius: "4px",display:"flex",alignItems:"center" }}>
      {/* <img
        onClick={() => history.push("/dashboard")}
        src="/images/kian-logo.png"
        alt="Logo"
        {...props}
        width="auto"
      /> */}
      <Typography variant="h3" style={{whiteSpace:"nowrap"}}>Andor Fi</Typography>
    </Box>
  );
};

export default Logo;
