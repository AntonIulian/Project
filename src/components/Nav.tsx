import React from "react";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

function Nav() {
  return (
    <div className="nav__wrapper">
      <div className="nav__container--left">
        <div className="nav__wrapper--left">
          <div className="nav__logo">
            <svg
              className="nav__logo--svg "
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20.8962 14.6031C22.7584 14.6031 23.97 16.5899 23.0899 18.2308C21.019 22.0914 16.8744 24.674 12.1469 24.4909C5.99299 24.2526 0.981695 19.2349 0.750849 13.0807C0.496994 6.31321 5.90787 0.747437 12.6187 0.747437C17.132 0.747437 21.0588 3.26645 23.0674 6.97507C23.964 8.63082 22.7796 10.6443 20.8967 10.6443C19.9998 10.6443 19.1579 10.1676 18.7362 9.37581C17.4672 6.99313 14.844 5.43461 11.9012 5.73226C8.57113 6.06925 5.92891 8.81193 5.70648 12.1516C5.43778 16.1846 8.64214 19.5516 12.6187 19.5516C15.2538 19.5516 17.5513 18.0717 18.7207 15.9003C19.1517 15.1004 19.9877 14.6031 20.8962 14.6031Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="nav__logo--title">
            <p className="small__text">Carpatin</p>
            <p>Dashboard</p>
          </div>
        </div>
        <div className="nav__wrapper--right">
          <select className="nav__select" name="" id="">
            <option value="ACME LTD" selected disabled>
              Acme LTD.
            </option>
          </select>
        </div>
      </div>
      <div className="nav__container--right">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/320px-Flag_of_the_United_States.svg.png"
          className="nav__flag nodisplay nocursor"
          alt=""

        />
        <WbSunnyIcon
          sx={{ color: "white" }}
          className="nav__icon nodisplay nocursor"
        ></WbSunnyIcon>
        <NotificationsIcon
          sx={{ color: "white" }}
          className="nav__icon nodisplay nocursor"
        ></NotificationsIcon>
        <div className="nav__user">
          <AccountBoxIcon
            className="nav__icon nocursor"
            sx={{ fontSize: 40, color: "white" }}
          ></AccountBoxIcon>

          <div className="nav__user--name">
            <p className="small__text">Operation</p>
            <p>Chen Simmons</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
