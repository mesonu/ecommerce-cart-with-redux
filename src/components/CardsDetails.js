import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { useSelector,useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {DELETE} from "../redux/actions/action"

const CardsDetails = () => {
  const [cartDetails, setCartDetails] = useState([]);
  const dispatch =  useDispatch()
  const history = useNavigate()

  const { id } = useParams();
  console.log("item id:", id);

  const getData = useSelector((state) => state.cartReducer.carts);
  console.log("carts ites:", getData);

  const getCartDetails = () => {
    let result = getData.filter((e) => {
      return e.id == id;
    });
    console.log("filter carts :", result);
    setCartDetails(result);
  };

  useEffect(() => {
    getCartDetails();
  }, [id]);

  const deleteToCartHandler = (id) => {
    dispatch(DELETE(id));
    history("/")
  }

  return (
    <>
      <div className="container mt-2">
        <h2 className="text-center">Item Details Page</h2>

        <section className="container mt-3">
        {cartDetails.map((e) => {
            return (
          <div key={e.id} className="iteamsdetails">
            <div className="items_img">
              <img src={e.imgdata}></img>
            </div>
            <div className="details">
              <Table>
                <tbody>
                  <tr>
                    <td>
                      <p>
                        <strong>Resturant </strong> : {e.rname}
                      </p>
                      <p>
                        <strong>Price </strong> : ₹{e.price}
                      </p>

                      <p>
                        <strong>Dishes </strong> : {e.address}
                      </p>
                      <p>
                        <strong>Total </strong> : ₹300
                      </p>
                    </td>
                    <td>
                      <p>
                        <strong>Rating </strong> :{" "}
                        <span
                          style={{
                            background: "green",
                            color: "#fff",
                            padding: "2px 5px",
                            borderRadius: "5px",
                          }}
                        >
                          {" "}
                          {e.rating} ★
                        </span>
                      </p>
                      <p>
                        <strong>Order Review </strong> : {e.somedata}
                      </p>

                      <p>
                        <strong>Remove </strong> :{" "}
                        <i
                          className="fas fa-trash"
                          style={{
                            color: "red",
                            fontSize: 20,
                            cursor: "pointer",
                          }}
                          onClick={()=> deleteToCartHandler(e.id)}
                        ></i>
                      </p>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
          )})}
        </section>
      </div>
    </>
  );
};

export default CardsDetails;
