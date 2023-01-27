import React from "react";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import GroupIcon from "@mui/icons-material/Group";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
function SideBar() {
  return (
    <div className="sidebar__wrapper">
      <div className="sidebar__item nocursor">
        <div className="sidebar__left">
          <AnalyticsIcon
            className="sidebar__icon"
            sx={{ color: "grey" }}
          ></AnalyticsIcon>
          <p className="nodisplay">Overview</p>
        </div>
        <div className="sidebar__right">
          <KeyboardArrowDownIcon
            sx={{ color: "black" }}
          ></KeyboardArrowDownIcon>
        </div>
      </div>
      <div className="sidebar__item nocursor">
        <div className="sidebar__left">
          <GroupIcon
            className="sidebar__icon"
            sx={{ color: "grey" }}
          ></GroupIcon>
          <p className="nodisplay">Customers</p>
        </div>
        <div className="sidebar__right">
          <KeyboardArrowDownIcon
            sx={{ color: "black" }}
          ></KeyboardArrowDownIcon>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
