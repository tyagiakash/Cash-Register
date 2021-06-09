import React from "react";
import { Typography, Box, Divider } from "@material-ui/core";

function Header(props) {
  return (
    <Box>
      <Typography
        style={{
          fontSize: "2rem",
          fontWeight: 700,
          textAlign: "center",
          color: "#1976d2",
          paddingBottom: 5,
        }}
        variant="h3"
      >
        CASH REGISTER
      </Typography>
      <Divider variant="fullWidth" />
    </Box>
  );
}

export default Header;
