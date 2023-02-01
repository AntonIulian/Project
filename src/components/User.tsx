import React from "react";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CheckBox from "@mui/material/Checkbox";
import Rating from "@mui/material/Rating";

type UserProps = {
  name: string;
  phone: string;
  email: string;
  date: string;
  loading: boolean;
};

function User({ name, phone, email, date, loading }: UserProps) {
  return (
    <>
      {loading === false ? (
        <TableRow className="" sx={{ alignItems: "center" }}>
          <TableCell>
            <div className="align">
              <CheckBox></CheckBox>
              <Rating max={1}></Rating>
            </div>
          </TableCell>
          <TableCell className="display name" align="left">
            <div className="align">
              <AccountBoxIcon
                className="nocursor"
                sx={{ color: "darkGrey", fontSize: "40px" }}
              ></AccountBoxIcon>
              {name}
            </div>
          </TableCell>
          <TableCell className="display phone" align="left">
            {phone}
          </TableCell>
          <TableCell className="display email" align="left">
            {email}
          </TableCell>
          <TableCell className="display date" align="left">
            {date}
          </TableCell>
        </TableRow>
      ) : (
        <div className="user__wrapper skeleton__wrapper">
          <div className="skeleton__icon"></div>
          <div className="skeleton__icon"></div>
          <div className="skeleton__icon square"></div>
          <div className="skeleton__box"></div>
          <div className="skeleton__box"></div>
          <div className="skeleton__box"></div>
          <div className="skeleton__box"></div>
        </div>
      )}
    </>
  );
}

export default User;
