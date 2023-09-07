import React from "react";
import AfterCart from "./AfterCart";
import BeforeCart from "./BeforeCart";
import { useSelector } from "react-redux";
import cart from "../../../redux/cart";
function CartButtons({product}) {
    const { cartList } = useSelector((state) => state.cart);
 const  cartCount = cartList?.find((item)=> item?.id === product?.id)?.count
 console.log(cartList,"==cartList")

    // console.log(product);
  return (
    <>
    
   { cartCount>0? <AfterCart productID={product?.id} cartCount={cartCount} /> : <BeforeCart product={product} />}
    </>
  );
}

export default CartButtons;
