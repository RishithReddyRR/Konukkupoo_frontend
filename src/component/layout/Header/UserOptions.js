import React from "react";
import "./Header.scss";
import { SpeedDial, SpeedDialAction } from "@material-ui/lab";
import { useState } from "react";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PersonIcon from "@material-ui/icons/Person";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ListAltIcon from "@material-ui/icons/ListAlt";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import { logout } from "../../../actions/userActions";
import { Backdrop } from "@material-ui/core";
import { BsFillCartCheckFill } from "react-icons/bs";
import Profile from "../../User/Profile";
import { useSelector } from "react-redux";
const UserOptions = ({ user }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const alert = useAlert();
  const [open, setOpen] = useState(false);
  const { cartItems } = useSelector((state) => state.cart);
  const account = () => {
    navigate("/account");
  };
  const orders = () => {
    navigate("/orders");
  };
  const logoutUser = () => {
    dispatch(logout());
    alert.success("Logout Successfully");
  };
  const dashboard = () => {
    navigate("/admin/dashboard");
  };
  const cart = () => {
    navigate("/cart");
  };
  const options = [
    { icon: <ListAltIcon />, name: "Orders", func: orders },
    { icon: <PersonIcon />, name: "Profile", func: account },
    {
      icon: <BsFillCartCheckFill style={{color:cartItems.length>0?"tomato":"unset"}} />,
      name: `Cart(${cartItems.length})`,
      func: cart,
    },
    { icon: <ExitToAppIcon />, name: "Logout", func: logoutUser },
  ];
  if (user && user.role == "admin") {
    options.unshift({
      icon: <DashboardIcon />,
      name: "dashboard",
      func: dashboard,
    });
  }
  return (
    <>
      <Backdrop open={open} style={{ zIndex: 10 }} />
      <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        direction="down"
        icon={
          <img
            className="speedDialIcon"
            src={user.avatar.url ? user.avatar.url : "/Profile.png"}
            alt="Profile"
          />
        }
        className="speedDial"
        style={{ zIndex: 11 }}
      >
        {options.map((option) => (
          <SpeedDialAction
            icon={option.icon}
            tooltipTitle={option.name}
            onClick={option.func}
            key={option.name}
            tooltipOpen={window.innerWidth <= 600}
          />
        ))}
      </SpeedDial>
    </>
  );
};

export default UserOptions;
