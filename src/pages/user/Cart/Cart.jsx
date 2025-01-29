import axios from "axios";
import React, { useEffect, useState } from "react";
import StripedExample from "../../../components/ProgressBar/ProgressBar";
import { Table } from "react-bootstrap";

export default function Cart() {
  const [cart, setCart] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const getCart = async () => {
    try {
      const token = localStorage.getItem("userToken");

      const response = await axios.get(
        "https://ecommerce-node4.onrender.com/cart",
        {
          headers: {
            Authorization: `Tariq__${token}`,
          },
        }
      );
      // console.log(response);
      console.log(response.data.products);

      setCart(response.data.products);
    } catch (error) {
      console.log("the error ", error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getCart();
  }, []);
  if (isLoading) {
    return <StripedExample />;
  }
  return <section className="cart">
    <h2>Your cart </h2>
      <Table striped bordered hover>
      <thead>
        <tr>
           <th>Product image </th>
          <th>Product Name</th>
         
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
      {cart.map((item)=>
      <tr key={item._id}>
      
<td><img src={item.details.mainImage.secure_url} width={80}/></td>
<td>{item.details.name}</td>
<td>{item.details.finalPrice}
<span>$</span>

</td>
<td>{item.quantity}</td>
<td>{item.quantity * item.details.finalPrice}
  <span>$</span>
</td>

      </tr>
      )}
      </tbody>
    </Table>
  </section>;
}
