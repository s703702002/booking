import React from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

const SortIcon = ({ order }) => {
  return order === "desc" ? <FaArrowDown /> : <FaArrowUp />;
};

export default SortIcon;
