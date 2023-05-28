import React from "react";
import Table from "react-bootstrap/Table";

const CardsDetails = () => {
  return (
    <>
      <div className="container mt-2">
        <h2 className="text-center">Item Details Page</h2>

        <section className="container mt-3">
          <div className="iteamsdetails">
            <div className="items_img">
              <img src="https://b.zmtcdn.com/data/pictures/9/18857339/8f53919f1175c08cf0f0371b73704f9b_o2_featured_v2.jpg?output-format=webp"></img>
            </div>

            <div className="details">
              <Table>
                <tr>
                  <td>
                    <p>
                      <strong>Resturant </strong> : Massala Theory
                    </p>
                    <p>
                      <strong>Price </strong> : ₹300
                    </p>

                    <p>
                      <strong>Dishes </strong> : North Indian, Birayani, Mughlai
                    </p>
                    <p>
                      <strong>Total </strong> : ₹300
                    </p>
                  </td>
                  <td>
                    <p>
                      <strong>Rating </strong > : <span style={{background:"green", color:"#fff", padding: "2px 5px", borderRadius:"5px"}}> 3.8 ★</span>
                    </p>
                    <p>
                      <strong>Order Review </strong> : 1175+ Order place from
                      here recently
                    </p>

                    <p>
                      <strong>Remove </strong> :{" "}
                      <i className="fas fa-trash" style={{color:"red", fontSize:20, cursor:"pointer"}}></i>
                    </p>
                  </td>
                </tr>
              </Table>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CardsDetails;
