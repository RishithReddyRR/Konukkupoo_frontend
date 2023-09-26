import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import MetaData from "../layout/MetaData";
import { myOrders, clearErrors } from "../../actions/orderAction";
import { DataGrid } from "@material-ui/data-grid";
import Loader from "../layout/loader/Loader";
import { Link } from "react-router-dom";
import { Divider, Typography } from "@material-ui/core";
import LaunchIcon from "@material-ui/icons/Launch";
import "./order.css"
const Order = () => {
  const dispatch = useDispatch();
  const { orders, error, loading } = useSelector((state) => state.myOrder);
  const { user } = useSelector((state) => state.user);
  const alert = useAlert();
  const columns = [
    { field: "id", headerName: "Order ID", minWidth: 300, flex: 1 },

    {
      field: "status",
      headerName: "Status",
      minWidth: 150,
      flex: 0.5,
      cellClassName: (params) => {
        return params.getValue(params.id, "status") === "Delivered"
          ? "greenColor"
          : "redColor";
      },
    },
    {
      field: "itemsQty",
      headerName: "Items Qty",
      type: "number",
      minWidth: 150,
      flex: 0.3,
    },

    {
      field: "amount",
      headerName: "Amount",
      type: "number",
      minWidth: 270,
      flex: 0.5,
    },

    {
      field: "actions",
      flex: 0.3,
      headerName: "Actions",
      minWidth: 150,
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <Link to={`/order/${params.getValue(params.id, "id")}`}>
            <LaunchIcon />
          </Link>
        );
      },
    },
  ];
  const rows = [];
  orders &&
    orders.forEach((item, index) => {
      rows.push({
        itemsQty: item.orderItems.length,
        id: item._id,
        status: item.orderStatus,
        amount: item.totalPrice,
      });
    });
  useEffect(() => {
    if (error) {
      dispatch({ type: "CLEAR_ERRORS" });
      alert.error(error);
    }
    dispatch(myOrders());
  }, [error]);
  return (
    <>
      <MetaData title={`${user.name} --orders`} />
      {loading ? (
        <Loader />
      ) : (
        <div className="myOrdersPage">
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            className="myOrdersTable"
            autoHeight
          />
          <Typography id="myOrderHeading">{user.name}'s orders</Typography>
        </div>
      )}
    </>
  );
};

export default Order;
