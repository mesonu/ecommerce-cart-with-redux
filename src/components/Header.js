import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Badge from "@mui/material/Badge";
import { NavLink } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import cart from "./cart.gif";
import Table from "react-bootstrap/Table";
import {DELETE} from "../redux/actions/action"
import { useSelector, useDispatch } from "react-redux";

const Header = () => {
  const dispatch =  useDispatch()
  const [totalPrice, setTotalPrice] = useState(0)
  const [anchorEl, setAnchorEl] = useState(null);

  const getData = useSelector((state) => state.cartReducer.carts);

  const deleteToCartHandler = (id) => {
    dispatch(DELETE(id));
  }

  const calculatePrice = () => {
    let price = 0;
    getData.map((item) => {
      price += item.qnty * item.price
    })
    setTotalPrice(price)
  }
  useEffect(() => {
    calculatePrice()
  },[calculatePrice])

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Navbar bg="dark" variant="dark" style={{ height: "60px" }}>
        <Container>
          <NavLink to="/" className="text-decoration-none text-light mx-3">
            Ecommerce Cart
          </NavLink>
          <Nav className="me-auto">
            <NavLink to="/" className="text-decoration-none text-light">
              Home
            </NavLink>
          </Nav>

          <Badge
            badgeContent={getData.length}
            color="primary"
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <i
              className="fa-solid fa-cart-shopping text-light"
              style={{ fontSize: "25px", cursor: "pointer" }}
            ></i>
          </Badge>
        </Container>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          {getData.length ? (
            <div
              className="card_details"
              style={{ width: "24rem", padding: 10 }}
            >
              <Table>
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Resturant Name</th>
                  </tr>
                </thead>
                <tbody>
                  {getData.map((e) => {
                    return (
                      <tr key={e.id}>
                        <td>
                        <NavLink to={`/cart/${e.id}`} onClick={handleClose} ><img src={e.imgdata} alt={e.rname} style={{width:"5rem",height:"rem"}}/></NavLink>
                        </td>
                        <td>
                          <p>{e.rname}</p>
                          <p> Price : ₹{e.price}</p>
                          <p> Quantity : {e.qnty}</p>
                          <p style={{color:"red", cursor:"pointer", fontSize:22}} onClick={()=>deleteToCartHandler(e.id)}>
                            <i className="fas fa-trash smalltrash"></i>
                          </p>
                        </td>
                        <td className="mt-5" style={{color:"red", cursor:"pointer", fontSize:22}} onClick={()=>deleteToCartHandler(e.id)}>
                         <i className="fas fa-trash largetrash"></i>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
              <p className="">Total : ₹{totalPrice} </p>
            </div>
          ) : (
            <div
              className="card_details d-flex justify-content-center align-items-center"
              style={{ width: "24rem", padding: 10, position: "relative" }}
            >
              <i
                className="fas fa-close smallclose"
                onClick={handleClose}
                style={{
                  position: "absolute",
                  top: 2,
                  right: 20,
                  fontSize: 23,
                  cursor: "pointer",
                }}
              ></i>
              <p style={{ fontSize: 22 }}>Your carts is empty!</p>
              <img
                src={cart}
                alt="cart logo"
                className="emptycart_img"
                style={{ width: "5rem", padding: "10" }}
              />
            </div>
          )}
        </Menu>
      </Navbar>
    </>
  );
};

export default Header;
