import React from "react";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

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
        <div className="user__wrapper">
          <CheckBoxOutlineBlankIcon className="nocursor"></CheckBoxOutlineBlankIcon>
          <StarBorderIcon className="user__star nocursor"></StarBorderIcon>
          <p className="user__box">
            <AccountBoxIcon className="nocursor"
              sx={{ color: "darkGrey", fontSize: "40px" }}
            ></AccountBoxIcon>
            {name}
          </p>
          <p className="user__box phone">{phone}</p>
          <p className="user__box email">{email}</p>
          <p className="user__box date">{date}</p>
        </div>
      ) : (
        <div className="user__wrapper skeleton__wrapper">
          <div className="skeleton__icon"></div>
          <div className="skeleton__icon"></div>
            <div className="skeleton__icon square"></div>
          <div className="skeleton__box">
          </div>
          <div className="skeleton__box"></div>
          <div className="skeleton__box"></div>
          <div className="skeleton__box"></div>

        </div>
      )}
    </>
  );
}

export default User;
