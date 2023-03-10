import React, { useState } from "react";
import SideBar from "../components/SideBar";
import SearchIcon from "@mui/icons-material/Search";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import UserList from "../data/users.json";
import User from "../components/User";
import Error from "../components/UI/Error";
import SettingsIcon from "@mui/icons-material/Settings";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Button from "@mui/material/Button";
import Footer from "../components/Footer";

export default function Customers() {
  type CustomersProps = {
    name: string;
    phone: string;
    email: string;
    date: string;
  };

  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState<CustomersProps[]>([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  function filterSearch(e: React.FormEvent<HTMLFormElement> | null) {
    e?.preventDefault();
    setLoading(true);
    setError(false);
    let filter = UserList.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
    if (filter.length === 0) {
      setError(true);
    }
    setTimeout(() => {
      setLoading(false);
    }, 300);
    setFiltered(filter);
  }

  return (
    <div className="customers__container">
      <SideBar></SideBar>
      <div className="customers__wrapper">
        <div className="customers__nav">
          <h1 className="customers__header">Customers</h1>
          <Button
            variant="contained"
            sx={{ backgroundColor: "#5938a5", padding: "12px" }}
          >
            + Add
          </Button>
        </div>

        <div className="customers__card">
          <div className="customers__card--options">
            <p className="customers__card--option">Show all</p>
            <p className="customers__card--option">Returning</p>
            <p className="customers__card--option">Ordered Recently</p>
          </div>
          <div className="customers__card--search">
            <form
              className="customers__form"
              onSubmit={(e) => filterSearch(e)}
              action=""
            >
              <input
                className="customers__input"
                onChange={(e) => setSearch(e.target.value)}
                type="text"
              />
              <SearchIcon
                onClick={(e) => filterSearch(null)}
                className="input__icon"
              ></SearchIcon>
            </form>
            <SettingsIcon className="settings__icon purple nocursor"></SettingsIcon>
            <p className="settings__para purple nocursor">Filter</p>
          </div>
          <div className="customers__card--users">
            <TableRow sx={{ display: "flex", alignItems: "center" }}>
              <TableCell sx={{ padding: "12px" }}>
                <CheckBoxOutlineBlankIcon className="customers__info--icon nocursor"></CheckBoxOutlineBlankIcon>
              </TableCell>
              <TableCell className="display name">Name</TableCell>
              <TableCell className="display phone">Phone</TableCell>
              <TableCell className="display email">Email</TableCell>
              <TableCell className="display date">Create At</TableCell>
            </TableRow>
            {error === false ? (
              filtered.length < 1 ? (
                UserList.map((user) => (
                  <User loading={loading} {...user}></User>
                ))
              ) : (
                filtered.map((user) => (
                  <User loading={loading} {...user}></User>
                ))
              )
            ) : (
              <Error></Error>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
