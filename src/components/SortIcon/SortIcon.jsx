import React from "react";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

const SortIcon = ({ order }) => {
  return order === "desc" ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />;
};

export default SortIcon;
