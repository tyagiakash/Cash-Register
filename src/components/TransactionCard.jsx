import React from "react";
import { Box, Typography } from "@material-ui/core";

function TransactionCard({ date, amount, remark, type, onClick }) {
  const getDateColor = () => {
    if (type.length === 1) {
      return type === "+" ? "#4caf50" : "#ff1744";
    }
    return "#6e6e6e";
  };
  const getRemarkColor = () => {
    if (type.length === 1) {
      return type === "+" ? "#4caf50" : "#ff1744";
    }
    return "#6e6e6e";
  };

  return (
    <Box px={1} onClick={onClick} style={{ cursor: "pointer" }}>
      <Box
        display="flex"
        flexDirection="row"
        border={1}
        borderColor="grey.500"
        width={1}
        mb={2}
      >
        <Box flexGrow={1} px={2} pt={1}>
          <Typography style={{ color: getDateColor() }} variant="caption">
            {date}
          </Typography>
          <Typography
            style={{
              fontWeight: 600,
              fontSize: 18,
              color: getRemarkColor(),
            }}
            variant="subtitle1"
          >
            {remark}
          </Typography>
        </Box>
        <Box px={2} py={1}>
          <Typography
            style={{
              fontWeight: 600,
              fontSize: 14,
              color: type === "-" ? "#ff1744" : "#4caf50",
            }}
            variant="h5"
          >
            {amount}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default TransactionCard;
